import { dstring } from "@cyftech/signal";
import { component, m } from "@mufw/maya";

type TabsProps = {
  classNames?: string;
  tabs: string[];
  selectedTabIndex: number;
  onChange: (tabIndex: number) => void;
};

export const Tabs = component<TabsProps>(
  ({ classNames, tabs, selectedTabIndex, onChange }) => {
    return m.Div({
      class: dstring`flex content-stretch bg-near-white pa1 br3 ${classNames}`,
      children: m.For({
        items: tabs,
        map: (tab, index) =>
          m.Span({
            class: dstring`w-100 br3 pa1 flex justify-center ${() =>
              selectedTabIndex.value === index
                ? "black bg-white"
                : "gray pointer"}`,
            onclick: () => onChange(index),
            children: tab,
          }),
      }),
    });
  }
);
