import { dstring } from "@cyftech/signal";
import { Child, component, m, MHtmlElement } from "@mufw/maya";

type ScrollButtonProps = {
  classNames?: string;
  isScrollUp?: boolean;
  onclick: () => void;
};

export const ScrollButton = component<ScrollButtonProps>(
  ({ classNames, isScrollUp, onclick }) => {
    return m.Button({
      class: dstring`hover-bg-white-70 hover-black-20 transparent w-100 f3 bn pointer ${() =>
        isScrollUp?.value
          ? "bg-to-top-white"
          : "bg-to-bottom-white"} ${classNames}`,
      onclick: onclick,
      children: isScrollUp?.value ? "&#11205;" : "&#11206;",
    });
  }
);
