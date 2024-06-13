import httpInstance from "./http";

export const getUsers = () => {
    return httpInstance.get("https://jsonplaceholder.typicode.com/users");
};

export const getUser = (id) => {
    return httpInstance.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};
