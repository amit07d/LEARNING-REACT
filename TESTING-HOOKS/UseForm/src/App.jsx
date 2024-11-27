import "./App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  async function onSubmit(data) {
    setIsSuccess(false); // Reset success state
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Submitting the form:", data);
    setIsSuccess(true); // Show success message
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-4 rounded shadow max-w-xs w-full"
    >
      <div className="mb-3">
        <label className="block text-sm font-medium">First Name</label>
        <input
          {...register("firstName", {
            required: "First Name is required",
            minLength: { value: 3, message: "Must be at least 3 characters" },
          })}
          className="w-full mt-1 p-2 border rounded focus:ring focus:ring-blue-300"
        />
        {errors.firstName && (
          <p className="text-red-500 text-xs">{errors.firstName.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium">Middle Name</label>
        <input
          {...register("middleName")}
          className="w-full mt-1 p-2 border rounded focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium">Last Name</label>
        <input
          {...register("lastName", {
            required: "Last Name is required",
            minLength: { value: 3, message: "Must be at least 3 characters" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Enter a valid name",
            },
          })}
          className="w-full mt-1 p-2 border rounded focus:ring focus:ring-blue-300"
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs">{errors.lastName.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full p-2 rounded text-white ${
          isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {/* Success message */}
      {isSuccess && (
        <p className="text-green-500 mt-4 text-center">Form submitted successfully!</p>
      )}
    </form>
  );
}

export default App;
