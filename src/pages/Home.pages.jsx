
import { Button } from '../compontes/Button'

export const Home = ({ getUserAPI, handleUser, user }) => {

   return (
      <div className='home'>
         {/* <h1>Seach Devs</h1> */}

         <div className='form'>
            <form action="/profile" method='#'>
               <fieldset>
                  <legend>Seach Devs</legend>
                  <label htmlFor="Seach-Devs"></label>

                  <input type="search"
                     name="Seach-Devs"
                     id="Seach-Devs"
                     placeholder='Username'
                     value={user}
                     onChange={handleUser} />
                  <Button text='Buscar' getUserAPI={getUserAPI}></Button>

               </fieldset>
            </form>
         </div>

      </div>
   )
}