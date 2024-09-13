export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-rose-600">
      <div className="mx-auto max-w-screen-xl px-2 py-6 sm:px-4 sm:py-10 lg:px-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl text-white">
              Welcome to PSP Office, Matthew Potter
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
