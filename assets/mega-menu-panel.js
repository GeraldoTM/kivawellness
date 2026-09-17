class MegaMenuPanel extends HTMLElement {
  connectedCallback() {
    this.triggers = this.querySelectorAll('[data-megamenu-trigger]');
    this.triggers.forEach((trigger) => {
      trigger.addEventListener('pointerenter', () => this.activate(trigger));
      trigger.addEventListener('focus', () => this.activate(trigger));
      trigger.addEventListener('click', () => this.activate(trigger));
    });
  }

  activate(trigger) {
    const targetId = trigger.getAttribute('data-megamenu-target');
    this.triggers.forEach((t) => {
      const isActive = t === trigger;
      t.classList.toggle('megamenu__tab--active', isActive);
      t.setAttribute('aria-expanded', isActive);
    });
    this.querySelectorAll('.megamenu__dropdown').forEach((panel) => {
      panel.classList.toggle('megamenu__dropdown--active', panel.id === targetId);
    });
  }
}

if (!customElements.get('mega-menu-panel')) {
  customElements.define('mega-menu-panel', MegaMenuPanel);
}