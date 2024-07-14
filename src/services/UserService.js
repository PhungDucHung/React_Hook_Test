
// gọi api ở đây , không gọi api trong component
import axios from './customizeAxios'; // import 1 hàm thì đặt tên gì cũng được
// import axios from "axios";

const fetchAllUser = () => {
    return (
        axios.get("/api/users?page=1")
    )
};

export { fetchAllUser };