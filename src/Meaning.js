import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>
                {props.meaning.partOfSpeech}
            </h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <div className="example">Definition:{definition.definion}</div>
                    <div className="example">Example:{definition.example}</div>
                    <Synonyms synonyms={definition.synonyms} />
                    </div>
                );
            })}    
        </div>
    );
}