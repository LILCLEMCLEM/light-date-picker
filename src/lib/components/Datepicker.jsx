import React, { useState } from "react";
import Calendar from "./Calendar";
import styles from "../styles.module.css";
function DatePicker({ handleclick, setDate = null }) {
  const [isfocus, setFocus] = useState(false);
  const [FullDate, setFullDate] = useState("");
  const [load, Setload] = useState(true);
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [useday, setDay] = useState();

  const defaultHandler = (text) => {
    setFullDate(text);
    if (setDate !== null) {
      setDate(text);
    }
  };

  return (
    <div>
      <input
        
        value={FullDate}
        id="datePicker"
        type="input"
        onFocus={(e) => setFocus(true)}
      />
      {isfocus === false ? (
        ""
      ) : (
        <div className={styles.CalWidget}>
          <Calendar
            year={year}
            month={month}
            useday={useday}
            setYear={setYear}
            setMonth={setMonth}
            setDay={setDay}
            load={load}
            Setload={Setload}
            focused={setFocus}
            handler={handleclick}
            DefHandler={defaultHandler}
          />
        </div>
      )}
    </div>
  );
}

export default DatePicker;
