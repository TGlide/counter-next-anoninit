import Button from "../components/Button";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <div class="flex flex-col justify-center items-center w-screen h-screen">
      <h1 class="font-sans text-3xl">Counter</h1>
      <div class="flex justify-center items-center mt-4">
        <Button
          bg="bg-red-500"
          innerText="-"
          onClick={() => setValue(value - 1)}
        />
        <span class="text-3xl ml-4 mr-4">{value}</span>
        <Button
          bg="bg-green-500"
          innerText="+"
          onClick={() => setValue(value + 1)}
        />
      </div>
    </div>
  );
}
