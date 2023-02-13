
import { Button } from '../compontes/Button'

export const Home = ({getUserAPI, handleUser, user}) => {

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
                  value = {user}
                  onChange = {handleUser} />
               <Button text='Buscar' getUserAPI={getUserAPI}></Button>
            </div>

         </form>

      </div>
   )
}