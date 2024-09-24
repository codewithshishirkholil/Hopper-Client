import { Link } from "react-router-dom";

const SmallNav = () => {
      return (
            <div className="">
                  <li class="bg-black border-b border-gray-200 border-opacity-40 divide-y divide-gray-200 rounded-b-xl">
                        <div class="px-5 pb-4">
                              <div class="flex items-start justify-between">
                                    <Link to={"/profile"} class="flex items-center">
                                          <img class="flex-shrink-0 object-cover rounded-full w-9 h-9" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/1/avatar-female.png" alt="" />
                                          <div class="ml-3">
                                                <p class="text-sm font-medium text-white">Cody Fisher</p>
                                                <p class=" text-sm font-bold text-gray-300">Share Holder</p>
                                          </div>
                                    </Link>

                                    <Link to={'/level'} className="mt-2">
                                          <p className="text-white flex justify-between"> Exclusive <span className="">2</span></p>
                                          <div className="relative flex items-center">
                                                <div className="w-32 h-1.5 bg-gray-300 rounded-full">
                                                      <div
                                                            className="h-full rounded-full"
                                                            style={{
                                                                  width: '50%', // Set this dynamically based on your percentage
                                                                  background: 'linear-gradient(to right, rgba(255, 239, 153, 0.8), rgba(204, 153, 255, 0.8), rgba(153, 204, 255, 0.8), rgba(153, 255, 153, 0.8), rgba(255, 255, 255, 0.8))' // Lighter multi-color RGB gradient
                                                            }}
                                                      ></div>
                                                </div>

                                          </div>

                                    </Link>
                              </div>
                        </div>


                  </li>
            </div>
      );
};

export default SmallNav;
