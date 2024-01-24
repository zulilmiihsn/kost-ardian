import { Alatsi } from "next/font/google";

const alatsi = Alatsi({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <footer className="bg-[#101111] flex flex-col p-4 text-white">
      <div className="flex justify-between pb-12 border-b">
        <h1 className={`${alatsi.className} text-2xl`}>Ardian</h1>
        <div className="flex gap-2 opacity-65">
          <p>Zul Ilmi Ihsan</p>
          <p>Evan Manuel Tan</p>
        </div>
        <div className="flex flex-row gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0045 5.05854C7.16517 5.05854 4.87499 7.26284 4.87499 9.99565C4.87499 12.7285 7.16517 14.9328 10.0045 14.9328C12.8437 14.9328 15.1339 12.7285 15.1339 9.99565C15.1339 7.26284 12.8437 5.05854 10.0045 5.05854ZM10.0045 13.2054C8.16963 13.2054 6.66963 11.766 6.66963 9.99565C6.66963 8.22534 8.16517 6.78589 10.0045 6.78589C11.8437 6.78589 13.3393 8.22534 13.3393 9.99565C13.3393 11.766 11.8393 13.2054 10.0045 13.2054ZM16.5402 4.85659C16.5402 5.49683 16.0045 6.00815 15.3437 6.00815C14.6786 6.00815 14.1473 5.49253 14.1473 4.85659C14.1473 4.22065 14.683 3.70503 15.3437 3.70503C16.0045 3.70503 16.5402 4.22065 16.5402 4.85659ZM19.9375 6.02534C19.8616 4.48276 19.4955 3.11636 18.3214 1.99058C17.1518 0.864795 15.7321 0.512451 14.1295 0.435107C12.4777 0.344873 7.52678 0.344873 5.87499 0.435107C4.27678 0.508154 2.85713 0.860498 1.68303 1.98628C0.50892 3.11206 0.147313 4.47847 0.0669556 6.02104C-0.0267944 7.61089 -0.0267944 12.3761 0.0669556 13.966C0.142848 15.5085 0.50892 16.875 1.68303 18.0007C2.85713 19.1265 4.27231 19.4789 5.87499 19.5562C7.52678 19.6464 12.4777 19.6464 14.1295 19.5562C15.7321 19.4832 17.1518 19.1308 18.3214 18.0007C19.4911 16.875 19.8571 15.5085 19.9375 13.966C20.0312 12.3761 20.0312 7.61519 19.9375 6.02534ZM17.8036 15.6718C17.4553 16.514 16.7812 17.1628 15.9018 17.5023C14.5848 18.005 11.4598 17.889 10.0045 17.889C8.5491 17.889 5.41963 18.0007 4.10713 17.5023C3.23213 17.1671 2.55803 16.5183 2.20535 15.6718C1.68303 14.4042 1.80356 11.3964 1.80356 9.99565C1.80356 8.59487 1.68749 5.58276 2.20535 4.31948C2.55356 3.47729 3.22767 2.82847 4.10713 2.48901C5.4241 1.98628 8.5491 2.10229 10.0045 2.10229C11.4598 2.10229 14.5893 1.99058 15.9018 2.48901C16.7768 2.82417 17.4509 3.473 17.8036 4.31948C18.3259 5.58706 18.2053 8.59487 18.2053 9.99565C18.2053 11.3964 18.3259 14.4085 17.8036 15.6718Z"
              fill="white"
            />
          </svg>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6429 0H1.3529C0.606473 0 0 0.614955 0 1.36987V17.6301C0 18.385 0.606473 19 1.3529 19H17.6429C18.3893 19 19 18.385 19 17.6301V1.36987C19 0.614955 18.3893 0 17.6429 0ZM5.74241 16.2857H2.92634V7.2183H5.74665V16.2857H5.74241ZM4.33437 5.97991C3.43103 5.97991 2.70156 5.24621 2.70156 4.3471C2.70156 3.44799 3.43103 2.71429 4.33437 2.71429C5.23348 2.71429 5.96719 3.44799 5.96719 4.3471C5.96719 5.25045 5.23772 5.97991 4.33437 5.97991ZM16.2984 16.2857H13.4824V11.875C13.4824 10.8232 13.4612 9.47031 12.0192 9.47031C10.5518 9.47031 10.327 10.6154 10.327 11.7987V16.2857H7.51094V7.2183H10.2125V8.4567H10.2507C10.6281 7.7442 11.5484 6.99353 12.9183 6.99353C15.7683 6.99353 16.2984 8.87232 16.2984 11.3152V16.2857Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="mx-auto p-2">
        <p>Zul Ilmi Ihsan 2024</p>
      </div>
    </footer>
  );
}
