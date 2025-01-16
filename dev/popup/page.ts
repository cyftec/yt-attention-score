import { signal } from "@cyftech/signal";
import { m } from "@mufw/maya";

const sub = signal("a");

export default m.Html({
  lang: "en",
  children: [
    m.Head({
      children: [
        m.Title("Maya App"),
        m.Meta({ charset: "UTF-8" }),
        m.Meta({
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        }),
        m.Meta({
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        }),
      ],
    }),
    m.Body({
      children: [
        m.Script({ src: "main.js", defer: "true" }),
        m.Div([
          m.H1({
            children: "My home page",
          }),
          m.Switch({
            subject: sub,
            cases: {
              a: "A",
              b: "B",
              c: "C",
            },
          }),
          m.Button({
            onclick: () => (sub.value = "a"),
            children: `select 'A'`,
          }),
          m.Button({
            onclick: () => {
              console.log("Clicked B");
              sub.value = "b";
            },
            children: `select 'B'`,
          }),
          m.Button({
            onclick: () => (sub.value = "c"),
            children: `select 'C'`,
          }),
        ]),
      ],
    }),
  ],
});
