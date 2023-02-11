

export async function getUser(user){
    
   try {
      const dataUser = await  fetch(`https://api.github.com/users/${user}`);
      const data = await dataUser.json();

      return data
      
   } catch (error) {
     return error
   }

    

}



export async function getUserRepos(user){
   try {
      const reposUser = await fetch(`https://api.github.com/users/${user}/repos`)
      const repos = await reposUser.json()
      return repos
      
   } catch (error) {
      
   }
   

}

