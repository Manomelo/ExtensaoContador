chrome.runtime.onInstalled.addListener(() => {
  console.log("Contador de cliques instalado.");
  chrome.storage.local.set({ installs: Date.now(), clickCount: 0 });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "GET_COUNT") {
    chrome.storage.local.get(["clickCount"], (res) => {
      sendResponse({ count: res.clickCount || 0 });
    });
    return true;
  }

  if (msg.type === "INCREMENT_COUNT") {
    chrome.storage.local.get(["clickCount"], (res) => {
      const updated = (res.clickCount || 0) + 1;
      chrome.storage.local.set({ clickCount: updated }, () => {
        sendResponse({ count: updated });
      });
    });
    return true;
  }
});
