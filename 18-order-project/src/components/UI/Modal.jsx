import {createPortal} from "react-dom";
import {useEffect, useRef} from "react";

export default function Modal({children, open, className = ''}) {
  const dialog = useRef();

  useEffect(() => {
    const model = dialog.current;
    if (open) {
      model.showModal();
    }

    return () => model.close();
  }, [open]);
  return createPortal(
      <dialog ref={dialog} className={`modal ${className}`}>
        {children}
      </dialog>,
      document.getElementById('modal')
  )
}