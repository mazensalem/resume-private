export default function Section({ title, description }) {
  return (
    <div className="mt-10 md:mt-2 flex flex-col items-center md:items-start">
      <p className="inline-block text-lg font-medium tracking-widest">
        / {title}
      </p>
      <main className="w-2/4 md:w-3/4">{description}</main>
    </div>
  );
}
