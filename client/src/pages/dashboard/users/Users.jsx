import UserModal from "@/components/shared/sharedModal/UserModal";
import UserDynamicTable from "@/components/shared/tables/UserTabledata";
import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";
import { useState } from "react";

const Users = () => {
  const { data } = useGetUsersQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Open modal and set user data
  const handleViewClick = (row) => {
    setSelectedUser(row);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const columns = [
    { headerName: "Username", field: "username" },
    { headerName: "Name", field: "fullName" },
    { headerName: "Phone", field: "phone" },
    { headerName: "Email", field: "email" },
    { headerName: "Refer Code", field: "refer" },
    {
      headerName: "View",
      buttonConfig: {
        label: "View",
        bgColor: "bg-green-500",
        hoverColor: "hover:bg-green-600",
        onClick: handleViewClick,
      },
    },
    {
      headerName: "Delete",
      buttonConfig: {
        label: "Delete",
        bgColor: "bg-red-500",
        hoverColor: "hover:bg-red-600",
        onClick: (row) => alert(`Deleting ${row.username}`), // Replace with modal logic later
      },
    },
  ];

  return (
    <div className="p-2">
      <h1 className="text-lg md:text-xl font-bold mb-4 text-center">
        All users
      </h1>
      <UserDynamicTable columns={columns} data={data} />
      {/* Modal renders only when isModalOpen is true */}
      <UserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        user={selectedUser}
      />
    </div>
  );
};

export default Users;
