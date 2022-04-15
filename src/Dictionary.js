import React, { useState } from "react";
import Results from "./Results.js";
import axios from "axios";

import './Dictionary.css';

export default function Dictionary() {
    let [keyword, setKeyword] = useState("Destiny");
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
           <section>
               <h1>dictionary</h1>
                <form onSubmit={handleSubmit}>
                   <input 
                    type="search"
                    placeholder="Define..."
                    className="form form-control searchEngine" 
                    onChange={handleKeywordChange} 
                    />
                    </form>
           </section>
           <Results results={results} />
        </div>
    );
    } else {
        load();
        return "Loading";
    }
}