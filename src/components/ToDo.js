import React, { useEffect, useState } from "react";
import todo from "../images/todo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getLocalItems = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
const ToDo = () => {
  const [inputData, setInputData] = useState("");

  const [items, setItems] = useState(getLocalItems());

  const [toggleSubmit, setToggleSubmit] = useState(true);

  const [isEditItem, setIsEditItem] = useState(null);
  const addItem = () => {
    if (!inputData) {
      toast("Please Enter Item!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setInputData("");
      setIsEditItem(null);
      toast("Task has updated successfully !!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
      toast("Your task saved successfully!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const deleteItem = (index) => {
    const updatedList = items.filter((elem) => {
      return index !== elem.id;
    });
    toast("Your Task Has Been Deleted!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setItems(updatedList);
  };
  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
    console.log(newEditItem);
  };
  const removeAll = () => {
    setItems([]);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="todologo" />
            <figcaption> Add Your List Here ✌️</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleSubmit ? (
              <i
                className="fa fa-plus add-btn"
                title="Add Item"
                aria-hidden="true"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="fa fa-pencil add-btn"
                title="Edit Item"
                aria-hidden="true"
                onClick={addItem}
              ></i>
            )}
          </div>
          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa fa-pencil add-btn"
                      aria-hidden="true"
                      onClick={() => {
                        editItem(elem.id);
                      }}
                    ></i>
                    <i
                      className="fa fa-trash add-btn"
                      aria-hidden="true"
                      onClick={() => {
                        deleteItem(elem.id);
                      }}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn1 effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
};
export default ToDo;
