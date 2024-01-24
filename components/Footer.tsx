import { Alatsi } from "next/font/google";

const alatsi = Alatsi({
  subsets: ["latin"], 
  weight: "400"
})

export default function Footer() {
  return (
    <footer className="bg-[#101111] flex flex-col p-4 text-white">
      <div className="flex justify-between pb-12 border-b">
        <h1 className={`${alatsi.className} text-2xl`}>Ardian</h1>
        <div className="flex gap-2 opacity-65">
          <p>Zul Ilmi Ihsan</p>
          <p>Evan Manuel Tan</p>
        </div>
        <div className="flex gap-1">
          IG
          Linkedin
        </div>
      </div>
      <div className="mx-auto p-2">
        <p>Zul Ilmi Ihsan 2024</p>
      </div>
    </footer>
  );
}
