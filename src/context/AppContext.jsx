import react, { createContext, useState } from 'react';
import { getUser, getUserRepos } from '../api/api.api'

export const AppContext = createContext([])

const AppContextProvider = (props) => {

  

   console.log(user)

  


   return (
      <AppContext.Provider value ={[user, setUser, dataUser, setDataUser, repos, dataUser, getUserData]}>
         {props.children}
      </AppContext.Provider>
   )
}

export default AppContextProvider