var playlist = {
  str: ''
};
function updatePlaylist (obj,str,song) {
  obj.str = song;
  return obj;
}
function removeFromPlaylist (obj,str) {
  delete obj.str;
}