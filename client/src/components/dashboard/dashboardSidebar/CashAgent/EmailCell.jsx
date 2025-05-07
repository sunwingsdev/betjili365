import { IoCopyOutline } from "react-icons/io5";
import { useToasts } from "react-toast-notifications";

const EmailCell = ({ email }) => {
  const { addToast } = useToasts();

  const handleCopyEmail = () => {
    if (email) {
      navigator.clipboard.writeText(email);

      addToast("Email copied to clipboard!", {
        appearance: "success",
        autoDismiss: true,
      });
    }
  };
  return (
    <td
      title={email || "N/A"}
      className="px-4 py-2 border border-blue-600 cursor-pointer"
    >
      <div className="flex flex-row">
        <span>{email ? `${email.slice(0, 7)}...` : "N/A"}</span>
        {email && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering toggle when copying
              handleCopyEmail();
            }}
            className="ml-2 text-blue-500 underline"
          >
            <IoCopyOutline title="copy" />
          </button>
        )}
      </div>
    </td>
  );
};

export default EmailCell;
