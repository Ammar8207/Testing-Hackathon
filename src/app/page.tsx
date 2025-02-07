import * as React from "react";
import Link from "next/link";


type ImageProps = {
  src: string;
  alt: string;
};
type CollectionItemProps = {
  name: string;
  price: string;
  imgSrc: string;
  imgAlt: string;
};
type InfoBlockProps = {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
};
type PopularProductProps = CollectionItemProps;

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <img loading="lazy" src={src} alt={alt} className="object-contain w-full" />
);

const CollectionItem: React.FC<CollectionItemProps> = ({
  name,
  price,
  imgSrc,
  imgAlt
}) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow max-md:mt-5">
      <Image src={imgSrc} alt={imgAlt} />
      <div className="flex flex-col self-start mt-6 text-indigo-950">
        <div className="text-xl leading-snug">{name}</div>
        <div className="mt-2 text-lg">{price}</div>
      </div>
    </div>
  </div>
);

const InfoBlock: React.FC<InfoBlockProps> = ({
  title,
  text,
  imgSrc,
  imgAlt
}) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow text-indigo-950 max-md:mt-10">
      <Image src={imgSrc} alt={imgAlt} />
      <div className="flex flex-col mt-4 max-w-full">
        <div className="text-xl leading-snug">{title}</div>
        <div className="mt-2 text-base leading-6">{text}</div>
      </div>
    </div>
  </div>
);

const PopularProduct: React.FC<PopularProductProps> = ({
  name,
  price,
  imgSrc,
  imgAlt
}) => (
  <div className="flex flex-col w-[51%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow text-indigo-950 max-md:mt-5 max-md:max-w-full">
      <Image src={imgSrc} alt={imgAlt} />
      <div className="flex flex-col self-start mt-6">
        <div className="text-xl leading-snug">{name}</div>
        <div className="mt-2 text-lg">{price}</div>
      </div>
    </div>
  </div>
);

function MyComponent() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
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
              alt="Icon 1"
              className="object-contain shrink-0 w-4 bg-blend-multiply aspect-square fill-white"
            />
            <img
              loading="lazy"
              src="/Images/User.png"
              alt="Icon 2"
              className="object-contain shrink-0 w-4 bg-blend-multiply aspect-square fill-white"
            />
          </div>
        </div>
        <div className="shrink-0 mt-5 h-px border border-solid border-black border-opacity-10 max-md:max-w-full" />
        <div className="flex flex-wrap gap-10 items-start self-center mt-5 text-base text-gray-500 max-md:max-w-full">
        <Link href="/about">About</Link>
        <Link href="/plant-pots">Contact us</Link>
        <Link href="/productpage">Product Page</Link>
        <Link href="/shoppingcart">Shopping Cart</Link>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center px-16 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="overflow-hidden pl-16 bg-indigo-950 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[513px]">
                  <div className="text-3xl leading-10 max-md:max-w-full">
                    The furniture brand for the future, with timeless designs
                  </div>
                  <div className="overflow-hidden gap-2.5 self-start px-8 py-4 mt-10 text-base bg-stone-50 bg-opacity-10 max-md:px-5 max-md:mt-10">
                    View collection
                  </div>
                </div>
                <div className="mt-48 text-lg leading-7 max-md:mt-10 max-md:max-w-full">
                  A new era in eco friendly furniture with Avelon, the French
                  luxury retail brand
                  <br />
                  with nice fonts, tasteful colors and a beautiful way to
                  display things digitally <br />
                  using modern web technologies.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="/Images/image1.png"
                alt="Furniture Display"
                className="object-contain grow w-full aspect-[0.89] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-10 py-16 w-full bg-white max-md:px-5">
  
  <div className="self-center text-2xl font-semibold leading-snug text-indigo-950 text-center">
    What makes our brand different
  </div>

  
  <div className="mt-12 w-full max-md:mt-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-start">
      
      <InfoBlock
        title="Next day as standard"
        text="Order before 3pm and get your order the next day as standard"
        imgSrc="/Images/Delivery.png"
        imgAlt="Next day as standard"
      />

      
      <InfoBlock
        title="Made by true artisans"
        text="Handmade crafted goods made with real passion and craftsmanship"
        imgSrc="/Images/Checkmark--outline.png"
        imgAlt="Made by true artisans"
      />

      
      <InfoBlock
        title="Unbeatable prices"
        text="For our materials and quality you won’t find better prices anywhere"
        imgSrc="/Images/Purchase.png"
        imgAlt="Unbeatable prices"
      />

      
      <InfoBlock
        title="Recycled packaging"
        text="We use 100% recycled packaging to ensure our footprint is manageable"
        imgSrc="/Images/Sprout.png"
        imgAlt="Recycled packaging"
      />
    </div>
  </div>
