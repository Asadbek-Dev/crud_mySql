import "./App.css";
import React,{ useState } from "react";
import Axios from "axios";
import Select from "react-select";

function App() {
  const [text, setText] = useState("");
  const [definition, setDefinition] = useState("");
  const [option, setOption] = useState("");

  console.log(option);

  const [employeeList, setEmployeeList] = useState([]);
  const options = [
    {
      value: "English",
      label: "English",
    },
    {
      value: "Uzbek",
      label: "Uzbek",
    },
  ];

  const getEmployees = (e) => {
    e.preventDefault();
    if (option.value == "Uzbek") {
      Axios.get("http://localhost:3001/Uzbek").then((response) => {
        setEmployeeList(response.data);
        console.log(response.data);
      });
    } else {
      setDefinition("Not Found page");
      console.log("Not Found page");
    }
  };

  return (
    <div className="App">
      
      {definition}{" "}
      <div className="container">
        <Select
        className="select"
        onChange={setOption}
        options={options}
        isClearable
        isSearchable
      />{" "}
        <form className="search-box">
          <input
            type="text"
            onClick={(e) => {
              setText(e.target.value);
            }}
            placeholder="Type the word here..."
            id="inp-word"
          />
          <button id="search-btn" onClick={getEmployees}>
            Search{" "}
          </button>{" "}
        </form>{" "}
        {/* {option.value == "Uzbek"
          ? employeeList
              .filter((val) => {
                if (text == "") {
                  return val;
                } else if (
                  val.first_name.toLowerCase().includes(text.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => {
                return (
                  <div className="result" id="result" key={key}>
                    <div className="word">
                      <h3 id="searchedText"> {val.first_name} </h3>{" "}
                    </div>{" "}
                    <div className="details"> {val.job_title} </div>{" "}
                  </div>
                );
              })
          : employeeList
              .filter((val) => {
                if (text == "") {
                  return val;
                } else if (
                  val.city.toLowerCase().includes(text.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => {
                return (
                  <div className="result" id="result" key={key}>
                    <div className="word">
                      <h3 id="searchedText"> {val.city} </h3>{" "}
                    </div>{" "}
                    <div className="details"> {val.address} </div>{" "}
                  </div>
                );
              })} */}
      </div>{" "}
    </div>
  );
}

export default App;
