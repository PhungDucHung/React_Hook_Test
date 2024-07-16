
// gọi api ở đây , không gọi api trong component
import axios from './customizeAxios'; // import 1 hàm thì đặt tên gì cũng được
// import axios from "axios";

const fetchAllUser = (page) => {
    return (
        axios.get(`/api/users?page=${page}`)
    )
};

const postCreateUser = (name, job) => {
    return axios.post("/api/users", {name ,job})
}

const putUpdateUser = (name, job) => {
    return axios.put("/api/users/1", {name ,job})
}

const deleteUser = (id) => {
    return axios.delete(`/api/users/${id}`);
}

export { fetchAllUser , postCreateUser , putUpdateUser , deleteUser };