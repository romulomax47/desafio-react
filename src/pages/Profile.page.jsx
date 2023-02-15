
import { SocialAccounts } from '../components/SocialAccount';
import { Repositorio } from '../components/Repositorio'
/// icons 
import { RiUserFollowLine } from 'react-icons/ri'
import { GiShadowFollower } from 'react-icons/gi'
import { useLocation, Link } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai'

export const Profile = () => {

   const { state } = useLocation();
   const [dataUser, reposUser] = state;


   return (
      <div className="h-screen bg-gray-500 overflow-hidden flex">
         <aside className='bg-gray-700 text-white w-max py-3 px-4' >
            <div className='text-center'>
               <img className="w-36" src={dataUser.avatar_url} alt={`foto do(a) ${dataUser.name}`} />
            </div>

            <h2 className='text-gray-900 font-extrabold'>{dataUser.name}</h2>

            <p className='text-sm mb-2'>
               {dataUser.bio}
            </p>

            <div className='card-follwer'>
               <div className='flex items-center gap-2'>
                  <GiShadowFollower />
                  <b className='text-gray-900'>followers</b>
                  <span className='text-gray-900 font-extrabold'>{dataUser.followers}</span>
               </div>
               <div className='flex items-center gap-2'>
                  <RiUserFollowLine />
                  <b className='text-gray-900'>following</b>
                  <span className='text-gray-900 font-extrabold'>{dataUser.following}</span>
               </div>

            </div>

            <hr className='bg-gray-600 mt-2' />
            <div className='conatinerSocialLinks'>
               <SocialAccounts social={dataUser.company} name='Company' icon='organizarion' />
               <SocialAccounts name={dataUser.location} icon='location' />
               <SocialAccounts social={dataUser.email} name='Email' icon='email' />
               <SocialAccounts social={dataUser.blog} name='Blog' icon='webSit' />
               <SocialAccounts social={dataUser.twitter_username} name='Twitter' icon='twitter' />
            </div>

            <button className="h-fit w-full p-2 mt-5 rounded-xl flex items-center justify-center gap-1 bg-gray-900 hover:bg-gray-800 hover:text-white font-black">
               <Link to='/'>VOLTAR</Link>
            </button>

         </aside>

         <section className='h-screen w-full overflow-auto py-4 px-3'>
            {reposUser.map((repositorio, idx) => {
               return <Repositorio repos={repositorio} key={idx} />
            })}

         </section>

      </div>
   )
}

