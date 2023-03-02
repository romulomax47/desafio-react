import { Link } from "react-router-dom"

export const NotFount = () => {
   return (
      <section className='bg-gray-500 h-screen flex flex-col justify-center items-center px-4 '>

         <h1 className="text-3xl mb-3 ">Dev não encontrado</h1>
         <button className="h-fit p-2 rounded-xl flex items-center justify-center gap-1 bg-gray-700 hover:bg-gray-900 hover:text-white font-black">
            <Link to='/'>VOLTAR</Link>
         </button>



      </section>
   )
}