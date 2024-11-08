import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste?.pastes || []);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  // Filtering data based on search term
  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  function handleShare(paste) {
    const pasteUrl = `/pastes/${paste._id}`; 

    // Use navigator.share() if supported (for mobile or browser sharing dialogs)
    if (navigator.share) {
      navigator.share({
        title: paste.title,
        text: paste.content,
        url: window.location.origin + pasteUrl, // Make sure to include the full URL
      })
        .then(() => {
          toast.success("Paste shared successfully!");
        })
        .catch((error) => {
          toast.error("Failed to share the paste.");
        });
    } else {
      // Fallback if navigator.share() is not available
      toast.success(`Paste shared: ${window.location.origin + pasteUrl}`);
    }
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Search input field */}
      <input
        className="p-4 w-full max-w-3xl rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all"
        type="search"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="mt-8 space-y-4">
        {filterData.length > 0 ? (
          filterData.map((paste) => {
            return (
              <div
                key={paste._id || paste.title}
                className="bg-gray-700 p-5 rounded-xl shadow-lg hover:bg-gray-600 transition-all group"
              >
                {/* Display the paste title */}
                <div className="text-2xl font-semibold text-white">{paste.title}</div>

                <div className="text-gray-300 mt-2">{paste.content}</div>

                <div className="text-gray-400 mt-2">
                  {paste.createdAt
                    ? new Date(paste.createdAt).toLocaleString()
                    : "Date not available"}
                </div>
                <div className="mt-4 flex space-x-4">
                  {/* Edit button */}
                  <button type="button" className="btn btn-primary">
                    <a href={`/?pasteId=${paste._id}`}>Edit</a>
                  </button>

                  {/* View button */}
                  <button type="button" className="btn btn-info">
                    <a href={`/pastes/${paste._id}`}>View</a>
                  </button>

                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(paste._id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>

                  {/* Copy button */}
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste.content);
                      toast.success("Copied to clipboard");
                    }}
                    type="button"
                    className="btn btn-success"
                  >
                    Copy
                  </button>

                  {/* Share button */}
                  <button
                    onClick={() => handleShare(paste)}
                    type="button"
                    className="btn btn-warning"
                  >
                    Share
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          // Display message when no results are found
          <div className="text-white mt-4">No results found</div>
        )}
      </div>
    </div>
  );
};

export default Paste;
