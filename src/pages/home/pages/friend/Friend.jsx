import { useState } from 'react'
import { Gift, RefreshCw, Send, Square } from 'lucide-react'

export default function Friend() {
      const [isLoading, setIsLoading] = useState(false)

      const refreshFriends = () => {
            setIsLoading(true)
            setTimeout(() => setIsLoading(false), 1500)
      }

      return (
            <div className="bg-black text-white p-4 font-sans min-h-screen max-w-md mx-auto">
                  <h1 className="text-3xl text-center font-bold mb-2">Invite friends!</h1>
                  <p className="text-gray-400 text-center mb-6">You and your friend will receive bonuses</p>

                  <div className="space-y-4 mb-6">
                        {[
                              { title: "Invite a friend", reward: 5000, icon: <Gift className="w-12 h-12 text-purple-400" /> },
                              { title: "Invite a friend with Telegram Premium", reward: 25000, icon: <Gift className="w-12 h-12 text-blue-400" /> },
                        ].map((item, index) => (
                              <div key={index} className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4">
                                    {item.icon}
                                    <div className="flex-grow">
                                          <h2 className="font-semibold">{item.title}</h2>
                                          <div className="flex items-center text-yellow-500">
                                                <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                                                +{item.reward.toLocaleString()} for you and your friend
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>

                  <button className="text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 transition-colors mb-6">
                        More bonuses
                  </button>

                  <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">List of your friends (10)</h2>
                        <button
                              onClick={refreshFriends}
                              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded p-1 transition-colors"
                              aria-label="Refresh friend list"
                        >
                              <RefreshCw className={`w-6 h-6 ${isLoading ? 'animate-spin' : ''}`} />
                        </button>
                  </div>

                  {isLoading ? (
                        <div className="text-center py-8">Loading friends...</div>
                  ) : (
                        <div className="space-y-4 mb-6">
                              {[
                                    { name: "Sheikh Mahin", rank: "Grandmaster", coins: "1.14M", reward: "1.53M" },
                                    { name: "দিপু", rank: "Grandmaster", coins: "1.3M", reward: "775K" },
                              ].map((friend, index) => (
                                    <div key={index} className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4">
                                          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                                                <span className="text-2xl">🐹</span>
                                          </div>
                                          <div className="flex-grow">
                                                <h3 className="font-semibold">{friend.name}</h3>
                                                <div className="text-sm text-gray-400">
                                                      {friend.rank} • <span className="text-yellow-500">{friend.coins}</span>
                                                </div>
                                          </div>
                                          <div className="text-yellow-500 font-semibold">+{friend.reward}</div>
                                    </div>
                              ))}
                        </div>
                  )}

                  <div className="flex space-x-2">
                        <button className="flex-grow bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors">
                              <Send className="w-5 h-5 inline mr-2" />
                              Invite a friend
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors">
                              <Square className="w-5 h-5" />
                        </button>
                  </div>
            </div>
      )
}
