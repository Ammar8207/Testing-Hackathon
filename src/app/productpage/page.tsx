"use client"
import * as React from "react";
import Link from "next/link";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
}

interface MenuItemProps {
  text: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, price }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow max-md:mt-10">
      <div className="flex flex-col max-w-full w-[305px]">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="object-contain w-full aspect-[0.81]"
        />
      </div>
      <div className="flex flex-col self-start mt-6 text-indigo-950">
        <div className="text-xl leading-snug">{title}</div>
        <div className="mt-2 text-lg">£{price}</div>
      </div>
    </div>
  </div>
);

const MenuItem: React.FC<MenuItemProps> = ({ text, className = "" }) => (
  <div className={`mt-3 ${className}`}>{text}</div>
);

const NavBar: React.FC = () => {
  return (
    <nav className="flex gap-10 justify-center items-center text-base text-gray-500 mt-5 mb-10">
      <Link href="/about" className="hover:text-gray-700">
        About Page
      </Link>
      <Link href="/" className="hover:text-gray-700">
        Home Page
      </Link>
      <Link href="/shoppingcart" className="hover:text-gray-700">
        Shopping Cart
      </Link>
    </nav>
  );
};

const Page: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [selectedSort, setSelectedSort] = React.useState<string>("Date added");

  const products = [
    { imageSrc: "/Images/image1.png", title: "The Dandy chair", price: "250", dateAdded: "2025-01-01" },
    { imageSrc: "/Images/image4.png", title: "Rustic Vase Set", price: "155", dateAdded: "2025-01-05" },
    { imageSrc: "/Images/image5.png", title: "The Silky Vase", price: "125", dateAdded: "2025-01-03" },
    { imageSrc: "/Images/image3.png", title: "The Lucy Lamp", price: "399", dateAdded: "2025-01-07" }
  ];

 
  const sortedProducts = [...products].sort((a, b) => {
    if (selectedSort === "Date added") {
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    }
    return 0;
  });

  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="flex overflow-hidden flex-col px-7 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-center w-full max-md:mr-0.5 max-md:max-w-full">
          <img
            loading="lazy"
            src="/Images/Search.png"
            alt="Logo"
            className="object-contain shrink-0 self-stretch my-auto w-4 bg-blend-multiply aspect-square fill-white"
          />
          <div className="self-stretch text-2xl text-zinc-800">Avion</div>
          <div className="flex gap-4 self-stretch my-auto">
            <img
              loading="lazy"
              src="/Images/Cart.png"
              alt="Icon"
              className="object-contain shrink-0 w-4 bg-blend-multiply aspect-square fill-white"
            />
            <img
              loading="lazy"
              src="/Images/User.png"
              alt="Icon"
              className="object-contain shrink-0 w-4 bg-blend-multiply aspect-square fill-white"
            />
          </div>
        </div>
        <div className="shrink-0 mt-5 h-px border border-solid border-black border-opacity-10 max-md:max-w-full" />
        <NavBar />
      </div>

      <div className="overflow-hidden px-16 pt-32 pb-9 w-full text-4xl leading-snug text-white max-md:px-5 max-md:pt-24 max-md:max-w-full">
        All products
      </div>

      <div className="flex flex-wrap gap-10 justify-center px-6 py-2 w-full bg-white max-md:px-5 max-md:max-w-full">
       
        <div className="flex flex-wrap gap-3 items-start text-base min-h-[48px] text-indigo-950 max-md:max-w-full">
          <button
            className="flex overflow-hidden gap-2 items-center px-6 py-3 whitespace-nowrap bg-white max-md:px-5"
            onClick={() => handleCategoryChange("Furniture")} // Example category
          >
            <span className="self-stretch my-auto">Category</span>
            <img
              loading="lazy"
              src="/Images/Category.png"
              alt="Category Icon"
              className="object-contain shrink-0 self-stretch my-auto w-4 bg-blend-multiply aspect-square fill-white"
            />
          </button>
        </div>

        
        <form className="flex gap-4 items-center">
          <label htmlFor="sortSelect" className="self-stretch my-auto text-sm text-indigo-950">
            Sorting by:
          </label>
          <div className="flex overflow-hidden gap-2 items-center self-stretch px-6 py-3 my-auto text-base bg-white text-indigo-950 max-md:px-5">
            <select
              id="sortSelect"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="self-stretch my-auto appearance-none bg-transparent border-none focus:outline-none"
            >
              <option>Date added</option>
              
            </select>
            <img
              loading="lazy"
              src="/Images/Sorting.png"
              alt="Sort Icon"
              className="object-contain shrink-0 self-stretch my-auto w-4 bg-blend-multiply aspect-square fill-white"
            />
          </div>
        </form>
      </div>

      <div className="justify-center px-20 py-6 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {sortedProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>

      <footer className="flex overflow-hidden flex-col px-20 pt-14 pb-6 w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start text-sm max-md:max-w-full">
          <div className="flex flex-col text-white">
            <div className="text-base">Menu</div>
            <MenuItem text="New arrivals" />
            <MenuItem text="Best sellers" />
            <MenuItem text="Recently viewed" />
            <MenuItem text="Popular this week" />
            <MenuItem text="All products" />
          </div>
          <div className="flex flex-col text-base max-md:max-w-full">
            <div className="self-start text-white">Join our mailing list</div>
            <form className="flex flex-wrap mt-4 w-full max-md:max-w-full">
              <label htmlFor="emailInput" className="sr-only">Email address</label>
              <input
                type="email"
                id="emailInput"
                placeholder="your@email.com"
                className="overflow-hidden flex-1 shrink px-8 py-4 text-white whitespace-nowrap bg-white bg-opacity-10 min-w-[240px] max-md:px-5 max-md:max-w-full"
              />
              <button type="submit" className="overflow-hidden gap-2.5 self-start px-8 py-4 bg-white text-indigo-950 max-md:px-5">
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="shrink-0 mt-12 max-w-full h-px bg-indigo-800 border border-indigo-800 border-solid w-[1277px] max-md:mt-10" />
        <div className="flex flex-wrap gap-5 justify-between mt-6 w-full max-md:max-w-full">
          <div className="my-auto text-sm text-white">
            Copyright 2022 Avion LTD
          </div>
          <div className="flex gap-6 items-start">
            <img
              loading="lazy"
              src="/Images/SocialLinks.png"
              alt="Social Icon 1"
              className="object-contain shrink-0 w-32 bg-blend-multiply fill-white"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
