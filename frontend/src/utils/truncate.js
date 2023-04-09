const truncateString = (str, num) => {
  if (str) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  } else return "";
};

export default truncateString;
