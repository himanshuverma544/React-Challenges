import { useState, useEffect } from 'react';


export default function Modal() {

  const [open, setOpen] = useState<boolean>(false);


  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {

    if (event.target === event.currentTarget) {
      setOpen(false);
    }
  }


  useEffect(() => {
    
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);


  return (
    <div
      className="modal-cont"
      style={{
        position: "fixed",
        inset: 0,
        background: open ? "rgba(0, 0, 0, 0.75)" : "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        zIndex: 1
      }}
      onClick={handleBackdropClick}
    >
      {open && (
        <div
          className="modal"
          style={{
            width: "500px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#FFF",
            borderRadius: "10px",
            fontSize: "24px"
          }}
        >
          This is Modal
        </div>
      )}

      <button
        onClick={() => setOpen(prev => !prev)}
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          fontSize: "18px"
        }}
      >
        {!open ? "Open Modal" : "Close Modal"}
      </button>
    </div>
  );
}
