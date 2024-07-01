import React, { useState, useEffect } from "react";

export default function Output(props) {
  const { birthDate } = props;
  const [ year, setYear] = useState('--');
  const [ month, setMonth] = useState('--');
  const [ day, setDay] = useState('--');
  const [ pluralY, setPluralY] = useState('years');
  const [ pluralM, setPluralM] = useState('months');
  const [ pluralD, setPluralD] = useState('days');


  const calcAge = () => {
    let { year: bYY, month: bMM, day: bDD } = birthDate;
    if(bYY == "" || bMM == "" || bDD == ""){return null;}

    const cYY = new Date().getFullYear();
    const cMM = new Date().getMonth() + 1;
    const cDD = new Date().getDate();
    let ageY = cYY - bYY;
    let ageM = cMM - bMM ;
    let ageD = cDD - bDD;

    if(ageD < 0) {
      ageM -= 1;
      ageD += new Date(cYY, cMM - 1, 0).getDate();
    }

    if(ageM < 0) {
      ageY -= 1;
      ageM += 12;
    }
    
    setYear(ageY);
    setMonth(ageM);
    setDay(ageD);

    setPluralY(ageY === 1 ? 'year' : 'years');
    setPluralM(ageM === 1 ? 'month' : 'months');
    setPluralD(ageD === 1 ? 'day' : 'days');
  }


  useEffect(() => {
    calcAge();
  }, [birthDate]);

  return (
    <div className="Output">
      <div className="flex">
        <div className="oR">{year}</div>
        <div>&nbsp; {pluralY}</div>
      </div>
      <div className="flex">
        <div className="oR">{month}</div>
        <div>&nbsp; {pluralM}</div>
      </div>
      <div className="flex">
        <div className="oR">{day}</div>
        <div>&nbsp; {pluralD}</div>
      </div>
    </div>
  )
}

