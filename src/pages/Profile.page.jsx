import { Button } from '../compontes/Button';
import { SocialAccounts } from '../compontes/SocialAccount';
import { Repositorio } from '../compontes/Repositorio'

/// icons 
import { AiOutlineStar, AiOutlineHeart } from 'react-icons/ai'
import { GiShadowFollower } from 'react-icons/gi'

export const Profile = ({dataUser, repos}) => {

   return (
      <div className="page-profile">
         <aside>
            <div className='img'>
               <img className="img-profile" src={dataUser.avatar_url} alt={`foto do romulo`} />
            </div>

            <h2>{dataUser.name}</h2>
            
            <p>
               {/* BIO */}
               {dataUser.bio}
            </p>

            <div className='card-follwer'>
               <div>
                  <GiShadowFollower />
                  <b>follores</b>
                  <span>2</span>
               </div>
               <div>
                  <AiOutlineHeart />
                  <span>follwing</span>
               </div>
               <div>
                  <AiOutlineStar />
                  <span>stars</span>
               </div>
            </div>


            <div className='conatinerSocialLinks'>
               <SocialAccounts social='organization' icon='organizarion' />
               <SocialAccounts social='location' icon='location' />
               <SocialAccounts social='Email' icon='email' />
               <SocialAccounts social='webSit' icon='webSit' />
               <SocialAccounts social='twitter' icon='twitter' />



            </div>

            <Button text='Volta'></Button>

         </aside>

         <section>



            <Repositorio/>
            <Repositorio/>
            <Repositorio/>
            <Repositorio/>
            <Repositorio/>
            <Repositorio/>
            <Repositorio/>
            <Repositorio/>
            <Repositorio/>
            <Repositorio/>
            <Repositorio/>
            <Repositorio/>



         </section>

      </div>
   )
}

