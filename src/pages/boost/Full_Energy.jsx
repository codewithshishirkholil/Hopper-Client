const Full_Energy = ({ setFull_Energy }) => {
      return (
            <div className="fixed inset-0 z-[9000] flex items-end justify-center bg-black bg-opacity-50">
                  <div className="relative z-[5001] p-6 bg-black rounded-t-2xl border-t-2 border-gray-100 border-opacity-25 max-w-lg w-full"
                        style={{
                              boxShadow: '0 -10px 20px rgba(0, 0, 0, 0.5)', // Top shadow with smoother edges
                              backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) 100%)',
                        }}>
                        <button
                              onClick={() => setFull_Energy(false)}
                              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
                              aria-label="Close"
                        >
                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                              >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                        </button>
                        <div className="flex flex-col items-center">
                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-yellow-400 mb-4"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                              >
                                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              <h2 className="text-2xl font-bold text-white mb-2">Full Energy</h2>
                              <p className="text-center text-gray-400 mb-4">
                                    Recharge your energy to the maximum and do another round of mining.
                              </p>
                              <div className="flex items-center mb-6">
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6 w-6 text-yellow-400 mr-2"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                    >
                                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                    </svg>
                                    <span className="text-lg text-white">Free</span>
                              </div>
                              <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                                    Go ahead
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default Full_Energy;
