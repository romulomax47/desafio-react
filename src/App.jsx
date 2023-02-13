import './App.css'
import { Home } from './pages/Home.pages'
import { Profile } from './pages/Profile.page'
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom'
import { useState } from 'react'
//  api 
import { getUser, getUserRepos } from './api/api.api'
function App() {

  const [user, setUser] = useState('');
  const [dataUser, setDataUser] = useState([]);
  const [repos, setRepos] = useState([]);
  console.log(dataUser)


  const getUserAPI = async () => {

    if (!user) return alert('Digite um usuario')

    try {
      const { data } = await getUser.get(`/${user}`)
      const response = await getUserRepos.get(`/${user}/repos`)

      setDataUser(data)
      setRepos(response.data)
      // console.log('respos', response.data)

    } catch (error) {
      alert('Usuario não encontrado')
    }

    return redirect("/profile");

  }

  const handleUser = (e) => {
    setUser(e.target.value)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route path='/'
            element={<Home
              getUserAPI={getUserAPI}
              handleUser={handleUser}
              user={user} />}>

          </Route>

          <Route path='/profile'
            element={<Profile
              data={dataUser}
              repos={repos}
              value={user}
            />}>

          </Route>

        </Routes>
      </div>
    </BrowserRouter >

  )
}

export default App
