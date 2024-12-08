import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar, FaRegStarHalf, FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import LinkButton from "@/components/ui/Linkbutton";

const products = [
  {
    image: "/product-1.png",
    title: "Trenton modular sofa",
    price: "Rs. 25,000.00",
  },
  {
    image: "/product-2.png",
    title: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
  },
  {
    image: "/product-3.png",
    title: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
  },
  {
    image: "/product-4.png",
    title: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
  },
];

const page = () => {
  return (
    <div className="px-24 mt-10">
      <ol className="flex py-10 space-x-2">
        <li>
          <Link href="/" className="text-gray-400">
            Home
          </Link>
        </li>
        <IoIosArrowForward className="text-base sm:text-xl text-black font-medium" />
        <li className="text-gray-400">Shop</li>
        <IoIosArrowForward className="text-base sm:text-xl text-black font-medium" />
        <li className="font-medium">Asgaard sofa</li>
      </ol>

      <div>
        <section className="flex flex-cols-2 lg:flex-cols-2 gap-32">
          <div className="flex gap-6">
            <div className="grid grid-cols-1">
              <Image
                src="/p1.png"
                alt="Rectangle"
                width={90}
                height={60}
                className="bg-[#FFF9E5] rounded-md h-[80px] w-[80px]"
              />
              <Image
                src="/p2.png"
                alt="Rectangle"
                width={90}
                height={60}
                className="bg-[#FFF9E5] rounded-md h-[80px] w-[80px]"
              />
              <Image
                src="/p3.png"
                alt="Rectangle"
                width={90}
                height={60}
                className="bg-[#FFF9E5] rounded-md h-[80px] w-[80px]"
              />
              <Image
                src="/p4.png"
                alt="Rectangle"
                width={90}
                height={60}
                className="bg-[#FFF9E5] rounded-md h-[80px] w-[80px]"
              />
            </div>
            <div>
              <Image
                src="/Asgaard-sofa.png"
                alt="Rectangle"
                width={500}
                height={500}
                className="bg-[#FFF9E5] rounded-md h-[480px] w-[450px]"
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-semibold mb-2">Asgaard Sofa</h1>
            <p className="text-xl font-medium text-gray-400 mb-4">
              Rs. 250,000.00
            </p>
            <div className="flex items-center text-[#FFDA5B] gap-2 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalf />
              <p className="text-sm text-gray-300">5 customer Review</p>
            </div>
            <p className="text-sm mb-4">
              Setting the bar as one of the loudest speakers in its class, the{" "}
              <br /> Kilburn is a compact, stout-hearted hero with a
              well-balanced <br /> audio which boasts a clear midrange and
              extended highs for a sound.
            </p>
            <p className="text-sm font-medium text-gray-400 mb-3">Size</p>
            <div className="flex itesm-center gap-3 text-sm text-center mb-4">
              <div className="bg-[#FFF9E5] px-2 py-1 rounded-md">L</div>
              <div className="bg-[#FAF4F4] px-2 py-1 rounded-md">XL</div>
              <div className="bg-[#FAF4F4] px-2 py-1 rounded-md">XS</div>
            </div>
            <p className="text-sm font-medium text-gray-400 mb-3">Color</p>
            <div className="flex itesm-center gap-3 text-sm text-center mb-6">
              <div className="bg-[#816DFA] px-3 py-3 rounded-full"></div>
              <div className="bg-black px-3 py-3 rounded-full"></div>
              <div className="bg-[#CDBA7B] px-3 py-3 rounded-full"></div>
            </div>
            <div className="flex gap-3 items-center mb-8">
              <div className="text-center  rounded-md border border-gray-400 w-20 py-3">
                &#45; 1 &#43;
              </div>
              <button className="w-48 py-3 rounded-lg text-sm font-semibold border border-black">
                Add To Cart
              </button>
            </div>
            <div className="max-w-8xl mx-auto px-4 mt-8 pt-8 border-t border-gray-300  text-sm"></div>
            <div className=" text-gray-400 space-y-3">
              <div>
                <span>SKU :</span>
                <span> SS001</span>
              </div>
              <div>
                <span>Category :</span>
                <span> Sofas</span>
              </div>
              <div>
                <span>Tags :</span>
                <span> Sofa, Chair, home, Shop</span>
              </div>
              <div>
                <span>Share : </span>
                <span className="text-xl flex gap-3 text-black">
                  <FaFacebook />
                  <FaLinkedin />
                  <AiFillTwitterCircle />
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-8xl mx-auto px-4 mt-8 pt-8 border-t border-gray-300  text-sm"></div>
        <div>
          <h3 className="text-3xl text-center font-semibold mt-5">
            Related Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-20 mt-6 mb-10 lg:mt-16">
            {products.map((product, index) => (
              <div key={index} className="flex flex-col">
                <div className="w-full h-72 relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h4 className="text-sm font-medium mt-6">{product.title}</h4>
                <p className="text-lg font-semibold mt-2">{product.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <LinkButton text="View More" href="/shop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
