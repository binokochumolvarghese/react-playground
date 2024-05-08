import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function fnModal(
  { children, headerTitle, btnCaption },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        // showModal is a deafult method available in the  dialog
        // the open can call from the note.jsx via useImperativeHandle
        open() {
          dialog.current.showModal();
        },
      };
    },
    []
  );

  return createPortal(
    <dialog
      ref={dialog}
      className="bg-yellow-50 backdrop:bg-stone-900/90 p-2 rounded shadow-md md:w-1/2"
    >
      <div className="grid grid-cols-2 gap-4 pb-2">
        <h3 className="text-xl font-semibold">{headerTitle}</h3>
        <form method="dialog" className=" text-right ">
          <button className="mr-1 p-1 rounded bg-slate-200 hover:bg-slate-300 border border-slate-400 ">
            {btnCaption}
          </button>
        </form>
      </div>

      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
