import { Child, component, m, MHtmlElement } from "@mufw/maya";
import { ScrollButton } from "./scrollbutton";
import { dstring, MaybeSignal, signal } from "@cyftech/signal";

type ScrollableProps = {
  child: MaybeSignal<Child>;
};

export const Scrollable = component<ScrollableProps>(({ child }) => {
  let thisElem: MHtmlElement;
  let maxScrollTop: number = 0;
  const scrollTop = signal(0);

  return m.Div({
    class: "h5 overflow-y-scroll mt3",
    onmount: (el) => {
      thisElem = el;
      maxScrollTop = thisElem.scrollHeight - thisElem.clientHeight;
    },
    onscroll: (e) => (scrollTop.value = e.target.scrollTop as number),
    children: [
      ScrollButton({
        classNames: dstring`absolute left-0 right-0 ${() =>
          scrollTop.value > 10 ? "" : "dn"}`,
        isScrollUp: true,
        onclick: () => {
          const newScrollValue = scrollTop.value - 100;
          scrollTop.value = newScrollValue < 0 ? 0 : newScrollValue;
          thisElem &&
            thisElem.scroll({ top: scrollTop.value, behavior: "smooth" });
        },
      }),
      child,
      ScrollButton({
        classNames: "sticky bottom-0",
        onclick: () => {
          const newScrollValue = scrollTop.value + 100;
          scrollTop.value =
            newScrollValue > maxScrollTop ? maxScrollTop : newScrollValue;
          thisElem &&
            thisElem.scroll({ top: scrollTop.value, behavior: "smooth" });
        },
      }),
    ],
  });
});
