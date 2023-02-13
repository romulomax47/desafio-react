import {AiFillStar} from 'react-icons/ai'

export const Repositorio = ({repos}) =>{

   console.log(repos)
   return (
      <div>

         <h3>{repos.name}</h3>

         <p>{repos.description}</p>

          <div>
            <AiFillStar/>
            <span>star</span>

            <span>Updated 30 days ago</span>
          </div>
      </div>
   )
}