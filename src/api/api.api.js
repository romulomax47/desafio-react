
import axios from 'axios'

export const getUser = axios.create({
   baseURL: `https://api.github.com/users/`,
   timeout: 3000,
});


export const getUserRepos = axios.create({
   baseURL: `https://api.github.com/users/`,
   timeout: 3000,
});
// export async function getUserRepos(user) {
//    try {
//       const reposUser = await fetch(`https://api.github.com/users/${user}/repos`)
//       const repos = await reposUser.json()
//       return repos

//    } catch (error) {

//    }


// }

