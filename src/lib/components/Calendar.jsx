import { useEffect, useRef, useState } from "react";
import styles from "../styles.module.css";
import { MonthInt2Str } from "../utils/setmonth";
import DayRender from "./DayRender";
import React from "react";
function Calendar({
  year,
  setYear,
  month,
  setMonth,
  useday,
  setDay,
  load,
  Setload,
  focused,
  handler = null,
  DefHandler,
}) {
  let d = new Date();

  useEffect(() => {
    if (load === true) {
      setYear(d.getYear() + 1900);
      setMonth(d.getMonth());

      Setload(false);
      return;
    } else {
      if (handler) {
        let e = handler(year, month + 1, useday);
        DefHandler(e);
        focused(false);
        Setload(true);
      } else if (handler === null) {
        DefHandler(`${year}/${month + 1}/${useday}`);
        focused(false);
        Setload(true);
      }
    }
  }, [useday]);

  const MyHandle = async (IDay) => {
    console.log("called");
    setDay(IDay);
    if (!handler) {
      await DefHandler(year, month + 1, useday);
      focused(false);
      Setload(true);
    }
  };

  const day = ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.year}>
        <p onClick={(e) => setYear(year - 1)}>pre</p>
        <p>{year}</p>
        <p onClick={(e) => setYear(year + 1)}>sui</p>
      </div>
      <div className={styles.month}>
        <p onClick={(e) => setMonth(month - 1 > -1 ? month - 1 : 11)}>pre</p>
        <p>{MonthInt2Str(month)}</p>
        <p onClick={(e) => setMonth(month + 1 < 12 ? month + 1 : 0)}>sui</p>
      </div>
      <div className={styles.day}>
        {day.map((item, index) => (
          <p className={styles.day} key={index}>
            {item}
          </p>
        ))}
      </div>
      <div className={styles.dayNumber}>
        <DayRender SetDay={MyHandle} year={year} month={month} />
      </div>
    </div>
  );
}

export default Calendar;
