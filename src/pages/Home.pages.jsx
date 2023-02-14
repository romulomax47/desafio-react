
import { Button } from '../compontes/Button'

export const Home = ({ getUserAPI, handleUser, user }) => {

   return (
      <div className='w-full h-screen overflow-hidden flex justify-center items-center bg-gray-500'>
         {/* <h1>Seach Devs</h1> */}

         <div className='form'>
            <form action="/profile" method='#'>

               <h1 className='text-3xl text-center mb-7'>Seach Devs</h1>
               <div className='flex justify-center items-center gap-2 mb-7'>
                  <label htmlFor="Seach-Devs"></label>

                  <input type="search" className='w-96 p-2 rounded-xl focus:outline-0'
                     name="Seach-Devs"
                     id="Seach-Devs"
                     placeholder='Username'
                     value={user}
                     onChange={handleUser} />
                  <Button text='Buscar' getUserAPI={getUserAPI}></Button>
               </div>



            </form>
         </div>

      </div>
   )
}