import Head from 'next/head';
import {NextPage} from 'next';
import {Stack, Typography} from '@mui/material';
import {useUsers} from '@/hooks';
import {UsersTable} from '@/components';


export const Home: NextPage = () => {
    const {data, isSuccess} = useUsers();

    const tabTitle = 'Exercise - Users';
    const title = 'List Of Users';

    return (
        <>
            <Head>
                <title>{tabTitle}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Stack alignItems={'center'} spacing={4} padding={'40px 80px'}>
                <Typography fontSize={'1.75rem'} fontWeight={300} component="h1">{title}</Typography>

                {
                    isSuccess && <UsersTable users={data}/>
                }
            </Stack>
        </>
    );
};

export default Home;
