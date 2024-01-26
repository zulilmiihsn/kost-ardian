"use client";
import Marquee from "react-fast-marquee";
import { useState, useRef } from "react";

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
        <div
          className={`fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[100vh] w-[100vw] backdrop-brightness-50 ${
            modal1 ? "flex" : "hidden"
          }`}
        >
          <div className="w-screen h-screen flex justify-center items-center">
            <div className="animate-slide-up w-[80%] md:w-1/2 h-max bg-main rounded-xl flex flex-col p-4">
              <div className="flex justify-between">
              <h1 className="text-xl text-white font-bold">Kamar Lt. 1</h1>
                <button onClick={modalClick1}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 258 258"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:drop-shadow-glow"
                  >
                    <path
                      d="M128.525 21.4209C107.342 21.4209 86.6346 27.7025 69.0214 39.4713C51.4081 51.2401 37.6803 67.9675 29.5738 87.5383C21.4673 107.109 19.3463 128.644 23.4789 149.421C27.6116 170.197 37.8123 189.281 52.7911 204.26C67.77 219.239 86.8542 229.439 107.63 233.572C128.407 237.705 149.942 235.584 169.513 227.477C189.083 219.371 205.811 205.643 217.58 188.03C229.348 170.416 235.63 149.709 235.63 128.525C235.63 114.46 232.86 100.533 227.477 87.5383C222.095 74.5438 214.205 62.7367 204.26 52.7911C194.314 42.8455 182.507 34.9563 169.513 29.5737C156.518 24.1912 142.591 21.4209 128.525 21.4209ZM128.525 214.209C111.579 214.209 95.0128 209.184 80.9222 199.769C66.8316 190.354 55.8493 176.972 49.3641 161.315C42.8789 145.659 41.1821 128.43 44.4882 111.809C47.7944 95.1884 55.9549 79.921 67.938 67.938C79.9211 55.9549 95.1885 47.7943 111.809 44.4882C128.43 41.1821 145.659 42.8789 161.315 49.3641C176.972 55.8493 190.354 66.8316 199.769 80.9222C209.184 95.0128 214.209 111.579 214.209 128.525C214.209 151.25 205.182 173.044 189.113 189.113C173.044 205.182 151.25 214.209 128.525 214.209Z"
                      fill="white"
                    />
                    <path
                      d="M157.551 99.4994C156.555 98.4956 155.371 97.6988 154.065 97.155C152.76 96.6113 151.36 96.3313 149.946 96.3313C148.532 96.3313 147.133 96.6113 145.827 97.155C144.522 97.6988 143.338 98.4956 142.342 99.4994L128.525 113.423L114.709 99.4994C112.692 97.4826 109.957 96.3496 107.105 96.3496C104.252 96.3496 101.517 97.4826 99.5002 99.4994C97.4833 101.516 96.3503 104.252 96.3503 107.104C96.3503 109.956 97.4833 112.691 99.5002 114.708L113.424 128.525L99.5002 142.341C98.4963 143.337 97.6995 144.522 97.1557 145.827C96.612 147.132 96.332 148.532 96.332 149.946C96.332 151.36 96.612 152.759 97.1557 154.065C97.6995 155.37 98.4963 156.554 99.5002 157.55C100.496 158.554 101.68 159.351 102.986 159.895C104.291 160.438 105.691 160.718 107.105 160.718C108.518 160.718 109.918 160.438 111.224 159.895C112.529 159.351 113.713 158.554 114.709 157.55L128.525 143.627L142.342 157.55C143.338 158.554 144.522 159.351 145.827 159.895C147.133 160.438 148.532 160.718 149.946 160.718C151.36 160.718 152.76 160.438 154.065 159.895C155.371 159.351 156.555 158.554 157.551 157.55C158.555 156.554 159.351 155.37 159.895 154.065C160.439 152.759 160.719 151.36 160.719 149.946C160.719 148.532 160.439 147.132 159.895 145.827C159.351 144.522 158.555 143.337 157.551 142.341L143.627 128.525L157.551 114.708C158.555 113.713 159.351 112.528 159.895 111.223C160.439 109.918 160.719 108.518 160.719 107.104C160.719 105.69 160.439 104.29 159.895 102.985C159.351 101.68 158.555 100.495 157.551 99.4994Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <div className="py-8 flex flex-col justify-between gap-4 h-full">
                <p className="text-sm md:text-lg text-white">Dilengkapi dengan kasur, bantal, guling, dan lemari di tiap kamarnya. Lantai 1 memiliki dapur umum serta dua kamar mandi bersama. Sementara Gas pada dapur umum dibayar dengan sistem urunan bersama penghuni lantai 1 lainnya</p>
                <div className="flex justify-center gap-2">
                  <div className="w-1/3 aspect-square rounded-lg bg-blue-500"></div>
                  <div className="w-1/3 aspect-square rounded-lg bg-blue-500"></div>
                  <div className="w-1/3 aspect-square rounded-lg bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[100vh] w-[100vw] backdrop-brightness-50 ${
            modal2 ? "flex" : "hidden"
          }`}
        >
          <div className="w-screen h-screen flex justify-center items-center">
          <div className="animate-slide-up w-[80%] md:w-1/2 h-max bg-main rounded-xl flex flex-col p-4">
              <div className="flex justify-between">
              <h1 className="text-lg text-white font-bold">Kamar Lt. 2</h1>
                <button onClick={modalClick2}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 258 258"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:drop-shadow-glow"
                  >
                    <path
                      d="M128.525 21.4209C107.342 21.4209 86.6346 27.7025 69.0214 39.4713C51.4081 51.2401 37.6803 67.9675 29.5738 87.5383C21.4673 107.109 19.3463 128.644 23.4789 149.421C27.6116 170.197 37.8123 189.281 52.7911 204.26C67.77 219.239 86.8542 229.439 107.63 233.572C128.407 237.705 149.942 235.584 169.513 227.477C189.083 219.371 205.811 205.643 217.58 188.03C229.348 170.416 235.63 149.709 235.63 128.525C235.63 114.46 232.86 100.533 227.477 87.5383C222.095 74.5438 214.205 62.7367 204.26 52.7911C194.314 42.8455 182.507 34.9563 169.513 29.5737C156.518 24.1912 142.591 21.4209 128.525 21.4209ZM128.525 214.209C111.579 214.209 95.0128 209.184 80.9222 199.769C66.8316 190.354 55.8493 176.972 49.3641 161.315C42.8789 145.659 41.1821 128.43 44.4882 111.809C47.7944 95.1884 55.9549 79.921 67.938 67.938C79.9211 55.9549 95.1885 47.7943 111.809 44.4882C128.43 41.1821 145.659 42.8789 161.315 49.3641C176.972 55.8493 190.354 66.8316 199.769 80.9222C209.184 95.0128 214.209 111.579 214.209 128.525C214.209 151.25 205.182 173.044 189.113 189.113C173.044 205.182 151.25 214.209 128.525 214.209Z"
                      fill="white"
                    />
                    <path
                      d="M157.551 99.4994C156.555 98.4956 155.371 97.6988 154.065 97.155C152.76 96.6113 151.36 96.3313 149.946 96.3313C148.532 96.3313 147.133 96.6113 145.827 97.155C144.522 97.6988 143.338 98.4956 142.342 99.4994L128.525 113.423L114.709 99.4994C112.692 97.4826 109.957 96.3496 107.105 96.3496C104.252 96.3496 101.517 97.4826 99.5002 99.4994C97.4833 101.516 96.3503 104.252 96.3503 107.104C96.3503 109.956 97.4833 112.691 99.5002 114.708L113.424 128.525L99.5002 142.341C98.4963 143.337 97.6995 144.522 97.1557 145.827C96.612 147.132 96.332 148.532 96.332 149.946C96.332 151.36 96.612 152.759 97.1557 154.065C97.6995 155.37 98.4963 156.554 99.5002 157.55C100.496 158.554 101.68 159.351 102.986 159.895C104.291 160.438 105.691 160.718 107.105 160.718C108.518 160.718 109.918 160.438 111.224 159.895C112.529 159.351 113.713 158.554 114.709 157.55L128.525 143.627L142.342 157.55C143.338 158.554 144.522 159.351 145.827 159.895C147.133 160.438 148.532 160.718 149.946 160.718C151.36 160.718 152.76 160.438 154.065 159.895C155.371 159.351 156.555 158.554 157.551 157.55C158.555 156.554 159.351 155.37 159.895 154.065C160.439 152.759 160.719 151.36 160.719 149.946C160.719 148.532 160.439 147.132 159.895 145.827C159.351 144.522 158.555 143.337 157.551 142.341L143.627 128.525L157.551 114.708C158.555 113.713 159.351 112.528 159.895 111.223C160.439 109.918 160.719 108.518 160.719 107.104C160.719 105.69 160.439 104.29 159.895 102.985C159.351 101.68 158.555 100.495 157.551 99.4994Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <div className="py-8 flex flex-col justify-between gap-4 h-full">
                <p className="text-sm md:text-lg text-white">Dilengkapi dengan kasur, bantal, guling, dan lemari di tiap kamarnya. Lantai 1 memiliki dapur umum serta dua kamar mandi bersama, Balkon untuk jemuran serta sinar matahari langsung. Sementara Gas pada dapur umum dibayar dengan sistem urunan bersama penghuni lantai 2 lainnya</p>
                <div className="flex justify-center gap-2">
                  <div className="w-1/3 aspect-square rounded-lg bg-blue-500"></div>
                  <div className="w-1/3 aspect-square rounded-lg bg-blue-500"></div>
                  <div className="w-1/3 aspect-square rounded-lg bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[100vh] w-[100vw] backdrop-brightness-50 ${
            modal3 ? "flex" : "hidden"
          }`}
        >
          <div className="w-screen h-screen flex justify-center items-center">
          <div className="animate-slide-up w-[80%] md:w-1/2 h-max bg-main rounded-xl flex flex-col p-4">
              <div className="flex justify-between">
              <h1 className="text-lg text-white font-bold">Kamar Lt. 3</h1>
                <button onClick={modalClick3}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 258 258"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:drop-shadow-glow"
                  >
                    <path
                      d="M128.525 21.4209C107.342 21.4209 86.6346 27.7025 69.0214 39.4713C51.4081 51.2401 37.6803 67.9675 29.5738 87.5383C21.4673 107.109 19.3463 128.644 23.4789 149.421C27.6116 170.197 37.8123 189.281 52.7911 204.26C67.77 219.239 86.8542 229.439 107.63 233.572C128.407 237.705 149.942 235.584 169.513 227.477C189.083 219.371 205.811 205.643 217.58 188.03C229.348 170.416 235.63 149.709 235.63 128.525C235.63 114.46 232.86 100.533 227.477 87.5383C222.095 74.5438 214.205 62.7367 204.26 52.7911C194.314 42.8455 182.507 34.9563 169.513 29.5737C156.518 24.1912 142.591 21.4209 128.525 21.4209ZM128.525 214.209C111.579 214.209 95.0128 209.184 80.9222 199.769C66.8316 190.354 55.8493 176.972 49.3641 161.315C42.8789 145.659 41.1821 128.43 44.4882 111.809C47.7944 95.1884 55.9549 79.921 67.938 67.938C79.9211 55.9549 95.1885 47.7943 111.809 44.4882C128.43 41.1821 145.659 42.8789 161.315 49.3641C176.972 55.8493 190.354 66.8316 199.769 80.9222C209.184 95.0128 214.209 111.579 214.209 128.525C214.209 151.25 205.182 173.044 189.113 189.113C173.044 205.182 151.25 214.209 128.525 214.209Z"
                      fill="white"
                    />
                    <path
                      d="M157.551 99.4994C156.555 98.4956 155.371 97.6988 154.065 97.155C152.76 96.6113 151.36 96.3313 149.946 96.3313C148.532 96.3313 147.133 96.6113 145.827 97.155C144.522 97.6988 143.338 98.4956 142.342 99.4994L128.525 113.423L114.709 99.4994C112.692 97.4826 109.957 96.3496 107.105 96.3496C104.252 96.3496 101.517 97.4826 99.5002 99.4994C97.4833 101.516 96.3503 104.252 96.3503 107.104C96.3503 109.956 97.4833 112.691 99.5002 114.708L113.424 128.525L99.5002 142.341C98.4963 143.337 97.6995 144.522 97.1557 145.827C96.612 147.132 96.332 148.532 96.332 149.946C96.332 151.36 96.612 152.759 97.1557 154.065C97.6995 155.37 98.4963 156.554 99.5002 157.55C100.496 158.554 101.68 159.351 102.986 159.895C104.291 160.438 105.691 160.718 107.105 160.718C108.518 160.718 109.918 160.438 111.224 159.895C112.529 159.351 113.713 158.554 114.709 157.55L128.525 143.627L142.342 157.55C143.338 158.554 144.522 159.351 145.827 159.895C147.133 160.438 148.532 160.718 149.946 160.718C151.36 160.718 152.76 160.438 154.065 159.895C155.371 159.351 156.555 158.554 157.551 157.55C158.555 156.554 159.351 155.37 159.895 154.065C160.439 152.759 160.719 151.36 160.719 149.946C160.719 148.532 160.439 147.132 159.895 145.827C159.351 144.522 158.555 143.337 157.551 142.341L143.627 128.525L157.551 114.708C158.555 113.713 159.351 112.528 159.895 111.223C160.439 109.918 160.719 108.518 160.719 107.104C160.719 105.69 160.439 104.29 159.895 102.985C159.351 101.68 158.555 100.495 157.551 99.4994Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <div className="py-8 flex flex-col justify-between gap-4 h-full">
                <p className="text-sm md:text-lg text-white">Dilengkapi dengan kasur, bantal, guling, dan lemari di tiap kamarnya, serta kamar lebih luas dibanding lantai lainnya. Lantai 1 memiliki dapur umum serta dua kamar mandi bersama, dan area outdoor untuk jemuran. Sementara Gas pada dapur umum dibayar dengan sistem urunan bersama penghuni lantai 1 lainnya</p>
                <div className="flex justify-center gap-2">
                  <div className="w-1/3 aspect-square rounded-lg bg-blue-500"></div>
                  <div className="w-1/3 aspect-square rounded-lg bg-blue-500"></div>
                  <div className="w-1/3 aspect-square rounded-lg bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <menu className="flex flex-col justify-around gap-8 px-12 relative">
          <h1 className="text-white text-xl text-center">Tipe Kamar</h1>
          <div className="flex md:flex-row flex-col gap-4 justify-center">
            <button
              onClick={modalClick1}
              onMouseEnter={hoverSounds}
              className=" md:w-1/3 h-64 rounded-3xl bg-transparent border text-white text-start group hover:drop-shadow-glow hover:scale-105 transition ease-in-out"
            >
              <input
                type="checkbox"
                checked={modal1}
                onChange={modalClick1}
                className="hidden"
              />
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
            <button
              onClick={modalClick2}
              onMouseEnter={hoverSounds}
              className=" md:w-1/3 h-64 rounded-3xl bg-transparent border text-white text-start group hover:drop-shadow-glow hover:scale-105 transition ease-in-out"
            >
              <input
                type="checkbox"
                checked={modal2}
                onChange={modalClick2}
                className="hidden"
              />
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
            <button
              onClick={modalClick3}
              onMouseEnter={hoverSounds}
              className=" md:w-1/3 h-64 rounded-3xl bg-transparent border text-white text-start group hover:drop-shadow-glow hover:scale-105 transition ease-in-out"
            >
              <input
                type="checkbox"
                checked={modal3}
                onChange={modalClick3}
                className="hidden"
              />
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
