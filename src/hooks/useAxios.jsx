import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "/api/v1",
});
const useAxios = () => {
	return axiosInstance;
};

export default useAxios;
