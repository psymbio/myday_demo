export default function Header() {
  return (
    <header className="border-b border-gray-300 bg-red-600 shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-medium text-white sm:text-2xl">
              Welcome to HSBC MyDay, Matthew Potter
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
