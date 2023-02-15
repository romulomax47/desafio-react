
import { Link } from 'react-router-dom'




export const Button = ({text, handleSeachUser}) => {


   return (
      <div>
         <button type='button'
                 onClick={handleSeachUser}>
            {text === 'Buscar' ? <AiOutlineSearch style={{fontSize:20, marginRight:10}} /> : ''}
            {/* <Link to = {'/profile'}> */}
            {text}
            {/* </Link> */}
         </button>
      </div>
   )
}