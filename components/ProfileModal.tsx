interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileData: {
    name?: string;
    imageSrc?: string;
    room?: string;
    desc?: string;
    insta?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export default function ProfileModal({
  isOpen,
  onClose,
  profileData,
}: ProfileModalProps) {
  return (
    <div
      className={`fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[100vh] w-[100vw] backdrop-brightness-50 ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="animate-slide-up w-[80%] md:w-1/2 h-[70%] bg-main rounded-xl flex flex-col">
          <div className="h-[30%] backdrop-brightness-50 relative p-2">
            <div className="flex justify-end">
              <button onClick={onClose}>
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
            <div className="w-24 rounded-full aspect-square bg-white absolute -bottom-12 left-8 overflow-hidden">
              <img src={profileData.imageSrc} alt={profileData.name} />
            </div>
            <button className="bg-primarydark80 rounded-xl p-1 text-white absolute right-4 top-[40%]">
              Send a message
            </button>
          </div>
          <div className="h-[70%] p-2 flex flex-row gap-2 pt-14">
            <div className="w-[25%] flex flex-col gap-2">
              <button className="h-12 bg-[#D43377] rounded-xl text-white font-semibold flex justify-evenly items-center"><svg className="w-8" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.8513 2.5H15.1486C8.16299 2.5 2.5 8.16299 2.5 15.1486V37.8513C2.5 44.837 8.16299 50.5 15.1486 50.5H37.8513C44.837 50.5 50.5 44.837 50.5 37.8513V15.1486C50.5 8.16299 44.837 2.5 37.8513 2.5Z" stroke="white" stroke-width="4"/>
<path d="M26.5 37.6892C32.6796 37.6892 37.6892 32.6796 37.6892 26.5C37.6892 20.3204 32.6796 15.3108 26.5 15.3108C20.3204 15.3108 15.3108 20.3204 15.3108 26.5C15.3108 32.6796 20.3204 37.6892 26.5 37.6892Z" stroke="white" stroke-width="4"/>
<path d="M40.6082 15.473C42.3098 15.473 43.6893 14.0935 43.6893 12.3919C43.6893 10.6902 42.3098 9.31079 40.6082 9.31079C38.9065 9.31079 37.5271 10.6902 37.5271 12.3919C37.5271 14.0935 38.9065 15.473 40.6082 15.473Z" fill="white"/>
</svg>{profileData.insta}</button>
              <button className="h-12 bg-[#0177B5] rounded-xl text-white font-semibold flex justify-evenly items-center"><svg className="w-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.794028 15.9503H10.7561V47.9979H0.794028V15.9503ZM5.76771 3.43458e-06C8.94592 3.43458e-06 11.5291 2.58773 11.5291 5.7715C11.5291 8.95527 8.94592 11.5493 5.7698 11.5493C4.24094 11.546 2.77561 10.9362 1.69434 9.85348C0.613072 8.77071 0.00387396 7.30304 0 5.7715C-4.50523e-07 5.01305 0.149231 4.26203 0.439162 3.56139C0.729094 2.86075 1.15404 2.22423 1.6897 1.68821C2.22537 1.15219 2.86124 0.727199 3.56098 0.437525C4.26071 0.14785 5.01058 -0.00082397 5.76771 3.43458e-06ZM16.9763 15.9503H26.513V20.3304H26.645C27.9733 17.8119 31.2164 15.1549 36.0728 15.1549C46.1417 15.1549 48 21.7932 48 30.4211V48H38.0631V32.4107C38.0631 28.6959 37.9961 23.9108 32.8967 23.9108C27.7219 23.9108 26.9258 27.9613 26.9258 32.1378V47.9916H16.991V15.944L16.9763 15.9503Z" fill="white"/>
</svg>{profileData.linkedin}</button>
              <button className="h-12 bg-[#ED1D24] rounded-xl text-white font-semibold flex justify-evenly items-center"><svg className="w-8" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.0896 5.78118C46.5501 3.50691 44.7967 1.6875 42.7735 1.08103C38.1877 -0.283537 10.5379 -0.435155 5.27773 1.08103C3.25457 1.6875 1.50117 3.50691 0.961663 5.78118C-0.25223 11.5427 -0.387107 26.2496 0.961663 32.1627C1.50117 34.437 3.25457 36.2564 5.27773 36.8629C10.1333 38.379 37.7831 38.379 42.7735 36.8629C44.7967 36.2564 46.5501 34.437 47.0896 32.1627C48.3035 26.7045 48.3035 11.391 47.0896 5.78118Z" fill="white"/>
<path d="M19.1699 10.9363V27.0078L31.7135 18.972" fill="#ED1D24"/>
</svg>{profileData.youtube}</button>
              <button className="h-12 bg-[#D9D9D9] rounded-xl text-gray-500 font-semibold flex justify-evenly items-center">Locked</button>
            </div>
            <div className="w-[75%] flex flex-col">
              <div>
                <h1 className="text-white text-2xl">{profileData.name}</h1>
                <h2 className="text-white text-xl">{profileData.room}</h2>
              </div>
              <div>
                <p className="text-white text-lg">{profileData.desc}</p>
                <p className="text-white text-lg">{profileData.insta}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
