import {Post} from '@/types';
import {ChangeEvent, useCallback, useMemo, useState} from 'react';

export const useSearchPosts = (posts: Post[]) => {
    const [search, setSearch] = useState('');

    const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }, []);

    const filteredPosts = useMemo(() => posts?.filter((post: Post) =>
        (post.title + post.body).toLowerCase().includes(search.toLowerCase())
    ), [posts, search]);

    return {
        search,
        handleSearch,
        filteredPosts,
    }
}
