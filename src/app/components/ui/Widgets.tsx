export default function Widgets() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center shadow-lg hover:bg-gray-100 transition duration-300">
          <dt className="order-last text-lg font-medium text-gray-600">
            Total Sales
          </dt>

          <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">
            $4.8m
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center shadow-lg hover:bg-gray-100 transition duration-300">
          <dt className="order-last text-lg font-medium text-gray-600">
            Official Addons
          </dt>

          <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">
            24
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center shadow-lg hover:bg-gray-100 transition duration-300">
          <dt className="order-last text-lg font-medium text-gray-600">
            Total Addons
          </dt>

          <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">
            86
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center shadow-lg hover:bg-gray-100 transition duration-300">
          <dt className="order-last text-lg font-medium text-gray-600">
            Downloads
          </dt>

          <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">
            86k
          </dd>
        </div>
      </dl>
    </div>
  );
}
