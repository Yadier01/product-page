import { useState } from "react";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg py-4 px-6 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={handleMenuToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <img src="/public/logo.svg" alt="" className="px-4" />
        </div>
      </div>
      {isMenuOpen && (
        <div className="mt-4">
          {/* Mobile menu content goes here */}
          <a href="#" className="block">
            Menu Item 1
          </a>
          <a href="#" className="block">
            Menu Item 2
          </a>
          <a href="#" className="block">
            Menu Item 3
          </a>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
