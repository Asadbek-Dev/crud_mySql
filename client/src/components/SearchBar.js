import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Axios from "axios";

function SearchBar({ placeholder}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [words, setWords] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
    
        Axios.get("http://localhost:3001/Uzbek").then((response) => {
          setWords(response.data);
        });
        console.log(words);
      }, []);
    

    const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = words.filter((value) => {
      return value.word_eng.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

    const selectedHandle=(e)=>{
      console.log('asad',e);
    }

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    setSelected('')
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" onClick={()=>setSelected(value)} >
                <p >{value.word_eng} </p>
              </a>
            );
          })}
        </div>
      )}
      <div className="Result">
          <h2 className="result_word">{selected.word_eng}</h2>
          <p className="result_definition">{selected.definition_eng}</p>
      </div>
    </div>
  );
}

export default SearchBar;