import "./App.css";
import React,{ useEffect, useState} from "react";
import Axios from "axios";
import Select from "react-select";

function App() {

  useEffect(() => {
    
    Axios.get("http://localhost:3001/Uzbek").then((response) => {
      setWords(response.data);
    });
  }, []);
  const [filteredData, setFilteredData] = useState([]);
  const [words, setWords] = useState([]);

  const handleFilter=(e)=>{
    const searchWord=e.target.value;
    const newFilter=words.filter((value) =>{
      return value.word_eng.toLowerCase().includes(searchWord.toLowerCase());
    });
    console.log(newFilter);
    setFilteredData(newFilter);
  }


  // const options = [
  //   {
  //     value: "English",
  //     label: "English",
  //   },
  //   {
  //     value: "Uzbek",
  //     label: "Uzbek",
  //   },
  // ];

  return (
    <div className="App">
      <div className="container">
        {/* <Select
        className="select"
        onChange={setOption}
        options={options}
        isClearable
        isSearchable
      /> */}
        <form className="search-box">
          <input
            type="text"
            onChange={handleFilter}
            placeholder="Type the word here..."
            id="inp-word"
          />
          <button id="search-btn">
            Search
          </button>
        </form>
        <div className="dataResult">
          {filteredData.slice(0,15).map((value,key)=>{
         return <div className="dataName" key={key}>
                  <p>{value.word_eng}</p>
                </div>
       })}
        </div>
      </div>
    </div>
  );
}

export default App;
