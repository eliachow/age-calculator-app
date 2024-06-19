import React, {useState} from "react";

export default function Input() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  function handleDayChange(e) {
    setDay(e.target.value)
  }
  function handleMonthChange(e) {
    setMonth(e.target.value)
  }
  function handleYearChange(e) {
    setYear(e.target.vaule)
  }


  return (
    <div className="Input">
        <form className="flex">
          <div className="flex c">
            <label>Day</label>
            <input type="text" placeholder="DD" value={day} onChange={handleDayChange}></input>
            <div className="warn">Must be a valid day</div>
          </div>
          <div className="flex c">
            <label>Month</label>
            <input type="text" placeholder="MM" value={month} onChange={handleMonthChange}></input>
            <div className="warn">Must be a valid month</div>
          </div>
          <div className="flex c">
            <label>Year</label>
            <input type="text" placeholder="YYYY" value={year} onChange={handleYearChange}></input>
            <div className="warn">Must be in the past</div>
          </div>
        </form>
        <div className="divCtr">
          <div className="divider">
        </div>
        </div>
    </div>
  )
}

