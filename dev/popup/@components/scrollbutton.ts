import { dstring } from "@cyftech/signal";
import { component, m } from "@mufw/maya";

type ScrollButtonProps = {
  classNames?: string;
  isScrollUp?: boolean;
  onclick: () => void;
};

export const ScrollButton = component<ScrollButtonProps>(
  ({ classNames, isScrollUp, onclick }) => {
    return m.Button({
      class: dstring`w-100 f3 lh-solid bn bg-light-gray pointer absolute left-0 right-0 ${classNames}`,
      onclick: onclick,
      children: isScrollUp?.value ? "&#11205;" : "&#11206;",
    });
  }
);
