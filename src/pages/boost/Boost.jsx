import { useState } from "react";
import Full_Energy from "./Full_Energy";

const Boost = () => {
      const [full_Energy, setFull_Energy] = useState();
      return (
            <div className="bg-black text-white min-h-screen p-4 mb-20">
                  <div className="text-center mb-8">
                        <p className="text-gray-400">Your balance</p>
                        <div className="flex justify-center items-center">
                              <CoinsIcon className="w-8 h-8 text-yellow-500" />
                              <h1 className="text-4xl font-bold ml-2">577,022,004</h1>
                        </div>
                        <p className="text-yellow-500 mt-2">How a boost works</p>
                  </div>
                  <div className="mb-8">
                        <h2 className="text-lg font-bold mb-4">Free daily boosters</h2>
                        <button onClick={() => setFull_Energy(true)} className="bg-gray-800 w-full rounded-md p-4 flex items-center mb-4">
                              <CloudLightningIcon className="w-6 h-6 text-yellow-500" />
                              <div className="ml-4">
                                    <p className="font-bold">Full energy</p>
                                    <p className="text-gray-400">6/6 available</p>
                              </div>
                        </button>
                        <div className="bg-gray-800 rounded-md p-4 flex items-center opacity-50">
                              <RocketIcon className="w-6 h-6 text-blue-500" />
                              <div className="ml-4">
                                    <p className="font-bold">Turbo</p>
                                    <p className="text-gray-400">Coming soon</p>
                              </div>
                        </div>
                  </div>
                  <div>
                        <h2 className="text-lg font-bold mb-4">Boosters</h2>
                        <div className="bg-gray-800 rounded-md p-4 flex items-center mb-4">
                              <HandIcon className="w-6 h-6" />
                              <div className="ml-4">
                                    <p className="font-bold">Multitap</p>
                                    <p className="text-gray-400">
                                          <CoinsIcon className="w-4 h-4 text-yellow-500 inline" /> 512K • 10 lvl
                                    </p>
                              </div>
                              <ChevronRightIcon className="ml-auto w-6 h-6 text-gray-400" />
                        </div>
                        <div className="bg-gray-800 rounded-md p-4 flex items-center">
                              <BatteryIcon className="w-6 h-6 text-green-500" />
                              <div className="ml-4">
                                    <p className="font-bold">Energy limit</p>
                                    <p className="text-gray-400">
                                          <CoinsIcon className="w-4 h-4 text-yellow-500 inline" /> 512K • 10 lvl
                                    </p>
                              </div>
                              <ChevronRightIcon className="ml-auto w-6 h-6 text-gray-400" />
                        </div>
                  </div>

                  <div className="fixed z-[5000] bottom-20 left-0 right-0 pointer-events-none">
                        {full_Energy && (
                              <div className="pointer-events-auto">
                                    <Full_Energy setFull_Energy={setFull_Energy} />
                              </div>
                        )}
                  </div>


            </div>
      )
}

function BatteryIcon(props) {
      return (
            <svg
                  {...props}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
            >
                  <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
                  <line x1="22" x2="22" y1="11" y2="13" />
            </svg>
      )
}


function ChevronRightIcon(props) {
      return (
            <svg
                  {...props}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
            >
                  <path d="m9 18 6-6-6-6" />
            </svg>
      )
}


function CloudLightningIcon(props) {
      return (
            <svg
                  {...props}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
            >
                  <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
                  <path d="m13 12-3 5h4l-3 5" />
            </svg>
      )
}


function CoinsIcon(props) {
      return (
            <svg
                  {...props}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
            >
                  <circle cx="8" cy="8" r="6" />
                  <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
                  <path d="M7 6h1v4" />
                  <path d="m16.71 13.88.7.71-2.82 2.82" />
            </svg>
      )
}


function HandIcon(props) {
      return (
            <svg
                  {...props}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
            >
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
            </svg>
      )
}


function RocketIcon(props) {
      return (
            <svg
                  {...props}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
            >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
      )
}

export default Boost;
