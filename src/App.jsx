import { Home } from './pages/Home.pages'
import { Profile } from './pages/Profile.page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotFount } from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <div className="App w-full h-full">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFount />} />
        </Routes>
      </div>
    </BrowserRouter>


  )
}

export default App
