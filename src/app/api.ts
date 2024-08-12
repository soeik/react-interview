import axios from "axios";

export const fetchUsers = () =>
  axios.get("https://jsonplaceholder.typicode.com/users");

export const fetchPosts = () =>
  axios.get("https://jsonplaceholder.typicode.com/posts");
