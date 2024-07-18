class Accordion {
    constructor(wrapper) {
      this.wrapper = wrapper;
      this.openItem = null;
      this.init();
    }
  
    init() {
      this.headers = this.wrapper.querySelectorAll('.accordion__item-header-trigger');
      var self = this;
      this.headers.forEach(header => {
        header.addEventListener('click', function(event) {
            self.toggleItem(this);
        });
      });
    }
  
    toggleItem(button) {
        console.log(this.openItem);
        if (this.openItem) {
            this.openItem.setAttribute('aria-expanded', 'false');
            this.openItem.closest('.accordion__item').querySelector('.accordion__item-panel').setAttribute('aria-hidden', 'true');
        }

        const content = button.closest('.accordion__item').querySelector('.accordion__item-panel');
        const isOpen = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', !isOpen);
        content.setAttribute('aria-hidden', isOpen);
    
        if (this.openItem && this.openItem !== button) {
            this.openItem.setAttribute('aria-expanded', 'false');
            this.openItem.closest('.accordion__item').querySelector('.accordion__item-panel').setAttribute('aria-hidden', 'true');
        }

        this.openItem = !isOpen ? button : null;

        content.classList.remove('accordion__item-panel--collapsed');
        if (!isOpen) {
            content.classList.add('accordion__item-panel--collapsed'); 
        }
    }
}
  
// Instantiate the Accordion for each wrapper on the page
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion__wrapper');
    accordions.forEach(wrapper => new Accordion(wrapper));
}, { once: true });