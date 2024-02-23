import React, { ReactNode, useEffect, useRef, useState } from "react";
import { FaSearch, FaFileExcel } from "react-icons/fa";

interface TableProps {
  tableHeaders: string[];
  tableData: Record<string, any>[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filteredData: Record<string, any>[];
  exportToCSV: () => void;
}

export const  Table: React.FC<TableProps> = ({
  tableHeaders,
  tableData,
  searchTerm,
  onSearchChange,
  filteredData,
  exportToCSV,
}) => {
  return (
    <div className="flex flex-col px-6  py-2 ">
      <div className=" flex flex-row w-full relative">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="py-2 text-md w-11/12 bg-my-gray rounded-lg px-8 text-xl focus:outline-my-gray focus:bg-white pl-10 relative"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <span className="absolute left-4 top-6 transform -translate-y-1/2 text-gray-500">
          <FaSearch />
        </span>

        <button
          className=" flex  items-center justify-center rounded-lg px-8 bg-green-600 w-1/12 ml-4 text-white text-xl"
          onClick={exportToCSV}
        >
          <FaFileExcel className="" />Export
        </button>
      </div>

      <div className="overflow-x-auto mt-4">
        <div style={{ maxHeight: "600px" }}>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  No
                </th>
                {tableHeaders.map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {filteredData.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t">
                  <td className="px-4 py-2">{rowIndex + 1}</td>
                  {tableHeaders.map((header, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-4 py-2"
                    >
                      {row[header.toLowerCase().replace(/\s+/g, "_")]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children?: ReactNode;
//   title: React.ReactNode;
//   tableHeaders: string[];
//   tableData: Record<string, any>[];
//   tag?: string[];
// }

// const TableModal: React.FC<ModalProps> = (props) => {
//   const { isOpen, onClose, title, tableHeaders, tableData, tag } = props;

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState(tableData);

//   const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   const handleKeyPress = (e: KeyboardEvent) => {
//     if (e.key === "Escape") {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("keydown", handleKeyPress);
//     return () => {
//       document.removeEventListener("keydown", handleKeyPress);
//     };
//   }, []);

//   useEffect(() => {
//     // Filter table data based on search term
//     const filtered = tableData.filter((row) =>
//       Object.values(row).some((value) =>
//         String(value)
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase())
//       )
//     );
//     setFilteredData(filtered);
//   }, [searchTerm, tableData]);

//   const modalRef = useRef<HTMLDivElement | null>(null);

//   const exportToCSV = () => {
//     const csvContent =
//       "data:text/csv;charset=utf-8," +
//       tableHeaders.join(",") +
//       "\n" +
//       filteredData
//         .map((row) =>
//           tableHeaders
//             .map((header) => row[header.toLowerCase().replace(/\s+/g, "_")])
//             .join(",")
//         )
//         .join("\n");
//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "table_data.csv");
//     document.body.appendChild(link);
//     link.click();
//   };

//   return (
//     <>
//       {isOpen && (
//         <div
//           className="fixed top-0 left-0 w-screen h-full flex items-center justify-center bg-black bg-opacity-50 pt-32 px-4 "
//           onClick={handleOverlayClick}
//         >
//           <div
//             ref={modalRef}
//             className="bg-white w-full h-full  py-4 rounded-t-xl animate__animated animate__fadeInUp animate__faster "
//           >
//             <div className="flex flex-row gap-3 items-center bold border-blue-white border-b-2 pb-2 mx-0 px-5 ">
//               <button
//                 className="flex gap-1  items-center text-my-blue bg-blue-white rounded-lg p-2  top-2 left-2 hover:text-gray-800"
//                 onClick={onClose}
//               >
//                 Back to list
//               </button>
//               <h2 className="font-bold text-xl pr-5">{title}</h2>
//               {tag &&
//                 tag.map((tag) => (
//                   <span className=" bg-blue-white text-my-blue font-bold text-sm rounded-md px-2 py-1">
//                     {tag}
//                   </span>
//                 ))}
//             </div>
//             <Table
//               tableHeaders={tableHeaders}
//               tableData={tableData}
//               searchTerm={searchTerm}
//               onSearchChange={setSearchTerm}
//               filteredData={filteredData}
//               exportToCSV={exportToCSV}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default TableModal;
