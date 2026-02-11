document.addEventListener('DOMContentLoaded', () => {
  const accordion = document.querySelector('.accordion');
  accordion.addEventListener('click', (event) => {
    const trigger = event.target.closest('.accordion__trigger');
    if (!trigger) return;

    const contentContainer = trigger.closest('.accordion__item');
    if (contentContainer) contentContainer.classList.toggle('is-active');
  });
});
