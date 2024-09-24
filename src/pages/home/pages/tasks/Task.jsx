import { useState, useEffect } from 'react'

export default function Task() {
      const [time, setTime] = useState('00:00:00')
      const [selectedCategory, setSelectedCategory] = useState('PR&Team')
      const [coinBalance, setCoinBalance] = useState(770053342)

      useEffect(() => {
            const timer = setInterval(() => {
                  const date = new Date()
                  setTime(date.toLocaleTimeString('en-US', { hour12: false }))
            }, 1000)
            return () => clearInterval(timer)
      }, [])

      const categories = ['PR&Team', 'Markets', 'Legal', 'Web3', 'Specials']
      const teamMembers = [
            { title: 'CEO', profit: 3080, level: 17, amount: 4000000, image: '🐹🚗' },
            { title: 'Marketing', profit: 1760, level: 15, amount: 725360, image: '🐹👔' },
            { title: 'IT team', profit: 7400, level: 12, amount: 500000, image: '🐹💻' },
            { title: 'Support team', profit: 1760, level: 10, amount: 250000, image: '🐹🐹🐹' },
      ]

      const formatNumber = (num) => {
            return num.toLocaleString('en-US')
      }

      const handleComboClick = (index) => {
            alert(`Clicked on combo box ${index + 1}`)
      }

      return (
            <div className='bg-gray-900 text-white font-sans mt-4 pb-20'>
                  <div className="flex justify-between items-center py-10 bg-opacity-35 bg-zinc-900 rounded-full px-4  mb-10">
                        <div className=" space-x-2">
                              <span className="font-bold">Grandmaster</span>
                              <span className="text-gray-400">9/11</span>
                              <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="w-3/4 h-full bg-gradient-to-r from-green-500 to-purple-500"></div>
                              </div>
                        </div>
                        <div className="flex items-center space-x-2">
                              <div className="bg-yellow-500 w-6 h-6 rounded-md flex items-center justify-center">
                                    <span className="text-black font-bold text-xs">B</span>
                              </div>
                              <div className="flex items-center">
                                    <span className="text-yellow-500 mr-1">$</span>
                                    <span>+3.05M</span>
                              </div>
                              <button className="bg-gray-700 p-1 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                              </button>
                        </div>
                  </div>
                  <div className="bg-gray-900 text-white font-sans min-h-screen p-4  border-t border-yellow-400 rounded-t-3xl">
                        <div className="max-w-md mx-auto">
                              <iframe src="" frameborder="0"></iframe>
                        </div>
                  </div>
            </div>
      )
}
