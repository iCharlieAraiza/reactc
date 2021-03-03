import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu/menu';
import PropTypes from 'prop-types';
import Counter from './components/counter/counter';
import BookList from './components/book-list/bookList'

const Greetings = () => {
  return(
    <>
      <Menu name={77}/>
      <h1>Hello World!! Yoo</h1>
      <Counter/>
      <BookList/>
    </>
  )
}

Greetings.propTypes = {
  name: PropTypes.string.isRequired
}

ReactDOM.render(<Greetings/>,document.querySelector('#root'));