
import React, { useEffect, useContext } from "react";
import BookUsedContext from '../../context/Book-used/BookUsedContext'

function BooksUsed() {

    const ctx = useContext(BookUsedContext);
console.log(ctx);
  const { booksUsed, hola, changeText, singleBookUsed } = ctx;

    return (
        <div>
            Listado de libros usados
            <button onClick={()=> {changeText()}}> Cambiar texto</button>
        </div>
    )
}

export default BooksUsed
