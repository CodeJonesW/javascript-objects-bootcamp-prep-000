var playlist = {}

function updatePlaylist (obj,key,song) {
  obj.key = 'song';
  return obj;
}
function removeFromPlaylist (obj,key) {
  delete obj.key;
}