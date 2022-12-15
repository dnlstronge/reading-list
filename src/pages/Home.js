import { useEffect, useState } from 'react'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'

import { db } from '../firebase/config'
import { collection, getDoc, getDocs } from 'firebase/firestore'

export default function Home() {
  const [books, setBooks] = useState(null)


  return (
    <div >
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
