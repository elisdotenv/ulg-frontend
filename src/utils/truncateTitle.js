export const truncateTitle = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');

  if (trimmedTitle.length <= 75) return title;

  const truncated = title.slice(0, 75);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '..' : truncated + '..';
};

export const truncateDescription = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');

  if (trimmedTitle.length <= 70) return title;

  const truncated = title.slice(0, 70);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '..' : truncated + '..';
};

/* MObile Screens */
export const truncateDescriptionMobile = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');

  if (trimmedTitle.length <= 37) return title;

  const truncated = title.slice(0, 37);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '..' : truncated + '..';
};

/* Medium Screens */
export const truncateDescriptionMedium = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');

  if (trimmedTitle.length <= 80) return title;

  const truncated = title.slice(0, 80);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '..' : truncated + '..';
};

export const truncateSpecialTitle = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');

  if (trimmedTitle.length <= 57) return title;

  const truncated = title.slice(0, 57);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '..' : truncated + '..';
};

export const truncateSpecialTitleSmall = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');

  if (trimmedTitle.length <= 55) return title;

  const truncated = title.slice(0, 55);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '..' : truncated + '..';
};

/* Card Component */
export const truncateSpecialTitleCard = (title) => {
  if (!title) return '';

  const trimmedTitle = title.replace(/\s+/g, '');

  if (trimmedTitle.length <= 65) return title;

  const truncated = title.slice(0, 65);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // If there are no spaces, just return the first 100 characters
  return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '..' : truncated + '..';
};
