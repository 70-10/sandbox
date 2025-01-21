import { MyForm } from "./form";

export default function Home() {

  return (
    <div className="flex flex-col items-center  min-h-screen p-16">
      <h1 className="text-4xl font-bold">Server Actions Sample</h1>


      <div className="mt-8">
        <MyForm />
      </div>
    </div>
  );
}
