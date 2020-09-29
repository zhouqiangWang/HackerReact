import React, {useState} from 'react';

function Translator ({ translations }) {

  const [out, setOut] = useState("");
  return (
    <React.Fragment>
      <div className="controls">
        <div className="input-container">
          <span>input:</span>
          <input type="text" className="text-input" data-testid="text-input"
            onChange={(event) => { 
              if (translations.has(event.target.value)) 
                setOut( translations.get(event.target.value) );
              else
                setOut("");
            }}
          />
        </div>
        <div className="input-container">
          <span>output:</span>
          <input type="text" className="text-output" data-testid="text-output" readOnly value={out}/>
        </div>
      </div>
    </React.Fragment>
  );

}

export default Translator;
