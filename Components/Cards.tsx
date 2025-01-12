import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { v4 as uuidv4} from "uuid";

const CreateCard: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);
  const [resumeTitle , setResumeTitle] = useState();

  const onCreate=() =>{
    const uuid = uuidv4()
    console.log(resumeTitle,uuid)
  }

  return (
    <>
      {/* Card */}
      <div
        onClick={handleOpenDialog}
        className="ml-20 my-20 p-24 py-24 items-center flex flex-col justify-center bg-zinc-900 rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed relative"
      >
        <IoMdAdd size={40} color="white" className="mb-2 flex-1" />
         {/* Text in the bottom-left corner */}
         <div className="absolute bottom-4 left-4">
          <p className="text-white text-lg font-semibold">Create a Resume</p>
          <p className="text-gray-400 text-sm">Build the resume from scratch</p>
        </div>
      </div>
      

      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" bg-zinc-900 rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-lg font-bold mb-4">Create New Resume</h2>
            <input
              type="text"
              placeholder="Eg. Full Stack Resume"
              className="w-full border rounded-md p-2 mb-4"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCloseDialog}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button

                disabled ={!resumeTitle}  
                onClick={() => {
                  alert("Resume Created!");
                  handleCloseDialog();
                  onCreate();
                }}
                className=" bg-white text-black px-4 py-2 rounded-md hover:bg-slate-400"
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

export default CreateCard;

