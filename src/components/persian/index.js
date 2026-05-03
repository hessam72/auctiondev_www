import React from "react";
import PropTypes from "prop-types";
import moment from "moment-jalaali";

export default function PersianDate({date,format="H:m jYYYY/jM/jD"}) {
  return <>{moment(date).format(format)}</>;
}

PersianDate.propTypes = {
  date: PropTypes.string,
};
