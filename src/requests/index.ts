import axios from 'axios';

export const getUsers = async () => {
    const url = 'http://localhost:3001/users';
    const response = await axios.get(url);
    return response.data;
};

export const getPostsByUserId = async (userId: number) => {
    const url = `http://localhost:3001/users/${userId}/posts`;
    const response = await axios.get(url);
    return response.data;
};

export const deletePostById = async (id: number) => {
    const url = `http://localhost:3001/posts/${id}`;
    const response = await axios.delete(url);
    return response.data;
};
