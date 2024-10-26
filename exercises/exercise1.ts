// https://github.com/AvraamMavridis/Algorithms-Data-Structures-in-Typescript/blob/master/questions.md

/**
 * Given a string of words (x), you need to find the highest scoring word.
 * Each letter of a word scores points according to it's position in the alphabet. a=1, z=26 and everything in between.
 * You need to return the highest scoring word as a string.
 * If two words score the same, return the word that appears earliest in the original string.
 * All letters will be lower case and all inputs will be valid.
 */

const high = (phase: string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const words = phase.split(" ");
  let maxScore = -1;
  let maxWord;

  for (const word of words) {
    const score = [...word].reduce((acc, l) => acc + alphabet.indexOf(l), 0);
    if (score > maxScore) {
      maxScore = score;
      maxWord = word;
    }
  }

  return maxWord;
};
