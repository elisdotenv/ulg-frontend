// --- A function to handle last updated time
export const lastUpdateTimeFn = (updatedAt) => {
  const date = new Date(updatedAt);
  if (isNaN(date.getTime())) {
    return 'Invalid date'; //
  }

  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return `${seconds} Seconds ago`;
  if (minutes < 60) return `${minutes} Mins ago`;
  if (hours < 24) return `${hours} Hrs ago`;
  return `${days} Days ago`;
};

// --- A function to handle last updated time
export const updatedTimeFn = (updatedAt) => {
  const date = new Date(updatedAt);
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // --- If the date is within the last 24 hours, return the relative time
  if (seconds < 60) return `${seconds} Seconds ago`;
  if (minutes < 60) return `${minutes} Mins ago`;
  if (hours < 24) return `${hours} Hrs ago`;

  // --- Format the date as MMM DD
  const options = { month: 'short', day: '2-digit' };
  return date.toLocaleDateString('en-US', options).replace(',', '');
};

// --- A function to handle last updated time
export const formatPostedDate = (publishedAt) => {
  const date = new Date(publishedAt);
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const formattedDate = date.toLocaleDateString('en-US', options);

  return formattedDate;
};
