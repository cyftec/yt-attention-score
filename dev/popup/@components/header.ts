import { m } from "@mufw/maya";
import { HEADER_SUBTITLE, HEADER_TITLE } from "../../@libs/constants";

export const Header = m.Div({
  class: "flex items-center",
  children: [
    m.Img({
      src: "/assets/images/logo.png",
      height: "64",
      width: "64",
    }),
    m.Div({
      class: "ml3",
      children: [
        m.Div({
          class: "ma0 f3 fw3",
          children: HEADER_TITLE,
        }),
        m.Div({
          class: "f7 mt1",
          children: HEADER_SUBTITLE,
        }),
      ],
    }),
  ],
});
