/* truncate Title */
export const truncateTitle = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');

  if (trimmedTitle.length <= 65) return title;

  const truncated = title.slice(0, 65);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '...' : truncated + '...';
};

export const truncateTitleSpecial = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');

  if (trimmedTitle.length <= 85) return title;

  const truncated = title.slice(0, 85);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '...' : truncated + '...';
};

/* truncate title in slider-posts component */
export const truncateSliderTitle = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');

  if (trimmedTitle.length <= 75) return title;

  const truncated = title.slice(0, 75);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '...' : truncated + '...';
};

/* truncate Description text */
export const truncateDescription = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');
  // 35
  if (trimmedTitle.length <= 60) return title;

  // 40
  const truncated = title.slice(0, 60);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '...' : truncated + '...';
};

/* truncate Description text Medium Screens */
export const truncateDescriptionMedium = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');

  if (trimmedTitle.length <= 65) return title;

  const truncated = title.slice(0, 65);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '...' : truncated + '...';
};

/* truncate Description text Large Screens */
export const truncateDescriptionLarge = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');

  if (trimmedTitle.length <= 85) return title;

  const truncated = title.slice(0, 85);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '...' : truncated + '...';
};

/* truncate Description text Large Screens */
export const truncateDescriptionLargeSpecial = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');

  if (trimmedTitle.length <= 100) return title;

  const truncated = title.slice(0, 100);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '...' : truncated + '...';
};

/* truncate Description text */
export const truncateDescriptionSM = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');

  if (trimmedTitle.length <= 70) return title;

  const truncated = title.slice(0, 70);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '...' : truncated + '...';
};
