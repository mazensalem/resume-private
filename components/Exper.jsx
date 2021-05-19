export default function Exper({ value }) {
  return (
    <div className="flex items-center justify-around absolute left-0 w-32 h-full">
      <div
        className={`${value >= 1 ? "bg-gray-400" : "bg-gray-200"} w-5 h-5`}
      ></div>
      <div
        className={`${value >= 2 ? "bg-gray-400" : "bg-gray-200"} w-5 h-5`}
      ></div>
      <div
        className={`${value >= 3 ? "bg-gray-400" : "bg-gray-200"} w-5 h-5`}
      ></div>
      <div
        className={`${value >= 4 ? "bg-gray-400" : "bg-gray-200"} w-5 h-5`}
      ></div>
      <div
        className={`${value >= 5 ? "bg-gray-400" : "bg-gray-200"} w-5 h-5`}
      ></div>
    </div>
  );
}
