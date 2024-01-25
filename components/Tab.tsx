'use client'
import { Aleo } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const hoverSounds = () => {
  const audioElement = new Audio('assets/hover.flac');
  audioElement.play();
}

const clickSounds = () => {
  const audioElement = new Audio('assets/click.mp3');
  audioElement.play();
}

const aleo = Aleo({ subsets: ["latin"] });

export default function Tab() {
const pathname = usePathname()
  return (
    <div className="w-[100dvw] flex justify-center fixed top-0 py-4 z-10">
      <div className="rounded-full flex flex-row gap-1 items-center bg-primarydark80 p-1 justify-between md:backdrop-blur-sm drop-shadow-xl">
        <Link onMouseEnter={hoverSounds} onClick={clickSounds}
          className={`${pathname === '/home' ? 'text-black bg-white' : 'text-secondary' } rounded-full border py-1 px-2 hover:drop-shadow-glow hover:-translate-y-1 transition ease-in-out ${aleo.className}`}
          href="/home"
        >
          Home
        </Link>
        <Link onMouseEnter={hoverSounds} onClick={clickSounds}
          className={`${pathname === '/debttracker' ? 'text-black bg-white' : 'text-secondary' } rounded-full border py-1 px-2 hover:-translate-y-1 transition ease-in-out hover:drop-shadow-glow ${aleo.className}`}
          href="/debttracker"
        >
          Debt
        </Link>
      </div>
    </div>
  );
}
