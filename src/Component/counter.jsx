import React from "react";
function Counter() {
  let count = document.querySelectorAll(".count");
  let arr = Array.from(count);

  arr.map(function (item) {
    let startnumber = 0;

    function counterup() {
      startnumber++;
      item.innerHTML = startnumber;

      if (startnumber == item.dataset.number) {
        clearInterval(stop);
      }
    }

    let stop = setInterval(function () {
      counterup();
    }, 50);
  });
  return (
    <>
      <div id="counter">
        <div className="item">
          <h1 className="count" data-number="50"></h1>
          <h3 className="text">Reward</h3>
        </div>
        <div className="item">
          <h1 className="count" data-number="15"></h1>
          <h3 className="text">year+ Eexperience</h3>
        </div>
        <div className="item">
          <h1 className="count" data-number="2040"></h1>
          <h3 className="text">project completed</h3>
        </div>
        <div className="item">
          <h1 className="count" data-number="1018"></h1>
          <h3 className="text">happy clients</h3>
        </div>
      </div>
    </>
  );
}
export default Counter;
