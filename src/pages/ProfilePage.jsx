
import { SocialAccounts } from '../components/SocialAccount';
import { Repositorio } from '../components/RepositoryCard'
/// icons 
import { RiUserFollowLine } from 'react-icons/ri'
import { GiShadowFollower } from 'react-icons/gi'
import { useLocation, Link } from 'react-router-dom';

export const Profile = () => {

   const { state } = useLocation();
   const [dataUser, reposUser] = state;


   return (
      <div className="h-screen  bg-gray-500 flex-col overflow-hidden md:flex md:flex-row">
         <aside className='hidden h-screen  bg-gray-700  text-white  py-3 px-4  md:flex md:flex-col md:justify-around'  >
            <div className='w-full text-center'>
               <img className="w-40" src={dataUser.avatar_url} alt={`foto do(a) ${dataUser.name}`} />
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
               <SocialAccounts name={dataUser.company} icon={dataUser.company != null ? 'organizarion' : null} />
               <SocialAccounts name={dataUser.location} icon={dataUser.location != null ? 'location' : null} />
               <SocialAccounts Link={dataUser.email} name='Email' icon='email' />
               <SocialAccounts Link={dataUser.blog} name='Blog' icon='webSit' />
               <SocialAccounts link={dataUser.twitter_username} name='Twitter' icon='twitter' />
            </div>
 
            <button className=" bg-gray-900 hover:bg-gray-800 hover:text-white font-black mt-4 p-2 rounded-md">
               <Link to='/'>VOLTAR</Link>
            </button>

         </aside>

         <section className='w-full flex-col h-screen overflow-hidden relative'>
            <article className='flex-col overflow-y-auto px-3 py-2 relative top-0 h-screen'>
               {reposUser.map((repositorio, idx) => {
                  return <Repositorio repos={repositorio} key={idx} />
               })}

            </article>c

            <div className=' bg-gray-500 absolute bottom-0 w-full text-center md:hidden py-3'>
               <button className="h-fit  py-3 px-6 text-white  rounded-xl mb-4 bg-gray-900 hover:bg-gray-800 hover:text-white font-black">
                  <Link to='/'>VOLTAR</Link>
               </button>
            </div>


         </section>

      </div>
   )
}

