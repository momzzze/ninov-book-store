import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthState, setGenres } from "../../state";
import { getGenresFromApi } from "../../services/genre.services";
import { Author, GenreWithId } from "../../types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { addAuthor } from "../../services/author.services";
import { useNavigate } from "react-router-dom";

const authorSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  imageUrl: z.string().url(),
  birthDate: z.string(),
  biography: z.string().min(10),
});

const AddAuthor = () => {
  const dispatch = useDispatch();
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const genres = useSelector((state: AuthState) => state.genres);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Author>({
    resolver: zodResolver(authorSchema),
  });

  useEffect(() => {
    const getGenres = async () => {
      const genres = await getGenresFromApi();
      dispatch(
        setGenres({
          genres: genres,
        })
      );
    };
    getGenres();
  }, [dispatch]);

  const handleGenreChange = (genreId: string) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  const handleAuthorSubmit = async (data: Author) => {
    try {
      const author = { ...data, writingGenre: selectedGenres };
      const response = await addAuthor(author);
      if (response.message) {
        throw new Error(response.message);
      }
      navigate("/admin-dashboard");
    } catch (error) {
      const typedError = error as Error;
      setError("root", { message: typedError.message });
    }
  };

  return (
    <div className="upload-book-container">
      <form
        className="upload-book-form"
        onSubmit={handleSubmit(handleAuthorSubmit)}
      >
        <h1 className="admin_form_title">Add Author</h1>
        <input
          type="text"
          {...register("firstName")}
          placeholder="First Name..."
          required
        />
        {errors.firstName && (
          <p className="error-message">{errors.firstName.message}</p>
        )}
        <input
          type="text"
          {...register("lastName")}
          placeholder="Last Name..."
          required
        />
        {errors.lastName && (
          <p className="error-message">{errors.lastName.message}</p>
        )}
        <input
          type="text"
          {...register("imageUrl")}
          placeholder="Image url..."
          required
        />
        {errors.imageUrl && (
          <p className="error-message">{errors.imageUrl.message}</p>
        )}

        <input type="date" {...register("birthDate")} required />
        {errors.birthDate && (
          <p className="error-message">{errors.birthDate.message}</p>
        )}

        <textarea
          {...register("biography")}
          placeholder="Biography..."
          required
        />
        {errors.biography && (
          <p className="error-message">{errors.biography.message}</p>
        )}

        <div className="genre-checkbox-container">
          {genres.map((genre: GenreWithId) => (
            <label key={genre._id} className="genre-checkbox-label">
              <input
                type="checkbox"
                value={genre._id}
                checked={selectedGenres.includes(genre._id)}
                onChange={() => handleGenreChange(genre._id)}
                className="genre-checkbox-input"
              />
              {genre.name}
            </label>
          ))}
        </div>
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Add Author"}
        </button>
        {errors.root && <p className="error-message">{errors.root.message}</p>}
      </form>
    </div>
  );
};

export default AddAuthor;
