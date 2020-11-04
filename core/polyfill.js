/* Polyfill */
// https://stackoverflow.com/questions/3535055/load-html-file-contents-to-div-without-the-use-of-iframes
if(!window.XMLHttpRequest && 'ActiveXObject' in window){
  window.XMLHttpRequest= function() {
  return new ActiveXObject('MSXML2.XMLHttp');
  };
}
// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
if(!Element.prototype.matches){
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
}
if(!Element.prototype.closest){
  Element.prototype.closest = function(s){
  var el = this
  do {
    if (Element.prototype.matches.call(el, s)) return el
    el = el.parentElement || el.parentNode
  } while (el !== null && el.nodeType === 1)
  return null
  }
}
/* dev tool to check, is mobiles usable */
// https://dev.opera.com/articles/better-error-handling-with-window-onerror/
window.onerror = function(message, url, linenumber) {
	alert(message +' on line '+ linenumber +' for '+ url)
}