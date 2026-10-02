import Form from "./Form";

export default function FormsPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Form Exercise
        </h1>

        <Form />
      </div>
    </main>
  );
}