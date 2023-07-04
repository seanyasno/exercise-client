import {useQuery} from '@tanstack/react-query';
import {getPostsByUserId} from '@/requests';
import {isEmpty} from 'lodash';

export const usePosts = (userId: string) => {
    return useQuery({
        queryKey: ['posts', userId],
        queryFn: () => getPostsByUserId(parseInt(userId)),
        enabled: !isEmpty(userId),
        refetchOnWindowFocus: false,
        onError: (error) => {
            console.error(error);
            alert('Error getting posts');
        }
    });
}
