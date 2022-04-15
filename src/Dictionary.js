import React, { useState } from "react";
import Results from "./Results.js";
import axios from "axios";

import './Dictionary.css';

export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search() {

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }

    if(loaded) {
        return (
        <div className="Dictionary">
           <h1>dictionary</h1>
           <div className="row">
               <form onSubmit={handleSubmit}>
                   <div className="row">
                       <div className="col">
                           <input 
                            type="search"
                            placeholder="Define..."
                            className="form-control" 
                            onChange={handleKeywordChange} />
                       </div>
                       <div className="col">
                           <input 
                            type="submit"
                            value="Search"
                            className="btn btn-primary" />
                       </div>
                   </div>
               </form>
               <Results results={results} />
           </div>
        </div>
    );
    } else {
        load();
        return "Loading";
    }
}