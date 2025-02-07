import * as React from "react";
import Link from "next/link";

interface MenuLinkProps {
  linkText: string;
  href: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ linkText, href }) => (
  <a href={href} className="mt-3">
    {linkText}
  </a>
);

interface SocialLinkProps {
  src: string;
  alt: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain aspect-square w-full h-full"
  />
);
const NavBar: React.FC = () => {
  return (
    <nav className="flex gap-10 justify-center items-center text-base text-gray-500 mt-5 mb-10">
     <Link href="/productpage" className="hover:text-gray-700">
      Product Page
    </Link>
    <Link href="/" className="hover:text-gray-700">
      Home Page
    </Link>
    <Link href="/shoppingcart" className="hover:text-gray-700">
      Shopping Cart
    </Link>
  </nav>
  );
}


interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ src, alt, title, description }) => (
  <div className="flex flex-col grow justify-center p-12 w-full bg-stone-50 text-indigo-950 max-md:px-5 max-md:mt-5">
    <div className="flex flex-col w-full">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain w-6 bg-blend-multiply aspect-square fill-white"
      />
      <div className="mt-3 text-xl leading-snug">{title}</div>
      <div className="mt-3 text-base leading-6">{description}</div>
    </div>
  </div>
);

function MyComponent() {
  return (
    <><div className="flex overflow-hidden flex-col bg-white">
      <div className="flex overflow-hidden flex-wrap gap-10 justify-end py-2.5 pr-4 pl-20 w-full text-sm text-white bg-indigo-950 max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-2 items-center my-auto">
          <img
            loading="lazy"
            src="/Images/Delivery.png"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 bg-blend-multiply aspect-square fill-white" />
          <div className="self-stretch my-auto flex justify-center ">
            Free delivery on all orders over £50 with code easter checkout
          </div>
        </div>
      </div>
    </div><div className="flex overflow-hidden flex-col pt-5 w-full bg-white max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1361px] max-md:max-w-full">
          <div className="text-2xl text-zinc-800 ml-4">Avion</div>
          <div className="flex gap-10 my-auto">
            <div className="flex gap-8 items-start text-base text-gray-500">
              <nav className="flex gap-10 justify-center items-center text-base text-gray-500 mt-5 mb-10">
                <Link href="/productpage" className="hover:text-gray-700">
                  Product Page
                </Link>
                <Link href="/homepage" className="hover:text-gray-700">
                  Home Page
                </Link>
                <Link href="/shoppingcart" className="hover:text-gray-700">
                  Shopping Cart
                </Link>
              </nav>
            </div>
            <div className="flex gap-4 items-start self-start mt-1.5">
              <SocialLink src="/Images/Search.png" alt="Social link 1" />
              <SocialLink src="/Images/Cart.png" alt="Social link 2" />
              <SocialLink src="/Images/User.png" alt="Social link 3" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center px-16 py-24 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1184px] max-md:max-w-full">
            <div className="text-4xl leading-[50px] text-indigo-950 max-md:max-w-full">
              A brand built on the love of craftmanship,
              <br />
              quality and outstanding customer service
            </div>
            <div className="overflow-hidden gap-2.5 self-start px-8 py-4 text-base bg-stone-50 text-indigo-950 max-md:px-5">
              View our products
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-start px-20 py-16 bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-end px-16 py-14 bg-indigo-950 min-w-[240px] w-[634px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col text-white max-md:max-w-full">
              <div className="text-3xl">It started with a small idea</div>
              <div className="mt-3 text-lg max-md:max-w-full">
                A global brand with local beginnings, our story began in a small
                studio in South London in early 2014
              </div>
            </div>
            <div className="overflow-hidden gap-2.5 self-start px-8 py-4 mt-52 text-base text-white bg-stone-50 bg-opacity-10 max-md:px-5 max-md:mt-10">
              View collection
            </div>
          </div>
          <img
            loading="lazy"
            src="/Images/Image Block.png"
            alt=""
            className="object-contain aspect-[1.32] min-w-[240px] w-[630px] max-md:max-w-full" />
        </div>
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="/Images/Image.png"
                alt=""
                className="object-contain grow w-full aspect-[1.19] max-md:max-w-full" />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col items-start px-20 py-16 mx-auto w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[536px]">
                  <div className="text-2xl leading-9 text-indigo-950 max-md:max-w-full">
                    Our service isn’t just personal, it’s actually
                    <br />
                    hyper personally exquisite
                  </div>
                  <div className="mt-6 text-base text-slate-600 max-md:max-w-full">
                    When we started Avion, the idea was simple. Make high quality
                    furniture affordable and available for the mass market.
                    Handmade, and lovingly crafted furniture and homeware is
                    what we live, breathe and design so our Chelsea boutique
                    become the hotbed for the London interior design community.
                  </div>
                </div>
                <div className="overflow-hidden gap-2.5 px-8 py-4 mt-48 text-base bg-white text-indigo-950 max-md:px-5 max-md:mt-10">
                  Get in touch
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-20 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="self-center text-2xl leading-snug text-indigo-950">
            What makes our brand different
          </div>
          <div className="mt-9 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <ServiceCard
                  src="/Images/Delivery.png"
                  alt="Next day as standard"
                  title="Next day as standard"
                  description="Order before 3pm and get your order the next day as standard" />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <ServiceCard
                  src="/Images/Checkmark--outline.png"
                  alt="Made by true artisans"
                  title="Made by true artisans"
                  description="Handmade crafted goods made with real passion and craftmanship" />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <ServiceCard
                  src="/Images/Purchase.png"
                  alt="Unbeatable prices"
                  title="Unbeatable prices"
                  description="For our materials and quality you won’t find better prices anywhere" />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <ServiceCard
                  src="/Images/Sprout.png"
                  alt="Recycled packaging"
                  title="Recycled packaging"
                  description="We use 100% recycled to ensure our footprint is more manageable" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start px-20 py-14 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-16 bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[571px]">
              <div className="flex flex-col items-center text-center text-indigo-950 max-md:max-w-full">
                <div className="text-4xl leading-snug max-md:max-w-full">
                  Join the club and get the benefits
                </div>
                <div className="mt-4 text-base leading-6 max-md:max-w-full">
                  Sign up for our newsletter and receive exclusive offers on new
                  ranges, sales, pop up stores and more
                </div>
              </div>
              <form className="flex self-center mt-20 max-w-full text-base w-[472px] max-md:mt-10">
                <label htmlFor="emailInput" className="sr-only">
                  Enter your email
                </label>
                <input
                  type="email"
                  id="emailInput"
                  placeholder="your@email.com"
                  aria-label="Enter your email"
                  className="flex overflow-hidden flex-col flex-1 shrink justify-center items-start px-8 py-4 whitespace-nowrap basis-0 bg-stone-50 min-w-[240px] text-indigo-950 max-md:px-5" />
                <button
                  type="submit"
                  className="overflow-hidden gap-2.5 px-8 py-4 text-white bg-indigo-950 max-md:px-5"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col items-start px-20 pt-14 pb-5 w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">
          <div className="w-full max-w-[1192px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-white max-md:mt-10">
                        <div className="self-start text-4xl leading-snug">
                          Avion
                        </div>
                        <div className="flex flex-col mt-4 text-sm">
                          <div>21 New York Street</div>
                          <div className="mt-3">New York City</div>
                          <div className="mt-3">United States of America</div>
                          <div className="mt-3">432 34</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col w-full max-md:mt-10">
                        <div className="self-start text-base text-white">
                          Social links
                        </div>
                        <div className="flex gap-6 items-start mt-6">
                          <div className="w-full h-full">
                            <SocialLink src="/Images/SocialLinks.png" alt="Facebook" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-sm text-white max-md:mt-10">
                        <div className="text-base">Menu</div>
                        <MenuLink href="#" linkText="New arrivals" />
                        <MenuLink href="#" linkText="Best sellers" />
                        <MenuLink href="#" linkText="Recently viewed" />
                        <MenuLink href="#" linkText="Popular this week" />
                        <MenuLink href="#" linkText="All products" />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-sm text-white max-md:mt-10">
                        <div className="text-base">Categories</div>
                        <MenuLink href="#" linkText="Crockery" />
                        <MenuLink href="#" linkText="Furniture" />
                        <MenuLink href="#" linkText="Homeware" />
                        <MenuLink href="#" linkText="Plant pots" />
                        <MenuLink href="#" linkText="Chairs" />
                        <MenuLink href="#" linkText="Crockery" />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-sm text-white max-md:mt-10">
                        <div className="text-base">Our company</div>
                        <MenuLink href="#" linkText="About us" />
                        <MenuLink href="#" linkText="Vacancies" />
                        <MenuLink href="#" linkText="Contact us" />
                        <MenuLink href="#" linkText="Privacy" />
                        <MenuLink href="#" linkText="Returns policy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 self-stretch mt-9 w-full h-px bg-indigo-800 border border-indigo-800 border-solid" />
          <div className="mt-4 text-sm text-white">
            Copyright 2022 Avion LTD
          </div>
        </div>
      </div></>
  );
}

export default MyComponent;