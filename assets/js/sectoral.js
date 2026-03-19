function flipCard(button) {
  const card = button.closest('.sector-card');
  if (card) {
    card.classList.toggle('flip');
  }
}
