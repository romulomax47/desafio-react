import { Link } from "react-router-dom"

export const NotFount = () => {
   return (
      <div className='w-full h-screen overflow-hidden flex gap-3 justify-center items-center bg-gray-500'>
         <h1 className="text-3xl">Dev não encontrado</h1>
         <button  className="h-fit p-2 rounded-xl flex items-center justify-center gap-1 bg-gray-700 hover:bg-gray-900 hover:text-white font-black">
          <Link to = '/'>VOLTAR</Link>
         </button>
            
      </div>
   )
}