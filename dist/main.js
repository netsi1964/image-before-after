(()=>{var e={10:e=>{e.exports=class{style="<style>\n\tINSTANCE {\n\t  --BA-before: 'Before';\n\t\t--BA-after: 'After';\n\t\t--BA-width: 0px;\n\t}\n\tINSTANCE .images { cursor: col-resize;}\n\tINSTANCE .img {width: 100%; height: 100%; position: absolute;}\n\tINSTANCE .after {z-index: 10; top: 0; background-color: orange;}\n\tINSTANCE .before {top: 0; background-color: white;}\n\tINSTANCE .before:before { color: hsla(0,0%,100%,.6); text-shadow: 0 0 5px black; content: var(--BA-before); position: absolute; margin-left: calc(100% - 56px); margin-top: 10px;}\nINSTANCE .after:after { color: hsla(0,0%,100%,.6); text-shadow: 0 0 5px black; content: var(--BA-after); margin-top: 10px; margin-left: 10px; position: absolute; }\nINSTANCE .text { padding: 4px; position: absolute; background: orange; z-index: 15; color: black; bottom: 10px; right: 10px;font-size: 14pt; opacity: .6;}\nINSTANCE > * {box-sizing: border-box; }\nINSTANCE { position: relative;}\n\t</style>";html='\n\t<div class="images">\n\t\t<div class="before img"></div>\n\t\t<div class="after img"></div>\n\t\t<img class="dummy" />\n\t\t<div class="text"></div>\n\t</div>\n\t';constructor(e,t,i,s){if(this.eleElement=document.querySelector(e),null===this.eleElement)return console.log(`The selector "${e}" did not point to an element on the page`),null;this.className="beforeAndAfter"+(new Date-new Date(2e3,0,1)),this.eleElement.classList.add(this.className),this.eleElement.classList.add("beforeAndAfter"),this.text=s??"",this.change.bind(this),this.before=t??"https://dummyimage.com/600x400/000/fff.png",this.after=i??"https://dummyimage.com/600x400/ffffff/000.png",this.style=this.style.replace(/INSTANCE/g,`.${this.className}`),this.eleElement.innerHTML=this.html+this.style,this.eleBefore=this.eleElement.querySelector(".before"),this.eleAfter=this.eleElement.querySelector(".after"),this.eleText=this.eleElement.querySelector(".text"),this.eleStyle=this.eleElement.querySelector("style"),this.eleText.innerHTML=this.text,this.eleDummy=this.eleElement.querySelector(".dummy"),this.eleDummy.addEventListener("load",(()=>{this.width=getComputedStyle(this.eleDummy).width,this.height=getComputedStyle(this.eleDummy).height,this.init()})),this.eleDummy.src=this.before}init(){this.eleDummy.remove();const e=this.width,t=this.height;this.eleBefore.style.backgroundImage=`url(${this.before})`,this.eleBefore.style.width=e,this.eleBefore.style.height=t,this.eleAfter.style.backgroundImage=`url(${this.after})`,this.eleAfter.style.width=e,this.eleAfter.style.height=t,this.eleElement.style.width=e,this.eleElement.style.height=t,this.eleElement.addEventListener("mousemove",(e=>{e.preventDefault(),e.stopPropagation(),this.change(e.clientX)})),this.eleElement.addEventListener("touchmove",(e=>(e.preventDefault(),e.stopPropagation(),this.change(e.touches[0].clientX),!1)))}change(e){this.offsetX=this.eleElement.getClientRects()[0].x,this.eleAfter.style.width=`${Math.min(parseInt(this.width),e-this.offsetX)}px`}}}},t={};!function i(s){var l=t[s];if(void 0!==l)return l.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,i),n.exports}(10)})();