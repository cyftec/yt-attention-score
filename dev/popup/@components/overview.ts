import { m } from "@mufw/maya";

const paragraphs = [
  `Earlier YouTube used to show the number of dislikes, which was helpful in calculating
  how likable a video is, by simply calculating number of likes over dislikes.
  Since YouTube now no longer shows a dislikes count, it's difficult to calculate
  the quality of a video based on likes and dislikes.`,
  `This extension does not use dislikes count. On the cotrary it calculates the number
  of likes over number of views. To put it in layman
  terms, it means how many views of the video got successfully converted into likes.
  But there is a catch. Since the number of views is not unique-user's views but an
  overall views count, including the repetitive ones. Unlike number of likes which is
  overall count of likes by unique users. A bingeworthy video can be viewed multiple times
  by one user while only being liked once. For example a music video. In such case a lower
  ratio of likes over views indicates that the video is really appreciated by everyone so
  much so that people come back many times to watch it again and again.`,
  `On the other hand, one-time watch kind of videos like vlogs, news items, informative
  content, etc is indictated correctly by the attention score. Higher the score, more
  appreciated the video is.`,
];

export const Overview = m.Div({
  children: m.For({
    items: paragraphs,
    map: (para) =>
      m.P({
        class: "tj mt0",
        children: para,
      }),
  }),
});
