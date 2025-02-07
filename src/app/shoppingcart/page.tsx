import Link from "next/link";
import * as React from "react";

interface NavItemProps {
  text: React.ReactNode; 
}

interface CartItemProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

interface FooterLinkGroupProps {
  title: string;
  links: string[];
}

interface QuantityControlProps {
  quantity: number;
  price: string;
}

const NavItem: React.FC<NavItemProps> = ({ text }) => (
  <div className="text-base text-gray-500">{text}</div>
);

const CartItem: React.FC<CartItemProps> = ({ image, title, description, price }) => (
  <div className="flex gap-5 items-center">
    <img
      loading="lazy"
      src={image}
      alt={title}
      className="object-contain shrink-0 self-stretch my-auto aspect-[0.81] w-[109px]"
    />
    <div className="flex flex-col self-stretch my-auto">
      <div className="text-xl leading-snug">{title}</div>
      <div className="mt-2 text-sm leading-5">{description}</div>
      <div className="mt-2 text-base">{price}</div>
    </div>
  </div>
);

const QuantityControl: React.FC<QuantityControlProps> = ({ quantity, price }) => (
  <div className="flex gap-5 justify-between items-start w-full max-md:mr-0.5">
    <div className="flex overflow-hidden gap-8 justify-between items-center px-4 py-3 text-base bg-stone-50 text-slate-200">
      <button aria-label="Decrease quantity" className="self-stretch my-auto">-</button>
      <div className="self-stretch my-auto text-indigo-950">{quantity}</div>
      <button aria-label="Increase quantity" className="self-stretch my-auto">+</button>
    </div>
    <div className="text-lg text-indigo-950">{price}</div>
  </div>
);

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => (
  <div className="flex flex-col text-white">
    <div className="text-base">{title}</div>
    {links.map((link, index) => (
      <div key={index} className="mt-3">{link}</div>
    ))}
  </div>
);

export default function Page() {
  const navItems = [
    <Link key="about" href="about">About Page</Link>,
    <Link key="home" href="/">Home Page</Link>,
    <Link key="product" href="productpage">Product Page</Link>
  ];

  const cartItems = [
    {
      image: "/Images/vase.png",
      title: "Graystone vase",
      description: "A timeless ceramic vase with a tri color grey glaze.",
      price: "£85"
    },
    {
      image: "/Images/pot.png",
      title: "Basic white vase",
      description: "Beautiful and simple this is one for the classics",
      price: "£85"
    }
  ];

  const footerGroups = [
    {
      title: "Menu",
      links: ["New arrivals", "Best sellers", "Recently viewed", "Popular this week", "All products"]
    },
    {
      title: "Categories",
      links: ["Crockery", "Furniture", "Homeware", "Plant pots", "Chairs", "Crockery"]
    },
    {
      title: "Our company",
      links: ["About us", "Vacancies", "Contact us", "Privacy", "Returns policy"]
    }
  ];

  return (
    <div className="flex flex-col bg-stone-50">
      <header className="flex overflow-hidden flex-col px-7 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
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
        <nav className="flex flex-wrap gap-10 items-start self-center mt-5 text-base text-gray-500 max-md:max-w-full">
          {navItems.map((item, index) => (
            <NavItem key={index} text={item} />
          ))}
        </nav>
      </header>

      <main className="flex flex-col justify-center items-center px-20 py-14 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1064px] max-md:max-w-full">
          <h1 className="self-start text-4xl leading-snug text-indigo-950">
            Your shopping cart
          </h1>
          <div className="flex gap-5 justify-between mt-12 text-sm leading-snug whitespace-nowrap text-indigo-950 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
            <div>Product</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>
          <div className="shrink-0 mt-3 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
          <div className="flex flex-wrap gap-5 justify-between mt-5 max-md:mr-1.5 max-md:max-w-full">
            <div className="flex flex-col text-indigo-950">
              {cartItems.map((item, index) => (
                <div key={index} className="mt-5 first:mt-0">
                  <CartItem {...item} />
                </div>
              ))}
            </div>
            <div className="flex flex-col self-start mt-3 whitespace-nowrap">
              <QuantityControl quantity={1} price="£85" />
              <div className="mt-28 max-md:mt-10">
                <QuantityControl quantity={1} price="£125" />
              </div>
            </div>
          </div>
          <div className="shrink-0 mt-8 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
          <div className="flex flex-col self-end mt-7 max-w-full w-[282px]">
            <div className="flex flex-col items-end text-right">
              <div className="flex gap-4 items-center leading-snug whitespace-nowrap">
                <div className="self-stretch my-auto text-xl text-indigo-800">
                  Subtotal
                </div>
                <div className="self-stretch my-auto text-2xl text-indigo-950">
                  £210
                </div>
              </div>
              <div className="mt-3 text-sm text-indigo-800">
                Taxes and shipping are calculated at checkout
              </div>
            </div>
            <button className="overflow-hidden gap-2.5 self-end px-8 py-4 mt-4 text-base text-white bg-indigo-950 max-md:px-5">
              Go to checkout
            </button>
          </div>
        </div>
      </main>

      <footer className="flex overflow-hidden flex-col px-20 pt-14 pb-6 w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start text-sm max-md:max-w-full">
          {footerGroups.map((group, index) => (
            <FooterLinkGroup key={index} {...group} />
          ))}
          <div className="flex flex-col text-base max-md:max-w-full">
            <div className="self-start text-white">Join our mailing list</div>
            <form className="flex flex-wrap mt-4 w-full max-md:max-w-full">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                type="email"
                id="email"
                className="overflow-hidden flex-1 shrink px-8 py-4 text-white whitespace-nowrap bg-white bg-opacity-10 min-w-[240px] max-md:px-5 max-md:max-w-full"
                placeholder="your@email.com"
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
}
