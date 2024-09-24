import { useState } from "react";
import { Link } from "react-router-dom";

const Sign_up = () => {

      const [showPassword, setShowPassword] = useState(false);

      return (
            <div>
                  <section className="bg-white">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                              <div className="hidden md:flex relative  items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
                                    <div className="absolute inset-0">
                                          <img
                                                className="object-cover w-full h-full"
                                                src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/4/girl-working-on-laptop.jpg"
                                                alt=""
                                          />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                                    <div className="relative">
                                          <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                                                <h3 className="text-4xl font-bold text-white">
                                                      Join 35k+ web professionals &amp; <br className="hidden xl:block" />
                                                      build your website
                                                </h3>
                                                <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                                                      <li className="flex items-center space-x-3">
                                                            <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                                  <svg
                                                                        className="w-3.5 h-3.5 text-white"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 20 20"
                                                                        fill="currentColor"
                                                                  >
                                                                        <path
                                                                              fillRule="evenodd"
                                                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                              clipRule="evenodd"
                                                                        />
                                                                  </svg>
                                                            </div>
                                                            <span className="text-lg font-medium text-white">
                                                                  {" "}
                                                                  Commercial License{" "}
                                                            </span>
                                                      </li>
                                                      <li className="flex items-center space-x-3">
                                                            <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                                  <svg
                                                                        className="w-3.5 h-3.5 text-white"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 20 20"
                                                                        fill="currentColor"
                                                                  >
                                                                        <path
                                                                              fillRule="evenodd"
                                                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                              clipRule="evenodd"
                                                                        />
                                                                  </svg>
                                                            </div>
                                                            <span className="text-lg font-medium text-white">
                                                                  {" "}
                                                                  Unlimited Exports{" "}
                                                            </span>
                                                      </li>
                                                      <li className="flex items-center space-x-3">
                                                            <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                                  <svg
                                                                        className="w-3.5 h-3.5 text-white"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 20 20"
                                                                        fill="currentColor"
                                                                  >
                                                                        <path
                                                                              fillRule="evenodd"
                                                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                              clipRule="evenodd"
                                                                        />
                                                                  </svg>
                                                            </div>
                                                            <span className="text-lg font-medium text-white">
                                                                  {" "}
                                                                  120+ Coded Blocks{" "}
                                                            </span>
                                                      </li>
                                                      <li className="flex items-center space-x-3">
                                                            <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                                  <svg
                                                                        className="w-3.5 h-3.5 text-white"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 20 20"
                                                                        fill="currentColor"
                                                                  >
                                                                        <path
                                                                              fillRule="evenodd"
                                                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                              clipRule="evenodd"
                                                                        />
                                                                  </svg>
                                                            </div>
                                                            <span className="text-lg font-medium text-white">
                                                                  {" "}
                                                                  Design Files Included{" "}
                                                            </span>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                              <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                                    <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                                          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                                                Enjoy Hopper Coin Mining
                                          </h2>
                                          <p className="mt-2 text-base text-gray-600">
                                                Already have an account?{" "}
                                                <Link
                                                      to="/"
                                                      title=""
                                                      className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                                                >
                                                      Login
                                                </Link>
                                          </p>
                                          <form action="#" method="POST" className="mt-8">
                                                <div className="space-y-5">
                                                      <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray-900">
                                                                  {" "}
                                                                  Fast &amp; Last name{" "}
                                                            </label>
                                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                        <svg
                                                                              className="w-5 h-5"
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              fill="none"
                                                                              viewBox="0 0 24 24"
                                                                              stroke="currentColor"
                                                                        >
                                                                              <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={2}
                                                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                                              />
                                                                        </svg>
                                                                  </div>
                                                                  <input
                                                                        type="text"
                                                                        name=""
                                                                        id=""
                                                                        placeholder="Enter your full name"
                                                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                                  />
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray-900">
                                                                  {" "}
                                                                  Email address{" "}
                                                            </label>
                                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                        <svg
                                                                              className="w-5 h-5"
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              fill="none"
                                                                              viewBox="0 0 24 24"
                                                                              stroke="currentColor"
                                                                        >
                                                                              <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={2}
                                                                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                                              />
                                                                        </svg>
                                                                  </div>
                                                                  <input
                                                                        type="email"
                                                                        name=""
                                                                        id=""
                                                                        placeholder="Enter email to get started"
                                                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                                  />
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray-900">
                                                                  {" "}
                                                                  Password{" "}
                                                            </label>
                                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                        <svg
                                                                              className="w-5 h-5"
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              fill="none"
                                                                              viewBox="0 0 24 24"
                                                                              stroke="currentColor"
                                                                        >
                                                                              <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={2}
                                                                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                                              />
                                                                        </svg>
                                                                  </div>
                                                                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute z-50 inset-y-0 right-3 flex items-center pl-3 cursor-pointer">
                                                                        {!showPassword ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg> :
                                                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>}
                                                                  </button>
                                                                  <input
                                                                        type={showPassword ? "text" : "password"}
                                                                        name=""
                                                                        id=""
                                                                        placeholder="Enter your password"
                                                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                                  />
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <button
                                                                  type="submit"
                                                                  className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                                                            >
                                                                  Sign up
                                                            </button>
                                                      </div>
                                                </div>
                                          </form>
                                          <div className="mt-3 space-y-3">
                                                <button
                                                      type="button"
                                                      className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                                >
                                                      <div className="absolute inset-y-0 left-0 p-4">
                                                            <svg
                                                                  className="w-6 h-6 text-rose-500"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  viewBox="0 0 24 24"
                                                                  fill="currentColor"
                                                            >
                                                                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                                                            </svg>
                                                      </div>
                                                      Sign up with Google
                                                </button>
                                                <button
                                                      type="button"
                                                      className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                                >
                                                      <div className="absolute inset-y-0 left-0 p-4">
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  x="0px"
                                                                  y="0px"
                                                                  width={24}
                                                                  height={24}
                                                                  viewBox="0 0 48 48"
                                                            >
                                                                  <linearGradient
                                                                        id="BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1"
                                                                        x1="9.858"
                                                                        x2="38.142"
                                                                        y1="9.858"
                                                                        y2="38.142"
                                                                        gradientUnits="userSpaceOnUse"
                                                                  >
                                                                        <stop offset={0} stopColor="#33bef0" />
                                                                        <stop offset={1} stopColor="#0a85d9" />
                                                                  </linearGradient>
                                                                  <path
                                                                        fill="url(#BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1)"
                                                                        d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                                                                  />
                                                                  <path
                                                                        d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z"
                                                                        opacity=".05"
                                                                  />
                                                                  <path
                                                                        d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z"
                                                                        opacity=".07"
                                                                  />
                                                                  <path
                                                                        fill="#fff"
                                                                        d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"
                                                                  />
                                                            </svg>
                                                      </div>
                                                      Sign up with Telegram
                                                </button>
                                          </div>
                                          <p className="mt-5 text-sm text-gray-600">
                                                This site is protected by reCAPTCHA and the Google{" "}
                                                <a
                                                      href="#"
                                                      title=""
                                                      className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                                                >
                                                      Privacy Policy
                                                </a>{" "}
                                                &amp;
                                                <a
                                                      href="#"
                                                      title=""
                                                      className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                                                >
                                                      Terms of Service
                                                </a>
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

            </div>
      );
};

export default Sign_up;
