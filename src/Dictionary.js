import React, { useState } from "react";
import Results from "./Results.js";
import axios from "axios";
import Photos from "./Photos.js";

import './Dictionary.css';

export default function Dictionary() {
    let [keyword, setKeyword] = useState("Destiny");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }
    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    let pexelsApiKey = "563492ad6f917000010000012c979e9817df4e858043d3ced7e00b57";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
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
           <Photos photos={photos} />
        </div>
    );
    } else {
        load();
        return "Loading";
    }
}