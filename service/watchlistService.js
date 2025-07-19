const WATCHLIST_KEY = "watchlist";

export const getWatchlist = () => {
  const stored = localStorage.getItem(WATCHLIST_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const addToWatchlist = (movie) => {
  const currentList = getWatchlist();
  const exists = currentList.some((item) => item.id === movie.id);
  if (!exists) {
    currentList.push(movie);
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(currentList));
    return true;
  }
  return false;
};

export const removeFromWatchlist = (id) => {
  const currentList = getWatchlist().filter((item) => item.id !== id);
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(currentList));
};

export const clearWatchlist = () => {
  localStorage.removeItem(WATCHLIST_KEY);
};
