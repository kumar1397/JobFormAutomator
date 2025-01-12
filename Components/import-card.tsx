import React, { useState } from "react";
import { CiImport } from "react-icons/ci";
import { v4 as uuidv4 } from "uuid";

const ImportCard: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setResumeTitle("");
    setSelectedFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const onCreate = () => {
    const uuid = uuidv4();
    console.log("Resume Title:", resumeTitle);
    console.log("Selected File:", selectedFile);
    console.log("Generated UUID:", uuid);
  };

  return (
    <>
      {/* Card */}
      <div
        onClick={handleOpenDialog}
        className="ml-20 my-20 p-24 py-24 items-center flex flex-col justify-center bg-zinc-900 rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed relative"
      >
        <CiImport size={40} color="white" className="mb-2 flex-1" />
        {/* Text in the bottom-left corner */}
        <div className="absolute bottom-4 left-4">
          <p className="text-white text-lg font-semibold">Import an existing...</p>
          <p className="text-gray-400 text-sm">JSON Resume,LinkedIn,etc...</p>
        </div>
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-zinc-900 rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-lg font-bold mb-4 text-white">Import an existing resume</h2>

            {/* Resume Title Input */}
            <input
              type="text"
              placeholder="Enter resume title"
              value={resumeTitle}
              onChange={(e) => setResumeTitle(e.target.value)}
              className="w-full border rounded-md p-2 mb-4"
            />

            {/* File Input */}
            <div className="mb-4">
              <label className="text-white block mb-2">Import a PDF File:</label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full border rounded-md p-2  text-white"
              />
              {selectedFile && (
                <p className="mt-2 text-sm text-gray-400">
                  Selected File: {selectedFile.name}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCloseDialog}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                disabled={!resumeTitle || !selectedFile}
                onClick={() => {
                  alert("Resume Created!");
                  onCreate();
                  handleCloseDialog();
                }}
                className={`px-4 py-2 rounded-md ${
                  resumeTitle && selectedFile
                    ? "bg-white text-black hover:bg-slate-400"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImportCard;
