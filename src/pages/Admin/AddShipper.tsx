import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from "zod";
import { addShipper } from "../../services/shipper.services";

const shipperSchema = z.object({
  name: z.string().min(3),
  phoneNumber: z.string().min(10),
});

type Shipper = z.infer<typeof shipperSchema>;

const AddShipper: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Shipper>({
    resolver: zodResolver(shipperSchema),
  });

  const handleSubmitShipper = async (data: Shipper) => {
    try {
      const response = await addShipper(data);
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
        <h1 className="admin_form_title">Add Shipper</h1>
        <input
          type="text"
          {...register("name")}
          placeholder="Genre Name...."
          required
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
        <input
          type="text"
          {...register("phoneNumber")}
          placeholder="Contact Number...."
          required
        />
        {errors.phoneNumber && (
          <p className="error-message">{errors.phoneNumber.message}</p>
        )}

        <button disabled={isSubmitting} type="submit">
          {" "}
          {isSubmitting ? "Loading..." : "Add Shipper"}
        </button>
        {errors.root && <p className="error-message">{errors.root.message}</p>}
      </form>
    </div>
  );
};

export default AddShipper;
