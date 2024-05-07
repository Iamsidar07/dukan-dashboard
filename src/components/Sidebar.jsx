import { CiWallet } from "react-icons/ci";
import { GoChevronDown, GoHome } from "react-icons/go";
import { HiOutlineMenu } from "react-icons/hi";
import { BiHome } from "react-icons/bi";
import {
  Appearance,
  Audience,
  Delivery,
  Discount,
  Marketing,
  Orders,
  Payment,
  Plugins,
  Products,
  Tools,
} from "../icons";

const Sidebar = () => {
  const navItems = [
    {
      name: "Home",
      icon: GoHome,
      link: "#",
    },
    {
      name: "Orders",
      icon: Orders,
      link: "#",
    },
    {
      name: "Products",
      icon: Products,
      link: "#",
    },
    {
      name: "Delivery",
      icon: Delivery,
      link: "#",
    },
    {
      name: "Marketing",
      icon: Marketing,
      link: "#",
    },
    {
      name: "Payments",
      icon: Payment,
      link: "#",
      isActive: true,
    },
    {
      name: "Tools",
      icon: Tools,
      link: "#",
    },
    {
      name: "Discount",
      icon: Discount,
      link: "#",
    },
    {
      name: "Audience",
      icon: Audience,
      link: "#",
    },
    {
      name: "Appearance",
      icon: Appearance,
      link: "#",
    },

    {
      name: "Plugins",
      icon: Plugins,
      link: "#",
    },
  ];

  return (
    <div
      className={
        "min-h-screen h-full w-[224px] border-r p-2 flex flex-col justify-between bg-dark text-white sticky top-0"
      }
    >
      <div className={"flex flex-col gap-y-1.5"}>
        <div className={"flex items-center justify-between"}>
          <div className={"flex items-center gap-x-2"}>
            <img src={"/img.png"} alt={"logo"} className={"rounded w-10"} />
            <div>
              <h2 className={"text-[15px]"}>Nishyan</h2>
              <a href={"#"} className={"underline text-[#d2d4d9] text-[14px]"}>
                Visit store
              </a>
            </div>
          </div>
          <GoChevronDown className={"w-4 h-4"} />
        </div>
        <div className={"flex flex-col gap-y-1.5 mt-4 "}>
          {navItems.map((item) => {
            return (
              <a
                href={item.link}
                key={item.name}
                className={`inline-flex items-center gap-x-2 cursor-pointer p-2 rounded hover:bg-lightDark transition-colors ${item.isActive && "bg-lightDark"}`}
              >
                <item.icon className={"h-5 w-5"} />
                <span className={"text-[14px]"}>{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>
      <div
        className={
          "bg-lightDark px-[6px] py-[12px] flex items-center gap-2 rounded"
        }
      >
        <div className={"bg-[#494f64] p-[6px] rounded"}>
          <CiWallet className={"w-5 h-5 text-white"} />
        </div>
        <div className={""}>
          <p className={"text-[#d7d8dd] text-sm"}>Available credits</p>
          <span className={"text-[16px]"}>222.10</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
