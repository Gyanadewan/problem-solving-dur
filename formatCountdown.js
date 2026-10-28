function formatCountdown(totalSeconds) {
  const hours = parseInt(totalSeconds/ 3600);
  const minutes = parseInt((totalSeconds % 3600)/60);
  const seconds = totalSeconds % 60;
  
  const hh = hours <10? "0" + hours : hours;
  const mm = minutes <10 ? "0" + minutes : minutes;
  const ss = seconds < 10 ? "0" + seconds: seconds;
  return `${hh}:${mm}:${ss}`;
}
const totalSeconds = 59
console.log( formatCountdown(totalSeconds))