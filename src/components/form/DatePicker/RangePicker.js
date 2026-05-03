import React, { useState, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
import { get, has } from "lodash";

import "./stryle.less";
import { Input } from "antd";
import { getToday, pD2str, toUnix, d2picker } from "./tools";

const persianToday = getToday;
const App = ({ locale, placeholder, onChange, value }) => {
  const defaultFrom = persianToday;
  const defaultTo = persianToday;
  const disabledDays = [];
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });
  useEffect(() => {
    if (
      get(selectedDayRange, "from") !== null &&
      get(selectedDayRange, "to") !== null
    ) {
      onChange({
        from: toUnix(get(selectedDayRange, "from")),
        to: toUnix(get(selectedDayRange, "to")),
      });
    }
  }, [selectedDayRange]);

  useEffect(() => {
    if (value) {
      const from = d2picker(get(value, "from"));
      const to = d2picker(get(value, "to"));
      const lfrom = get(selectedDayRange, "from");
      const lto = get(selectedDayRange, "to");
      if (!lfrom && !lto) {
        setSelectedDayRange({
          from,
          to,
        });
      } else if (!Boolean.isEquil(from,lfrom) && !Boolean.isEquil(to,lto)) {
        setSelectedDayRange({
          from,
          to,
        });
      }
    }
  }, [value]);
  const renderCustomInput = ({ ref }) => (
    <Input
      readOnly
      ref={ref} // necessary
      placeholder={placeholder}
      value={
        selectedDayRange
          ? `از ${pD2str(selectedDayRange.from)} تا ${pD2str(
              selectedDayRange.to
            )}`
          : ""
      }
    />
  );
  const handleDisabledSelect = (disabledDay) => {
    console.log("Tried including a disabled day", disabledDay);
  };

  return (
    <DatePicker
      renderInput={renderCustomInput}
      inputPlaceholder={placeholder}
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      disabledDays={disabledDays} // here we pass them
      onDisabledDayError={handleDisabledSelect} // handle error
      shouldHighlightWeekends
      locale={"fa"}
    />
  );
};

export default App;
