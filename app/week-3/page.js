import ItemList from "./item-list"

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl font-bold text-[#2D3047] dark:text-[#93B7BE] text-left mb-3">
          Shopping List
        </h1>
        <ItemList />
      </div>
    </main>
  );
}
