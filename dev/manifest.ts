const manifest: chrome.runtime.ManifestV3 = {
  name: "Youtube Ignore Score",
  version: "0.0.1",
  description: "Youtube Ignore Score",
  permissions: ["tabs"],
  host_permissions: ["https://*.youtube.com/*"],
  background: {
    service_worker: "sw.js",
  },
  content_scripts: [
    {
      matches: ["https://*.youtube.com/*"],
      js: ["content-script.js"],
    },
  ],
  web_accessible_resources: [
    {
      resources: ["assets/images/logo.png"],
      matches: ["https://*.youtube.com/*"],
    },
  ],
  action: {
    default_icon: {
      "16": "assets/images/logo.png",
      "24": "assets/images/logo.png",
      "32": "assets/images/logo.png",
    },
    default_title: "YouTube Ignore Score",
    default_popup: "popup/index.html",
  },
  manifest_version: 3,
};

export default manifest;
