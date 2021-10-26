class ImageBeforeAndAfter {
  style = `<style>
	INSTANCE {
	  --BA-before: 'Before';
		--BA-after: 'After';
		--BA-width: 0px;
	}
	INSTANCE .images { cursor: col-resize;}
	INSTANCE .img {width: 100%; height: 100%; position: absolute;}
	INSTANCE .after {z-index: 10; top: 0; background-color: orange;}
	INSTANCE .before {top: 0; background-color: white;}
	INSTANCE .before:before { color: hsla(0,0%,100%,.6); text-shadow: 0 0 5px black; content: var(--BA-before); position: absolute; margin-left: calc(100% - 56px); margin-top: 10px;}
INSTANCE .after:after { color: hsla(0,0%,100%,.6); text-shadow: 0 0 5px black; content: var(--BA-after); margin-top: 10px; margin-left: 10px; position: absolute; }
INSTANCE .text { padding: 4px; position: absolute; background: orange; z-index: 15; color: black; bottom: 10px; right: 10px;font-size: 14pt; opacity: .6;}
INSTANCE > * {box-sizing: border-box; }
INSTANCE { position: relative;}
	</style>`;
  html = `
	<div class="images">
		<div class="before img"></div>
		<div class="after img"></div>
		<img class="dummy" />
		<div class="text"></div>
	</div>
	`;

  constructor(sel, before, after, text) {
    this.eleElement = document.querySelector(sel);
    if (this.eleElement === null) {
      console.log(`The selector "${sel}" did not point to an element on the page`);
      return null;
    }
    this.className = `beforeAndAfter${new Date() - new Date(2000, 0, 1)}`;
    this.eleElement.classList.add(this.className);
    this.eleElement.classList.add('beforeAndAfter');

    this.text = text ?? '';
    this.change.bind(this);
    this.before = before ?? 'https://dummyimage.com/600x400/000/fff.png';
    this.after = after ?? 'https://dummyimage.com/600x400/ffffff/000.png';

    this.style = this.style.replace(/INSTANCE/g, `.${this.className}`);
    this.eleElement.innerHTML = this.html + this.style;

    this.eleBefore = this.eleElement.querySelector(`.before`);
    this.eleAfter = this.eleElement.querySelector(`.after`);
    this.eleText = this.eleElement.querySelector(`.text`);

    this.eleStyle = this.eleElement.querySelector(`style`);

    this.eleText.innerHTML = this.text;

    // Find the width of the before image
    this.eleDummy = this.eleElement.querySelector(`.dummy`);
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
    this.eleElement.style.width = _width;
    this.eleElement.style.height = _height;

    this.eleElement.addEventListener('mousemove', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      this.change(evt.clientX);
    });
    this.eleElement.addEventListener('touchmove', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      this.change(evt.touches[0].clientX);
      return false;
    });
  }

  change(x) {
    this.offsetX = this.eleElement.getClientRects()[0].x;
    this.eleAfter.style.width = `${Math.min(parseInt(this.width), x - this.offsetX)}px`;
  }
}

module.exports = ImageBeforeAndAfter;
