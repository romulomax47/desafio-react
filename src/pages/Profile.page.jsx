import { Button } from '../compontes/Button';
import { SocialAccounts } from '../compontes/SocialAccount';
import { Repositorio } from '../compontes/Repositorio'

/// icons 
import { RiUserFollowLine } from 'react-icons/ri'
import { GiShadowFollower } from 'react-icons/gi'

export const Profile = ({data, repos}) => {
   console.log(data)
   return (
      <div className="h-screen bg-gray-500 overflow-hidden flex">
         <aside className='bg-gray-700 text-white w-max py-3 px-4' >
            <div className='text-center'>
               <img className="w-36" src= {data.avatar_url} alt={`foto do romulo`} />
            </div>

            <h2 className='text-gray-900 font-extrabold'>{data.name}</h2>
            
            <p className='text-sm mb-2'>
               {/* BIO */}
               {data.bio}
            </p>

            <div className='card-follwer'>
               <div className='flex items-center gap-2'>
                  <GiShadowFollower />
                  <b className='text-gray-900'>followers</b>
                  <span className='text-gray-900 font-extrabold'>{data.followers}</span>
               </div>
               <div className='flex items-center gap-2'>
                  <RiUserFollowLine />
                  <b className='text-gray-900'>following</b>
                  <span className='text-gray-900 font-extrabold'>{data.following}</span>
               </div>
              
            </div>

            <hr className='bg-gray-600 mt-2' />
            <div className='conatinerSocialLinks'>
               <SocialAccounts social='organization' icon='organizarion' />
               <SocialAccounts social= {data.location} icon='location' />
               <SocialAccounts social='Email' icon='email' />
               <SocialAccounts social='webSit' icon='webSit' />
               <SocialAccounts social='twitter' icon='twitter' />



            </div>

            <Button text='Volta'></Button>

         </aside>

         <section>
            {repos.map((repositorio, idx) => {
               return <Repositorio repos = {repositorio} key = {idx} />
            })}
            
            

         </section>

      </div>
   )
}

