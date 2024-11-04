import React from 'react';

const ChildComponent = React.memo(({ buttonName, handleClick }) => {
    console.log('ChildComponent got re-rendered');

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500 transition duration-300"
        >
            {buttonName}
        </div>
    );
});

export default ChildComponent;
