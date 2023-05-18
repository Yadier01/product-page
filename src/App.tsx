import { useEffect, useState } from "react";
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
      setIsMobile(window.innerWidth < 900);
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
        <header className="bg-white shadow-lg py-4 px-6 ">
          {/* desktop header content here */}
          <div className="flex items-center justify-around">
            <div className="flex items-center gap-20">
              <img src="/public/logo.svg" alt="" />
              <ul className="flex gap-9 ">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex items-center gap-12">
              <img src="/public/icon-cart.svg" alt="" className="" />
              <img src="/public/image-avatar.png" alt="" className="h-12" />
            </div>
          </div>
        </header>
      )}
      {/* main content here */}
      <main>
        <img src="/public/image-product-1.jpg" alt="" className="bg-contain" />
        <div className="container grid gap-3 p-6">
          <h3 className="text-lg">SNEAKER COMPANY</h3>
          <h1 className="text-4xl ">Fall Limited Edition Sneakers</h1>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            eligendi laudantium fugit pariatur quos sint delectus velit
            aspernatur doloremque aliquam
          </p>
          <div className="flex justify-between items-center gap-4">
            <div className="flex gap-4 items-center ">
              <span className="text-3xl">$125.00</span>
              <span className="text-lg ">50%</span>
            </div>
            <span className="text-lg self-end  ">$250.00</span>
          </div>
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
            <button
              onClick={() => console.log(count)}
              className=" text-white rounded-lg  p-4 w-full  bg-primary block"
            >
              <span className="flex justify-center items-center gap-5 ">
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
