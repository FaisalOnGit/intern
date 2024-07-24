import React from "react";

export default function Register() {
  return (
    <div className="container flex min-h-full flex-1 flex-col justify-between px-6 py-12 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div className="flex bg-white flex-col flex-1 justify-between rounded-xl shadow-xl">
          <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Register
              </h2>
            </div>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nama
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nomor HP
                    </label>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="text-sm flex justify-end">
                  <a
                    href="#"
                    className=" text-custom-blue hover:text-custom-blue-hover"
                  >
                    Punya akun? login
                  </a>
                </div>

                <div>
                  <button
                    type="submit"
                    className="mb-10 flex w-full justify-center rounded-md bg-custom-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-1 bg-custom-blue p-6 justify-center items-center">
          <h2 className="text-center text-lg font-medium text-gray-700">
            Box Content Here
          </h2>
        </div>
      </div>
    </div>
  );
}
