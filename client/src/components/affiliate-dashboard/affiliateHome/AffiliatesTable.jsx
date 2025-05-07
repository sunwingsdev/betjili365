const AffiliatesTable = ({ data }) => {
  return (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
        <thead className="bg-black text-white whitespace-normal">
          <tr>
            <th className="px-4 py-2 text-left border border-gray-300 whitespace-nowrap">
              User ID
            </th>
            <th className="px-4 py-2 text-left border border-gray-300">
              Request
            </th>
            <th className="px-4 py-2 text-left border border-gray-300">Date</th>
            <th className="px-4 py-2 text-left border border-gray-300">
              Amount
            </th>
            <th className="px-4 py-2 text-left border border-gray-300">
              Getway
            </th>
            <th className="px-4 py-2 text-left border border-gray-300 whitespace-nowrap">
              AF Commissions
            </th>
            <th className="px-4 py-2 text-left border border-gray-300 whitespace-nowrap">
              Aproved by
            </th>
            <th className="px-4 py-2 text-left border border-gray-300">
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
              <td className="px-4 py-2 border border-black">{item.userId}</td>
              <td className="px-4 py-2 border border-black">
                <button className="bg-green-600 px-4 py-1 text-white rounded-md font-bold capitalize">
                  {item.request}
                </button>
              </td>
              <td className="px-4 py-2 border border-black whitespace-nowrap">
                {item.date}
              </td>
              <td className="px-4 py-2 border border-black whitespace-nowrap">
                {item.amount}
              </td>
              <td className="px-4 py-2 border border-black capitalize">
                {item.gateway}
              </td>
              <td className="px-4 py-2 border border-black">
                {item.senderAcc}
              </td>
              <td className="px-4 py-2 border border-black">
                {item.transactionId}
              </td>
              <td className="px-4 py-2 border border-black">
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

export default AffiliatesTable;
