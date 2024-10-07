"use client";
import Button from "@/components/Button";
import DropOptions from "@/components/ui/DropDownOptions";
import useQuiz from "./store";
import { useState } from "react";

export default function Home() {
  const [nameOfUser, newName] = useState("");
  const setName = useQuiz((state: any) => state.setName);
  const handleStart = () => {
    setName(newName);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center my-10 ">
        {/* //from flowbite */}
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Welcome to the Trivia Quiz...
        </h1>
        <section className="p-10 my-10 rounded-lg shadow-xl w-[65%]">
          {/* Flowbite? */}
          {/* <InputBox/> */}

          {/* <DropdownOptions/> */}
          <DropOptions />
          <div className=" flex items-center justify-center">
            <Button />
          </div>
        </section>
      </section>
    </>
  );
}
