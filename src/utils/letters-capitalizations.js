/* Capitalize the first letter for each word with exceptions */
export const capitalizeFirstLetter = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const capitalizeHeader = (header) => {
  if (!header) return '';

  // List of words that should not be capitalized
  const exceptions = new Set([
    'is',
    'and',
    'for',
    'with',
    'the',
    'in',
    'at',
    'of',
    'to',
    'a',
    'an',
    'but',
    'or',
    'on',
    'by',
    'as',
    'this',
    'that',
  ]);

  return header
    .split(' ')
    .map((word, index) => {
      // Capitalize the first word or if the word is not in the exceptions
      if (index === 0 || !exceptions.has(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    })
    .join(' ');
};
