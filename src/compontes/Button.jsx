

import { AiOutlineSearch } from 'react-icons/ai'


export const Button = (props) => {

   return (
      <div>
         <button type ='button' className="btn btn-seach" onClick={props.submit}>
            {props.text === 'Buscar' ? <AiOutlineSearch /> : ''}

            {props.text}</button>
      </div>
   )
}