import axios from "axios";

/* API 처리 함수 만들기 */
export const getUsers = async () => {
    const requestURL = 'https://jsonplaceholder.typicode.com/users';

    const response = await axios.get(requestURL);

    return response.data;
};

export const getUser = async (id) => {
    const reqeustURL = `https://jsonplaceholder.typicode.com/users/${id}`;

    const response = await axios.get(reqeustURL);

    return response.data;

};