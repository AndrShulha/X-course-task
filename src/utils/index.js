export const truncateTitle = (title, maxLength = 24) => {
  return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
};
