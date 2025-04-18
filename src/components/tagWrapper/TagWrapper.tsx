import React from "react";
import { PiTagChevronBold } from "react-icons/pi";

interface ITagWrapper {
  children: React.ReactNode;
}

const TagWrapper = ({ children }: ITagWrapper) => {
  return (
    <span className="flex gap-1 items-center text-center border rounded-md py-0.5 px-1.5 italic text-xs font-bold my-2 hover:bg-gray-300/25 cursor-default">
      <PiTagChevronBold />
      {children}
    </span>
  );
};

export default TagWrapper;
