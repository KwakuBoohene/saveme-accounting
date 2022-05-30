import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import useStore from "../../store/store";

export default function SidebarItem(props) {
  const router = useRouter();
  const toggleShowSidebar = useStore((state) => state.toggleShowSidebar);

  const makeRouteSelected = (text) => {
    return router.pathname.includes(text.toLowerCase())
      ? " font-bold  bg-green-primary"
      : " font-normal lg:text-gray-600";
  };

  const changeRoute = (path) => {
    router.push(path);
    toggleShowSidebar();
  };
  return (
    <div
      onClick={() => changeRoute(props.url)}
      className={
        `w-full flex py-3 lg:pl-20 pl-10 hover:scale-110 text-white 
            cursor-pointer transition-all duration-300 ` +
        makeRouteSelected(props.name)
      }
    >
      <div className={"flex"}>
        <div className="">
          <Image
            src={props.icon_src}
            alt={props.icon_alt || "Dashboard Icon"}
            width={20}
            height={20}
          />
        </div>

        <div
          className={`pl-6
                 text-md`}
        >
          {props.name}
        </div>
      </div>
    </div>
  );
}
