import Image from "next/image";

export default function Card(props) {
  return (
    <div className="px-4 py-2 rounded-lg bg-white w-full shadow-lg shadow-gray-200">
      <div className="text-gray-400 text sm font-bold mt-2">
        {props.name}
        <span className="pl-3">
          <Image
            src={
              props.upwards
                ? "/assets/icons/icon-green-arrow-up.svg"
                : "/assets/icons/icon-red-arrow-down.svg"
            }
            alt="Icon green arrow"
            width={10}
            height={10}
          />
        </span>
        {props.percentage ? (
          <span className="mx-2">{props.percentage}%</span>
        ) : null}
      </div>

      <div className="text-gray-900 text-lg font-semibold mb-2">
        $ {props.amount}
      </div>

      <div
        className={`my-2 h-1 ${props.bar_color || "bg-green-400"} rounded-xl`}
      ></div>
    </div>
  );
}
