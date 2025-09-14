const btn = document.getElementById("btnClick");
const countEl = document.getElementById("count");

function updateCount() {
  chrome.runtime.sendMessage({ type: "GET_COUNT" }, (response) => {
    if (response && typeof response.count === "number") {
      countEl.textContent = response.count;
    }
  });
}

updateCount();

btn.addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "INCREMENT_COUNT" }, (response) => {
    if (response && typeof response.count === "number") {
      countEl.textContent = response.count;
    }
  });
});
