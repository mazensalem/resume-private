export default function SideBar() {
  return (
    <aside className="float-none w-screen h-1/4 md:float-left md:w-2/5 md:h-screen flex items-center justify-between md:flex-col">
      <div className="inline-block md:flex md:justify-start md:pl-10 md:w-full text-5xl md:text-6xl">{`<`}</div>
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">MAZEN SALEM</h1>
        <p className="text-lg">Front End Developer</p>
      </main>
      <div className="overflow-y-hidden inline-block md:flex md:justify-end md:pr-10 md:w-full text-5xl md:text-6xl md:h-auto">
        /{`>`}
      </div>
    </aside>
  );
}
