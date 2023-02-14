import { AiFillStar } from 'react-icons/ai'

export const Repositorio = ({ repos }) => {

   return (
      <div>

         <h3 className='name-repo'>Nome do repositorio</h3>

         <p>Descrião do repositorio</p>

         <div>
            <AiFillStar />
            <span>star</span>

            <span>Updated 30 days ago</span>
         </div>
      </div>
   )
}