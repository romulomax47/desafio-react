import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { searchUser, searchUserRepos } from '../api/search';
import { useNavigate } from 'react-router-dom';
import order from '../utils/order';


export const Home = () => {

   const [userName, setUserName] = useState('');
   const [load, setLoad] = useState(false);
   const navigate = useNavigate();


   const search = async (e) => {
      e.preventDefault()
      if (!userName) return alert('Digite um usuario')
      setLoad((prev) => !prev);
      try {

         const { data } = await searchUser.get(`/${userName}`);
         const response = await searchUserRepos.get(`/${userName}/repos`);
         const reposUser = order(response.data);


         navigate('/profile', {
            state: [data, reposUser]
         })

      } catch (error) {
         navigate('*')
      }

   }

   const handleUser = (e) => {
      setUserName(e.target.value);
   }

   return (
      <div className='w-full h-screen overflow-hidden flex justify-center items-center bg-gray-500'>
         {/* <h1>Seach Devs</h1> */}

         <div className='w-full flex justify-center mx-4'>

            <form onSubmit={search} className = 'w-full'>

               <h1 className='text-3xl text-center mb-7'>Search Devs</h1>
               <div className='flex-col w-full sm:flex sm:flex-row sm:justify-center gap-2  mb-7'>
                  <label htmlFor="Seach-Devs"></label>

                  <input type="search" className='w-full sm:w-2/5 p-2 rounded-xl focus:outline-0'
                     name="Seach-Devs"
                     id="Seach-Devs"
                     placeholder='Username'
                     value={userName}
                     onChange={handleUser} />
                  <div className='flex justify-center item-center'>
                     <button className="h-full  mt-5 sm:mt-0 px-3 py-2 rounded-xl flex items-center justify-center gap-1 bg-gray-700 hover:bg-gray-900 hover:text-white font-black">
                        <AiOutlineSearch style={{ fontSize: 25 }} />
                        {load ? 'Load...' : 'Buscar'}
                     </button>
                  </div>

               </div>

            </form>
         </div>

      </div>
   )
}