import Exper from "./Exper";

export default function Section() {
  return (
    <div className="mt-10 md:mt-5 md:items-start flex flex-col items-center">
      <p className="inline-block text-lg font-medium tracking-widest">
        / PROGRAMIN LANGUAGES
      </p>
      <main className="w-2/4 md:w-full">
        <ul>
          <li className="text-center md:text-left">
            <span>JAVASCRIPT</span>
            <Exper value={5} />
          </li>
          <li className="text-center md:text-left">
            <span>HTML && CSS</span>
            <Exper value={5} />
          </li>
          <li className="text-center md:text-left">
            <span>TYPESCRIPT</span>
            <Exper value={4} />
          </li>
          <li className="text-center md:text-left">
            <span>Tailwind Css</span>
            <Exper value={4} />
          </li>
          <li className="text-center md:text-left">
            <span>GSAP animation</span>
            <Exper value={4} />
          </li>
        </ul>
      </main>
    </div>
  );
}
