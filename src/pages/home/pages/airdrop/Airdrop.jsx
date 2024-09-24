

export default function Airdrop() {
      return (
            <div className="bg-black text-white min-h-screen flex flex-col items-center p-4">
                  <div className="flex flex-col items-center mt-8">
                        <div className="relative">
                              <div >
                                    <img className="size-48 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/1/avatar-female.png" alt="Coin" />
                              </div>

                        </div>
                        <h1 className="text-3xl font-bold mt-4">AirDrop</h1>
                        <p className="text-gray-400 mt-2">Listing date</p>
                        <h2 className="text-2xl font-bold text-yellow-500 mt-2">September 26, 2024</h2>
                  </div>
                  <div className="bg-green-500 text-black rounded-lg p-4 mt-8 w-full max-w-md text-center">
                        <p className="text-sm">AirDrop allocation points</p>
                        <div className="flex justify-center items-center mt-2">
                              <CoinsIcon className="w-6 h-6" />
                              <span className="ml-2 text-xl font-bold">TBA</span>
                        </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg mt-8 w-full max-w-md">
                        <div className="flex">
                              <button variant="ghost" className="flex-1 p-4 text-center text-white bg-gray-900 rounded-tl-lg">
                                    <CoinsIcon className="w-4 h-4 mr-2" />
                                    Points
                              </button>
                              <button variant="ghost" className="flex-1 p-4 text-center text-gray-400">
                                    <WalletIcon className="w-4 h-4 mr-2" />
                                    Withdrawal
                              </button>
                        </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg mt-4 w-full max-w-md p-4 space-y-4">
                        <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                    <ReceiptIcon className="w-6 h-6 mr-2" />
                                    <span>Passive income</span>
                              </div>
                              <div className="flex items-center">
                                    <CoinsIcon className="w-6 h-6 mr-2" />
                                    <span>TBA</span>
                              </div>
                        </div>
                        <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                    <WorkflowIcon className="w-6 h-6 mr-2" />
                                    <span>Earn tasks</span>
                              </div>
                              <div className="flex items-center">
                                    <CoinsIcon className="w-6 h-6 mr-2" />
                                    <span>TBA</span>
                              </div>
                        </div>
                        <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                    <FacebookIcon className="w-6 h-6 mr-2" />
                                    <span>Friends</span>
                              </div>
                              <div className="flex items-center">
                                    <CoinsIcon className="w-6 h-6 mr-2" />
                                    <span>TBA</span>
                              </div>
                        </div>
                  </div>
            </div>
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


function FacebookIcon(props) {
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
      )
}


function ReceiptIcon(props) {
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
                  <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                  <path d="M12 17.5v-11" />
            </svg>
      )
}


function WalletIcon(props) {
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
                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
            </svg>
      )
}


function WorkflowIcon(props) {
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
                  <rect width="8" height="8" x="3" y="3" rx="2" />
                  <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                  <rect width="8" height="8" x="13" y="13" rx="2" />
            </svg>
      )
}
