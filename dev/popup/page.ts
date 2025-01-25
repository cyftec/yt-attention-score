import { derived, signal } from "@cyftech/signal";
import { m } from "@mufw/maya";
import { PARAGRAPHS } from "../@libs/constants";
import { TabType } from "../types";
import { Footer, Header, Paragraphs, Scrollable, Tabs } from "./@components";

const tabs: TabType[] = ["Overview", "Limitations"];
const selectedTab = signal<TabType>("Overview");
const contentScrollTop = signal(0);
const maxScrollTop = signal(0);

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
                  onChange: (tabIndex) => {
                    selectedTab.value = tabs[tabIndex];
                    contentScrollTop.value = 0;
                    maxScrollTop.value = 0;
                  },
                }),
                Scrollable({
                  scrollTop: contentScrollTop,
                  maxScrollTop: maxScrollTop,
                  onScrollV: (top, maxHeight) => {
                    contentScrollTop.value = top;
                    maxScrollTop.value = maxHeight;
                  },
                  child: Paragraphs({
                    paragraphs: derived(() => PARAGRAPHS[selectedTab.value]),
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
