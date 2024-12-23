/* eslint-disable react/prop-types */
import { useState } from "react";

const Table = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th>Date</th>
            <th>Max Temp</th>
            <th>Min Temp</th>
            <th>Mean Temp</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.maxTemp}</td>
              <td>{row.minTemp}</td>
              <td>{row.meanTemp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="p-2 bg-gray-300"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="p-2 bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
