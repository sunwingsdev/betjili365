const CAwithdrawTable = ({ data }) => {
  return (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-2 text-left border border-blue-400 whitespace-nowrap">
              User ID
            </th>
            <th className="px-4 py-2 text-left border border-blue-400">
              Request
            </th>
            <th className="px-4 py-2 text-left border border-blue-400">Date</th>
            <th className="px-4 py-2 text-left border border-blue-400">
              Amount
            </th>
            <th className="px-4 py-2 text-left border border-blue-400">
              Gateway
            </th>
            <th className="px-4 py-2 text-left border border-blue-400">
              Receiver A/C
            </th>
            <th className="px-4 py-2 text-left border border-blue-400 whitespace-nowrap">
              Transaction ID
            </th>
            <th className="px-4 py-2 text-left border border-blue-400">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`border-t ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <td className="px-4 py-2 border border-blue-400">
                {item.userId}
              </td>
              <td className="px-4 py-2 border border-blue-400">
                <button className="bg-red-600 px-4 py-1 text-white rounded-md font-bold capitalize whitespace-nowrap">
                  {item.request}
                </button>
              </td>
              <td className="px-4 py-2 border border-blue-400 whitespace-nowrap">
                {item.date}
              </td>
              <td className="px-4 py-2 border border-blue-400 whitespace-nowrap">
                {item.amount}
              </td>
              <td className="px-4 py-2 border border-blue-400 capitalize">
                {item.gateway}
              </td>
              <td className="px-4 py-2 border border-blue-400">
                {item.receiverAcc}
              </td>
              <td className="px-4 py-2 border border-blue-400">
                {item.transactionId}
              </td>
              <td className="px-4 py-2 border border-blue-400">
                <button
                  className={`px-4 py-1 text-white rounded-md font-bold capitalize ${
                    item.status === "received"
                      ? "bg-green-600 "
                      : item.status === "pending"
                      ? "bg-yellow-500"
                      : "bg-red-600"
                  }`}
                >
                  {item.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CAwithdrawTable;
