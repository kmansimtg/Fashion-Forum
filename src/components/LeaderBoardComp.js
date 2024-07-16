import React from 'react';
import 'tailwindcss/tailwind.css';
import Rank1 from './Images/Rank1.svg';
import Rank2 from './Images/Rank2.svg';
import Rank3 from './Images/Rank3.svg';
import Header from '../components/Header';
import QHeader from '../components/QHeader';
import Sidebar from '../components/Sidebar';
import Widget from '../components/Widget';

const leaderboardData = [
  { rank: 1, name: 'Kiara Advani', credits: 3000 },
  { rank: 2, name: 'Mukesh Ambani', credits: 2980 },
  { rank: 3, name: 'Urfi Javed', credits: 2900 },
  { rank: 4, name: 'Kasish', credits: 2400 },
  { rank: 5, name: 'Aditi', credits: 2200 },
  { rank: 6, name: 'Rohit Sharma', credits: 2000 },
  { rank: 7, name: 'Vansh', credits: 1800 },
  { rank: 8, name: 'Justin', credits: 1000 },
  { rank: 9, name: 'Shashi', credits: 1000 },
  { rank: 10, name: 'Cutie++', credits: 800 },
];

const Leaderboard = () => {
  return (
    <>
      <Header />
      <QHeader />
      <div className="flex">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="min-h-screen bg-gradient-to-b from-white to bg-pink-200 p-8 mt-16 pb-44 flex-grow">
          <h1 className="text-center text-5xl font-bold mb-8">Leaderboard</h1>

          <div className="flex justify-center space-x-4 mb-8">
            <div className="text-center shadow-2xl w-40 h-56">
              <div className='bg-yellow-300 rounded-lg p-2'>
                <div className="font-bold">Rank {leaderboardData[1].rank}</div>
                <img
                  src={Rank2}
                  className="w-20 h-20 mx-auto rounded-full my-2"
                />
              </div>
              <div className='text-black'>
                <div className="text-xl font-bold">{leaderboardData[1].name}</div>
                <div className="text-sm">{leaderboardData[1].institution}</div>
                <div className="text-red-500 font-bold">credits: {leaderboardData[1].credits}</div>
              </div>
            </div>

            <div className="text-center shadow-2xl w-48 h-64">
              <div className='bg-yellow-300 rounded-lg p-2'>
                <div className="font-bold text-2xl">Rank {leaderboardData[0].rank}</div>
                <img
                  src={Rank1}
                  className="w-24 h-24 mx-auto rounded-full my-2"
                />
              </div>
              <div className='text-black'>
                <div className="text-xl font-bold">{leaderboardData[0].name}</div>
                <div className="text-sm">{leaderboardData[0].institution}</div>
                <div className="text-red-500 font-bold">credits: {leaderboardData[0].credits}</div>
              </div>
            </div>

            <div className="text-center shadow-2xl w-40 h-56">
              <div className='bg-yellow-300 rounded-lg p-2'>
                <div className="font-bold">Rank {leaderboardData[2].rank}</div>
                <img
                  src={Rank3}
                  className="w-20 h-20 mx-auto rounded-full my-2"
                />
              </div>
              <div className='text-black'>
                <div className="text-xl font-bold">{leaderboardData[2].name}</div>
                <div className="text-sm">{leaderboardData[2].institution}</div>
                <div className="text-red-500 font-bold">credits: {leaderboardData[2].credits}</div>
              </div>
            </div>
          </div>

          <div className="w-3/5 mx-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg">
              <thead className="bg-gray-400">
                <tr>
                  <th className="py-2 px-2 text-left text-sm">Rank</th>
                  <th className="py-2 px-2 text-left text-sm">Name</th>
                  <th className="py-2 px-2 text-left text-sm">Credits</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y border-collapse rounded-lg divide-gray-400">
                {leaderboardData.map((user, index) => (
                  <tr key={index}>
                    <td className="py-2 px-2 text-left text-sm">Rank {user.rank}</td>
                    <td className="py-2 px-2 text-left text-sm">{user.name}</td>
                    <td className="py-2 px-2 text-left text-sm text-red-500">credits: {user.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/4">
          <Widget />
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
