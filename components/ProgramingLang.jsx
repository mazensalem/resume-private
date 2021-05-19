import Exper from "./Exper";

export default function Section() {
  return (
    <div className="mt-5">
      <p className="inline-block text-lg font-medium tracking-widest">
        <span className="mr-5">/</span> PROGRAMIN LANGUAGES
      </p>
      <main className="w-2/4 ml-9">
        <ul>
          <li className="relative">
            <Exper value={5} />
            <span className="ml-36">JAVASCRIPT</span>
          </li>
          <li className="relative">
            <Exper value={5} />
            <span className="ml-36">HTML && CSS</span>
          </li>
          <li className="relative">
            <Exper value={4} />
            <span className="ml-36">TYPESCRIPT</span>
          </li>
          <li className="relative">
            <Exper value={4} />
            <span className="ml-36">SCSS</span>
          </li>
          <li className="relative">
            <Exper value={3} />
            <span className="ml-36">PHP</span>
          </li>
        </ul>
      </main>
    </div>
  );
}
