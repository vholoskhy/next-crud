import React from "react";

const Createform = () => {
  return (
    <div>
      <form action="">
        <div className="mb-4 pt-2 ">
          <input
            type=""
            name="title"
            className="py-2 px-4 border border-gray-400 rounded-sm"
            placeholder="title..."
          />
        </div>
        <div className="mb-4 pt-2 ">
          <input
            type="file"
            name="image"
            className="file:py-4 fi;e:px-4 file:mr-4 file:rounded-sm file:border-0 file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border border-gray-400 w full"
          />
        </div>
        <div className="mb-4 pt-2 ">
          <button className="bg-blue-700 py-2.5 px-6 text-white w-full font-medium text-base rounded-sm">
            Upload Image
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createform;
