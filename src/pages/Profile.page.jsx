import { Button } from '../compontes/Button';
import { SocialAccounts } from '../compontes/SocialAccount';
import { Repositorio } from '../compontes/Repositorio'

/// icons 
import { RiUserFollowLine } from 'react-icons/ri'
import { GiShadowFollower } from 'react-icons/gi'

export const Profile = ({data, repos}) => {
   console.log(data)
   return (
      <div className="page-profile">
         <aside>
            <div className='img'>
               <img className="img-profile" src= {data.avatar_url} alt={`foto do romulo`} />
            </div>

            <h2>{data.name}</h2>
            
            <p>
               {/* BIO */}
               {data.bio}
            </p>

            <div className='card-follwer'>
               <div>
                  <GiShadowFollower />
                  <b>followers</b>
                  <span>{data.followers}</span>
               </div>
               <div>
                  <RiUserFollowLine />
                  <b>following</b>
                  <span>{data.following}</span>
               </div>
              
            </div>


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

