import { Dialog } from "primereact/dialog";
import PropTypes from "prop-types";
import React from "react";
import { IoClose } from "react-icons/io5";

EventModal.propTypes = {
  registrations: PropTypes.array,
  onClose: PropTypes.func,
  onDownloadClick: PropTypes.func,
};
export default function EventModal({
  registrations,
  onClose,
  onDownloadClick,
}) {
  return (
    <div className="fixed top-0 left-0 flex p-2 justify-center items-center w-screen h-screen backdrop-blur-sm overflow-hidden">
      <div className="relative text-black p-2 sm:p-5 rounded-lg transition-opacity duration-300 bg-white overflow-hidden">
        <div className="flex w- justify-end gap-5 p-3">
          <button
            onClick={() => onDownloadClick(registrations)}
            className="p-2 rounded-full w-10 h-10 border-2"
          >
            <i className="pi pi-download"></i>
          </button>
          <button onClick={onClose}>
            <IoClose size={30} />
          </button>
        </div>

        <div className="rounded-lg transition-opacity duration-300 bg-gradient-to-b from-white to-gray-500 overflow-auto">
          {registrations.length > 0 ? (
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Year</th>
                  <th className="border border-gray-300 px-4 py-2">Branch</th>
                  <th className="border border-gray-300 px-4 py-2">Email ID</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Mobile No
                  </th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((reg, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-gray-800">
                      {reg.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800">
                      {reg.year}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800">
                      {reg.branch}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800">
                      {reg.emailId}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800">
                      {reg.mobileNo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No registrations found for this event.</p>
          )}
        </div>
      </div>
    </div>
  );
}
