import { Pencil } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
      return (
            <div class="bg-white h-screen  ">
                  <section class=" bg-white py-10">
                        <div class="">
                              <div class=" px-2">
                                    <div class="flex items-center justify-between">
                                          <p class="text-3xl font-bold text-gray-900">Profile</p>
                                    </div>

                                    <div class="mt-6 overflow-hidden bg-white border border-gray-200 md:mt-8 rounded-xl">
                                          <Link to={'/profile/edit'} className="flex justify-end px-6 py-4">
                                                <Pencil />
                                          </Link>
                                          <div class=" ">
                                                <div class="flex justify-center my-4">
                                                      <img class="object-cover size-20 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint/2/image.png" alt="" />
                                                </div>

                                                <div class="flex flex-col justify-between flex-1 p-6 sm:p-8">
                                                      <div class="space-y-2">
                                                            <div class="flex justify-between items-center">
                                                                  <label for="" class="text-base font-medium text-gray-900"> Name: </label>

                                                                  <div class="">
                                                                        <div name="" id="" class="block w-full py-2 pl-4 text-base font-medium text-gray-900 border-gray-200 rounded-lg">
                                                                              Mahadi Hasan
                                                                        </div>
                                                                  </div>
                                                            </div>

                                                            <div class="flex justify-between">
                                                                  <span class="text-base font-medium text-gray-900"> Email: </span>

                                                                  <span class="text-base font-medium text-gray-900"> codewithmahadihasan@gmail.com </span>
                                                            </div>
                                                      </div>

                                                      <div class="mt-12 space-y-5 text-center md:mt-0">
                                                            <p class="text-base font-medium text-gray-500">Wallet Balance: <span class="text-gray-900">3.925 EFT</span></p>

                                                            <button
                                                                  type="button"
                                                                  class="inline-flex z-50 items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-red-500 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900 hover:bg-red-700"
                                                            >
                                                                  Log Out
                                                            </button>
                                                            <button
                                                                  type="button"
                                                                  class="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                                                            >
                                                                  Delete Account
                                                            </button>


                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

            </div>
      );
};

export default Profile;
