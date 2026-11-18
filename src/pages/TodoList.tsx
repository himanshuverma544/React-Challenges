import { useState, useRef, useReducer } from "react";

type Action =
  | { type: "add", payload: string }
  | { type: "edit", payload: { todo: string, index: number} }
  | { type: "delete", payload: number };


function reducer(state: string[], action: Action) {

  switch (action.type) {

    case "add":
      return [...state, action.payload];

    case "edit":
      return state.map((todo, index) => index === action.payload.index ? action.payload.todo : todo);

    case "delete":
      return state.filter((_, index) => index !== action.payload);

    default:
      return state;
  }
}


export default function TodoList() {

  const [currentMode, setCurrentMode]
    = useState<{ mode: string, index: number | null }>({ mode: "ADD", index: null });

  const [state, dispatch] = useReducer(reducer, []);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleEdit = (todo: string, index: number) => {

    if (inputRef.current) {
      inputRef.current.value = todo;
    }

    inputRef?.current?.focus();

    setCurrentMode({ mode: "EDIT", index });
  }

  const handleAddUpdate = () => {

    if (!inputRef.current?.value) {
      return;
    }

    if (currentMode.mode === "ADD") {
      dispatch({ type: "add", payload: inputRef.current?.value ?? "" })
    }

    else if (currentMode.mode === "EDIT" && currentMode.index !== null) {
      dispatch({
        type: "edit",
        payload: {
          todo: inputRef.current?.value ?? "",
          index: currentMode.index
        }
      });

      setCurrentMode({ mode: "ADD", index: null });
    }
    
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }


  return (
    <div
      className="cont"
      style={{
        width: "40rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "0 25px",
        margin: "10rem auto 0"

      }}
    >
      <form
        onSubmit={handleAddUpdate}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <input
          ref={inputRef}
          placeholder="Enter your Todo"
          style={{
            width: "100%",
            padding: 15,
            borderRadius: "10px",
            fontSize: "1.2rem"
          }}
        />
        <button
          className="add-btn"
          onClick={handleAddUpdate}
          style={{ 
            padding: 15,
            borderRadius: "10px",
            fontSize: "1rem"
          }}
        >
          {currentMode.mode === "ADD" ? "Add" : "Update"}
        </button>
      </form>
    
    <div className="todos-parent-cont" style={{ width: "100%" }}>
      {state.map((todo, index) => {
        return (
          <div
            className="todos-cont"
            key={index}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              marginTop: "5px",
              borderRadius: "5px",
              backgroundColor: "gray"
            }}
          >
            <div className="todo" style={{ fontSize: "1.3rem", paddingLeft: "20px", color: "white" }}>
              {todo}
            </div>
            <div className="action-btns" style={{ display: "flex", gap: "5px", paddingRight: "20px" }}>
              <button
                onClick={() => handleEdit(todo, index)}
                style={{ padding: "10px 15px", fontSize: "1rem", borderRadius: "10px" }}
              >
                Edit
              </button>
              <button
                onClick={() => dispatch({ type: "delete", payload: index })}
                style={{ padding: "10px 15px", fontSize: "1rem", borderRadius: "10px" }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}