import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');
  const dispatch = useDispatch();
  const allPaste = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPaste.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPaste]);

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(35),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-300 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-2xl p-10 space-y-6">
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-6">
          {pasteId ? 'Update Your Paste' : 'Create a New Paste'}
        </h1>
        
        <input
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 text-lg placeholder-gray-400 transition ease-in-out"
        />
        
        <textarea
          placeholder="Enter your content here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border border-gray-300 p-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 resize-none text-lg placeholder-gray-400 transition ease-in-out"
          rows={8}
        />
        
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button 
            onClick={createPaste}
            className="w-full sm:w-auto bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 transform hover:scale-105">
            {pasteId ? 'Update My Paste' : 'Create My Paste'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
