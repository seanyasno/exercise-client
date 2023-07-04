import {useQuery} from '@tanstack/react-query';
import {getUsers} from '@/requests';
import {User} from '@/types';

export const useUsers = () => {
    return useQuery<User[]>({
        queryKey: ['users'],
        queryFn: getUsers,
        refetchOnWindowFocus: false,
        onError: (error) => {
            console.error(error);
            alert('Error getting users');
        }
    });
}
