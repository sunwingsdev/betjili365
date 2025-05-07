import { useEffect, useState } from "react";
import DynamicTable from "@/components/shared/tables/DynamicTable";
import {
  useGetWithdrawsQuery,
  useUpdateWithdrawStatusMutation,
} from "@/redux/features/allApis/withdrawsApi/withdrawsApi";
import { useToasts } from "react-toast-notifications";
import ViewModal from "@/components/shared/sharedModal/ViewModal";

const WithdrawsHistory = () => {
  const [updateStatus] = useUpdateWithdrawStatusMutation();
  const { data, isLoading } = useGetWithdrawsQuery();
  const [statusFilter, setStatusFilter] = useState(""); // Selected status
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [rowsPerPage] = useState(10); // Rows per page
  const [filteredData, setFilteredData] = useState([]); // Data after filtering and searching
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const { addToast } = useToasts();

  const handleViewClick = (row) => {
    setModalData(row);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  // Handle filtering and searching
  useEffect(() => {
    if (data) {
      let filtered = data;

      // Apply search filter
      if (searchTerm) {
        filtered = filtered.filter(
          (row) =>
            row.userInfo.username
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            row.userInfo.email
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            row.userInfo.phone.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Apply status filter
      if (statusFilter) {
        filtered = filtered.filter((row) => row.status === statusFilter);
      }

      setFilteredData(filtered);
    }
  }, [data, searchTerm, statusFilter]);

  // Handle pagination
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const columns = [
    { headerName: "Name", field: "userInfo.username" },
    { headerName: "Email", field: "userInfo.email" },
    { headerName: "Phone", field: "userInfo.phone" },
    { headerName: "Payment Method", field: "paymentMethod" },
    {
      headerName: "Status",
      customRender: (row) => (
        <div className="flex items-center space-x-2">
          <span>{row.status}</span>
          {row.status === "pending" && (
            <button
              onClick={() => handleStatusChange(row?._id)}
              className="px-2 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600"
            >
              Complete
            </button>
          )}
        </div>
      ),
    },
    { headerName: "Amount", field: "amount" },
    {
      headerName: "View",
      buttonConfig: {
        label: "View",
        bgColor: "bg-green-500",
        hoverColor: "hover:bg-green-600",
        onClick: (row) => handleViewClick(row),
      },
    },
    {
      headerName: "Delete",
      buttonConfig: {
        label: "Delete",
        bgColor: "bg-red-500",
        hoverColor: "hover:bg-red-600",
        onClick: (row) => console.log("Delete", row),
      },
    },
  ];

  const handleStatusChange = async (id) => {
    try {
      const result = await updateStatus(id);
      if (result.data.modifiedCount > 0) {
        addToast("Updated status successfully", {
          appearance: "success",
          autoDismiss: true,
        });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      addToast("Failed to update status", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">All Withdraws</h1>

        {/* Search and Filter Section */}
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search by Name, Email or Phone"
            className="px-4 py-2 border border-gray-300 rounded w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Handle search
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)} // Handle filter by status
            className="px-4 py-2 border border-gray-300 rounded w-44"
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Complete</option>
          </select>
        </div>

        {/* Table Rendering */}
        {isLoading ? (
          <p>Loading...</p>
        ) : filteredData?.length === 0 ? (
          <p>No Data</p>
        ) : (
          <DynamicTable columns={columns} data={paginatedData} />
        )}

        {/* Pagination Section */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredData.length)}{" "}
            of {filteredData.length} results
          </p>
          <div className="space-x-2">
            <button
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-sm rounded ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange("next")}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-sm rounded ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {/* Show modal with dynamic data if modalData exists */}
      <ViewModal
        isOpen={isModalOpen}
        onClose={closeModal}
        modalData={modalData}
        heading={"Withdraw details"}
      />
    </>
  );
};

export default WithdrawsHistory;
