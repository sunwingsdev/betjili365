import clsx from "clsx";
import { useState } from "react";
import ViewModal from "../sharedModal/ViewModal";
import { IoMdCloseCircleOutline } from "react-icons/io";
import DeleteConfirmationModal from "../sharedModal/DeleteConfirmationModal";

// Helper function to access nested properties
const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
};

const DynamicTable = ({ columns, data, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const [reasonModalOpen, setReasonModalOpen] = useState(false);
  const [reasonText, setReasonText] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil((data?.length || 0) / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);

  const handleViewClick = (row) => {
    setModalData(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleReasonView = (reason) => {
    setReasonText(reason);
    setReasonModalOpen(true);
  };

  const closeReasonModal = () => {
    setReasonModalOpen(false);
    setReasonText("");
  };

  const renderTableContent = () => {
    if (loading) {
      return (
        <tr>
          <td colSpan={columns.length} className="text-center py-4 text-lg">
            Data is Loading...
          </td>
        </tr>
      );
    }

    if (!currentRows || currentRows.length === 0) {
      return (
        <tr>
          <td colSpan={columns.length} className="text-center py-4 text-lg">
            No Data Available
          </td>
        </tr>
      );
    }

    return currentRows?.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {columns.map((col, colIndex) => {
          const fieldValue = getNestedValue(row, col.field);

          // Status এর জন্য color সেট করা
          const statusColorClass =
            fieldValue === "pending"
              ? "text-yellow-500"
              : fieldValue === "completed"
              ? "text-green-500"
              : fieldValue === "rejected"
              ? "text-red-500"
              : "";

          return (
            <td
              key={colIndex}
              className={clsx(
                "border-2 border-black md:px-2 lg:px-2 py-2 sm:text-[10px] lg:text-[15px]",
                col.field === "status" && statusColorClass // শুধু status ফিল্ডের জন্য color লাগবে
              )}
            >
              {col.customRender ? (
                col.customRender(row)
              ) : col.buttonConfig ? (
                <button
                  onClick={() =>
                    col.buttonConfig.label === "View"
                      ? handleViewClick(row)
                      : handleDeleteClick(row)
                  }
                  className={clsx(
                    "px-2 py-1 rounded text-white",
                    col.buttonConfig.bgColor || "bg-blue-500",
                    col.buttonConfig.hoverColor || "hover:bg-blue-600"
                  )}
                >
                  {col.buttonConfig.label}
                </button>
              ) : col.field === "reason" && fieldValue ? ( // যদি reason field থাকে এবং ভ্যালু থাকে
                <button
                  onClick={() => handleReasonView(fieldValue)}
                  className="text-blue-600 underline"
                >
                  View Reason
                </button>
              ) : (
                fieldValue || "N/A"
              )}
            </td>
          );
        })}
      </tr>
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full text-nowrap">
        <thead className="sm:text-xs md:text-base bg-bottomNavBgColor">
          <tr className="text-white">
            {columns.map((col, index) => (
              <th
                key={index}
                className="border-2 border-black sm:px-0 md:px-2 py-1 md:py-2 text-center text-xs md:text-sm lg:text-lg"
              >
                {col.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[12px] md:text-base lg:text-[15px] text-center">
          {renderTableContent()}
        </tbody>
      </table>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded border ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-bottomNavBgColor text-white"
            }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded border ${
                currentPage === page
                  ? "bg-[#ffe43c] text-black"
                  : "bg-primary-primaryColorTwo text-white"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded border ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-bottomNavBgColor text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {/* Main View Modal */}
      <ViewModal
        isOpen={isModalOpen}
        onClose={closeModal}
        modalData={modalData}
      />

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          modalData={selectedRow}
        />
      )}

      {/* Reason View Modal */}
      {reasonModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 animate-fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 relative">
            <button
              onClick={closeReasonModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              <IoMdCloseCircleOutline />
            </button>
            <h2 className="text-2xl font-semibold text-[#14815f] text-center mb-6">
              Reason Details
            </h2>
            <p className="text-gray-700 text-base leading-relaxed text-center">
              {reasonText}
            </p>
            <div className="mt-8 flex justify-center">
              <button
                onClick={closeReasonModal}
                className="bg-[#14815f] hover:bg-[#0d5d43] transition-all duration-300 text-white px-6 py-2 rounded-full text-sm font-semibold"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicTable;
