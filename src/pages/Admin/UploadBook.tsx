import "./Dashboard.css";

const UploadBook = () => {
  return (
    <div className="upload-book-container">
      <form className="upload-book-form">
        <h1 className="admin_form_title">Add Book</h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          required
        ></textarea>
        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          required
          pattern="^https?://"
        />
        <input
          type="date"
          name="publishedDate"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          required
        />
        <input
          type="number"
          name="pages"
          placeholder="Number of Pages"
          required
        />
        <input
          type="number"
          name="availableQuantity"
          placeholder="Available Quantity"
          required
        />
         <select name="genre" required >
          {/* Options for genres */}
        </select>
        <select name="author" required >
          {/* Options for authors */}
        </select>
        <select name="publisher" required >
          {/* Options for publishers */}
        </select>
        <button type="submit">Upload Book</button>
      </form>
    </div>
  );
};

export default UploadBook;
