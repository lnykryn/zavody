/* Keep voiceovers from playing over one another; native controls work without JS. */
(() => {
  const players = document.querySelectorAll('.voiceover audio');
  players.forEach(player => {
    player.addEventListener('play', () => {
      players.forEach(other => {
        if (other !== player) other.pause();
      });
    });
  });
})();
