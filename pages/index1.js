import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";

const index1 = () => {
  return (
    <>
      <Head>
        <title>Dine Market</title>
        <meta name="description" content="Anas Shahid Ecommerce Website" />
        <link rel="icon" href="/no1.png" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="PROMOTIONS"
        title="Our Promotions Events"
      ></SectionTitle>
      <main className="max-w-[68em] mx-auto px-10 overflow-hidden">
        <div className="flex items-center gap-16 mt-10">
          <div className>
            <span className="bg-[#eledff] rounded-md text-[#0000FF] font-semibold px-5 py-2">
              Sale 70%
            </span>
            <h1 className="font-bold text-[3rem] sm:text-[3.5rem] tracking-wide text-[#212121] leading-[55px] my-10">
              An Industrial Take on Streetwear
            </h1>
            <p className="sm:w-[70%] text-base leading-6 text-[#666]">
              "Anyone can beat you but no one can beat your outfit as long as
              you wear Dine outfits."
            </p>
            <div className="my-10">
              <a href="">
                <button className="sm:w-[35%] p-4 text-base bg-[#212121] font-semibold text-[#fff] flex gap-2 leadign-4 justify-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-2xl font-bold"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  "Start Shopping"
                </button>
              </a>
            </div>
            <div className="sm:flex sm:justify-between sm:items-center grid grid-cols-[50%_50%] justify-center gap-2">
              <Image
                width="90"
                height="100"
                className="justify-self-center"
                style="color:transparent"
                srcset=""
              />
            </div>
          </div>
          <div className="rounded-full bg-[#FFECE3] hidden navsc:block"></div>
        </div>
        <main></main>
        <main></main>
        <main></main>
      </main>

      <Footer />
    </>
  );
};

export default index1;
