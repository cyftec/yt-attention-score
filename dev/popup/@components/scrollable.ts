import { Child, component, m, MHtmlElement } from "@mufw/maya";
import { ScrollButton } from "./scrollbutton";
import { dstring, effect, MaybeSignal, signal } from "@cyftech/signal";

type ScrollableProps = {
  child: MaybeSignal<Child>;
  scrollTop: number;
  maxScrollTop: number;
  onScrollV: (scrollTop: number, maxScrollHeight: number) => void;
};

export const Scrollable = component<ScrollableProps>(
  ({ child, scrollTop, maxScrollTop, onScrollV }) => {
    let thisElem: MHtmlElement;

    const getMaxScrollHeight = () =>
      thisElem ? thisElem.scrollHeight - thisElem.clientHeight : 0;

    effect(() => {
      console.log(scrollTop.value);
      thisElem && thisElem.scroll({ top: scrollTop.value });
    });

    return m.Div({
      id: "scroller",
      class: "h5 overflow-y-scroll mt3",
      onmount: (el) => (thisElem = el),
      onscroll: (e) => {
        const newScrollTop = e.target.scrollTop as number;
        onScrollV(newScrollTop, getMaxScrollHeight());
      },
      children: [
        ScrollButton({
          classNames: dstring`absolute left-0 right-0 ${() =>
            scrollTop.value > 10 ? "" : "dn"}`,
          isScrollUp: true,
          onclick: () => {
            const newScrollValue = scrollTop.value - 100;
            const newScrollTop = newScrollValue < 0 ? 0 : newScrollValue;
            onScrollV(newScrollTop, getMaxScrollHeight());
          },
        }),
        child,
        ScrollButton({
          classNames: "sticky bottom-0",
          onclick: () => {
            const newScrollValue = scrollTop.value + 100;
            const newScrollTop =
              newScrollValue > maxScrollTop.value
                ? maxScrollTop.value
                : newScrollValue;
            onScrollV(newScrollTop, getMaxScrollHeight());
          },
        }),
      ],
    });
  }
);
