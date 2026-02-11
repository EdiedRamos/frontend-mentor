document.addEventListener('DOMContentLoaded', () => {
  const accordion = document.querySelector('.accordion');
  accordion.addEventListener('click', (event) => {
    const trigger = event.target.closest('.accordion__trigger');
    if (!trigger) return;

    const contentContainer = trigger.closest('.accordion__item');

    const activeItems = document.querySelectorAll('.accordion__item.is-active');
    activeItems.forEach(
      (item) => item !== contentContainer && item.classList.remove('is-active'),
    );

    if (contentContainer) contentContainer.classList.toggle('is-active');
  });
});