</div>

      <div className="flex flex-col px-20 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="self-start text-3xl text-indigo-950">New ceramics</div>
        <div className="mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <CollectionItem
              name="The Dandy chair"
              price="£250"
              imgSrc="/Images/image1.png"
              imgAlt="The Dandy chair"
            />
            <CollectionItem
              name="Rustic Vase Set"
              price="£155"
              imgSrc="/Images/image4.png"
              imgAlt="Rustic Vase Set"
            />
            <CollectionItem
              name="The Silky Vase"
              price="£125"
              imgSrc="/Images/image5.png"
              imgAlt="The Silky Vase"
            />
            <CollectionItem
              name="The Lucy Lamp"
              price="£399"
              imgSrc="/Images/image3.png"
              imgAlt="The Lucy Lamp"
            />
          </div>
        </div>
        <div className="overflow-hidden gap-2.5 self-center px-8 py-4 mt-9 text-base bg-stone-50 text-indigo-950 max-md:px-5">
          View collection
        </div>
      </div>
      <div className="flex flex-col px-20 py-14 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="self-start text-3xl leading-snug text-indigo-950">
          Our popular products
        </div>
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <PopularProduct
              name="The Poplar suede sofa"
              price="£980"
              imgSrc="/Images/image7.png"
              imgAlt="The Poplar suede sofa"
            />
            <CollectionItem
              name="The Dandy chair"
              price="£250"
              imgSrc="/Images/image1.png"
              imgAlt="The Dandy chair"
            />
            <CollectionItem
              name="The Dandy chair"
              price="£250"
              imgSrc="/Images/image6.png"
              imgAlt="The Dandy chair"
            />
          </div>
        </div>
        <div className="overflow-hidden gap-2.5 self-center px-8 py-4 mt-11 text-base bg-stone-50 text-indigo-950 max-md:px-5 max-md:mt-10">
          View collection
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
              <label htmlFor="emailInput" className="sr-only">Enter your email</label>
              <input
                className="overflow-hidden flex-col flex-1 shrink justify-center items-start px-8 py-4 whitespace-nowrap basis-0 bg-stone-50 min-w-[240px] text-indigo-950 max-md:px-5"
                type="email"
                id="emailInput"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button
                type="submit"
                className="overflow-hidden gap-2.5 self-start px-8 py-4 text-white bg-indigo-950 max-md:px-5"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col items-start px-20 py-16 mx-auto w-full bg-white max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col max-w-full w-[536px]">
                <div className="text-2xl leading-9 text-indigo-950 max-md:max-w-full">
                  From a studio in London to a global brand with
                  <br />
                  over 400 outlets
                </div>
                <div className="mt-6 text-base text-slate-600 max-md:max-w-full">
                  When we started Avion, the idea was simple. Make high quality
                  furniture affordable and available for the mass market.
                    Handmade, and lovingly crafted furniture and homeware is
                  what we live, breathe and design so our Chelsea boutique
                  become the hotbed for the London interior design community.
                </div>
              </div>
              <div className="overflow-hidden gap-2.5 px-8 py-4 mt-48 text-base bg-stone-50 text-indigo-950 max-md:px-5 max-md:mt-10">
                Get in touch
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/Images/image2.png"
              alt="Studio Image"
              className="object-contain grow w-full aspect-[1.19] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col px-20 pt-14 pb-6 w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start text-sm max-md:max-w-full">
          <div className="flex flex-col text-white">
            <div className="text-base">Menu</div>
            <div className="mt-3">New arrivals</div>
            <div className="mt-3">Best sellers</div>
            <div className="mt-3">Recently viewed</div>
            <div className="mt-3">Popular this week</div>
            <div className="mt-3">All products</div>
          </div>
          <div className="flex flex-col self-stretch text-white">
            <div className="text-base">Categories</div>
            <div className="mt-3">Crockery</div>
            <div className="mt-3">Furniture</div>
            <div className="mt-3">Homeware</div>
            <div className="mt-3">Plant pots</div>
            <div className="mt-3">Chairs</div>
            <div className="mt-3">Crockery</div>
          </div>
          <div className="flex flex-col text-white">
            <div className="text-base">Our company</div>
            <div className="mt-3">About us</div>
            <div className="mt-3">Vacancies</div>
            <div className="mt-3">Contact us</div>
            <div className="mt-3">Privacy</div>
            <div className="mt-3">Returns policy</div>
          </div>
          <form className="flex flex-col text-base max-md:max-w-full">
            <label htmlFor="footerEmailInput" className="sr-only">Join our mailing list</label>
            <div className="self-start text-white">Join our mailing list</div>
            <div className="flex flex-wrap mt-4 w-full max-md:max-w-full">
              <input 
                className="overflow-hidden flex-1 shrink px-8 py-4 text-white whitespace-nowrap bg-white bg-opacity-10 min-w-[240px] max-md:px-5 max-md:max-w-full"
                type="email"
                id="footerEmailInput"
                placeholder="your@email.com"
              />
              <button
                type="submit"
                className="overflow-hidden gap-2.5 self-start px-8 py-4 bg-white text-indigo-950 max-md:px-5"
              >
                Sign up
              </button>
            </div>
          </form>
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
      </div>
    </div>
  );
}

export default MyComponent;