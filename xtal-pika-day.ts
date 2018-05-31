declare var xtal_pika_day: HTMLLinkElement;
declare class Pikaday {
    constructor(obj);
 };

(function () {
    const cs_src = self['xtal_pika_day'] ? xtal_pika_day.href : (document.currentScript as HTMLScriptElement).src;
    const base = cs_src.split('/').slice(0, -1).join('/');
    if (typeof Pikaday === 'undefined') {
        const link = document.createElement('link') as HTMLLinkElement;
        link.rel = 'stylesheet';
        link.href = base + '/pikaday.css'
        document.head.appendChild(link);
    }
    //const template = document.createElement('template');
    // let main_css;
    // fetch(base + '/pikaday.css', { credentials: 'same-origin' }).then(resp => {
    //     resp.text().then(txt => {
    //         main_css = txt;
    //         template.innerHTML = `
    // <style>
    //      :host {
    //         display: block;
    //     }
        
    // </style>
    // <input type="text" id="datepicker">
    // `;
            if (typeof Pikaday === 'undefined') {
                downloadPikaJs();
            }else{
                initXtalPikaDay();
            }

        //})
    //})
    function downloadPikaJs() {
        const pathToPik = base + '/pikaday.js';
        const script = document.createElement('script');
        script.src = pathToPik;

        script.addEventListener('load', e => {
            initXtalPikaDay()
        });
        document.head.appendChild(script);
    }
    function initXtalPikaDay(){
        class XtalPikaDay extends HTMLElement{
            static get is(){return 'xtal-pika-day';}
            constructor() {
                super();
                //this.attachShadow({ mode: 'open' });
               // this.addTemplate();
                
            }
            connectedCallback(){
                this.innerHTML =  `<input type="text" id="datepicker">`;
                this.config={};
            }
            // addTemplate(){
            //     //this.shadowRoot.appendChild(template.content.cloneNode(true));
            //     //this.config = {};
            // }
            _config : object;
            get config(){
                return this._config;
            }
            set config(val){
                this._config = val;
                this._config['field'] = this.querySelector('#datepicker');
                this.onPropsChange();
            }
            onPropsChange(){
                const picker = new Pikaday(this._config);
            }
        }
        if(customElements.get(XtalPikaDay.is)) return;
        customElements.define(XtalPikaDay.is, XtalPikaDay);
    }

})();