import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deletePostById} from '@/requests';

export const usePostDeletion = (userId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({postId}: { postId: number }) => {
            await deletePostById(postId);
            await queryClient.invalidateQueries(['posts', userId]);
        },
        onError: (error) => {
            console.error(error);
            alert('Error deleting post');
        },
    });
}
