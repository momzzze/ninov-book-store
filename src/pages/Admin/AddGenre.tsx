import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addGenre } from "../../services/genre.services";

const genreSchema = z.object({
  name: z.string().min(3),
});

type Genre = z.infer<typeof genreSchema>;

const AddGenre = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Genre>({
    resolver: zodResolver(genreSchema),
  });

  const onSubmit = async (data: Genre) => {
    try {
      const response = await addGenre(data);
      if (response.message) {
        throw new Error(response.message);
      }
    } catch (error) {
      const typedError = error as Error;
      setError("root", { message: typedError.message });
    }
  };
  return (
    <div className="upload-book-container">
      <form className="upload-book-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="admin_form_title">Add Genre</h1>
        <input
          type="text"
          {...register("name")}
          placeholder="Genre Name...."
          required
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
        <button type="submit">
          {isSubmitting ? "Loading..." : "Add Genre"}
        </button>
        {errors.root && <p className="error-message">{errors.root.message}</p>}
      </form>
    </div>
  );
};

export default AddGenre;
