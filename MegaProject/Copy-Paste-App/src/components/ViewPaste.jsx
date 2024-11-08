import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const ViewPaste = () => {
  const { id } = useParams(); // Get the paste ID from URL params
  const allPastes = useSelector((state) => state.paste.pastes); // Access pastes from Redux state
  
  // Find the paste by ID
  const paste = allPastes.find((p) => p._id === id);

  if (!paste) {
    return <div className="text-center text-gray-700">Paste not found</div>;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(paste.content).then(() => {
        toast.success('Content copied to clipboard!!')
      }).catch(err => {
        toast.error('Failed to copy content');
      });
  }

  return (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '600', textAlign: 'center', marginBottom: '1rem' }}>
          View Paste
        </h1>

        {/* Display paste title as read-only */}
        <input
          type="text"
          placeholder="Title"
          value={paste.title}
          disabled // Disabled for viewing only
          style={{ width: '100%', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', outline: 'none' }}
        />

        {/* Display paste content as read-only */}
        <textarea
          placeholder="Content"
          value={paste.content}
          disabled // Disabled for viewing only
          style={{ width: '100%', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', outline: 'none', resize: 'none' }}
          rows={8}
        />

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          style={{ padding: '1rem', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Copy Content
        </button>
      </div>
    </div>
  );
};

export default ViewPaste;
