import { Button } from '../compontes/Button';
import { SocialAccounts } from '../compontes/SocialAccount';
import {Repositorio} from '../compontes/Repositorio'

/// icons 
import { AiOutlineStar, AiOutlineHeart } from 'react-icons/ai'
import { GiShadowFollower } from 'react-icons/gi'

export const Profile = ({}) => {

   return (
      <div className="page-profile">
         <aside>
            <div>
               {/* <img className="img-profile" src={value.avatar_url} alt={`foto do ${value.name}`} /> */}
            </div>

            {/* <h2>{value.name}</h2> */}
            {/* <a href="#">@romulomax</a> */}

            <p>
              {/* {data.bio} */}
            </p>

            <div className='card-follwer'>
               <div>
                  <GiShadowFollower/>
                 <b>follores</b>
                  {/* <span>{data.followers}</span> */}
               </div>
               <div>
                  <AiOutlineHeart/>
                  <span>follwing</span>
               </div>
               <div>
                  <AiOutlineStar/>
                  <span>stars</span>
               </div>
            </div>


            <div className='conatinerSocialLinks'>
               <SocialAccounts social='organization' icon='organizarion' />
               <SocialAccounts social='location' icon='location' />
               {/* <SocialAccounts social= {data.blog} icon='email' /> */}
               <SocialAccounts social='webSit' icon='webSit' />
               <SocialAccounts social='twitter' icon='twitter' />



            </div>

            <Button text='Volta'></Button>

         </aside>
         {/* <section>

           
            {repos.map((item, idx) => {
               return <Repositorio repos = {item} key= {idx}/>
            })}
               
               
         </section> */}

      </div>
   )
}

