import NewItem from "./new-item"; 

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 ">
        <div className="max-w-md w-full bg-[#93B7BE] dark:bg-[#2D3047] rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4 text-[#2D3047] dark:text-[#93B7BE] text-center">
                Add New Item
            </h1>
            <NewItem />
        </div>
    </main>
  );
}