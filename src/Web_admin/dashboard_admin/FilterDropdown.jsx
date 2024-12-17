// FilterDropdown.js
import React, { useState } from "react";

const FilterDropdown = ({ onApplyFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedTimeRange, setSelectedTimeRange] = useState("");

  const statusOptions = [
    { label: "Sudah Diposting", value: "published" },
    { label: "Draft", value: "draft" },
  ];

  const timeRangeOptions = [
    { label: "1 Jam Terakhir", value: "1h" },
    { label: "24 Jam Terakhir", value: "24h" },
    { label: "7 Hari Terakhir", value: "7d" },
    { label: "30 Hari Terakhir", value: "30d" },
    { label: "3 Bulan Terakhir", value: "3m" },
    { label: "6 Bulan Terakhir", value: "6m" },
  ];

  const handleApplyFilter = () => {
    onApplyFilter({ status: selectedStatus, timeRange: selectedTimeRange });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white px-6 py-2.5 text-sm border rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 w-40 text-left flex items-center justify-between"
      >
        Filter
        <svg
          className={`ml-2 h-5 w-5 transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-6 z-50 border">
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Status</h3>
            <div className="flex flex-wrap gap-3">
              {statusOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedStatus(option.value)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedStatus === option.value
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Rentang Waktu</h3>
            <div className="grid grid-cols-2 gap-3">
              {timeRangeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedTimeRange(option.value)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedTimeRange === option.value
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleApplyFilter}
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 flex items-center justify-center gap-2"
          >
            <span>Terapkan Filter</span>
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
