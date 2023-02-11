import { useState } from 'react'
import { Button } from '../compontes/Button'
import { getUser } from '../api/api.api'

export const Home = (props) => {

   const [user, setUser] = useState('')

   const handleUser = (e) => {
      setUser(e.target.value)
   }

   const getUserdata = async (e) => {
      e.preventDefault()
      if(user.length === 0){
         return alert('Preecha o pampo')
      }

      const dataUser = await getUser(user);
      console.log(dataUser)

   }

   return (
      <div className='home'>
         <h1>Seach Devs</h1>

         <form action="/profile">
            <div className='form'>
               <label htmlFor=""></label>
               <input type="text" 
                      name="user" 
                      id="user"  
                      placeholder='Username'
                      value={user}
                      onChange={handleUser}/>
               <Button text='Buscar' submit = {getUserdata}></Button>
            </div>

         </form>

      </div>
   )
}