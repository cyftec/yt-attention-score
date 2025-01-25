import { TabType } from "../types";

export const CHROME_RUNTIME_MESSAGES = {
  YT_VIDEO_UPDATED: "YT_VIDEO_UPDATED",
};

export const HOST_URL_IDENTIFIER = "https://*.youtube.com/*";
export const APP_NAME = "YouTube Attention Score";
export const HEADER_TITLE = APP_NAME;
export const HEADER_SUBTITLE = "A Cyfer product";
export const APP_DESCRIPTION =
  "An attention score presenter for a YouTube video.";

export const UI_ELEM_ID = "attention-score";
export const SELECTOR = {
  VIEWS_ELEM: "#ytd-watch-info-text #tooltip",
  LIKES_ELEM: "like-button-view-model button",
  CONTAINER_ELEM: "#above-the-fold #title",
};
export const ATTENTION = {
  OKAY: "😑",
  GOOD: "🙂",
  AWESOME: "😃",
  FABULOUS: "🤩",
  UNEXPECTED: "😲",
};

export const PARAGRAPHS: Record<TabType, string[]> = {
  Overview: [
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
  ],
  Limitations: [
    `1. RIGHT TO LEFT LANGUAGES`,

    `Currently this extension is not supported on scripts/languages which are written from
    right to left. Like Arabic, Urdu, etc.`,

    `&bull;`,

    `2. INCORRECT DATA FROM YOUTUBE`,

    `This extension uses the data coming in aria-label and/or tooltips for a more
    accurate and unabbreviated number, say 2,013,456 instead of 2M.`,

    `Sometimes the locale number format (in aria-label) and the document language (locale)
    coming from YouTube mismatches with each other. That results in an incorrect score.`,

    `For example, in case of 'bosanski' language, the 'lang' attribute of the document
    is set to 'bs-Latn-BA' (check html[lang="bs-Latn-BA"] for same), in which the
    decimal in a number is representated with a comma (','). While the formatted
    number string coming from backend for like button's aria-label has the
    opposite, i.e. number with point (.) decimal.`,
  ],
};
