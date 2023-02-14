
import { Link } from 'react-router-dom'

import { AiOutlineSearch } from 'react-icons/ai'


export const Button = (props) => {


   return (
      <div>
         <button type='button' className="btn btn-seach btn-voltar" onClick={props.getUserAPI}>
            {props.text === 'Buscar' ? <AiOutlineSearch style={{fontSize:20, marginRight:10}} /> : ''}
            {/* <Link to = {'/profile'}> */}
            {props.text}
            {/* </Link> */}
         </button>
      </div>
   )
}