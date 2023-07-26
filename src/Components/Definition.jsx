import React from "react";
import "./Definition.css";

function Definition({ word, meaning }) {
  return (
    <div className="definition">
      {/* Meaning */}
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search bar</span>
      ) : (
        meaning.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div className="singleMean">
                <div className="mt-3">
                  {console.log(def)}
                  <b>{def.definition}</b>
                </div>

                {def.example && (
                  <span className="text-secondary">
                    <b>Example :</b> {def.example}
                  </span>
                )}
                <br />
                {def.synonyms && (
                  <span className="text-primary">
                    <b>Synonyms :</b>
                    {def.synonyms.map((s) => (
                      <span className="fw-normal "> {`${s}`}</span>
                    ))}
                    {/* {def.synonyms.map((s) => `${s} `)} */}
                  </span>
                )}
                <hr style={{ backgroundColor: "black", width: "100%" }} />
              </div>
            ))
          )
        )
      )}
    </div>
  );
}

export default Definition;
