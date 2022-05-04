import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Axios from "axios";
import Select from 'react-select';

function SearchBar({ placeholder}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [words, setWords] = useState([]);
    const [selected, setSelected] = useState([]);
    const [option, setOption] = useState('eng');

    useEffect(() => {
    
        Axios.get("http://localhost:3001/Uzbek").then((response) => {
          setWords(response.data);
        });
      }, []);

      const options = [
        { value: 'eng', label: 'eng' },
        { value: 'uz', label: 'uz' },
      ]
      console.log(option);
    
    const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    if(option==='eng'){
    var newFilter = words.filter((value) => {
      return value.word_eng.toLowerCase().includes(searchWord.toLowerCase());
    })} else if(option==='uz'){
      var newFilter = words.filter((value) => {
        return value.word_uz.toLowerCase().includes(searchWord.toLowerCase());
      })
    }

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    setSelected('')
  };

  const handleChange=(value)=>{
      setOption(value.value)
  }

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
        <Select className="select" options={options} defaultValue={{ value: 'eng', label: 'eng' }} onChange={value =>handleChange(value)} />
      </div>
      
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" onClick={()=>setSelected(value)} >
                {option==='eng'?<p >{value.word_eng} </p>:<p >{value.word_uz} </p>}
              </a>
            );
          })}
        </div>
      )}
      
      {/* {option==='eng'?<div className="result">
          <h2 className="result_word">{selected.word_eng}</h2>
          <p className="result_definition">{selected.definition_eng}</p>
      </div>:<div className="Result">
          <h2 className="result_word">{selected.word_uz}</h2>
          <p className="result_definition">{selected.definition_uz}</p>
      </div>} */}
    </div>
  );
}

export default SearchBar;