export default function SideBar() {
  return (
    <aside className="float-left w-2/5 h-screen relative">
      <div className="inline-block text-6xl absolute top-0 left-20">{`<`}</div>
      <main className="inline-block relative top-80 left-36">
        <h1 className="text-5xl">MAZEN SALEM</h1>
        <p className="ml-20 text-lg">Front End Developer</p>
      </main>
      <div className="inline-block text-6xl absolute bottom-10 left-20">
        /{`>`}
      </div>
    </aside>
  );
}
