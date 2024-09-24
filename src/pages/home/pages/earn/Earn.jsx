import { CalendarDays, Facebook, Instagram, Send, Twitter, Users } from 'lucide-react'

export default function Earn() {
      return (
            <div className="bg-black text-white p-4 font-sans min-h-screen flex flex-col items-center pb-20">
                  <div className="w-24 h-24 bg-yellow-500 rounded-full mb-4 relative">
                        <div className="absolute inset-0 bg-yellow-400 rounded-full scale-90 flex items-center justify-center text-4xl font-bold">
                              $
                        </div>
                        <div className="absolute inset-0 bg-yellow-300 opacity-50 rounded-full animate-pulse"></div>
                  </div>

                  <h1 className="text-3xl font-bold mb-6">Earn more coins</h1>

                  <div className="w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Hamster Youtube</h2>

                        {[
                              { task: "Trump's crypto dreams and family scandals", reward: 100000 },
                              { task: "Biggest crypto lawsuits in history", reward: 100000 },
                        ].map((item, index) => (
                              <div key={index} className="bg-zinc-900 rounded-lg p-3 mb-3 flex items-center justify-between">
                                    <div className="flex items-center">
                                          <div className="bg-red-600 p-2 rounded-lg mr-3">
                                                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                                                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                                </svg>
                                          </div>
                                          <div>
                                                <div className="text-sm">{item.task}</div>
                                                <div className="text-yellow-500 flex items-center">
                                                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                                      </svg>
                                                      +{item.reward.toLocaleString()}
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bg-green-500 rounded-full p-1">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                          </svg>
                                    </div>
                              </div>
                        ))}

                        <h2 className="text-xl font-bold mt-6 mb-4">Daily tasks</h2>

                        <div className="bg-zinc-900 rounded-lg p-3 mb-3 flex items-center justify-between">
                              <div className="flex items-center">
                                    <div className="bg-blue-500 p-2 rounded-lg mr-3">
                                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                          </svg>
                                    </div>
                                    <div className="text-sm">Daily reward</div>
                              </div>
                              <div className="bg-green-500 rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                              </div>
                        </div>

                        <h2 className="text-xl font-bold mb-4">Tasks list</h2>

                        {[
                              { icon: <Facebook size={24} className="text-blue-600" />, task: "Follow us on Facebook", reward: 100000 },
                              { icon: <Instagram size={24} className="text-pink-500" />, task: "Follow us on Instagram", reward: 100000 },
                              { icon: <Send size={24} className="text-blue-400" />, task: "Join our TG channel", reward: 5000 },
                              { icon: <Twitter size={24} className="text-white" />, task: "Follow our X account", reward: 5000 },
                              { icon: "🐹", task: "Choose your exchange", reward: 5000 },
                              { icon: <Users size={24} className="text-blue-300" />, task: "Invite 3 friends", reward: 25000 },
                        ].map((item, index) => (
                              <div key={index} className="bg-zinc-900 rounded-lg p-3 mb-3 flex items-center justify-between">
                                    <div className="flex items-center">
                                          <div className="bg-zinc-800 p-2 rounded-lg mr-3">
                                                {typeof item.icon === 'string' ? item.icon : item.icon}
                                          </div>
                                          <div>
                                                <div>{item.task}</div>
                                                <div className="text-yellow-500 flex items-center">
                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mr-1">
                                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                                      </svg>
                                                      +{item.reward.toLocaleString()}
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bg-green-500 rounded-full p-1">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                          </svg>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>

      )
}
// <div className="bg-black text-white p-4 font-sans min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Daily tasks</h1>

//       <div className="bg-zinc-900 rounded-lg p-3 mb-6 flex items-center justify-between">
//             <div className="flex items-center">
//                   <div className="bg-zinc-800 p-2 rounded-lg mr-3">
//                         <CalendarDays className="text-blue-500" size={24} />
//                   </div>
//                   <span>Daily reward</span>
//             </div>
//             <div className="bg-green-500 rounded-full p-1">
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//             </div>
//       </div>


// </div>
