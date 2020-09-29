import React, {useState, useReducer} from 'react';

function reducer(wordList, action) {
  switch (action.type) {
    case "append":
      wordList.push(action.text);
      return [...wordList];
    case "undo":
      wordList.pop();
      return [...wordList];
    default:
      throw new Error();
  }
}

function TextEditor () {
  const [text, setText] = useState("");
  const [wordList, dispatch] = useReducer(reducer, []);
  return (
    <React.Fragment>
      <div className="controls">
        <input className="word-input" type="text" data-testid="word-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button data-testid="append-button"
          onClick={() => {
            console.log(text);
            if (text.length > 0) {
              dispatch({type: "append", text})
              setText("");
            }
          }}
          disabled={text === ""}
        >
          Append
        </button>
        <button data-testid="undo-button"
          onClick={() => {
            dispatch({type: "undo"});
          }}
          disabled={wordList.length === 0}
        >Undo</button>
      </div>
      <div className="text-field" data-testid="text-field">
        {wordList.join(" ")}
      </div>
    </React.Fragment>
  );
}

export default TextEditor;
