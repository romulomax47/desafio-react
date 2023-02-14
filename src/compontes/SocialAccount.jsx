
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
      <div className='flex items-center gap-2 mt-4 text-gray-900 font-extrabold hover:text-gray-400'>
         
         {socialAccountIcons[props.icon]}

         <a href="#">{props.social}</a>
      </div>
   )

}