import React, {useState} from "react";

export default function Input() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dWarn, setDWarn] = useState('');
  const [mWarn, setMWarn] = useState('');
  const [yWarn, setYWarn] = useState('');
  const [exMo, setExMo] = useState('');

  function handleDayChange(e) { setDay(e.target.value) }
  function handleMonthChange(e) { setMonth(e.target.value) }
  function handleYearChange(e) { setYear(e.target.value) }

  function handleSubmit (e) {
    e.preventDefault();

    let isValid = true;

    // reset all warnings
    document.getElementById('dd').classList.remove('on');
    document.getElementById('mo').classList.remove('on');
    document.getElementById('yr').classList.remove('on');
    document.getElementById('exceed').classList.remove('on');

    // validate day
    if(day.trim() === '' || day.trim() === null) {
      setDWarn('Must not be empty')
      document.getElementById('dd').classList.add('on');
      isValid = false;
    } else if(isNaN(day.trim())) {
      setDWarn('Must be a number')
      document.getElementById('dd').classList.add('on');
      isValid = false;
    } else if (day < 1 || day > 31) {
      setDWarn('Must a day within the month')
      document.getElementById('dd').classList.add('on');
      isValid = false;
    }
    // validate month
    if(month.trim() === '' || month.trim() === null) {
      setMWarn('Must not be empty')
      document.getElementById('mo').classList.add('on');
      isValid = false;
    } else if (isNaN(month.trim())) {
      setMWarn('Must be a number')
      document.getElementById('mo').classList.add('on');
      isValid = false;
    } else if ( month < 1 || month > 12) {
      setMWarn('Must be between 1-12')
      document.getElementById('mo').classList.add('on');
      isValid = false;
    }
    // validate year
    const currentYear = new Date().getFullYear();
    if(year.trim() === '' || year.trim() === null) {
      setYWarn('Must not be empty');
      document.getElementById('yr').classList.add('on');
      isValid = false;
    } else if (isNaN(year.trim())) {
      setYWarn('Must be a number');
      document.getElementById('yr').classList.add('on');
      isValid = false;
    } else if (year > currentYear) {
      setYWarn('Must be in the past');
      document.getElementById('yr').classList.add('on');
      isValid = false;
    } else if (year.length !== 4) {
      setYWarn('Must be 4 characters');
      document.getElementById('yr').classList.add('on');
      isValid = false;
    }
    // validate date
    let y = parseInt(year);
    let m = parseInt(month) - 1;
    let d = parseInt(day);
    let date = new Date(y, m, d);
 
    if(isValid && !(date.getFullYear() === y && date.getMonth() === m && date.getDate() === d)){
      // translate numerical months to text
       let warnMo = month;
        switch(warnMo) {
          case '2': setExMo('Feb'); break;
          case '4': setExMo('Apr'); break;
          case '6': setExMo('Jun'); break;
          case '9': setExMo('Sep'); break;
          case '11': setExMo('Nov'); break;
        }
      document.getElementById('exceed').classList.add('on');
      isValid = false;
    }

    if(isValid) {
      console.log('valid');
    }
  }


  return (
    <div className="Input">
        <form className="flex">
          <div className="flex c">
            <label>Day</label>
            <input type="text" placeholder="DD" value={day} onChange={handleDayChange}></input>
            <div className="warn" id="dd">{dWarn}</div>
          </div>
          <div className="flex c" >
            <label>Month</label>
            <input type="text" placeholder="MM" value={month} onChange={handleMonthChange}></input>
            <div className="warn" id="mo">{mWarn}</div>
          </div>
          <div className="flex c">
            <label>Year</label>
            <input type="text" placeholder="YYYY" value={year} onChange={handleYearChange}></input>
            <div className="warn" id="yr">{yWarn}</div>
          </div>
          <div className="warn" id="exceed">There are not {day} days in {exMo}</div>
          <button className="btn-submit" type="submit" onClick={handleSubmit}></button>
        </form>
    </div>
  )
}

