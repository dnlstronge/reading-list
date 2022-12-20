
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useCollection } from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';


export default function Home() {
  const { documents: books } = useCollection('books',
  ['uid', '==', user.uid])
  const { user } = useAuthContext()


  return (
    <div >
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
