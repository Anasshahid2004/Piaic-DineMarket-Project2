import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <main className="max-w-[68rem] mx-auto px-10 overflow hidden">
          <div className="flex items-center gap-16 mt-10">
          </div>
        </main>
      <div class="container p-8 mx-auto xl:px-0 flex flex-wrap "></div>
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
          <span className="bg-[#e1edff] rounded-md text-[#0000FF] font-semibold px-5 py-2 md:ml-40">Sale 70%</span>
          <h1 class="font-bold text-[3rem] sm:text-[4rem] tracking-wide text-[#212121] leading-[55px] my-10 md:ml-40  mt-6">An Industrial Take on Streetwear</h1>
          <p className="font-normal mx-2 my-8 md:ml-40 text-3xl text-black-500 text-gray-400 ">
              Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
              {/* <div className="my-10">
                <a href="/allproduct">
                  <button className="sm:w-[35%] p-4 text-base bg-[#212121] font-semibold text-[#fff] flex gap-2 leading-4 justify-center items-center">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-2xl font-bold" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  Start Shopping
                  </button>
                </a>
                </div>  */}
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link href="/allproduct" target="_self" rel="noopener" className="px-8 py-4 md:ml-40 text-lg font-semibold flex gap-4 leading-2 justify-center items-center text-center text-white bg-gray-800 rounded-sm ">
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-2xl font-bold" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                Start Shopping
              </Link>
                </div>
              
                <div className="sm:flex sm:justify-center md:ml-16 py-6 sm:items-center grid grid-cols-[50%_50%] justify-center gap-2">
                <img src="/brand1.png" ></img>
                <img src="/brand2.png" ></img>
                <img src="/brand3.png" ></img>
                <img src="/brand4.png" ></img>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="400"
              height="617"
              className={"object-cover bg-[#FFECE3] rounded-full ml-5"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      
    </>
  );
}

export default Hero;