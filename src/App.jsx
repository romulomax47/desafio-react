import './style.css'

import { Home } from './pages/Home.pages'
import { Profile } from './pages/Profile.page'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
//  api 
import { getUser, getUserRepos } from './api/api.api';
function App() {

  const [user, setUser] = useState('');
  const [dataUser, setDataUser] = useState([]);
  const [repos, setRepos] = useState([]);


  const getUserAPI = async () => {

    if (!user) return alert('Digite um usuario')

    try {
      const { data } = await getUser.get(`/${user}`)
      const response = await getUserRepos.get(`/${user}/repos`)

      setDataUser(data)
      setRepos(response.data);

      console.log('data', data)
      console.log('respos', response.data);

      /// redirecionar para pagina profile;
      <Link to='/profile'>s</Link>


    } catch (error) {
      alert('Usuario não encontrado')
    }

    // return redirect("/profile");

  }

  const handleUser = (e) => {
    setUser(e.target.value)
  }

  return (



    <BrowserRouter>
      <div className="App">
  
        {dataUser.length === 0 ?
          <Home
            getUserAPI={getUserAPI}
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
