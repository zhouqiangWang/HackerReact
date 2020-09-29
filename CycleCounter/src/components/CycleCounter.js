import React, {useState} from 'react';

function CycleCounter ({cycle}) {
  const [count, setCount] = useState(0);

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="pt-20 layout-row align-items-center justify-content-center">
        <button
          data-testid="cycle-counter"
          style={{ fontSize: '1rem', width: 120, height: 30, }}
          onClick={() => {
            // console.log(typeof cycle);
            // console.log(typeof count);
            let n = (count + 1) % cycle;
            console.log(n);
            setCount(n); 
          }}
        >
          {count}
        </button>
      </section>
    </div>
  );

}

export default CycleCounter;
