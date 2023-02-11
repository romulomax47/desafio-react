import { Button } from '../compontes/Button';
import { SocialAccounts } from '../compontes/SocialAccount';
import {Repositorio} from '../compontes/Repositorio'


export const Profile = () => {

   return (
      <div className="page-profile">
         <aside>
            <div>
               <img className="img-profile" src="https://avatars.githubusercontent.com/u/99984663?v=4" alt="" />
            </div>

            <h2>Romulomax</h2>
            <a href="#">@romulomax</a>

            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Harum nesciunt blanditiis cum. Voluptates, architecto
               velit necessitatibus accusamus ipsa aliquam nam, doloribus
               natus, ipsam repudiandae distinctio mollitia? Dolorum voluptatibus officiis doloremque.
            </p>

            <div>
               <div>
                  {/* //icon */}
                  <span>follwers</span>
               </div>
               <div>
                  {/* //icon */}
                  <span>follwers</span>
               </div>
               <div>
                  {/* //icon */}
                  <span>stars</span>
               </div>
            </div>
            <div className='conatinerSocialLinks'>
               <SocialAccounts social='organization' icon='organizarion' />
               <SocialAccounts social='location' icon='location' />
               <SocialAccounts social='email' icon='email' />
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
               <Repositorio/>
               <Repositorio/>
               <Repositorio/>
               <Repositorio/>
         </section>

      </div>
   )
}

