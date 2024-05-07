import {GiHelp} from "react-icons/gi";
import {IoHelp} from "react-icons/io5";
import {Down, Download, Help, Message, Search, Sort} from "../icons.jsx";
import {GoChevronDown} from "react-icons/go";
import Table from "./Table.jsx";

const Main = ()=>{
    return <div className={"flex-1 flex flex-col gap-y-8"}>
    {/*    header */}
        <div className={"flex items-center justify-between px-3 py-8 gap-4 border-b h-[64px] sticky top-0 bg-white z-50"}>
            <div className={"flex items-center gap-1.5"}>
                <p>Payments</p>
                <div className={"flex items-center gap-1 text-[#4d4d4d]"}>
                    <Help className={"w-3 h-3"}/>
                    <span className={"text-[12px]"}>How it works</span>
                </div>
            </div>
            <div className={"flex items-center bg-[#F2F2F2]  px-[9px] py-4 rounded-lg gap-x-2 flex-1 max-w-[400px]"}>
                <Search/>
                <input className={"bg-transparent outline-none flex-1"} placeholder={"Search features, tutorials, etc."}/>
            </div>
            <div className={"flex items-center gap-3"}>
                <div className={"w-10 h-10 rounded-full bg-[#E6E6E6] grid place-items-center"}>
                    <Message/>
                </div>
                <div className={"w-10 h-10 rounded-full bg-[#E6E6E6] grid place-items-center"}>
                    <Down/>
                </div>
            </div>
        </div>
    {/*body*/}
        <div className={"px-8 w-full h-full space-y-6"}>
            <div className={"flex items-center justify-between"}>
                <p className={"font-bold text-textColor text-xl"}>Overview</p>
                <div className={"border p-2 rounded flex items-center gap-x-2"}>
                    <span>Last Month</span>
                    <GoChevronDown/>
                </div>
            </div>
            <div className={"flex items-center gap-2"}>
                <div className={"w-full p-4 rounded-2xl  space-y-4 bg-white shadow-[0_2px_6px_#1A181E0A]"}>
                    <small className={"text-sm text-textMuted"}>Online orders</small>
                    <p className={"font-bold text-textColor text-xl"}>231</p>
                </div>
                <div className={"w-full p-4 rounded-2xl  space-y-4 bg-white shadow-[0_2px_6px_#1A181E0A]"}>
                    <small className={"text-sm text-textMuted"}>Amount received</small>
                    <p className={"font-bold text-textColor text-xl"}>₹23,92,312.19</p>
                </div>
            </div>
            <h3 className={"font-medium text-textColor text-xl"} >Transactions | This Month</h3>

            <Table/>

        </div>
    </div>
}
export default Main