import "./App.css";
import{ useState } from "react";
import Axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [definition, setDefinition] = useState(0);

  console.log(text);

  const [employeeList, setEmployeeList] = useState([]);

  const getEmployees = (e) => {
    e.preventDefault();
    Axios.get("http://localhost:3001/search").then((response) => {
      setEmployeeList(response.data);
    });
  };


  return (
    <div className="App">
      <div className="container">
        <form className="search-box">
          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Type the word here..."
            id="inp-word"
          />
          <button id="search-btn" onClick={getEmployees}>
            Search
          </button>
        </form>
        {employeeList.filter((val)=>{
          if(text==''){
            return val;
          }
          else if(val.first_name.toLowerCase().includes(text.toLowerCase())){
            return val;
          }
        }).map((val,key)=>{
          return (
            <div className="result" id="result" key={key}>
              <div className="word">
                <h3 id="searchedText">{val.first_name}</h3>
              </div>
              <div className="details">{val.job_title}</div>
            </div>
          )
        })}
        
      </div>
    </div>
  );
}

export default App;
