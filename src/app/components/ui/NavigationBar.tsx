import Image from "next/image";

export default function NavigationBar() {
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-red-600" href="#">
              <span className="sr-only">Home</span>
              <Image
                src="/hsbc-logo-without-name.png"
                alt="HSBC Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ height: "2.5rem", width: "auto" }}
                className="mx-auto w-auto" // Optional className
              />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-black font-medium transition hover:text-red-600"
                    href="#"
                  >
                    My Menu
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-red-700"
                href="#"
              >
                Log In
              </a>
              <div className="hidden sm:flex">
                <a
                  className="rounded-md border border-red-600 px-5 py-2.5 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white transition"
                  href="#"
                >
                  Register
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
