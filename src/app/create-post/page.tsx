"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { postSchema, postValues } from "@/Schema/zodSchema";
const CreatePost: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<postValues>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit: SubmitHandler<postValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-[100vh] flex-col justify-between ">
      <Header />
      <main className="flex flex-col items-center">
        <h1 className="my-6 text-4xl">CreatePost</h1>
        <div className="flex mb-4 bg-slate-500 w-4/5 md:w-3/4 lg:w-1/2  rounded-lg justify-center items-center p-4">
          <form
            className="flex flex-col  mb-4 w-full justify-center items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name Field */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full  sm:w-3/4 p-4">
              <label htmlFor="name" className="text-white">
                Author Name:
              </label>
              <div className="w-full sm:w-2/3 gap-y-2 justify-center flex flex-col">
                <input
                  {...register("author_name")}
                  type="text"
                  placeholder="Author Name"
                  className="p-2 w-full  border border-gray-300 rounded-md"
                  aria-invalid={errors.author_name ? "true" : "false"}
                />
                {errors.author_name && (
                  <p role="alert" className="text-teal-400 bg-black">
                    {errors.author_name.message}
                  </p>
                )}
              </div>
            </div>

            {/* Post Field */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full  sm:w-3/4 p-4">
              <label htmlFor="quote" className="text-white">
                Post:
              </label>
              <div className="w-full sm:w-2/3 gap-y-2 justify-center flex flex-col">
                <textarea
                  {...register("quote")}
                  className="p-2 w-full  min-h-48 border border-gray-300 rounded-md"
                  aria-invalid={errors.quote ? "true" : "false"}
                />
                {errors.quote && (
                  <p role="alert" className="text-teal-400 bg-black">
                    {errors.quote.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="bg-teal-500 text-white p-2 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreatePost;
