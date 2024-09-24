const Lavel = () => {
      const users = [
            { id: 1, name: 'Roman Lysenko', avatar: 'path-to-avatar1.png', points: 9251779, rank: 1 },
            { id: 2, name: 'Юрий', avatar: 'path-to-avatar2.png', points: 9243631, rank: 2 },
            { id: 3, name: 'Stanislav Antonov', avatar: 'path-to-avatar3.png', points: 9139518, rank: 3 },
            { id: 4, name: 'Александр Александдр', avatar: 'path-to-avatar4.png', points: 9041459, rank: 4 },
            { id: 5, name: 'Братишка', avatar: 'path-to-avatar5.png', points: 9000961, rank: 5 },
            { id: 6, name: 'Ibrahim Kholil Shishir', avatar: 'path-to-avatar6.png', points: 2553853, rank: 6 },
            { id: 7, name: 'Ibrahim Kholil Shishir', avatar: 'path-to-avatar7.png', points: 2553853, rank: 7 },
            { id: 8, name: 'Ibrahim Kholil Shishir', avatar: 'path-to-avatar8.png', points: 2553853, rank: 8 },
            { id: 9, name: 'Ibrahim Kholil Shishir', avatar: 'path-to-avatar9.png', points: 2553853, rank: 9 },
            { id: 10, name: 'Ibrahim Kholil Shishir', avatar: 'path-to-avatar10.png', points: 2553853, rank: 10 },
      ];
      const your_rank = {
            name: 'Roman Lysenko',
            avatar: 'path-to-avatar1.png',
            points: 9251779,
            rank: 10000,
      };

      return (
            <div className="px-4">
                  <div className="flex flex-col items-center py-10">
                        {/* Avatar Image */}
                        <div className="bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full p-3 mb-4">
                              <img src="path-to-grandmaster-avatar.png" alt="Grandmaster Avatar" className="w-24 h-24 object-cover rounded-full" />
                        </div>

                        {/* Title */}
                        <h2 className="text-white text-2xl font-bold mb-2">Grandmaster</h2>
                        <p className="text-gray-300 text-sm">609.82M / 1B</p>

                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-gray-700 rounded-full mt-4 mb-8">
                              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                  </div>

                  {/* Ranking List */}
                  <ul className="space-y-2 mb-40">
                        {users.map((user) => (
                              <li key={user.id} className="flex items-center justify-between bg-gray-800 rounded-lg p-2">
                                    <div className="flex items-center space-x-2">
                                          <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                                          <div>
                                                <p className="text-white font-semibold">{user.name}</p>
                                                <p className="text-yellow-400 text-sm">{user.points.toLocaleString()}</p>
                                          </div>
                                    </div>
                                    <span className="text-gray-400 font-semibold px-2">{user.rank}</span>
                              </li>
                        ))}
                  </ul>

                  <div className="absolute bottom-20 right-0 left-0 px-4 mb-2 ">
                        <li key={your_rank.id} className="flex items-center border border-gray-200 border-opacity-40 justify-between bg-gray-800 rounded-lg p-2">
                              <div className="flex items-center space-x-2">
                                    <img src={your_rank.avatar} alt={your_rank.name} className="w-10 h-10 rounded-full" />
                                    <div>
                                          <p className="text-white font-semibold">{your_rank.name}</p>
                                          <p className="text-yellow-400 text-sm">{your_rank.points.toLocaleString()}</p>
                                    </div>
                              </div>
                              <span className="text-gray-400 font-semibold">{your_rank.rank}</span>
                        </li>
                  </div>
            </div>
      );
};

export default Lavel;
