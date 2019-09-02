import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "6b9a45f9-791d-4772-bc1f-c5dba8f157ad",
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    deleteUsers(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
    followUsers(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    }
}