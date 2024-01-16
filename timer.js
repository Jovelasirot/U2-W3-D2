const getCounter = () => {
  return parseInt(sessionStorage.getItem("counter")) || 0;
};

const setCounter = (value) => {
  sessionStorage.setItem("counter", value);
};

const updateCounter = () => {
  let counter = getCounter();
  counter++;
  setCounter(counter);
  document.getElementById("counter").innerText =
    counter < 10 ? "0" + counter : counter;
};

setInterval(updateCounter, 1000);
