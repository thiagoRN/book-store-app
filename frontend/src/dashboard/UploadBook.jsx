import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Romance",
    "Thriller",
    "War",
    "Bibliography",
    "Biography",
    "History",
    "Music",
    "Philosophy",
    "Politics",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Articles",
    "Art and Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (eve) => {
    setSelectedBookCategory(eve.target.value);
  }

  const handleBookSubmit = (event) => {
      event.preventDefault();
      const form =  event.target;

      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const bookDescription = form.bookDescription.value;
      const bookPDFURL = form.bookPDFURL.value;

      const bookObj = {
        bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
      }

      console.log(bookObj)

      fetch("http://localhost:5000/upload-book",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookObj)
      }).then(res => res.json())
      .then(data => {
        alert("Book uploaded successfully!!")
        form.reset();
      })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload um Livro</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>

          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label 
                  htmlFor="bookTitle" 
                  value="Titulo do livro" 
                />
              </div>
                <TextInput 
                  id="bookTitle" 
                  name="bookTitle" 
                  type="text" 
                  placeholder="Titulo do livro" 
                  required 
                />
            </div>

            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label 
                  htmlFor="authorName" 
                  value="Nome do Autor" 
                />
              </div>
                <TextInput 
                  id="authorName" 
                  name="authorName" 
                  type="text" 
                  placeholder="Nome do Autor" 
                  required 
                />
            </div>
        </div>

        <div className='flex gap-8'>

          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label 
                  htmlFor="imageURL" 
                  value="URL da Capa do Livro" 
                />
              </div>
                <TextInput 
                  id="imageURL" 
                  name="imageURL" 
                  type="text" 
                  placeholder="URL da Capa do Livro" 
                  required 
                />
            </div>

            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label 
                  htmlFor="inputState" 
                  value="Categoria do livro" 
                />
              </div>
                 
                 <Select className="w-full rounded" id="inputState" name="categoryName" value={selectedBookCategory}
                 onChange={handleChangeSelectedValue}
                 >
                  {
                    bookCategories.map((option) =>  <option key={option} value={option}>{option}</option>)
                  }
                 </Select>
              </div>
            </div>

            <div>
              <div className="mb-2 block">
                <Label 
                htmlFor="bookDescription" 
                value="Descrição do livro" />
              </div>

              <Textarea 
              id="bookDescription"
              name='bookDescription'
              placeholder="Escreva a Descrição do livro..." 
              required 
              rows={6} 
              />
            </div>

            <div>

          <div className="mb-2 block">
              <Label 
                htmlFor="bookPDFURL" 
                value="Livro PDF URL " 
              />
            </div>
              <TextInput 
                id="bookPDFURL" 
                name="bookPDFURL" 
                type="text" 
                placeholder="Livro pdf url" 
                required 
              />
          </div>
                  
          <Button className='mt-5' type="submit">Upload um Livro</Button>
        </form>
    </div>
  )
}

export default UploadBook