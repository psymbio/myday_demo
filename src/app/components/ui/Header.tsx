export default function Header() {
  return (
    <header className="border-b border-gray-300 bg-red-600 shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-base font-medium text-white sm:text-lg">
              Welcome Matthew Potter, to Panorama St Paul's
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
