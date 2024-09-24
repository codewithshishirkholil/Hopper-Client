import React, { useState } from 'react';
import { Rocket, ShieldHalf } from 'lucide-react';
import logo from '../../../../../../assets/logo_hopper.png';
import { Link } from 'react-router-dom';

const Mining = () => {
      const [number, setNumber] = useState(0);
      const limit = 30;
      const [dailyTab, setDailyTab] = useState(0);
      const [animation, setAnimation] = useState({ show: false, value: 0, top: 0, left: 0 });

      const handleTouchStart = (event) => {
            const touchCount = event?.touches?.length ?? 1000;
            if (touchCount > 1) {
                  setNumber(prevNumber => prevNumber + 1000);
            }
      };

      const handleIncreaseDailyTab = (event) => {
            event.preventDefault(); // Prevent default behavior
            if (dailyTab < limit) {
                  const increment = 10;
                  setNumber(prevNumber => prevNumber + increment);
                  setDailyTab(prevDailyTab => Math.min(prevDailyTab + 1, limit));

                  // Get click position
                  const rect = event.currentTarget.getBoundingClientRect();
                  const x = event.clientX - rect.left;
                  const y = event.clientY - rect.top;

                  // Trigger animation
                  setAnimation({ show: true, value: increment, top: y, left: x });
                  setTimeout(() => setAnimation({ show: false, value: 0, top: 0, left: 0 }), 1000); // Hide animation after 1 second
            }
      };

      return (
            <div className="px-2 mt-2">
                  <div className="glass-effect p-4 py-1 rounded-xl shadow-lg relative">
                        <span className='text-white flex text-2xl font-bold items-center gap-2 justify-center pt-3'>
                              <img src={logo} className='size-10' alt="" />
                              {number}
                        </span>
                        <button
                              onClick={handleIncreaseDailyTab}
                              onTouchStart={handleTouchStart}
                              className='flex justify-center items-center w-full relative'
                        >
                              <img src={logo} className='size-72' alt="" />
                              {animation.show && (
                                    <div
                                          className="absolute"
                                          style={{
                                                top: animation.top,
                                                left: animation.left,
                                                transform: 'translate(-50%, -50%)'
                                          }}
                                    >
                                          <div className="text-xl text-gray-100 font-bold animate-appear">
                                                +{animation.value}
                                          </div>
                                    </div>
                              )}
                        </button>

                        <div className='text-white pb-2 flex justify-between gap-2 text-xl font-semibold'>
                              <div className='flex gap-2 items-center'>
                                    <ShieldHalf strokeWidth={0.75} /> {dailyTab}/{limit}
                              </div>

                              <Link
                                    to={'/boost'}
                                    className='flex gap-2 items-center'
                              >
                                    <Rocket strokeWidth={0.75} /> Boost
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default Mining;
