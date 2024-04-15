import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom'

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
    .then(res => res.json())
    .then(data => setAllBooks(data));
  }, [])
  
  //delete a books
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`,
    {method: "DELETE",
    
      })
    .then(res => res.json())
    .then(data => {alert("Book is Deleted successfully!!")
    //  setAllBooks(data);
  })
  }

  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>GERENCIA SEUS LIVROS</h2>

        {/* table for book data*/}
        <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>N.</Table.HeadCell>
          <Table.HeadCell>Nome do livro</Table.HeadCell>
          <Table.HeadCell>Nome do autor</Table.HeadCell>
          <Table.HeadCell>Categoria</Table.HeadCell>
          <Table.HeadCell>Preços</Table.HeadCell>
          <Table.HeadCell>
            <span >Editar e Gerenciar</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) =>
          <Table.Body className="divide-y" key={book._id}>
             <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{index+1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{book.bookTitle}</Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>R$29,00</Table.Cell>
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium mr-5 text-cyan-600 hover:underline dark:text-cyan-500">
               Editar
              </Link>
             <button onClick={ () => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold 
                text-white rounded-sm hover:bg-sky-600'>
                Deletar
              </button> 
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
      </Table>
    </div>
  )
}

export default ManageBooks