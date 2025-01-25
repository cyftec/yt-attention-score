import { CHROME_RUNTIME_MESSAGES } from "./@libs/constants";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    console.log(`sending message tot tabs`);
    console.log(new Date());
    chrome.tabs.sendMessage(tabId, CHROME_RUNTIME_MESSAGES.YT_VIDEO_UPDATED);
  }
});
