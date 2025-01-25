import { derived, signal } from "@cyftech/signal";
import { m, MHtmlElement } from "@mufw/maya";
import {
  Footer,
  Header,
  Limitations,
  Overview,
  Scrollable,
  Tabs,
} from "./@components";

type TabType = "Overview" | "Limitations";
const tabs: TabType[] = ["Overview", "Limitations"];
const selectedTab = signal<TabType>("Overview");

export default m.Html({
  lang: "en",
  children: [
    m.Head({
      children: [
        m.Title("Maya App"),
        m.Meta({ charset: "UTF-8" }),
        m.Meta({ "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
        m.Meta({
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        }),
        m.Link({ rel: "stylesheet", href: "/assets/styles.css" }),
      ],
    }),
    m.Body({
      children: [
        m.Script({ src: "main.js", defer: "true" }),
        m.Div({
          class: "w6 gray f5",
          children: [
            m.Div({
              class: "pa3",
              children: [
                Header,
                Tabs({
                  classNames: "mt2",
                  tabs: tabs as unknown as string[],
                  selectedTabIndex: derived(
                    () => tabs.indexOf(selectedTab.value) || 0
                  ),
                  onChange: (tabIndex) => (selectedTab.value = tabs[tabIndex]),
                }),
                Scrollable({
                  child: m.Switch({
                    subject: selectedTab,
                    cases: { Overview, Limitations },
                  }),
                }),
              ],
            }),
            Footer,
          ],
        }),
      ],
    }),
  ],
});
