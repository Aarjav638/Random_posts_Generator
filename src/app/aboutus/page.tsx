import React from "react";
import Image from "next/image";
import { member1, member2, member3 } from "@/constants/images";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl mt-8">About Us</h1>
      <div className="my-4 w-5/6 sm:w-3/4 bg-slate-200 p-4">
        <h2 className="text-2xl mb-2 text-center">Why Choose Us?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.
          Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non
          elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.
          Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et,
          consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie
          ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat,
          molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus
          feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.
        </p>
        <div className="w-full bg-slate-400 h-[0.1px] my-4" />
        <h2 className="text-2xl mb-2 text-center">Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.
          Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non
          elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.
          Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et,
          consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie
          ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat,
          molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus
          feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla
          nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit
          dui.
        </p>
        <div className="w-full bg-slate-400 h-[0.1px] my-4" />
        <h2 className="text-2xl mb-2 text-center">Our Vision</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          doloremque aperiam veniam atque eligendi odit maxime magnam assumenda
          hic. Eum incidunt, tempore autem porro quaerat fuga saepe? Doloremque,
          perspiciatis cum! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laborum doloremque aperiam veniam atque eligendi odit maxime
          magnam assumenda hic. Eum incidunt, tempore autem porro quaerat fuga
          saepe? Doloremque, perspiciatis cum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Laborum doloremque aperiam veniam atque
          eligendi odit maxime magnam assumenda hic. Eum incidunt, tempore autem
          porro quaerat fuga saepe? Doloremque, perspiciatis cum!
        </p>
        <section className="flex flex-col bg-blue-200 my-4 p-4 gap-y-4 rounded-md z-10 shadow-sm shadow-slate-400 ">
          <h2 className="text-xl text-center">Our Team</h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="bg-slate-100 p-4 w-5/6 sm:w-1/2 items-center justify-center flex flex-col">
              <div className="w-full  h-40 md:h-48 lg:h-60 bg-black">
                <Image
                  src={member1}
                  width={500}
                  height={500}
                  alt="John Doe"
                  className="w-full h-full object-cover "
                />
              </div>
              <h3 className="text-lg text-center">John Doe</h3>
              <p>CEO</p>
            </div>
            <div className="bg-slate-100 p-4 w-5/6 sm:w-1/2 items-center justify-center flex flex-col ">
              <div className="w-full  h-40 md:h-48 lg:h-60 bg-black">
                <Image
                  height={500}
                  width={500}
                  src={member2}
                  alt="John Doe"
                  className="w-full h-full object-cover "
                />
              </div>
              <h3 className="text-lg text-center">Jane Doe</h3>
              <p>CTO</p>
            </div>
            <div className="bg-slate-100 p-4 w-5/6 sm:w-1/2 items-center justify-center flex flex-col">
              <div className="w-full h-40 md:h-48 lg:h-60 bg-black">
                <Image
                  height={500}
                  width={500}
                  src={member3}
                  alt="John Doe"
                  className="w-full h-full object-cover "
                />
              </div>
              <h3 className="text-lg text-center">James Doe</h3>
              <p>COO</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
