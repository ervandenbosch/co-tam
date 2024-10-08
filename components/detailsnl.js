import Link from "next/link";
import { cdnImage } from "./utils";

export function DetailsNL() {
  return (
    <div className="flex flex-row flex-wrap justify-around bg-gray-700 py-8 text-gray-300">
      <div className="mt-4 sm:px-6">
        <b>Cô Tâm Vietnamees Restaurant</b>
        <br />
        Spaarne 104 <br />
        2011 CM Haarlem <br />
        <br />
        <b>Route naar Cô Tâm Restaurant</b>
        <br />
        De dichtstbijzijnde bushalte is
        <a
          href="https://www.google.com/maps/place/Centrum%2FVerwulft/@52.380401,4.63256,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5ef6b2f741257:0x70b30bb02f11ff82!8m2!3d52.380401!4d4.63256"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a className="text-yellow-500 hover:text-blue-400">
            {" "}
            Centrum/Verwulft
          </a>
        </a>
        <br />
        De dichtstbijzijnde parkeergarage is
        <a
          href="https://www.google.com/maps/place/Parkeergarage+de+Kamp/@52.3774357,4.6281807,15z/data=!3m1!4b1!4m5!3m4!1s0x47c5ef6a0bd632a5:0xc5b40fd003a4c966!8m2!3d52.3772006!4d4.6370498"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a className="text-yellow-500 hover:text-blue-400"> De Kamp</a>
        </a>
        <br />
        <br />
        <b>Telefoonnummer:</b> <br />
        <Link href="tel:023-583-4384">
          <a className="text-yellow-500 hover:text-blue-400">(023) 583 4384</a>
        </Link>
      </div>
      <div className="mt-2 flex flex-row px-6 sm:mb-4 sm:mt-10">
        <ul className="mr-8 font-bold">
          <li className="py-1">Ma</li>
          <li className="py-1">Di </li>
          <li className="py-1">Wo</li>
          <li className="py-1">Do</li>
          <li className="py-1">Vrij</li>
          <li className="py-1">Zat</li>
          <li className="py-1">Zon</li>
          <br />
        </ul>
        <ul>
          <li className="py-1">Gesloten</li>
          <li className="py-1">Gesloten</li>
          <li className="py-1">17:00 - 22:00</li>
          <li className="py-1">17:00 - 22:00</li>
          <li className="py-1">17:00 - 23:00</li>
          <li className="py-1">17:00 - 23:00</li>
          <li className="py-1">17:00 - 22:00</li>
          <br />
        </ul>
      </div>
      <div className="mt-6 flex flex-col md:m-8 sm:mt-2">
        <Link
          href="https://www.google.com/maps/place/C%C3%B4+T%C3%A2m+Restaurant/@52.3791754,4.6353804,16.33z/data=!4m12!1m6!3m5!1s0x47c5ef611944cb6f:0x18c54ffd336c3bac!2zQ8O0IFTDom0gUmVzdGF1cmFudA!8m2!3d52.3783644!4d4.6377021!3m4!1s0x47c5ef611944cb6f:0x18c54ffd336c3bac!8m2!3d52.3783644!4d4.6377021?authuser=1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button alt="Richtingaanwijzingen naar Co Tam">
            <img
              src={cdnImage("location.webp")}
              alt="Locatie co tam restaurant"
              width="300"
              height="220"
            />
          </button>
        </Link>
        <Link
          href="https://www.google.com/maps/place/C%C3%B4+T%C3%A2m+Restaurant/@52.3791754,4.6353804,16.33z/data=!4m12!1m6!3m5!1s0x47c5ef611944cb6f:0x18c54ffd336c3bac!2zQ8O0IFTDom0gUmVzdGF1cmFudA!8m2!3d52.3783644!4d4.6377021!3m4!1s0x47c5ef611944cb6f:0x18c54ffd336c3bac!8m2!3d52.3783644!4d4.6377021?authuser=1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button
            className="m-auto mt-6 w-[100px] rounded-lg bg-[#F7C12F] p-2 text-center text-black hover:shadow-inner hover:shadow-gray-900"
            alt="Richtingaanwijzingen naar Co Tam"
          >
            Naar Maps
          </button>
        </Link>
      </div>
    </div>
  );
}
