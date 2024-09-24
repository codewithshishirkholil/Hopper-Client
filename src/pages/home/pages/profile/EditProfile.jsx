import { Pencil } from "lucide-react";
import { Link } from "react-router-dom";

const EditProfile = () => {
      return (
            <div class="bg-white h-screen w-full">
                  <section class=" bg-white py-10">
                        <div class="">
                              <div class=" px-2">
                                    <div class="flex items-center justify-between">
                                          <p class="text-3xl font-bold text-gray-900"> Edit Profile</p>
                                    </div>

                                    <div class="mt-6 overflow-hidden bg-white border border-gray-200 md:mt-8 rounded-xl">

                                          <div class=" ">
                                                <div class="flex justify-center my-4">
                                                      <img class="object-cover size-20 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint/2/image.png" alt="" />
                                                </div>

                                                <div class="flex flex-col justify-between flex-1 p-6 sm:p-8">
                                                      <div class="space-y-2">
                                                            <div class="flex  justify-between items-center gap-10">
                                                                  <label for="" class="text-base font-medium text-gray-900"> Name: </label>


                                                                  <input type="text" name="" id="" defaultValue=" codewithmahadihasan@gmail.com" class=" border py-2 px-4 text-base font-medium text-gray-900 border-gray-200 rounded-lg" />

                                                            </div>

                                                            <div class="flex justify-between">
                                                                  <span class="text-base font-medium text-gray-900"> Email: </span>

                                                                  <span class="text-base font-medium text-gray-900"> codewithmahadihasan@gmail.com </span>
                                                            </div>
                                                      </div>

                                                      <div class="mt-12 space-y-5 text-center md:mt-0">



                                                            <button
                                                                  type="button"
                                                                  class="inline-flex mt-4 items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                                                            >
                                                                  Change To Update
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

export default EditProfile;
