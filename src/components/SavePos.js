import React from 'react';
import Header from '../components/Header';
import QHeader from '../components/QHeader';
import Sidebar from '../components/Sidebar';
import Widget from '../components/Widget';

const saved = [
  { id: 1, title: 'Post Title 1', content: 'Drape Your Saree here how you can', imageUrl: '/path/to/image1.jpg' },
  { id: 2, title: 'Post Title 2', content: 'Match Yellow with gold', imageUrl: '/path/to/image2.jpg' },
];

const SavePos = () => {
  return (
    <>
      <Header />
      <QHeader />
      <div className="flex">
        <div className="w-1/4"> 
          <Sidebar />
        </div>
        <div className="min-h-screen bg-gradient-to-b from-white to bg-pink-200 p-8 mt-16 pb-44 flex-grow">
          <h1 className="text-center text-5xl font-bold mb-8">Saved Posts</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {saved.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600">{post.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3"> 
          <Widget />
        </div>
      </div>
    </>
  );
};

export default SavePos;
