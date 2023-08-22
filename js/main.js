fetch("data.json")
  .then((resp) => resp.json())
  .then((result) => (myJsObj = result));

setTimeout(() => {
  document.querySelector("body").style.opacity = "1";
}, 500);
//change color of points when hover in each box
let points = document.querySelectorAll(
  "main .box .sub_component .upper .points"
);
points.forEach((ele) => {
  ele.addEventListener("mouseenter", (event) => {
    let span = event.target.children;
    for (let i = 0; i < span.length; i++) {
      span[i].style.backgroundColor = `${event.target.dataset.color}`;
    }
  });
});
points.forEach((ele) => {
  ele.addEventListener("mouseleave", (event) => {
    let span = event.target.children;
    for (let i = 0; i < span.length; i++) {
      span[i].style.backgroundColor = `hsl(236, 100%, 87%)`;
    }
  });
});

//daily
let daily = document.querySelector("main .box .list ul li#daily");
let weekly = document.querySelector("main .box .list ul li#weekly");
let monthly = document.querySelector("main .box .list ul li#monthly");

let title = document.querySelectorAll("main .sub_component .upper h2");
let hours = document.querySelectorAll("main .sub_component .hours");
let prev = document.querySelectorAll("main .sub_component .Previous");

daily.addEventListener("click", (event) => {
  event.target.classList.toggle("active");
  weekly.classList.remove("active");
  monthly.classList.remove("active");
  title.forEach((t) => {
    for (let i = 0; i < myJsObj.length; i++) {
      if (t.innerHTML === `${myJsObj[i].title}`) {
        let hours = t.parentElement.parentElement.querySelector(".hours");
        let prev = t.parentElement.parentElement.querySelector(".Previous");
        let current = myJsObj[i].timeframes.daily.current;
        let previous = myJsObj[i].timeframes.daily.previous;
        current === 1
          ? (hours.innerHTML = `${current}hr`)
          : (hours.innerHTML = `${current}hrs`);
        previous === 1
          ? (prev.innerHTML = `Yesterday-${previous}hr`)
          : (prev.innerHTML = `Yesterday-${previous}hrs`);
      }
    }
  });
});
weekly.addEventListener("click", (event) => {
  event.target.classList.toggle("active");
  daily.classList.remove("active");
  monthly.classList.remove("active");
  title.forEach((t) => {
    for (let i = 0; i < myJsObj.length; i++) {
      if (t.innerHTML === `${myJsObj[i].title}`) {
        let hours = t.parentElement.parentElement.querySelector(".hours");
        let prev = t.parentElement.parentElement.querySelector(".Previous");
        let current = myJsObj[i].timeframes.weekly.current;
        let previous = myJsObj[i].timeframes.weekly.previous;
        current === 1
          ? (hours.innerHTML = `${current}hr`)
          : (hours.innerHTML = `${current}hrs`);
        previous === 1
          ? (prev.innerHTML = `Last Week-${previous}hr`)
          : (prev.innerHTML = `Last Week-${previous}hrs`);
      }
    }
  });
});
monthly.addEventListener("click", (event) => {
  event.target.classList.toggle("active");
  daily.classList.remove("active");
  weekly.classList.remove("active");
  title.forEach((t) => {
    for (let i = 0; i < myJsObj.length; i++) {
      if (t.innerHTML === `${myJsObj[i].title}`) {
        let hours = t.parentElement.parentElement.querySelector(".hours");
        let prev = t.parentElement.parentElement.querySelector(".Previous");
        let current = myJsObj[i].timeframes.monthly.current;
        let previous = myJsObj[i].timeframes.monthly.previous;
        current === 1
          ? (hours.innerHTML = `${current}hr`)
          : (hours.innerHTML = `${current}hrs`);
        previous === 1
          ? (prev.innerHTML = `Last Month-${previous}hr`)
          : (prev.innerHTML = `Last Month-${previous}hrs`);
      }
    }
  });
});
