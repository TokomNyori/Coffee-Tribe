import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="my-16 text-center">
        <SectionHeaders subHeader={`Our story`} header={`About Us`} />
        <div className="max-w-xl  mx-auto text-gray-500 flex flex-col gap-4 mt-6">
          <p>
            Welcome to Coffee Tribe, your go-to spot for a blend of tradition and trend! Nestled in the bustling heart of Naharlagun,
            we're a cozy haven for coffee aficionados and food lovers alike. Our menu is a curated selection of rich, aromatic coffees,
            inventive mocktails, indulgent desserts, gourmet pizzas, juicy burgers, and tantalizing starters. Each dish is crafted with
            love, using the freshest ingredients to deliver an unforgettable experience.
          </p>
          <p>
            Our cafe is a melting pot of ideas and cultures, brought together by the love of exceptional taste and quality.
            From the first sip of our signature brew to the last bite of our chef's special, we promise a journey of flavors
            that celebrates local produce and global cuisine. Step into our world, where every visit is about delicious moments
            and making memories with friends and family. Join us, and let's make every day a celebration of good living.
          </p>
        </div>
      </section>
      <section className="text-center my-8 mb-20">
        <SectionHeaders subHeader={`Don't hesitate`} header={`Contact Us`} />
        <div className="flex flex-col items-center gap-4 mt-6">
          <a href="tel:+918837428457" className="text-4xl text-gray-600">
            +91 88374 28457
          </a>
          <div className="flex justify-between items-center gap-4">
            <a href="https://www.instagram.com/thecoffee.tribe" target="_blank">
              <FaInstagram className="text-4xl text-[#FF0B5B]" />
            </a>
            <a href="https://wa.me/918837428457" target="_blank">
              <FaWhatsapp className="text-4xl text-green-600" />
            </a>
            <a href="mailto:tokom.nyori@gmail.com" target="_blank" className="shadow-lg">
              <SiGmail className="text-[2.2rem] text-red-500" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
