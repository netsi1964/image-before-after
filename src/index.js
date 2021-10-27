import templateHtml from './template.html';

const templateElement = document.createElement('template');
const styles = ` {
    --BA-before: 'Before';
    --BA-after: 'After';
    --BA-width: 0px;
    --width: 200px;
    --height: 200px;
  }
  :host {
    position: relative;
    width: var(--width);
    height: var(--height);
    display: block;
  }
  .images {
    cursor: col-resize;
  }
  .img {
    position: absolute;
  }
  .after {
    z-index: 10;
    top: 0;
    background-color: orange;
  }
  .before {
    top: 0;
    background-color: white;
  }
  .before:before {
    color: hsla(0, 0%, 100%, 0.6);
    text-shadow: 0 0 5px black;
    content: var(--BA-before);
    position: absolute;
    margin-left: calc(100% - 56px);
    margin-top: 10px;
  }
  .after:after {
    color: hsla(0, 0%, 100%, 0.6);
    text-shadow: 0 0 5px black;
    content: var(--BA-after);
    margin-top: 10px;
    margin-left: 10px;
    position: absolute;
  }
  .text {
    padding: 4px;
    position: absolute;
    z-index: 15;
    bottom: 10px;
    right: 10px;
    font-size: 14pt;
    opacity: 0.6;
  }
  * {
    box-sizing: border-box;
  }
  `;
class HTMLImageBeforeAfter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.setAttribute('shadowRoot', shadowRoot);

    templateElement.innerHTML = `<style>${styles}</style>${templateHtml}`;
    shadowRoot.appendChild(templateElement.content.cloneNode(true));

    this.eleBefore = shadowRoot.querySelector('.before');
    this.eleAfter = shadowRoot.querySelector('.after');
    this.eleDummy = shadowRoot.querySelector('.dummy');
    this.eleText = shadowRoot.querySelector('.text');

    // parameters
    this.text = this.hasAttribute('text') ? this.getAttribute('text').trim() : '';
    if (this.text === '') {
      this.eleText.style.display = 'none';
    }
    this.eleText.innerHTML = this.text;
    this.change.bind(this);

    this.before = this.hasAttribute('before')
      ? this.getAttribute('before')
      : 'https://dummyimage.com/600x400/ffa500/fff.png';
    this.after = this.hasAttribute('after')
      ? this.getAttribute('after')
      : 'https://dummyimage.com/600x400/ffffff/000.png';

    // Find the width of the before image
    this.eleDummy.addEventListener('load', () => {
      this.width = getComputedStyle(this.eleDummy).width;
      this.height = getComputedStyle(this.eleDummy).height;
      this.init();
    });
    this.eleDummy.src = this.before;
  }

  init() {
    this.eleDummy.remove();
    const _width = this.width;
    const _height = this.height;

    this.eleBefore.style.backgroundImage = `url(${this.before})`;
    this.eleBefore.style.width = _width;
    this.eleBefore.style.height = _height;
    this.eleAfter.style.backgroundImage = `url(${this.after})`;
    this.eleAfter.style.width = _width;
    this.eleAfter.style.height = _height;

    this.style.width = _width;
    this.style.height = _height;
    this.style.position = 'relative';

    // add eventListerners
    this.shadowRoot.addEventListener('mousemove', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      this.change(evt.clientX);
    });
    this.shadowRoot.addEventListener('touchmove', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      this.change(evt.touches[0].clientX);
      return false;
    });
  }
  change(x) {
    this.offsetX = this.getClientRects()[0].x;
    this.eleAfter.style.width = `${Math.min(parseInt(this.width), x - this.offsetX)}px`;
  }
}

window.customElements.define('image-before-after', HTMLImageBeforeAfter);
