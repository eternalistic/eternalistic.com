window.addEventListener('DOMContentLoaded', () => {
  /**
   * Phone and tablet menu. Without JS the toggle stays hidden and the menu
   * stays visible. Opening it scrolls back to the top, where the menu is.
   */
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.nav-toggle');

  if (header && toggle) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      header.classList.toggle('header--open', open);
    };

    header.classList.add('header--collapsible');
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      setOpen(open);
      if (open) window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && header.classList.contains('header--open')) {
        setOpen(false);
        toggle.focus();
      }
    });
  }
});
