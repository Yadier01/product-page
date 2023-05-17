import React, { useEffect } from "react";
import { useState } from "react";
import MobileHeader from "./components/MobileHeader";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const [count, setCount] = useState(0);

  const retractButtonHandler = () => {
    if (count > 0) setCount(count - 1);
  };
  const addButtonHandler = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobileHeader />
      ) : (
        <header className="bg-white shadow-lg py-4 px-6">
          {/* desktop header content here */}
          <div>hello</div>
        </header>
      )}
      {/* main content here */}
      <main>
        <img src="/public/image-product-1.jpg" alt="" className="" />
        <div className="container grid gap-3 p-6">
          <h3 className="text-lg">SNEAKER COMPANY</h3>
          <h1 className="text-4xl">Fall Limited Edition Sneakers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            eligendi laudantium fugit pariatur quos sint delectus velit
            aspernatur doloremque aliquam?
          </p>
          <span className="flex  items-center gap-4">
            <span className="text-3xl">$125.00</span>
            <span className="text-lg">50%</span>
            <span className="text-lg pl-[8rem] ">$250.00</span>
          </span>
          <div className="flex items-center flex-col">
            <div className="">
              <button onClick={retractButtonHandler} className="p-4">
                -
              </button>
              <input
                className="text-center"
                type="text"
                value={count}
                readOnly
              />
              <button className="p-4" onClick={addButtonHandler}>
                +
              </button>
            </div>
            <button className="bg-zinc-200 px-20 block">
              <span className="flex items-center  gap-5 ">
                <img className="inline" src="/public/icon-cart.svg" alt="" />
                Add to cart
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
