import { useState } from "react";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white text-black flex items-center gap-7  px-4">
      <button
        className="text-white focus:outline-none "
        onClick={handleMenuClick}
      >
        {isMenuOpen ? (
          <img src="/public/icon-close.svg" className=" " alt="burger" />
        ) : (
          <img src="/public/icon-menu.svg" alt="burger" />
        )}
      </button>
      <div className="flex w-full items-center">
        <img src="/public/logo.svg" alt="" className="w-96" />
        <div className="flex justify-end w-full items-center gap-7">
          <img src="/public/icon-cart.svg" alt="" />
          <img src="/public/image-avatar.png" className="w-8" alt="" />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-screen w-1/2 bg-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Your left-side panel content goes here */}
        <button className="p-7 focus:outline-none " onClick={handleMenuClick}>
          {isMenuOpen ? (
            <img src="/public/icon-close.svg" alt="" />
          ) : (
            <img src="/public/icon-menu.svg" alt="" />
          )}
        </button>
        <div className="flex">
          <ul className="flex flex-col text-black gap-7 text-xl px-7">
            <li>
              <a href="#">Collection</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
