let accessToken;
const clientID = '70a7de25b31d4f309b491abdf1f92102';
const redirectURI = 'http://localhost:3000/jamming';

const Spotify = {
  getAccessToken() {
    if (accessToken){
      return accessToken;
    } else {
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

      if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Acess Token', null, '/');
        return accessToken;
      } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
      }

    }
  };

};

export default Spotify;