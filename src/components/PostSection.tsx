'use client'
import React, { useState } from 'react';
import { Post } from '../constants/types';
import PostModal from './PostModal';

export const PostSection: React.FC = () => {

  const [num, setNum] = useState<number>(1);



  const [Data, setData] = useState<Post[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  }

  const validiateNum = (num: number) => {
    if (num < 1) {
      alert("Number should be greater than 0");
      return false;
    }
    if (num > 100) {
      alert("Number should be less than 100");
      return false;
    }
    return true;
  }

  const getPost = async () => {
    if (!validiateNum(num)) {
      return;
    }

    try {
      setLoading(true);

      setIsOpen(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const res = await response.json();
      setData(res);
    }
    catch (err) {

      setLoading(false);
      alert(`Something went wrong,${err}`);
    }
    finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col items-center my-4 ">
      <h1 className="text-xl sm:text-4xl font-bold">Post Section</h1>
      <p className="text-lg">Get as many random posts</p>
      <input
        type="number"
        max={10}
        min={1}
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
        className="border-2 border-gray-400 p-2 w-40 sm:w-56  rounded my-2 text-center"
        placeholder="Enter the number of quotes"
      />

      <PostModal isOpen={isOpen} data={Data.slice(0, num)} handleClose={handleClose} />
      <button className="bg-teal-500 text-black py-2 px-4 rounded" onClick={getPost}>
        {loading ? "Loading..." : "Get Posts"}
      </button>
    </div>

  );
};
