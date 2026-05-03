import { utils } from "react-modern-calendar-datepicker";
import moment from "moment-jalaali";
import { get } from "lodash";
/**
 * get persion to day
 */
const getToday = utils("fa").getToday();

/**
 * persian day to string
 * @param {year,mount,day} selectedDay 
 */
const pD2str = (selectedDay) =>
  `${get(selectedDay, "year", getToday.year)}/${get(
    selectedDay,
    "month",
    getToday.month
  )}/${get(selectedDay, "day", getToday.day)}`;
/**
 * get unix
 * @param {year,mount,day} selectedDay 
 */
const toUnix = (selectedDay) => {
  return moment(pD2str(selectedDay),'jYYYY/jM/jD').format();
};
const d2picker = (date) => {
    return  {
        year: parseInt(moment(date).format('jYYYY')),
        month: parseInt(moment(date).format('jM')),
        day: parseInt(moment(date).format('jD')),
    }
//   return moment(pD2str(selectedDay),'jYYYY/jM/jD').format();
};
export { getToday, pD2str, toUnix, d2picker};
