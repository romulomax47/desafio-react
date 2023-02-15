import { Fragment } from 'react'
import { AiFillStar } from 'react-icons/ai'

export const Repositorio = ({ repos }) => {

   return (
      <section className='mb-4 px-3 py-4 border-2 border-gray-800 rounded-xl'>
         <a href= {repos.html_url} target='_blank'>
            <h3 className='text-xl text-gray-900 font-extrabold mb-2'>{repos.name}</h3>
         </a>

         {repos.description == null ? <Fragment/>: 
            <p>{repos.description}</p>
         }

         <div className='flex items-center gap-3'>
            <div className='flex items-center gap-2'>
            <AiFillStar />
            <b>Stars</b>
            <span>{repos.watchers_count}</span>

            </div>
      
            <a className='font-medium hover:text-gray-900' href={repos.html_url} target="_blank">Abrir repositório</a>
         </div>
      </section>
   )
}