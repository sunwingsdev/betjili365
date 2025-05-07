import DynamicTable from "@/components/shared/tables/DynamicTable";
// import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";
import { Link } from "react-router-dom";

const Games = () => {
  const data = [
    {
      gamename: "Agent010",
      position: 8,
      href: 5300,
      countusers: 2300,
      create: 14,
      status: "inactive",
    },
    {
      gamename: "Agent010",
      position: 8,
      href: 5300,
      countusers: 2300,
      create: 14,
      status: "inactive",
    },
    {
      gamename: "Agent010",
      position: 8,
      href: 5300,
      countusers: 2300,
      create: 14,
      status: "active",
    },
    {
      gamename: "Agent010",
      position: 8,
      href: 5300,
      countusers: 2300,
      create: 14,
      status: "active",
    },
    {
      gamename: "Agent010",
      position: 8,
      href: 5300,
      countusers: 2300,
      create: 14,
      status: "active",
    },
    {
      gamename: "Agent010",
      position: 8,
      href: 5300,
      countusers: 2300,
      create: 14,
      status: "active",
    },
    {
      gamename: "Agent010",
      position: 8,
      href: 5300,
      countusers: 2300,
      create: 14,
      status: "inactive",
    },
    {
      gamename: "Agent010",
      position: 8,
      href: 5300,
      countusers: 2300,
      create: 14,
      status: "active",
    },
    {
      gamename: "Agent010",
      position: 8,
      href: 5300,
      countusers: 2300,
      create: 14,
      status: "inactive",
    },
    {
      gamename: "Agent010",
      position: 8,
      href: 5300,
      countusers: 2300,
      create: 14,
      status: "active",
    },
  ];

  const columns = [
    { headerName: "Main Category", field: "gamename" },
    { headerName: "Position D-B", field: "position" },
    { headerName: "Href Link", field: "href" },
    { headerName: "Count Users", field: "countusers" },
    { headerName: "Create Date", field: "create" },
    // { headerName: "status", field: "status" },
    {
      headerName: "Status",
      customRender: (row) => (
        <span
          className={`  md:px-1 py-1 rounded text-white ${
            row.status.toLowerCase() === "active"
              ? "bg-green-500 "
              : "bg-red-500"
          }`}
        >
          {row.status.toUpperCase()}
        </span>
      ),
    },
  ];

  return (
    <div className="p-2">
      <h1 className="text-center text-xl lg:text-xl  bg-[#59be7b] text-white p-2 lg:font-semibold rounded-md">
        All Game Categories
      </h1>
      <div className="flex justify-between items-center p-2">
        <input
          className="border-2 border-gray-300 rounded-md w-4/6 p-1 lg:p-2 focus:ring-2 focus:ring-[#14815f] focus:outline-none"
          placeholder="Search here"
          type="text"
        />
        <Link to="/dashboard/gameCategories">
          <button className=" text-base lg:text-xl  bg-[#8458B3] hover:bg-yellow-500 text-white p-1 lg:p-2  rounded-md transition duration-300">
            + Add
          </button>
        </Link>
      </div>
      <DynamicTable columns={columns} data={data} />
    </div>
  );
};

export default Games;
