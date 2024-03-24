import { useState } from "react";
import "./Dashboard.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const ManageBooks = () => {
  const [books, setBooks] = useState([
    { id: "1", title: "Book 1", author: "Author 1", year: 2020 },
    { id: "2", title: "Book 2", author: "Author 2", year: 2019 },
    { id: "3", title: "Book 3", author: "Author 3", year: 2018 },
  ]);
  const handleEdit = (id: string) => {
    console.log(`Edit book with id ${id}`);
  };
  const handleDelete = (id: string) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
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
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td className="manage">
                <button onClick={() => handleEdit(book.id)}><FaEdit/> Edit</button>
                <button className="delete" onClick={() => handleDelete(book.id)}><MdDelete/> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;
