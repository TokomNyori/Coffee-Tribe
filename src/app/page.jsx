import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { Phone } from "lucide-react";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="my-16 text-center">
        <SectionHeaders subHeader={`Our story`} header={`About Us`} />
        <div className="max-w-xl  mx-auto text-gray-500 flex flex-col gap-4">
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
      <section className="text-center my-16">
        <SectionHeaders subHeader={`Don't hesitate`} header={`Contact Us`} />
        <div>
          <a href="tel:+918837428457" className="flex gap-4 justify-center text-4xl items-center">
            +91 88374 28457
          </a>
        </div>
      </section>
    </>
  );
}
