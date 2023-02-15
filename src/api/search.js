import axios from 'axios'

export const searchUser = axios.create({
   baseURL: `https://api.github.com/users/`,
   timeout: 3000,
});

export const searchUserRepos = axios.create({
   baseURL: `https://api.github.com/users/`,
   timeout: 3000,
});


