import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from "zod";
import { addPublisher } from "../../services/publisher.services";

const publisherSchema = z.object({
  name: z.string().min(3),
});

type Publisher = z.infer<typeof publisherSchema>;

const AddPublisher: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Publisher>({
    resolver: zodResolver(publisherSchema),
  });

  const handleSubmitShipper = async (data: Publisher) => {
    try {
      const response = await addPublisher(data);
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
        onSubmit={handleSubmit(handleSubmitShipper)}
      >
        <h1 className="admin_form_title">Add Publisher</h1>
        <input
          type="text"
          {...register("name")}
          placeholder="Publisher Name...."
          required
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}

        <button disabled={isSubmitting} type="submit">
          {" "}
          {isSubmitting ? "Loading..." : "Add Publisher"}
        </button>
        {errors.root && <p className="error-message">{errors.root.message}</p>}
      </form>
    </div>
  );
};

export default AddPublisher;
