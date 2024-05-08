import { db } from "../firebase/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";

const AddNotes = () => {
  const [noteData, setNoteData] = useState({ noteTitle: "", note: "" });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setNoteData((prevNote) => {
      return { ...prevNote, [name]: value };
    });

    console.log(noteData);
  };

  const onSubmitHandler = async (event) => {
    // console.log(noteData);
    event.preventDefault();

    try {
      await addDoc(collection(db, "notes"), {
        noteTitle: noteData.noteTitle || null,
        note: noteData.note || null,
        created: Timestamp.now(),
      });

      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-yellow-50 rounded-lg p-4 ring-1 ring-slate-900/5 shadow-sm">
          <form onSubmit={onSubmitHandler}>
            <div>
              <input
                className="bg-yellow-50 w-full focus-visible:border-0 block w-full rounded-md py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6 mb-2"
                type="text"
                id="noteTitle"
                name="noteTitle"
                placeholder="Title"
                value={noteData.noteTitle}
                onChange={onChangeHandler}
              /> 
              <textarea
                className="bg-yellow-50 w-full focus-visible:border-0 block w-full rounded-md py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6 mb-2"
                id="note"
                name="note"
                placeholder="Enter your notes here..."
                rows="4"
                cols="50"
                value={noteData.note}
                onChange={onChangeHandler}
              />
              <button
                className="p-1 rounded bg-yellow-100 hover:bg-yellow-200 border border-yellow-300"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNotes;
