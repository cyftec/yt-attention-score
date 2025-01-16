import { extractNumStrings, parseNumber } from "./@libs/utils";

/**
 * KNOW ISSUE
 *
 * Sometimes the locale number string in aria-label mismatches that with
 * the locale set for the document. That results in an incorrect score.
 *
 * E.g. in case of 'bosanski' language of the document is 'bs-Latn-BA'
 * (check html[lang="bs-Latn-BA"] for same), which should have decimal
 * representated with a comma (','). While the number string in aria-label
 * of like button has number with point (.) decimal.
 */

(() => {
  const loadIgnoreScore = () => {
    const lang = document.documentElement.lang;

    const viewsMetaElem = document.querySelector<HTMLElement>(
      `[itemprop="interactionCount"]`
    );
    const viewsCountStr = viewsMetaElem?.getAttribute("content") || "0";
    const viewsCount = parseNumber(viewsCountStr, lang);

    const likesElem = document.querySelector<HTMLElement>(
      `like-button-view-model button`
    );
    const ariaLabelText = likesElem?.getAttribute("aria-label") || "";
    const likesCountStr = extractNumStrings(ariaLabelText, lang)[0] || "0";
    const likesCount = parseNumber(likesCountStr, lang) ?? 0;

    const ignoreScore = viewsCount / likesCount;
    const ignoreScoreString = ignoreScore.toFixed(ignoreScore < 10 ? 1 : 0);
    console.log(ignoreScoreString); // 61.59349463227047
  };

  chrome.runtime.onMessage.addListener((message) => {
    if (message.videoLoaded) {
      loadIgnoreScore();
    }
  });
  loadIgnoreScore();
})();
