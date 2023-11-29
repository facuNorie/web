import React from 'react';

function Arrow() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute right-4 top-4 h-6 w-6 scale-0 transition-transform ease-in-out group-hover:scale-90"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
        </svg>
    );
}

export default Arrow;
