import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SidebarItem(props) {
  const router = useRouter();

  const makeRouteSelected = (text) => {
    if (router.pathname.includes(text.toLowerCase())) {
      return " font-bold";
    } else {
      return " font-normal";
    }
  };
  return (
    <Link passHref={true} href={props.url || "/"}>
      <div
        className="w-full flex py-3 pl-20 hover:bg-green-third
            hover:cursor-pointer transition-all duration-300"
      >
        <div className="">
          <Image
            src={props.icon_src}
            alt={props.icon_alt || "Dashboard Icon"}
            width={20}
            height={20}
          />
        </div>

        <div
          className={
            `pl-6
                 text-md text-white` + makeRouteSelected(props.name)
          }
        >
          {props.name}
        </div>
      </div>
    </Link>
  );
}
