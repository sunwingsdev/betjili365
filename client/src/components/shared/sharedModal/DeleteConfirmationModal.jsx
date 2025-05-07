const DeleteConfirmationModal = ({ isOpen, onClose, modalData, onDelete }) => {
  if (!isOpen) return null; // If modal is not open, return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Withdraw Details
        </h2>
        <div className="space-y-3">
          <p className="text-sm">
            <span className="font-semibold text-gray-700">Username:</span>{" "}
            {modalData?.userInfo?.username}
          </p>
          <p className="text-sm">
            <span className="font-semibold text-gray-700">Email:</span>{" "}
            {modalData?.userInfo?.email}
          </p>
          <p className="text-sm">
            <span className="font-semibold text-gray-700">Phone:</span>{" "}
            {modalData?.userInfo?.phone}
          </p>
          <p className="text-sm">
            <span className="font-semibold text-gray-700">Amount:</span>{" "}
            {modalData?.amount}
          </p>
          <p className="text-sm">
            <span className="font-semibold text-gray-700">Payment Method:</span>{" "}
            {modalData?.paymentMethod}
          </p>
          <p className="text-sm">
            <span className="font-semibold text-gray-700">Status:</span>{" "}
            {modalData?.status}
          </p>
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
          >
            Close
          </button>
          <button
            onClick={() => {
              onDelete(modalData?.id); // Pass the ID or any unique identifier to delete
              onClose(); // Close the modal after delete
            }}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300 ml-2"
          >
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
