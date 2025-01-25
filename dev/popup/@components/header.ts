import { m } from "@mufw/maya";

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
          children: "YouTube Video Attention Score",
        }),
        m.Div({
          class: "f7 mt1",
          children: "A Cyfer product",
        }),
      ],
    }),
  ],
});
