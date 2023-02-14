import { Fragment } from 'react'
import { AiFillStar } from 'react-icons/ai'

export const Repositorio = ({ repos }) => {

   return (
      <div>

         <h3 className='name-repo'>{repos.name}</h3>

         {repos.description == null ? <Fragment/>: 
            <p>{repos.description}</p>

         }

         <div className='flex'>
            <AiFillStar />
            <b>Stars</b>
            <span>{repos.watchers_count}</span>

       

            <a href={repos.html_url} target="_blank">Abrir repositório</a>
         </div>
      </div>
   )
}