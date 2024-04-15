import React from 'react'
import FavBookImg from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12 '>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
        </div>

        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>
            Encontre o seu Livro 
            <span className='text-blue-700'> Favorito aqui!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Eos reiciendis ipsam explicabo consequatur earum et, necessitatibus, 
                hic eligendi laboriosam odit molestiae,
                eum fugit quas aut nemo repellendus iste tempora sunt.
            </p>
            {/*stats */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Lista de livros</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Usuários registrados</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
            </div>

            <Link to="/shop" className="mt-12 block">
                <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded 
                hover:bg-black transition-all duration-300'>Explore mais</button>
            </Link>
        </div>
    </div>
  )
}

export default FavBook