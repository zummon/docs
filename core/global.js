const zm_eras = {
  Christ: true,
  Buddhist: true,
},
zm_langs = {
  English: 'English',
  Thai: 'ไทย',
},
zm_themes = {
  light: true,
  dark: true,
},
zm_getObjStr = function(obj){
  // https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
  var str = []
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      var paste = obj[p]
      if (!Array.isArray(paste)) {
        paste = [paste]
      }
      for (var z = 0; z < paste.length; z++) {
        str.push(encodeURIComponent(p) +"="+ encodeURIComponent(paste[z]))   
      }
    }
  }
  return str.join("&")
},
zm_getStrObj = function(str){
  // https://www.sitepoint.com/get-url-parameters-with-javascript/
  var obj = {}
  var queryString = str ? str.split('?')[1] : window.location.search.slice(1)
  if (queryString) {
    queryString = queryString.split('#')[0]
    var arr = queryString.split('&')
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split('=')
      var paramName = decodeURIComponent(a[0])
      var paramValue = decodeURIComponent(a[1])
      if (paramName.match(/\[(\d+)?\]$/)) {
        var key = paramName.replace(/\[(\d+)?\]/, '')
        if (!obj[key]) obj[key] = []
        if (paramName.match(/\[\d+\]$/)) {
          var index = /\[(\d+)\]/.exec(paramName)[1]
          obj[key][index] = paramValue
        } else {
          obj[key].push(paramValue)
        }
      } else {
        if (!obj[paramName]) {
          obj[paramName] = paramValue
        } else if (obj[paramName] && typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]]
          obj[paramName].push(paramValue)
        } else {
          obj[paramName].push(paramValue)
        }
      }
    }
  }
  return obj
},
zm_loadScript = function(id,url,call){
  // https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
  // delete an old script
  var elem = document.querySelector('#'+ id)
  if (elem) elem.remove()
  // add a script
  if (url) {
    var script = document.createElement('script')
    if (typeof call === 'function') {
      script.onload = call
    }
    script.id = id
    script.src = url
    document.body.appendChild(script)
  }
}
