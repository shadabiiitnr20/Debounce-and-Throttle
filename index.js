console.log("Hello");

//Debounce Implementation
const getData = () => {
  console.count("Fetch Data from API - Debouncing");
};

const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterFunctionDebounce = debounce(getData, 300);

//Throttling Implementation

const fetchData = () => {
  console.count("Fetch Data from API - Throttling");
};

const throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterFunctionThrottle = throttle(fetchData, 1000);

window.addEventListener("resize", betterFunctionThrottle);
