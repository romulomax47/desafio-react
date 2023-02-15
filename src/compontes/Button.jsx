
import { Link } from 'react-router-dom'

import { AiOutlineSearch } from 'react-icons/ai'


export const Button = ({text, handleSeachUser}) => {


   return (
      <div>
         <button type='button' className="h-full p-2 rounded-xl flex items-center justify-center bg-gray-700 hover:bg-gray-900 hover:text-white font-black"
                 onClick={handleSeachUser}>
            {text === 'Buscar' ? <AiOutlineSearch style={{fontSize:20, marginRight:10}} /> : ''}
            {/* <Link to = {'/profile'}> */}
            {text}
            {/* </Link> */}
         </button>
      </div>
   )
}