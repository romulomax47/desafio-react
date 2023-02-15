import './Style.css'

import { Home } from './pages/Home.pages'
import { Profile } from './pages/Profile.page'
import { BrowserRouter, Link } from 'react-router-dom'
import { useState } from 'react'
import order from './utils/order'
//  api 

import { searchUser, searchUserRepos } from './api/search';
function App() {

  const [user, setUser] = useState('');
  const [dataUser, setDataUser] = useState([]);
  const [repos, setRepos] = useState([]);


  const handleSeachUser = async (e) => {
    e.preventDefault();
    
    if (!user) return alert('Digite um usuario')

    try {
      const { data } = await searchUser.get(`/${user}`);
      const response = await searchUserRepos.get(`/${user}/repos`);
      const repos = order(response.data);

      setDataUser(data)
      setRepos(repos);

    } catch (error) {
      alert('Usuário não encontrado')
    }

  }

  const handleUser = (e) => {
    setUser(e.target.value)
  }

  return (

    <BrowserRouter>
      <div className="App w-full h-full">
  
        {dataUser.length === 0 ?
          <Home 
            handleSeachUser={handleSeachUser}
            handleUser={handleUser}
            user={user} />

          :
          <Profile
            data={dataUser}
            repos={repos}
            value={user}
          />
        }

      </div>
    </BrowserRouter >

  )
}

export default App
