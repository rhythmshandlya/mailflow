import API from "./API";
import FAQ from "./FAQ";
import General from "./General";
import Settings from "./Settings";

const sideBarComponents = [
  { Component: API, name: "API" },
  { Component: FAQ, name: "FAQ" },
  { Component: General, name: "General" },
  { Component: Settings, name: "Settings" },
];

export { sideBarComponents };
