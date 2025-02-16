// A function to handle last updated time
export const timeAgo = (publishedAt) => {
  const date = new Date(publishedAt); // Ensure publishedAt is parsed into a Date object
  if (isNaN(date.getTime())) {
    return 'Invalid date'; // Handle invalid date
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

// A function to handle last updated time
export const formatPostedTime = (publishedAt) => {
  const date = new Date(publishedAt); // Ensure publishedAt is parsed into a Date object
  if (isNaN(date.getTime())) {
    return 'Invalid date'; // Handle invalid date
  }

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const formattedDate = date.toLocaleString('en-US', options);
  return `${formattedDate}`;
};

// A function to handle last updated time
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
