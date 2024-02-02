"use client";
import Marquee from "react-fast-marquee";
import { useState, useRef } from "react";
import { Kamar1, Kamar2, Kamar3 } from "@/components/Modal";

const hoverSounds = () => {
  const audioElement = new Audio("assets/hover.flac");
  audioElement.play();
};

const clickSounds = () => {
  const audioElement = new Audio("assets/click.mp3");
  audioElement.play();
};

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollRight = () => {
    clickSounds();
    if (carouselRef.current) {
      if (carouselRef.current.scrollLeft !== undefined) {
        carouselRef.current.scrollLeft += 440;
      }
    }
  };

  const scrollLeft = () => {
    clickSounds();
    if (carouselRef.current) {
      if (carouselRef.current.scrollLeft !== undefined) {
        carouselRef.current.scrollLeft -= 440;
      }
    }
  };
  const [modal1, setModal1] = useState(false);
  function modalClick1() {
    setModal1(!modal1);
    clickSounds();
  }

  const [modal2, setModal2] = useState(false);
  function modalClick2() {
    setModal2(!modal2);
    clickSounds();
  }

  const [modal3, setModal3] = useState(false);
  function modalClick3() {
    setModal3(!modal3);
    clickSounds();
  }

  return (
    <main>
      <article className="flex flex-col justify-center items-center h-screen gap-4 text-center text-white">
        <h1 className="text-3xl px-12">
          Ardian Boarding House: <b>Where Fun Living Begins!</b>
        </h1>
        <p className="px-8 md:p-0 md:w-[40%]">
          Ardian Boarding House is the finest with its outstanding members being
          great and prosperous individuals.
        </p>
        <button
          onMouseEnter={hoverSounds}
          onClick={clickSounds}
          className={`rounded-full bg-white py-2 px-3 text-black w-fit flex justify-center gap-1 items-center hover:drop-shadow-glow hover:-translate-y-1 transition ease-in-out active:translate-y-1`}
        >
          <h1 className="flex gap-1">Book<b>now!</b></h1>
        </button>
      </article>
      <section className="md:h-screen flex flex-col gap-16">
        <Marquee className="flex flex-row gap-4">
          <div className="flex flex-row gap-4">
            <button onMouseEnter={hoverSounds} onClick={clickSounds} className="aspect-square w-48 rounded-xl bg-red-300 flex-none hover:scale-105 transition ease-in-out grid place-content-center"><img src="/char/1.png"></img></button>
            <button onMouseEnter={hoverSounds} onClick={clickSounds} className="aspect-square w-48 rounded-xl bg-blue-400 flex-none hover:scale-105 transition ease-in-out grid place-content-center"><img src="/char/2.png"></img></button>
            <button onMouseEnter={hoverSounds} onClick={clickSounds} className="aspect-square w-48 rounded-xl bg-green-300 flex-none hover:scale-105 transition ease-in-out grid place-content-center"><img src="/char/3.png"></img></button>
            <button onMouseEnter={hoverSounds} onClick={clickSounds} className="aspect-square w-48 rounded-xl bg-yellow-400 flex-none hover:scale-105 transition ease-in-out grid place-content-center"><img src="/char/1.png"></img></button>
            <button onMouseEnter={hoverSounds} onClick={clickSounds} className="aspect-square w-48 rounded-xl bg-blue-400 flex-none hover:scale-105 transition ease-in-out grid place-content-center"><img src="/char/2.png"></img></button>
            <button onMouseEnter={hoverSounds} onClick={clickSounds} className="aspect-square w-48 rounded-xl bg-yellow-400 flex-none hover:scale-105 transition ease-in-out grid place-content-center"><img src="/char/3.png"></img></button>
            <button onMouseEnter={hoverSounds} onClick={clickSounds} className="aspect-square w-48 rounded-xl bg-green-300 flex-none hover:scale-105 transition ease-in-out grid place-content-center"><img src="/char/1.png"></img></button>
            <button onMouseEnter={hoverSounds} onClick={clickSounds} className="aspect-square w-48 rounded-xl bg-red-300 flex-none hover:scale-105 transition ease-in-out grid place-content-center"><img src="/char/2.png"></img></button>
            <button onMouseEnter={hoverSounds} onClick={clickSounds} className="aspect-square w-48 rounded-xl bg-green-300 flex-none hover:-translate-y-1 transition ease-in-out grid place-content-center"><img src="/char/3.png"></img></button>
          </div>
        </Marquee>
        <menu className="flex flex-col justify-around gap-8 px-12 relative">
          <h1 className="text-white text-xl text-center">Tipe Kamar</h1>
          <div className="flex md:flex-row flex-col gap-4 justify-center">
            <button
              onClick={modalClick1}
              onMouseEnter={hoverSounds}
              className=" md:w-1/3 h-64 rounded-3xl bg-transparent border text-white text-start group hover:drop-shadow-glow hover:scale-105 transition ease-in-out"
            >
              <div className="h-4/5 p-8 overflow-hidden">
                <h1 className="font-bold text-lg">Kamar Lt. 1</h1>
                <p className="text-lg pr-12 font-semibold">450k/bulan</p>
                <p className="text-lg pr-12">
                  Dilengkapi dengan kasur, bantal, guling dan lemari. Luas 3x4m
                </p>
              </div>
              <div className="h-1/5 flex flex-row border-t items-center justify-between px-8">
                <p>Lihat selengkapnya</p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:rotate-90 transition ease-in-out"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.5 18V2H2.5V4H15.5L2.5 17L3.5 18L16.5 5V18H18.5ZM18.5 2H15.5V5H18.5V2Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
            <Kamar1  isOpen={modal1} onClose={modalClick1}/>
            <button
              onClick={modalClick2}
              onMouseEnter={hoverSounds}
              className=" md:w-1/3 h-64 rounded-3xl bg-transparent border text-white text-start group hover:drop-shadow-glow hover:scale-105 transition ease-in-out"
            >
              <div className="h-4/5 p-8 overflow-hidden">
                <h1 className="font-bold text-lg">Kamar Lt. 2</h1>
                <p className="text-lg pr-12 font-semibold">550k/bulan</p>
                <p className="text-lg pr-12">
                  Dilengkapi dengan kasur, bantal, guling dan lemari. Luas 3x4m
                </p>
              </div>
              <div className="h-1/5 flex flex-row border-t items-center justify-between px-8">
                <p>Lihat selengkapnya</p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:rotate-90 transition ease-in-out"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.5 18V2H2.5V4H15.5L2.5 17L3.5 18L16.5 5V18H18.5ZM18.5 2H15.5V5H18.5V2Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
            <Kamar2 isOpen={modal2} onClose={modalClick2}/>
            <button
              onClick={modalClick3}
              onMouseEnter={hoverSounds}
              className=" md:w-1/3 h-64 rounded-3xl bg-transparent border text-white text-start group hover:drop-shadow-glow hover:scale-105 transition ease-in-out"
            >
              <div className="h-4/5 p-8 overflow-hidden">
                <h1 className="font-bold text-lg">Kamar Lt. 3</h1>
                <p className="text-lg pr-12 font-semibold">650k/bulan</p>
                <p className="text-lg pr-12">
                  Dilengkapi dengan kasur, bantal, guling dan lemari. Luas 4x6m
                </p>
              </div>
              <div className="h-1/5 flex flex-row border-t items-center justify-between px-8">
                <p>Lihat selengkapnya</p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:rotate-90 transition ease-in-out"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.5 18V2H2.5V4H15.5L2.5 17L3.5 18L16.5 5V18H18.5ZM18.5 2H15.5V5H18.5V2Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
            <Kamar3 isOpen={modal3} onClose={modalClick3}/>
          </div>
        </menu>
      </section>
      <section className="h-screen flex flex-col justify-around px-12 py-8">
        <h1 className="text-white text-4xl font-bold">
          Shared moment showcase
        </h1>
        <div className="flex flex-row gap-2 h-1/2 overflow-x-scroll whitespace-nowrap transition ease-in-out" ref={carouselRef}>
          <div className="aspect-square md:w-1/3 bg-blue-400 rounded-xl flex-none relative">
            <img
              src="/img/1.webp"
              alt=""
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square md:w-1/3 bg-blue-400 rounded-xl flex-none relative">
            <img
              src="/img/2.webp"
              alt=""
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square md:w-1/3 bg-blue-400 rounded-xl flex-none relative">
            <img
              src="/img/3.webp"
              alt=""
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square md:w-1/3 bg-blue-400 rounded-xl flex-none relative">
            .
          </div>
          <div className="aspect-square md:w-1/3 bg-blue-400 rounded-xl flex-none">
            .
          </div>
        </div>
        <div className="w-fit flex flex-row gap-1">
          <button onMouseEnter={hoverSounds} onClick={scrollLeft} className="aspect-square w-12 rounded-full bg-white grid place-content-center hover:drop-shadow-glow transition ease-in-out hover:-translate-y-1 active:translate-y-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21L4 12H22V11H4L12 2L11 1L2 10L4 12L2 13L11 22L12 21Z"
                fill="#101111"
              />
            </svg>
          </button>
          <button onMouseEnter={hoverSounds} onClick={scrollRight} className="aspect-square w-12 rounded-full bg-white grid place-content-center hover:drop-shadow-glow transition ease-in-out active:translate-y-1 hover:-translate-y-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2L20 11H2V12H20L12 21L13 22L22 13L20 11L22 10L13 1L12 2Z"
                fill="#101111"
              />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
}
