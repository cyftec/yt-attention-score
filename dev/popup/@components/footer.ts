import { m } from "@mufw/maya";

export const Footer = m.Div({
  class: "pa3 bg-near-white f6",
  children: [
    m.Div({
      children: [
        "This extention is created using ",
        m.A({
          target: "_blank",
          href: "https://maya.cyfer.tech",
          children: "Maya",
        }),
        ". Check out source ",
        m.A({
          target: "_blank",
          href: "https://github.com/cyftec/yt-attention-score",
          children: "here",
        }),
        ".",
      ],
    }),
    m.Div({
      class: "mv3 bt b--moon-silver",
    }),
    m.Div({
      class: "flex justify-between",
      children: [
        m.Div({
          class: "w-100",
          children: [
            "Have query, suggestion or an idea? Write to, ",
            m.A({
              target: "_blank",
              href: "mailto:cyftec@cyfer.tech",
              children: "cyftec@cyfer.tech",
            }),
          ],
        }),
        m.Div({
          class: "w-100 tr",
          children: [
            "Find out more products on ",
            m.A({
              target: "_blank",
              href: "https://www.cyfer.tech",
              children: "cyfer.tech",
            }),
          ],
        }),
      ],
    }),
  ],
});
