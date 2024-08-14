"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema, postValues } from "@/Schema/zodSchema";
import { PrismaClient } from "@prisma/client";
const CreatePost: React.FC = () => {
  const prisma = new PrismaClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<postValues>({
    resolver: zodResolver(postSchema),
  });
  const getUserId = async () => {
    const user = await prisma.user.findFirst({
      where: { email: "anshjain638@gmail.com" },
    });
    return user?.id;
  };

  const onSubmit: SubmitHandler<postValues> = async (data) => {
    const userId = await getUserId();
    prisma.post
      .create({
        data: {
          title: data.title,
          content: data.content,
          author: { connect: { id: userId } },
        },
      })
      .then(() => {
        alert("Post Created");
      });
  };

  return (
    <div className="flex min-h-[100vh] flex-col justify-between ">
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
                Title:
              </label>
              <div className="w-full sm:w-2/3 gap-y-2 justify-center flex flex-col">
                <input
                  {...register("title")}
                  type="text"
                  placeholder="Author Name"
                  className="p-2 w-full  border border-gray-300 rounded-md"
                  aria-invalid={errors.title ? "true" : "false"}
                />
                {errors.title && (
                  <p role="alert" className="text-teal-400 bg-black">
                    {errors.title.message}
                  </p>
                )}
              </div>
            </div>

            {/* Post Field */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full  sm:w-3/4 p-4">
              <label htmlFor="quote" className="text-white">
                Post Content:
              </label>
              <div className="w-full sm:w-2/3 gap-y-2 justify-center flex flex-col">
                <textarea
                  {...register("content")}
                  className="p-2 w-full  min-h-48 border border-gray-300 rounded-md"
                  aria-invalid={errors.content ? "true" : "false"}
                />
                {errors.title && (
                  <p role="alert" className="text-teal-400 bg-black">
                    {errors.content!.message}
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
    </div>
  );
};

export default CreatePost;
