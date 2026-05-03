import _, { get, map, filter } from "lodash";
export const orderBy = (d) => _.orderBy(d, ["sort"], ["desc"]);
export const orderByAce = (d) => _.orderBy(d, ["sort"], ["ace"]);

export const filterChild = (dataRows, key, opration, value) => {
  return dataRows.filter((item) => {
    let has = false;
    switch (opration) {
      default:
      case "!==":
        has = item[key] !== value;
        break;
      case "===":
        has = item[key] === value;
        break;
      case ">":
        has = item[key] > value;
        break;
      case ">=":
        has = item[key] >= value;
        break;
      case "<":
        has = item[key] < value;
        break;
      case "<=":
        has = item[key] <= value;
        break;
    }
    if (has) {
      if (get(item, "children")) {
        item.children = filterChild(
          get(item, "children"),
          key,
          opration,
          value
        );
      }
      return item;
    }
    return false;
  });
};

export const durationCalculator = (duration, prefix) => {
  let cal = 0;
  switch (prefix) {
    default:
    case "h":
      cal = 60;
      break;
    case "d":
      cal = 60 * 24;
      break;
    case "m":
      cal = 60 * 24 * 30;
      break;
    case "y":
      cal = 60 * 24 * 365;
      break;
  }
  return duration * cal;
};
export const persianPrefix = (prefix) => {
  let cal = "دقیقه";
  switch (prefix) {
    default:
    case "h":
      cal = "ساعت";
      break;
    case "d":
      cal = "روز";
      break;
    case "m":
      cal = "ماه";
      break;
    case "y":
      cal = "سال";
      break;
  }
  return cal;
};
// console.log(durationCalculator(5,"y"));

export const getPlan = {
  once: "فقط خرید یکی",
  many: "خرید چند تای",
};
export const getDurationFull = (duration) => {
  let cal = 0;
  let pre = "";
  if (duration < 60 * 24) {
    pre = "h";
    cal = duration / 60;
    return { duration: cal, prefix: pre };
  }
  if (duration < 24 * 30 * 60) {
    pre = "d";
    cal = duration / (24 * 60);
    return { duration: cal, prefix: pre };
  }

  if (duration < 24 * 60 * 365) {
    pre = "m";
    cal = duration / (24 * 60 * 30);
    return { duration: cal, prefix: pre };
  }

  pre = "y";
  cal = duration / (365 * 24 * 60);
  return { duration: cal, prefix: pre };
};
// console.log(getDurationFull(2628000))

export const mapper = (data, allData) => {
  return map(data, (g) => {
    return {
      title: get(g, "title"),
      value: get(g, "_id"),
      children: mapper(
        filter(allData, (f) => get(f, "parentId._id", null) === get(g, "_id")),
        allData
      ),
    };
  });
};
