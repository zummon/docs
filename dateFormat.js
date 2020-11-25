if (!zummon) var zummon = {}
zummon.dateFormat = function(options){
  if (typeof options == 'undefined') options = {}
  var date = options.date //example 2020-12-31
  var form = options.format
  var lang = options.language
  var era = options.era

  var month = {
    short: {
English: ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
Thai: ['','ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
    },
    long: {
English: ['','January','February','March','April','May','June','July','August','September','October','November','December'],
Thai: ['','มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],
    },
  }
  var year = {
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
    'dd-mm-yyyy': function(d){ // 31-12-2020
      d = d.split('-')
      return d[2] +'-'+ d[1] +'-'+ (parseInt(d[0]) + year[era])
    },
    'dd/mm/yyyy': function(d){ // 31/12/2020
      d = d.split('-')
      return d[2] +'/'+ d[1] +'/'+ (parseInt(d[0]) + year[era])
    },
    'd/m/yy': function(d){ // 1/2/2020
      d = d.split('-')
      return parseInt(d[2]) +'/'+ parseInt(d[1]) +'/'+ String(parseInt(d[0]) + year[era]).slice(2)
    },
    'd mmm yy': function(d){ // 1 Dec 20
      d = d.split('-')
      return parseInt(d[2]) +' '+ month.short[lang][parseInt(d[1])] +' '+ String(parseInt(d[0]) + year[era]).slice(2)
    },
    'd mmm yyyy': function(d){ // 1 Dec 2020
      d = d.split('-')
      return parseInt(d[2]) +' '+ month.short[lang][parseInt(d[1])] +' '+ (parseInt(d[0]) + year[era])
    },
    'd mmmm yyyy': function(d){ // 1 December 2020
      d = d.split('-')
      return parseInt(d[2]) +' '+ month.long[lang][parseInt(d[1])] +' '+ (parseInt(d[0]) + year[era])
    },
    'mm-dd-yyyy': function(d){ // 12-31-2020
      d = d.split('-')
      return d[1] +'-'+ d[2] +'-'+ (parseInt(d[0]) + year[era])
    },
    'yyyy-mm-dd': function(d){ // 2020-12-31
      d = d.split('-')
      return (parseInt(d[0]) + year[era]) +'-'+ d[1] +'-'+ d[2]
    },
  }

  if (!result.hasOwnProperty(form)) {
    form = 'yyyy-mm-dd'
  }

  if (!date) {
    return result
  }

  result = result[form](date)
  if (result.indexOf('NaN') !== -1 || result.indexOf('undefined') !== -1) {
    result = date
  }

  return result

}
