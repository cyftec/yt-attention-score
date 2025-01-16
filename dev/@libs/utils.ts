export const deepTrim = (text: string) =>
  text.replaceAll(String.fromCharCode(160), "").replaceAll(" ", "");

export const parseNumber = (numString: string, numLocale: string) => {
  const numStr = deepTrim(numString);
  const isEnLikeLocale = (1.1).toLocaleString(numLocale) === "1.1";
  const enNumStr = isEnLikeLocale
    ? numStr.replaceAll(",", "")
    : numStr.replaceAll(",", "?").replaceAll(".", "").replaceAll("?", ".");

  return parseFloat(enNumStr);
};

export const extractNumStrings = (txt: string, numLocale: string) => {
  const words = txt.replaceAll("  ", " ").split(" ");
  // console.log(words);
  const nums: string[] = [];

  const oneNumStack: string[] = [];
  for (const word of words) {
    const num = parseInt(
      word
        .replaceAll(String.fromCharCode(160), "")
        .replaceAll(",", "")
        .replaceAll(".", "")
    );
    if (num < 0 || num >= 0) {
      oneNumStack.push(word);
    } else {
      if (oneNumStack.length) {
        const fullNumString = oneNumStack.join("");
        nums.push(fullNumString);
      }
      oneNumStack.length = 0;
    }
  }

  return nums;
};
