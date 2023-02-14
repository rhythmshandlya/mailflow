chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Save As A Template",
    id: "compose",
    contexts: ["selection"],
  });
  chrome.contextMenus.onClicked.addListener((events) => {
    console.log(events);
  });
});
