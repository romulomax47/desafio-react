
import { GrOrganization } from 'react-icons/gr'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'


const socialAccountIcons = {
   organizarion: <GrOrganization/>,
   location : <GoLocation/>,
   email: <AiOutlineMail/>,
   webSit: <CgWebsite/>,
   twitter: <AiOutlineTwitter/>
}

export const SocialAccounts = (props) => {
   return (
      <div className='card-social-links'>
           <div>
               {socialAccountIcons[props.icon]}
           </div>
          <a href="#">{props.social}</a>
      </div>
   )

}