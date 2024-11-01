// Function to get the value of a specific variable in the URL hash
export function getHashVariable(key) {
  const hash = window.location.hash.substring(1); // Remove the leading #
  const params = new URLSearchParams(hash);

  // Get the value for the key
  const value = params.get(key);

  // If the variable exists, remove it from the hash
  if (value !== null) {
      params.delete(key);
      window.location.hash = params.toString() ? `#${params.toString()}` : ''; // Update hash
      history.pushState("", document.title, window.location.pathname + window.location.search + window.location.hash);
  }

  return value;
}

export function getTokenFromHash() {
  // Extract the token
  const token = getHashVariable("fire_token");

  if (token) {
      // Store token in localStorage with an expiration timestamp
      const expirationTime = Date.now() + 55 * 60 * 1000; // 55 minutes in milliseconds
      localStorage.setItem('cachedToken', token);
      localStorage.setItem('tokenExpiration', expirationTime);
  }

  return token;
}

export function getCachedToken() {
  const token = localStorage.getItem('cachedToken');
  const expirationTime = localStorage.getItem('tokenExpiration');

  // Check if the token is still valid
  if (token && expirationTime && Date.now() < expirationTime) {
      return token;
  } else {
      // Token is expired or doesn't exist
      localStorage.removeItem('cachedToken');
      localStorage.removeItem('tokenExpiration');
      return null;
  }
}

export function fetchNewToken() {
  window.location.replace("https://bucuresti.brunstad.org/api/fire-token.php?r="+window.location.href);
}