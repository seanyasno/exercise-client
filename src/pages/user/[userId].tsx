import React from 'react';
import {NextPage} from 'next';
import {useRouter} from 'next/router';
import {IconButton, Stack, Typography} from '@mui/material';
import {TiDeleteOutline} from 'react-icons/ti';
import {Post} from '@/types';
import Head from 'next/head';
import {usePostDeletion, usePosts, useSearchPosts} from '@/hooks';
import {LoadingFullPage, SearchPosts} from '@/components';

const UserPage: NextPage = () => {
    const router = useRouter();
    const userId = router.query.userId as string;
    const {data, isLoading, isSuccess} = usePosts(userId);
    const {search, handleSearch, filteredPosts} = useSearchPosts(data);
    const {mutateAsync: deletePost} = usePostDeletion(userId);

    const tabTitle = `Exercise - User ${userId} Posts`;

    if (isLoading) {
        return <LoadingFullPage/>;
    }

    return (
        <>
            <Head>
                <title>{tabTitle}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Stack
                spacing={2}
                padding={'40px'}
                alignItems={'center'}
                maxWidth={'500px'}
                margin={'auto'}
            >
                <SearchPosts search={search} onSearch={handleSearch}/>

                {
                    isSuccess && filteredPosts?.map((post: Post, index: number) => (
                        <Stack
                            spacing={1}
                            key={index}
                            sx={{
                                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
                                borderRadius: '8px',
                                padding: '8px 24px',
                            }}>
                            <Stack direction={'row'} alignItems={'flex-start'} justifyContent={'space-between'} spacing={2}>
                                <Typography fontSize={'1rem'} fontWeight={600}>{post.title}</Typography>
                                <IconButton
                                    onClick={() => deletePost({postId: post.id})}
                                    sx={{
                                        padding: 0,
                                        marginTop: '2px',
                                    }}
                                >
                                    <TiDeleteOutline color={'#ef233c'} size={20}/>
                                </IconButton>
                            </Stack>
                            <Typography fontSize={'0.875rem'} fontWeight={400}>{post.body}</Typography>
                        </Stack>
                    ))
                }
            </Stack>
        </>
    );
};

export default UserPage;
