import { createContext, useContext, useState, useEffect } from 'react';

const BooksContext = createContext();

export const useBooks = () => useContext(BooksContext);

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/books.json');
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error('Error loading books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books }}>
      {children}
    </BooksContext.Provider>
  );
};
