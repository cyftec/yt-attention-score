import { component, m } from "@mufw/maya";

type PragraphsProps = {
  paragraphs: string[];
};

export const Paragraphs = component<PragraphsProps>(({ paragraphs }) => {
  return m.Div({
    children: m.For({
      items: paragraphs,
      map: (para) =>
        m.P({
          class: "tj mt0",
          children: para,
        }),
    }),
  });
});
