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

/* truncate Description text */
export const truncateDescription = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');
  // 35
  if (trimmedTitle.length <= 110) return title;

  // 40
  const truncated = title.slice(0, 110);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 110 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '...' : truncated + '...';
};
/* truncate Description text */
export const truncateDescriptionSmall = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');
  // 35
  if (trimmedTitle.length <= 50) return title;

  // 40
  const truncated = title.slice(0, 50);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 110 characters
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
