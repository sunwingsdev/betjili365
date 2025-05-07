import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdAlarm } from "react-icons/io";
import { MdPushPin } from "react-icons/md";
import { Link } from "react-router-dom";

const ExchangeDynamicTable = ({ tableData }) => {
  if (!tableData || tableData.length === 0) {
    return (
      <p className="py-2 ps-2 text-black border-b border-b-black border-opacity-45">
        There is no events to be displayed.
      </p>
    );
  }
  return (
    <table className="min-w-full table-auto border-collapse border border-gray-300">
      <tbody>
        {tableData?.map((row, i) => (
          <tr key={i}>
            <td>
              <div className="flex flex-row items-center justify-between mx-2 my-1">
                <div className="flex flex-row items-start gap-2">
                  {/* online status icon  */}
                  <div
                    className={`w-2 h-2 border rounded-full ${
                      row?.onlineStatus === "online"
                        ? "bg-green-700 border-slate-700"
                        : "bg-green-300 border-slate-500"
                    }`}
                  ></div>
                  <div className="flex flex-col items-start gap-2">
                    <Link
                      to={row?.link}
                      className="text-blue-600 text-sm font-bold hover:underline leading-3 whitespace-nowrap"
                    >
                      {row?.teams}
                    </Link>

                    <div className="flex flex-row items-center gap-3">
                      {row?.status === "in-play" && (
                        <p className="text-green-500 text-sm font-bold">
                          In-Play
                        </p>
                      )}
                      {row?.status === "Starting in 1 min" && (
                        <p className="text-slate-400 text-sm">
                          Starting in 1 min
                        </p>
                      )}
                      {row?.status === "Tomorrow 00:00" && (
                        <p className="text-slate-400 text-sm">Tomorrow 00:00</p>
                      )}
                      {row?.category === "e-cricket" && (
                        <div className="border border-blue-700 flex flex-row items-center gap-2 w-fit pe-2 rounded-md">
                          <span className="bg-blue-700 text-white font-bold text-xs ps-2 pe-2 rounded-s-md ">
                            E
                          </span>
                          <span className="text-blue-700 text-xs">Cricket</span>
                        </div>
                      )}
                      {row?.action === "live" && (
                        <div className="bg-[#1a77b3] p-1 rounded-md">
                          <FaRegCirclePlay className="text-white" size={10} />
                        </div>
                      )}
                      {(Array.isArray(row?.tag) ? row?.tag : [row?.tag])?.map(
                        (t, j) => (
                          <div key={j}>
                            {t === "P" && (
                              <p className="bg-orange-500 py-0 px-1.5 text-white italic font-bold text-sm w-fit rounded-md">
                                P
                              </p>
                            )}
                            {t === "F" && (
                              <div className="flex flex-row items-center">
                                <div className="bg-green-500 p-1 rounded-s-md">
                                  <IoMdAlarm className="text-white" size={12} />
                                </div>
                                <div className="bg-[#1a77b3] py-0 px-2 text-white italic font-bold text-sm w-fit rounded-e-md">
                                  F
                                </div>
                              </div>
                            )}
                            {t === "B" && (
                              <div className="flex flex-row items-center">
                                <div className="bg-green-500 p-1 rounded-s-md">
                                  <IoMdAlarm className="text-white" size={12} />
                                </div>
                                <div className="bg-[#1a77b3] py-0 px-2 text-white italic font-bold text-sm w-fit rounded-e-md">
                                  B
                                </div>
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-slate-500 text-xs">{row?.amount}</p>
                </div>
              </div>
            </td>
            {row?.values?.map((value, j) => (
              <td
                key={j}
                className={`text-xs ${
                  j % 2 === 0 ? "bg-blue-400" : "bg-red-300"
                } w-16 text-center border border-white`}
              >
                {value}
              </td>
            ))}
            <td className="w-12 h-12 flex items-center justify-center">
              <MdPushPin className="text-slate-400 border border-slate-400 rounded-full text-sm cursor-pointer hover:text-blue-500" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExchangeDynamicTable;
