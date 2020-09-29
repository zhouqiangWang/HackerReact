import React, {useState} from 'react';

function EmployeesList ({ employees }) {
  const [text, setText] = useState("");
  return (
    <React.Fragment>
      <div className="controls">
        <input type="text" className="filter-input" data-testid="filter-input" onChange={
          (event) => {
              setText(event.target.value.toLowerCase());
            }
        }/>
      </div>
      <ul className="employees-list">
        {employees.filter((e) => e.name.toLowerCase().includes(text)).map(employee => (
          <li key={employee.name} data-testid="employee">{employee.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default EmployeesList;
