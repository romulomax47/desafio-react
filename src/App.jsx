import './Style.css'

import { Home } from './pages/Home.pages'
import { Profile } from './pages/Profile.page'
import { BrowserRouter, Link } from 'react-router-dom'
import { useState } from 'react'
//  api 
import { getUser, getUserRepos } from './api/api.api';

import order from './utils/order'
function App() {

  const [user, setUser] = useState('');
  const [dataUser, setDataUser] = useState([]);
  const [repos, setRepos] = useState([]);


  const handleSeachUser = async () => {

    if (!user) return alert('Digite um usuario')

    try {
      const { data } = await getUser.get(`/${user}`)
      const response = await getUserRepos.get(`/${user}/repos`)
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
