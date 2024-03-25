import { zodResolver } from "@hookform/resolvers/zod";
import "./Dashboard.css";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthState, updateBook } from "../../state";
import {
  AuthorWithId,
  GenreWithId,
  PublisherWithId,
} from "../../types/types";
import { getAuthorsFromApi } from "../../services/author.services";
import { getPublishersFromApi } from "../../services/publisher.services";
import { editBook } from "../../services/book.services";
import { useNavigate, useParams } from "react-router-dom";

const uploadBookSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  imageUrl: z.string().url(),
  publishedDate: z.string(),
  price: z.number(),
  pages: z.number(),
  availableQuantity: z.number(),
  genre: z.string(),
  author: z.string(),
  publisher: z.string(),
});
type Book = z.infer<typeof uploadBookSchema>;

const EditBook: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const genres = useSelector((state: AuthState) => state.genres);
  const [authors, setAuthors] = React.useState<AuthorWithId[]>([]);
  const [publishers, setPublishers] = React.useState<PublisherWithId[]>([]);
  const books = useSelector((state: AuthState) => state.books);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<Book>({
    resolver: zodResolver(uploadBookSchema),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const book:any = books.find((book) => book._id === id);

  useEffect(() => {
    if (book) {
      setValue("title", book.title);
      setValue("description", book.description);
      setValue("imageUrl", book.imageUrl);
      setValue(
        "publishedDate",
        new Date(book.publishedDate).toISOString().split("T")[0]
      );
      setValue("price", book.price);
      setValue("pages", book.pages);
      setValue("availableQuantity", book.availableQuantity);
      setValue("genre", book.genre._id);
      setValue("author", book.author._id);
      setValue("publisher", book.publisher._id);
    }
  }, [book, setValue]);
  useEffect(() => {
    const getAuthors = async () => {
      const response: AuthorWithId[] = await getAuthorsFromApi();
      setAuthors(response);
    };
    const getPublishers = async () => {
      const response: PublisherWithId[] = await getPublishersFromApi();
      setPublishers(response);
    };
    getAuthors();
    getPublishers();
  }, []);

  const handleBookSubmit: SubmitHandler<Book> = async (data: Book) => {
    try {
        const response = await editBook(id, data);
        
      dispatch(updateBook({ book: response }));     
      navigate("/admin-dashboard/manage-books");
    } catch (error) {
      const typedError = error as Error;
      setError("root", { message: typedError.message });
    }
  };
  return (
    <div className="upload-book-container">
      <form
        className="upload-book-form"
        onSubmit={handleSubmit(handleBookSubmit)}
      >
        <h1 className="admin_form_title">Edit Book</h1>
        <input
          type="text"
          {...register("title")}
          placeholder="Title"
          required
        />
        {errors.title && (
          <p className="error-message">{errors.title.message}</p>
        )}
        <textarea
          {...register("description")}
          placeholder="Description"
          required
        ></textarea>
        {errors.description && (
          <p className="error-message">{errors.description.message}</p>
        )}

        <input
          type="text"
          {...register("imageUrl")}
          placeholder="Image URL"
          required
        />
        {errors.imageUrl && (
          <p className="error-message">{errors.imageUrl.message}</p>
        )}

        <input type="date" {...register("publishedDate")} required />
        {errors.publishedDate && (
          <p className="error-message">{errors.publishedDate.message}</p>
        )}
        <input
          type="number"
          {...register("price", {
            valueAsNumber: true,
          })}
          placeholder="Price"
          required
        />
        {errors.price && (
          <p className="error-message">{errors.price.message}</p>
        )}
        <input
          type="number"
          {...register("pages", {
            valueAsNumber: true,
          })}
          placeholder="Number of Pages"
          required
        />
        {errors.pages && (
          <p className="error-message">{errors.pages.message}</p>
        )}
        <input
          type="number"
          {...register("availableQuantity", {
            valueAsNumber: true,
          })}
          placeholder="Available Quantity"
          required
        />
        {errors.availableQuantity && (
          <p className="error-message">{errors.availableQuantity.message}</p>
        )}
        <select {...register("genre")} required>
          <option value="">Select Genre</option>
          {genres.map((genre: GenreWithId) => (
            <option key={genre._id} value={genre._id}>
              {genre.name}
            </option>
          ))}
        </select>
        {errors.genre && (
          <p className="error-message">{errors.genre.message}</p>
        )}
        {authors.length > 0 && (
          <select {...register("author")} required>
            <option value="">Select Author</option>
            {authors.map((author: AuthorWithId) => (
              <option key={author._id} value={author._id}>
                {author.firstName} {author.lastName}
              </option>
            ))}
          </select>
        )}
        {errors.author && (
          <p className="error-message">{errors.author.message}</p>
        )}
        {publishers.length > 0 && (
          <select {...register("publisher")} required>
            <option value="">Select Publisher</option>
            {publishers.map((publisher: PublisherWithId) => (
              <option key={publisher._id} value={publisher._id}>
                {publisher.name}
              </option>
            ))}
          </select>
        )}
        {errors.root && <p className="error-message">{errors.root.message}</p>}

        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Edit Book"}
        </button>
        {errors.root && <p className="error-message">{errors.root.message}</p>}
      </form>
    </div>
  );
};

export default EditBook;
