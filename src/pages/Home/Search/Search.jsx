import React, { useEffect, useRef } from 'react';

const Search = () => {
    const searchInputRef = useRef(null);
    useEffect(() => {
        const handleKeyPress = (event) => {
            // Check if Ctrl (or Command on Mac) + K is pressed
            if ((event.ctrlKey || event.metaKey) && (event.key === 'k'|| event.key === 'K')) {
                // Prevent the default behavior of the key combination
                event.preventDefault();

                // Focus on the search input
                searchInputRef.current.focus();
            }
        };
        window.addEventListener('keydown', handleKeyPress);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    return (
        <>
        
        <div className="flex justify-center">
        <div className="join border-0">
        <div className="relative ">
        <input type="text" ref={searchInputRef} className="input input-bordered focus:outline-none placeholder:italic  md:w-80 max-w-xs join-item" placeholder="Search colleges"/>
        <div  className=" hidden  absolute lg:flex items-center gap-1 inset-y-0 right-0  text-xs opacity-40 mx-2">
        <kbd className="kbd">ctrl</kbd>
        <p>+</p>
        <kbd className="kbd">k</kbd>
        </div>
        </div>
        <button className="btn join-item btn-success rounded-r-full">Search</button>
      </div>
        </div>
      </>
    );
};

export default Search;