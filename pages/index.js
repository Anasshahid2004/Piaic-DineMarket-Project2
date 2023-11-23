import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Dine Market</title>
        <meta name="description" content="Anas Shahid Ecommerce Website" />
        <link rel="icon" href="/no1.png" />
      </Head>

      <Navbar />

      <Hero />
      {/* <SectionTitle
        pretitle="PROMOTIONS"
        title="Our Promotions Events">
      </SectionTitle> */}
      <main className="my-35 max-w-[68rem] mx-auto px-10 overflow-hidden">
        <p class="uppercase text-center font-bold text-xs leading-4 tracking-widest text-[#0062f5]">
          promotions
        </p>
        <h2 class="capitalize text-center font-bold text-2xl sm:text-[32px] leading-10 tracking-wide text-[#212121] mt-3 mb-4">
          our promotions events
        </h2>
        <div className="flex gap-8 navsc:flex-row flex-col">
          <div className="flex flex-col justify-between gap-4 flex-1">
            <div className="flex items-center justify-between bg-[#d6d6d8] px-8 text-[#212121] tracking-wider flex-1">
              <div className="flex-1">
                <h3 class="uppercase font-bold text-xl sm:text-3xl leading-9 text-[#212121]">
                  get up to
                  <span class="font-[800] text-2xl sm:text-4xl sm:leading-[45px]">
                    60%
                  </span>
                </h3>
                <p className="font-normal text-sm sm:text-lg leading-6 tracking-wide sm:w-[70%]">
                  For the summer reason
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="women.png"
                  width={282}
                  height={200}
                  className="h-full aspect-square"
                ></img>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-0 text-[#fff] bg-[#212121] flex-1 py-6 navsc:py-0 overflow-hidden">
              <h3 class="uppercase font-[800] text-4xl leading-[45px]">
                Get 30% off
              </h3>
              <p class="font-normal text-lg leading-6 tracking-wide uppercase mb-1 mt-4">
                use promo code
              </p>
              <button class="font-bold text-lg leading-5 tracking-[0.25em] bg-[#474747] px-10 py-2 rounded-lg">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center flex-1 flex-col sm:flex-row">
            <div className="navsc:pt-6 flex flex-col justify-between bg-[#EFE1C7] flex-1 w-full sm:w-auto">
              <div className="ml-5">
                <p class="font-normal text-base leading-6 tracking-tighter">
                  Flex Sweatshirt
                </p>
                <div>
                  <span className="line-through">$100.00</span>
                  <span className="font-semibold text-lg leading-6 mr-[101px]">
                    $75.00
                  </span>
                </div>
              </div>
              <div className="mt-4 flex justify-center navsc:block">
                <img src="/Boy.png" className="w-[280px] h-[340px]"></img>
              </div>
            </div>
            <div className="navsc:pt-6 flex flex-col justify-between bg-[#919181] flex-1 w-full sm:w-auto">
              <div className="ml-5">
                <p class="font-normal text-base leading-6 tracking-tighter">
                  Flex Push Button Bomber
                </p>
                <div>
                  <span className="line-through">$225.00</span>
                  <span class="font-semibold text-lg leading-6 mr-[10px]">
                    $190.00
                  </span>
                </div>
              </div>
              <div className="mt-4 flex justify-center navsc:block">
                <img src="/BOY1.png" className="w-[280px] h-[340px]"></img>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <div id="main-div" className="w-[80%] mx-auto h-fit flex items-center justify-center flex-col md:flex-row md:gap-y-6">
        <div id="right-hand" className="">
          <div className="bg-gray-200 w-[450px] h-[205px]  px-5 text-[#212121]  flex-1" >
            <h3 className="uppercase font-bold text-xl sm:text-3xl leading-9 text-[#212121]">
              get up to
              <span className="font-[800] text-2xl sm:text-4xl sm:leading-[45px]"></span>
            </h3>
            <p className="font-normal text-sm sm:text-lg leading-6 tracking-wide sm:w-[70%]">For the summer reason</p>
            <img src="/women.png" className="h-50 w-60 ml-24 px-9" />
          </div>
          <div className="bg-[#292929] w-[450px] h-[205px] mt-6  px-6 py-8 text-[#ffffff]  flex-2">
            <h3 class="uppercase font-[800] text-4xl leading-[45px] px-20">Get 30% off</h3>
            <p class="font-normal text-lg leading-6 tracking-wide uppercase mb-1 mt-4 px-28 py-0">use promo code</p>
            <button class="font-bold text-lg tracking-[00.25em] bg-[#474747] w-96 h-10 px-11 py-0 rounded-lg">DINEWEEKENDSALE</button>
          </div>
        </div>
        <div id="left-hand" className="bg-[#EFE1C7] md:w-[230px] h-[440px] w-[70%]  ml-14 px-50 py-10 text-[#212121]  flex-3 ">
          <p class="font-semibold text-lg leading-6 tracking-tighter ml-8 ">Flex Sweatshirt</p>
          <span class="line-through ml-8">$100.00</span>
          <span class="font-semibold text-lg leading-6 mr-[10px]">$75.00</span>
          <img src="/Boy.png" className="my-16 w-56 h-72" />

        </div>
        <div id="left-hand" className="bg-[#919181] w-[230px] h-[445px]  mr-10 ml-5 px-50 py-10 text-[#212121]  flex-4 ">
          <p class="font-semibold text-lg leading-6 tracking-tighter ml-4">Flex Push Button Bomber</p>
          <span class="line-through ml-4">$225.00</span>
          <span class="font-semibold text-lg leading-6 mr-[10px]">$75.00</span>
          <img src="/BOY1.png" height={400} width={500} className="my-14 " />
        </div>
      </div> */}
      <SectionTitle
        pretitle="PRODUCTS"
        title="Check What We Have"
      ></SectionTitle>

      <div className="bg-white md:mr-96">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-2">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full md:ml-40 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="/pink.png"></img>
              </div>
              <h3 className="mt-4 md:ml-40 text-sm text-gray-700">
                Earthen Bottle
              </h3>
              <p className="mt-1 md:ml-40 text-lg font-medium text-gray-900">
                $48
              </p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full md:ml-40 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="/american.png"></img>
              </div>
              <h3 className="mt-4 md:ml-40 text-sm text-gray-700">
                Nomad Tumbler
              </h3>
              <p className="mt-1 md:ml-40 text-lg font-medium text-gray-900">
                $35
              </p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full md:ml-40 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="/korean.png"></img>
              </div>
              <h3 className="mt-4 md:ml-40 text-sm text-gray-700">
                Cameryn Sash Tie Dress
              </h3>
              <p className="mt-1 md:ml-40 text-lg font-medium text-gray-900">
                $89
              </p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full md:ml-40 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="/korean.png"></img>
              </div>
              <h3 className="mt-4 md:ml-40 text-sm text-gray-700">
                Cameryn Sash Tie Dress
              </h3>
              <p className="mt-1 md:ml-40 text-lg font-medium text-gray-900">
                $89
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* <main className="mb-20 mt-[-50px] sm:my-20 overflow-hidden">
          <div className="flex justify-center pb-8 featuresc:justify-end px-1 sm:px-5 featuresc:px-0">
          <h1 class="font-bold text-[1.75rem] sm:text-[2.75rem] leading-[40px] sm:leading-[55px] pr-40 tracking-wide text-[#212121] featuresc:w-[50%]">Unique and Authentic Vintage Designer Jewellery</h1>
          </div>
          <div className="featuresc:grid featuresc:grid-cols-[50%_50%]">
            <div className="w-full relative justify-center items-center">
            <div class="absolute font-extrabold text-[4rem] sm:text-[6.875rem] leading-[110px] opacity-[0.07] text-[#212121] z-10">Different from others</div>
            <div className="grid grid-cols-[50%_50%] h-full">
              <div className="w-[70%] z-20 h-full pt-2">
              <p class="font-semibold text-base sm:text-lg leading-5 tracking-wide text-[#212121] mb-4">Using Good Quality Materials</p>
              <p class="font-light text-sm sm:text-base leading-3 tracking-wider text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
              </div>
              <div className="w-[70%] z-20 h-full pt-2">
              <p class="font-semibold text-base sm:text-lg leading-5 tracking-wide text-[#212121] mb-4">100% Handmade Products</p>
              <p class="font-light text-sm sm:text-base leading-3 tracking-wider text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
              </div>
              <div className="w-[70%] z-20 h-full pt-2">
              <p class="font-semibold text-base sm:text-lg leading-5 tracking-wide text-[#212121] mb-4">Modern Fashion Design</p>
              <p class="font-light text-sm sm:text-base leading-3 tracking-wider text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
              </div>
              <div className="w-[70%] z-20 h-full pt-2">
              <p class="font-semibold text-base sm:text-lg leading-5 tracking-wide text-[#212121] mb-4">Discount for Bulk Orders</p>
              <p class="font-light text-sm sm:text-base leading-3 tracking-wider text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
              </div>
            </div>
            </div>
            <div className="w-full flex mt-3 featuresc:mt-0 items-center sm:flex-row flex-col">
            <img src="/whiteG.png" width={300} height={400} decoding="async" />
            <div className="sm:ml-4 sm:mt-0 mt-4">
              <p className="font-light text-lg loading-8 text-justify tracking-wider text-[#212121] pr-10 pt-2">
              "This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable."
              </p>
              <button className="capitalize mt-5 p-4 text-base bg-[#212121] font-semibold text-[#fff] leading-4">See all Products</button>
            </div>
            </div>
          </div>
        </main> */}
      <div className="max-w-[68rem] mx-auto px-10 overflow-hidden">
        <div className="flex flex-wrap">
          <div className="flex pb-8 justify-end px-1 sm:px-5 sm:justify-start md:justify-end">
            <h1 className="font-bold text-[1.75rem] sm:text-[2.75rem] leading-[40px] sm:leading-[55px] xs:pr-10 xs:pr-10 pr-40 tracking-wide text-[#212121]   md:w-[50%] max-w-screen-md:w-[100%] sm:w-[90%]">
              Unique and Authentic Vintage Designer Jewellery
            </h1>
          </div>

          <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
            <div class="absolute font-extrabold text-[4rem] sm:text-[6.875rem] leading-[110px] opacity-[0.07] w-[50%] z-[-1] text-[#212121] z-10">
              Different from others
            </div>
            <div className="w-[100%] z-20 pt-2">
              <p className="font-semibold text-base sm:text-xl leading-5 tracking-wide text-[#212121] mb-4">
                Using Good Quality Materials
              </p>
              <p className="font-light text-sm sm:text-base leading-3  tracking-wider text-[#212121]">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit
              </p>
            </div>
            <div className="w-[100%] z-20 pt-4">
              <p className="font-semibold text-base sm:text-xl leading-5  tracking-wide text-[#212121] mb-4">
                Modern Fashion Design
              </p>
              <p className="font-light text-sm sm:text-base leading-3  tracking-wider text-[#212121]">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
            <div className="w-[100%] z-20 pt-2">
              <p className="font-semibold text-base sm:text-xl leading-5  tracking-wide text-[#212121] mb-4">
                100% Handmade Products
              </p>
              <p className="font-light text-sm sm:text-base leading-3  tracking-wider text-[#212121]">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit
              </p>
            </div>
            <div className="w-[100%] z-20 pt-4">
              <p className="font-semibold text-base sm:text-xl leading-5  tracking-wide text-[#212121] mb-4">
                Discount for Bulk Orders
              </p>
              <p className="font-light text-sm sm:text-base leading-3  tracking-wider text-[#212121]">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div className="flex-1 xs:w-1/1 justify-center">
              <img
                src="/whiteG.png"
                className=" sm:w-[84%] xs:w-[50%] w-[84%] z-20 mx-auto h-full"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/1 lg:w-1/4 xl:w-1/4 p-4">
            <div className="flex-1 xs:w-1/1 justify-center">
              <p className="font-light text-lg leading-8 text-justify tracking-wider text-[#212121] pr-10 pt-2">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <button className="capitalize mt-5 p-4 text-base bg-[#212121] font-semibold text-[#fff] leading-4">
                See all products
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <main className="mb-20 sm:my-20 overflow-hidden">
        <div className="flex pb-8 justify-end px-1 sm:px-5 ">
          <h1 className="font-bold text-[1.75rem] sm:text-[2.75rem] leading-[40px] sm:leading-[55px] pr-40 tracking-wide text-[#212121] md:w-[50%] max-w-screen-md:w-[100%]">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>
        <div className="w-1/1">
          <div className="w-full relative justify-center items-center">
            <div className="absolute font-extrabold text-[5rem] sm:text-[6.875rem] md:ml-40 leading-[110px] opacity-[0.07] text-[#212121] z-10">
              Different from others
            </div>
            <div className="grid grid-cols-[50%_50%] h-full">
              <div className="w-[100%] z-20 h-full pt-2">
                <p className="font-semibold text-base sm:text-xl leading-5 md:ml-40 tracking-wide text-[#212121] mb-4">
                  Using Good Quality Materials
                </p>
                <p className="font-light text-sm sm:text-lg leading-3 md:ml-40 tracking-wider text-[#212121]">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
              <div className="w-[100%] z-20 h-full pt-2">
                <p className="font-semibold text-base sm:text-xl leading-5 md:ml-40 tracking-wide text-[#212121] mb-4">
                  100% Handmade Products
                </p>
                <p className="font-light text-sm sm:text-base leading-3 md:ml-40 tracking-wider text-[#212121]">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
              <div className="w-[100%] z-20 h-full pt-2">
                <p className="font-semibold text-base sm:text-xl leading-5 md:ml-40 tracking-wide text-[#212121] mb-4">
                  Modern Fashion Design
                </p>
                <p className="font-light text-sm sm:text-base leading-3 md:ml-40 tracking-wider text-[#212121]">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
              <div className="w-[100%] z-20 h-full pt-2">
                <p className="font-semibold text-base sm:text-xl leading-5 md:ml-40 tracking-wide text-[#212121] mb-4">
                  Discount for Bulk Orders
                </p>
                <p className="font-light text-sm sm:text-base leading-3 md:ml-40 tracking-wider text-[#212121]">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
          <div className="w-full relative justify-center items-center">
            <div className="flex flex-col sm:flex-row mt-8">
              <div className="flex-1 xs:w-1/2 justify-center">
                <img
                  src="/whiteG.png"
                  className=" w-[84%] z-20 mx-auto h-full"
                />
              </div>
              <div className="flex-1 xs:w-1/2 justify-center">
                <p className="font-light text-lg leading-8 text-justify tracking-wider text-[#212121] pr-10 pt-2">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <button className="capitalize mt-5 p-4 text-base bg-[#212121] font-semibold text-[#fff] leading-4">
                  See all products
                </button>
              </div>
            </div>
          </div>
        </div>
      </main> */}

      {/* <div className="my-40 relative">
        <p class="absolute font-extrabold text-[4rem] sm:text-[5.75rem] navsc:text-[6.875rem] leading-[110px] opacity-[0.07] text-[#212121] text-center left-0 right-0 subsc:block">Newsletter</p>
        <p class="capitalize text-center font-bold text-[32px] leading-10 tracking-wide text-[#212121] mt-3">Subscribe our newsletter</p>
        <p class="font-normal text-base leading-7 text-[#212121] my-5 text-center">Get the latest information and promo offers directly</p>
        <div className="flex gap-3 justify-center items-center sm:flex-row flex-col">
          <input class="text-lg py-1 px-3 w-80 border border-gray-400 placeholder:text-sm" placeholder="Input email address" type="text"></input>
          <button class=" capitalize p-2 text-sm bg-black font-semibold text-[#fff] leading-4">Get Started</button>
        </div>
      </div> */}
      <div className="my-40 relative">
        <p class="absolute font-extrabold text-[4rem] sm:text-[5.75rem] navsc:text-[6.875rem] leading-[110px] opacity-[0.07] text-[#212121] text-center left-0 right-0 subsc:block">
          Newsletter
        </p>
        <p class="capitalize text-center font-bold text-[32px] leading-10 tracking-wide text-[#212121] mt-3">
          Subscribe our newsletter
        </p>
        <p class="font-normal text-base leading-7 text-[#212121] my-5 text-center">
          Get the latest information and promo offers directly
        </p>
        <div className="flex gap-3 justify-center items-center sm:flex-row flex-col">
          <input
            className="text-lg py-1 px-3 w-80 border border-gray-400 placeholder:text-sm"
            placeholder="Input email address"
            type="text"
          />
          <button class=" capitalize p-2 text-sm bg-black font-semibold text-[#fff] leading-4">
            Get Started
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
