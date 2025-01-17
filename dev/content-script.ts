import { m } from "@mufw/maya";
import { derived, signal } from "@cyftech/signal";
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

const videoUpdatedCount = signal(0);

const attentionScore = derived(() => {
  if (!videoUpdatedCount.value) return "0";
  const lang = document.documentElement.lang;

  const viewsElem = document.querySelector<HTMLElement>(
    `#ytd-watch-info-text #tooltip`
  );
  const viewsElemText = viewsElem?.innerText || viewsElem?.textContent || "";
  const viewsCountStr = extractNumStrings(viewsElemText, lang)[0] || "0";
  const viewsCount = parseNumber(viewsCountStr, lang);

  const likesElem = document.querySelector<HTMLElement>(
    `like-button-view-model button`
  );
  const ariaLabelText = likesElem?.getAttribute("aria-label") || "";
  const likesCountStr = extractNumStrings(ariaLabelText, lang)[0] || "0";
  const likesCount = parseNumber(likesCountStr, lang) ?? 0;

  console.log(likesCount);
  console.log(viewsCount);

  const attentionScore = (1000 * likesCount) / viewsCount;
  const attentionScoreString = attentionScore.toFixed(
    attentionScore < 10 ? 1 : 0
  );
  console.log(attentionScoreString);

  return attentionScoreString;
});

const attentionEmoji = derived(() => {
  const attentionScoreNum = parseFloat(attentionScore.value);

  if (attentionScoreNum < 10) return "😑";
  if (attentionScoreNum < 25) return "🙂";
  if (attentionScoreNum < 50) return "😃";
  if (attentionScoreNum < 100) return "🤩";

  return "😲";
});

const attentionScoreUI = m.Div({
  id: "attention-score",
  children: [
    m.Style(`
      .igs-container {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        background-color: #f2f2f2;
        color: #666;
        padding: 1px 10px;
        margin-right: 10px;
        font-weight: bold;
      }

      .igs-icon {
        font-size: 16px;
        padding: 4px;
      }
        
      .igs-text {
        font-size: 15px;
        padding: 4px;
      }
    `),
    m.Div({
      class: "igs-container",
      children: [
        m.Span({ class: "igs-icon", children: attentionEmoji }),
        m.Span({ class: "igs-text", children: attentionScore }),
      ],
    }),
  ],
})();

const updateUI = () => {
  videoUpdatedCount.value++;
  const container = document.querySelector<HTMLElement>(
    "#above-the-fold #title"
  );
  if (!container) return;

  container.setAttribute(
    "style",
    "display: flex; align-items: center; padding-bottom: 10px;"
  );

  if (container.firstElementChild?.id === "attention-score") {
    container.replaceChild(attentionScoreUI, container.firstElementChild);
  } else {
    container.prepend(attentionScoreUI);
  }
};

const runExtension = () => {
  chrome.runtime.onMessage.addListener((message) => {
    if (message.videoLoaded) {
      updateUI();
    }
  });
  updateUI();
};

runExtension();
