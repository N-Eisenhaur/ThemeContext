import React, { useContext } from 'react';//usecontext is a react hook
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;

  return ( //theme.sytax means uses a certain style based on theme these themes and syntax code is in themecontext.js

    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map(book => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>//the key is the book id then styles are added book title is rendered after
          );
        })}
      </ul>
    </div>
  );
}
 
export default BookList;