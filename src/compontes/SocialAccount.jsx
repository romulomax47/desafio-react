
import { FcOrganization } from 'react-icons/fc'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'


const socialAccountIcons = {
   organizarion: <FcOrganization style={{color:'white'}} />,
   location: <GoLocation />,
   email: <AiOutlineMail />,
   webSit: <CgWebsite />,
   twitter: <AiOutlineTwitter />
}

export const SocialAccounts = (props) => {
   return (
      <div className='card-social-links'>
         
         {socialAccountIcons[props.icon]}

         <a href="#">{props.social}</a>
      </div>
   )

}