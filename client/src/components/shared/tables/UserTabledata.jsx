// components/shared/tables/DynamicTable.js
import { useState } from "react";
import DeleteModal from "../sharedModal/DeleteModal";

const UserDynamicTable = ({ columns, data, setData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // Open modal for delete confirmation
  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  // Confirm delete
  const handleConfirmDelete = () => {
    console.log(data);
    const updatedData = data.filter((item) => item._id !== selectedRow._id);
    setData(updatedData); // Update parent component data
    handleCloseModal();
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full text-nowrap">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="border-2 border-black  sm:px-0 md:px-2 py-1 md:py-2 text-center text-xs md:text-sm "
              >
                {col.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[12px] md:text-base lg:text-[15px] text-center">
          {data && data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="border-2 border-black md:px-2  py-2 sm:text-[10px] lg:text-[14px]"
                  >
                    {/* Render Field Data */}
                    {col.field && row[col.field]}

                    {/* Render Button */}
                    {col.buttonConfig && (
                      <button
                        className={`text-white px-3 py-1 rounded ${col.buttonConfig.bgColor} ${col.buttonConfig.hoverColor}`}
                        onClick={() => {
                          if (col.buttonConfig.label === "Delete") {
                            handleDeleteClick(row);
                          } else {
                            col.buttonConfig.onClick &&
                              col.buttonConfig.onClick(row);
                          }
                        }}
                      >
                        {col.buttonConfig.label}
                      </button>
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center p-4">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Delete Confirmation"
      >
        <p>Are you sure you want to delete this user?</p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={handleCloseModal}
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleConfirmDelete}
          >
            Confirm Delete
          </button>
        </div>
      </DeleteModal>
    </div>
  );
};

export default UserDynamicTable;
