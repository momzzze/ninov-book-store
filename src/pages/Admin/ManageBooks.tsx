import { useEffect, useState } from "react";
import "./Dashboard.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, getBooksFromApi } from "../../services/book.services";
import { AuthState, setBooks } from "../../state";
import { AuthorWithId, BookWithId, PopulatedBook } from "../../types/types";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [books, setBooksLocal] = useState<BookWithId[]>([]);
  const dispatch = useDispatch();
  const reduxBooks = useSelector((state: AuthState) => state.books);

  useEffect(() => {
    setBooksLocal(reduxBooks);
  }, [reduxBooks]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await getBooksFromApi();
        dispatch(setBooks({ books: response }));
      } catch (error) {
        console.error(error);
      }
    };
    getBooks();
  }, [dispatch]);

  const handleDelete =async (id: string) => {
    dispatch(setBooks({ books: books.filter((book) => book._id !== id) }))
    const repsonse=await deleteBook(id);
    console.log(repsonse);
  };
  return (
    <div className="container__dashboard">
      <h2>Manage Books</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 &&
            books?.map((book: (BookWithId | PopulatedBook)) => (
              <tr key={book._id}>
                <td>{book._id}</td>
                <td>{book.title}</td>
                <td>
                {(book.author as AuthorWithId)?.firstName} {(book.author as AuthorWithId)?.lastName}
                </td>
                <td>
                  {new Date(book.publishedDate).toISOString().split("T")[0]}
                </td>
                <td className="manage">
                  <Link
                    className="edit-link"
                    to={`/admin-dashboard/edit-books/${book._id}`}                    
                  >
                    <FaEdit /> Edit
                  </Link>
                  <button
                    className="delete"
                    onClick={() => handleDelete(book._id)}
                  >
                    <MdDelete /> Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;
