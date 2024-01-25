import { Alatsi, Aleo } from "next/font/google";

const alatsi = Alatsi({
  subsets: ["latin"],
  weight: "400",
});

const aleo = Aleo({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className="bg-transparent w-[100dvw] top-0 flex justify-between px-12 py-4 fixed z-10">
      <div className="flex justify-between w-full">
        <h1 className={`text-white ${alatsi.className} text-4xl drop-shadow-xl`}>A</h1>
        <button
          className={`rounded-full py-2 px-3 md:w-[10%] bg-primarydark80 lg:backdrop-blur-sm ${aleo.className} text-secondary drop-shadow-xl`}
        >
          Login
        </button>
      </div>
    </nav>
  );
}
