import React from 'react';
import Book from './book/book';

const BookList  =()=>{
    const bookList = [];
    
    const state = [{
        name:'Cien años de soledad',
        author:'Gael García Marquez',
    },
    {
        name:'El amor en tiempos de cólera',
        author:'Gael García Marquez',
    }];

    state.forEach(el =>{
        bookList.push(<Book title={el.name} author={el.author} />);
    });


    return bookList;

}

export default BookList;