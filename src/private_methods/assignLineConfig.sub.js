gulp_place("../utils/getLine12.sub.js", "file_once"); /* global getLine12 */
/**
 * Analogie `Object.assign` jen pro `<line>` (v cyklu se aplikuje `*.setAttribute`) a 
 * jako vstup neslouží přímo nativní parametry ale `config` (odtud si spočte `x1`, …)
 * @param {HTMLElement|SVGElement} el
 * @param {config} config
 * @returns {HTMLElement|SVGElement} `el`
 */
function assignLineConfig(el, { line: [ deltaX, deltaY ] }){
    const [ x1, x2 ]= getLine12(deltaX);
    const [ y1, y2 ]= getLine12(deltaY);
    for(const [ key, value ] of Object.entries({ x1, x2, y1, y2 })){
        el.setAttribute(key, value);
    }
    return el;
}