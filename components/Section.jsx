export default function Section({ title, description }) {
  return (
    <div className="mt-10">
      <p className="inline-block text-lg font-medium tracking-widest">
        <span className="mr-5">/</span> {title}
      </p>
      <main className="w-2/4 ml-9">{description}</main>
    </div>
  );
}
