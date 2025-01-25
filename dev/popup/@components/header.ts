import { m } from "@mufw/maya";
import { HEADER_SUBTITLE, HEADER_TITLE } from "../../@libs/constants";

export const Header = m.Div({
  class: "flex items-center",
  children: [
    m.Img({
      class: "nl1",
      src: "/assets/images/logo.png",
      height: "72",
      width: "72",
    }),
    m.Div({
      class: "ml3 nt1",
      children: [
        m.Div({
          class: "ma0 f3 fw3",
          children: HEADER_TITLE,
        }),
        m.Div({
          class: "f7 silver",
          children: HEADER_SUBTITLE,
        }),
      ],
    }),
  ],
});
