import React from "react";
import { FaSearch } from "react-icons/fa";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import EarningChart from "./EarningChart";

const Dashboard = () => {
  const stats = [
    {
      title: "Earning",
      amount: "$198k",
      percentage: "+37.8%",
    },
    {
      title: "Orders",
      amount: "$2.8k",
      percentage: "+2%",
    },
    {
      title: "Balance",
      amount: "$2.4k",
      percentage: "+2%",
    },
    {
      title: "Total Sales",
      amount: "$89k",
      percentage: "+11%",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold">Hello Sharukh,</h2>
        <div className="flex items-center border border-gray-300 rounded-md px-1 py-1">
          <FaSearch className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none px-2 py-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats?.map((item, index) => {
          return (
            <div className="flex items-center bg-[#ffffff] rounded-lg px-2 py-3">
              <div className="flex justify-center items-center rounded-full w-[100px] h-[100px] bg-[#e7dbff]">
                <MonetizationOnOutlinedIcon
                  sx={{ color: "#a100fe", width: "50%", height: "50%" }}
                />
              </div>
              <div className="mx-3">
                <h1 className="text-sm text-[#b6b6b6]">{item.title}</h1>
                <p className="font-bold text-[24px]">{item.amount}</p>
                <p className="text-sm">
                  <span className="text-[#11ae54] font-bold">
                    {item.percentage}
                  </span>{" "}
                  this month
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <EarningChart />
      </div>
    </div>
  );
};

export default Dashboard;
