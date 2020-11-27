if (!zummon) var zummon = {}
zummon.dateFormat = function(options){
  var isValidDate = function(dateString){
    // https://stackoverflow.com/questions/18758772/how-do-i-validate-a-date-in-this-format-yyyy-mm-dd-using-jquery
    if (!dateString) return false
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false;  // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0,10) === dateString;
  }

  if (!options) options = {}
  var date = options.date // string '2020-12-31'
  var form = options.format // key 'yyyy-mm-dd'
  var lang = options.language
  var era = options.era

  var months = {
    short: {
      English: ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      Thai: ['','ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
    },
    long: {
      English: ['','January','February','March','April','May','June','July','August','September','October','November','December'],
      Thai: ['','มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],
    },
  }
  var years = {
    Christ: 0,
    Buddhist: 543,
  }

  if (['English','Thai'].indexOf(lang) == -1) {
    lang = 'English'
  }
  if (['Christ','Buddhist'].indexOf(era) == -1) {
    era = 'Christ'
  }

  var result = {
    'dd-mm-yyyy': function(yyyy,mm,dd){ // 31-12-2020
      return dd +'-'+ mm +'-'+ yyyy
    },
    'dd/mm/yyyy': function(yyyy,mm,dd){ // 31/12/2020
      return dd +'/'+ mm +'/'+ yyyy
    },
    'd/m/yy': function(yyyy,mm,dd){ // 1/2/2020
      return parseInt(dd) +'/'+ parseInt(mm) +'/'+ String(yyyy).slice(2)
    },
    'd mmm yy': function(yyyy,mm,dd){ // 1 Dec 20
      return parseInt(dd) +' '+ months.short[lang][parseInt(mm)] +' '+ String(yyyy).slice(2)
    },
    'd mmm yyyy': function(yyyy,mm,dd){ // 1 Dec 2020
      return parseInt(dd) +' '+ months.short[lang][parseInt(mm)] +' '+ yyyy
    },
    'd mmmm yyyy': function(yyyy,mm,dd){ // 1 December 2020
      return parseInt(dd) +' '+ months.long[lang][parseInt(mm)] +' '+ yyyy
    },
    'mm-dd-yyyy': function(yyyy,mm,dd){ // 12-31-2020
      return mm +'-'+ dd +'-'+ yyyy
    },
    'yyyy-mm-dd': function(yyyy,mm,dd){ // 2020-12-31
      return yyyy +'-'+ mm +'-'+ dd
    },
  }

  if (!result.hasOwnProperty(form)) {
    form = 'yyyy-mm-dd'
  }

  if (isValidDate(date)) {
    date = date.split('-')
    var yyyy = parseInt(date[0]) + years[era]
    var mm = date[1]
    var dd = date[2]
    return result[form](yyyy,mm,dd)

  } else if (typeof date === 'string') {
    return date

  }

  return result
  
}