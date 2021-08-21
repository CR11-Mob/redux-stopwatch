const secondsToTime = (secs) => {
  let hours = Math.floor(secs / (60 * 60));
  // console.log("Hours:", hours);

  let divisorForMinutes = secs % (60 * 60);
  let minutes = Math.floor(divisorForMinutes / 60);
  // console.log("minutes:", minutes);

  let divisorForSeconds = divisorForMinutes % 60;
  let seconds = Math.ceil(divisorForSeconds);
  // console.log("seconds:", seconds);

  let obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };
  return obj;
};

export default secondsToTime;
