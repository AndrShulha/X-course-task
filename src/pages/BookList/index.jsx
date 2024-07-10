import { useState, useEffect } from 'react';
import { useBooks } from '../../context/BooksContext';

import BookCard from '../../components/BookCard';

import styles from './BookList.module.scss';
import SearchFiled from '../../components/SearchFiled';
import Filter from '../../components/Filter';

const BookList = () => {
  const { books: originalBooks } = useBooks();
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [books, setBooks] = useState(originalBooks);

  useEffect(() => {

    let filteredBooks = originalBooks.filter(book => book.title.includes(searchQuery));

    switch (priceFilter) {
      case '0-15':
        filteredBooks = filteredBooks.filter(book => book.price > 0 && book.price < 15);
        break;
      case '15-30':
        filteredBooks = filteredBooks.filter(book => book.price > 15 && book.price < 30);
        break;
      case '30+':
        filteredBooks = filteredBooks.filter(book => book.price > 30);
        break;
      default:
        break;
    }
    setBooks(filteredBooks)

  }, [searchQuery, originalBooks, priceFilter])


  const getSearchQuery = (query) => {
    setSearchQuery(query);
  }

  const getPriceFilter = (filter) => {
    setPriceFilter(filter);
  }

  return (
    <section className={styles.books}>
      <div className={styles.books__filter}>
        <SearchFiled onInput={getSearchQuery}/>
        <Filter onInput={getPriceFilter}/>
      </div>
      <ul className={styles.books__list}>
        {books.map(book => (
          <li key={book.id} className={styles.books__item}>
            <BookCard {...book} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BookList;
