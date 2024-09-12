export default function login() {
  return (
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
              {/* HSBC Logo */}
              <div className="text-center mb-8">
                  <img
                      src="/hsbc-logo.png"
                      alt="HSBC Logo"
                      style={{ height: '100px', width: 'auto' }}  // Explicit size in pixels
                      className="mx-auto w-auto"  // Increased logo size
                  />
                  <h1 className="mt-6 text-2xl font-semibold text-gray-900">
                      Welcome to HSBC MyDay
                  </h1>
              </div>

              {/* Login Form */}
              <form className="space-y-6">
                  {/* Username Field */}
                  <div>
                      <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                          Username
                      </label>
                      <input
                          type="email"
                          id="Email"
                          name="email"
                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm placeholder-gray-400 text-black focus:ring-red-500 focus:border-red-500"
                          placeholder="Enter your username"
                      />
                  </div>

                  {/* Password Field */}
                  <div>
                      <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                          Password
                      </label>
                      <input
                          type="password"
                          id="Password"
                          name="password"
                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm placeholder-gray-400 text-black focus:ring-red-500 focus:border-red-500"
                          placeholder="Enter your password"
                      />
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center justify-between">
                      <div className="flex items-center">
                          <input
                              type="checkbox"
                              id="RememberMe"
                              name="remember_me"
                              className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                          />
                          <label htmlFor="RememberMe" className="ml-2 block text-sm text-gray-700">
                              Remember Me
                          </label>
                      </div>

                      <div className="text-sm">
                          <a href="#" className="font-medium text-red-600 hover:text-red-500">
                              Forgot your password?
                          </a>
                      </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                      <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                          Log In
                      </button>
                  </div>
              </form>

              {/* Additional Links */}
              <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                      Don't have an account?{" "}
                      <a href="#" className="font-medium text-red-600 hover:text-red-500">
                          Register here
                      </a>
                  </p>
              </div>

              {/* Terms and Conditions */}
              <div className="mt-8 text-sm text-gray-600 text-center">
                  By logging in, you agree to our{" "}
                  <a href="#" className="text-red-600 hover:text-red-500">
                      Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-red-600 hover:text-red-500">
                      Privacy Policy
                  </a>.
              </div>
          </div>
      </section>
  );
}
