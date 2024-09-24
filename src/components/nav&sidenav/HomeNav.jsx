import { Box, ClipboardCheck, Contact, HandCoins, Pickaxe } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeNav = () => {
      const location = useLocation();
      const [clickedItem, setClickedItem] = useState(null);

      const menuItems = [
            { label: 'Mining', link: '/', icon: Pickaxe },
            { label: 'Tasks', link: '/task', icon: ClipboardCheck },
            { label: 'Earn More', link: '/earn-more', icon: HandCoins },
            { label: 'Friends', link: '/friends', icon: Contact },
            { label: 'Airdrop', link: '/airdrop', icon: Box },
      ];

      const handleClick = (index) => {
            setClickedItem(index);
            // Optionally reset the clicked item after the spin animation completes
            setTimeout(() => setClickedItem(null), 3000); // 1-second duration to match the animation
      };

      return (
            <header className="py-2.5  bg-black rounded-t-xl border-t border-l border-r border-opacity-40 border-gray-300 ">
                  <div className="px-2.5 mx-auto max-w-7xl ">
                        <nav className="grid grid-cols-5 gap-2">
                              {menuItems.map((item, index) => {
                                    const isActive = location.pathname === item.link;
                                    const Icon = item.icon;

                                    return (
                                          <Link
                                                key={index}
                                                to={item.link}
                                                title={item.label}
                                                className={`text-xs whitespace-nowrap flex flex-col justify-center items-center text-center px-2 py-2 rounded font-normal transition-all duration-200 ${isActive
                                                      ? 'bg-blue-600 text-white shadow-lg'
                                                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white'
                                                      }`}
                                                onClick={() => handleClick(index)}
                                          >
                                                <motion.div
                                                      className="mb-1"
                                                      animate={clickedItem === index ? { rotate: 360 } : { rotate: 0 }}
                                                      transition={{ duration: 1, ease: "easeInOut" }}
                                                >
                                                      <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                                                </motion.div>
                                                {item.label}
                                          </Link>
                                    );
                              })}
                        </nav>
                  </div>
            </header>
      );
};

export default HomeNav;
