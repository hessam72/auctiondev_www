import React, { useState, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
import { Input } from "antd";
import moment from "moment-jalaali";
import "./stryle.less";
import { pD2str, toUnix, d2picker } from "./tools";
let hasValue = "";
export default function DatePickerPicker({ placeholder, onChange, id, value }) {
  const [selectedDay, setSelectedDay] = useState(null);
  useEffect(() => {
    if (selectedDay) {
      let d = toUnix(selectedDay);
      onChange(d);
    }
  }, [selectedDay]);
  useEffect(() => {
    if (value) {
      setSelectedDay(d2picker(value));
    }
  }, [value]);

  const renderCustomInput = ({ ref }) => (
    <Input
      readOnly
      ref={ref} // necessary
      placeholder={placeholder}
      value={selectedDay ? pD2str(selectedDay) : ""}
    />
  );
  return (
    <DatePicker
      id={id}
      renderInput={renderCustomInput}
      inputPlaceholder={placeholder}
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
      locale="fa"
      shouldHighlightWeekends
    />
  );
}
