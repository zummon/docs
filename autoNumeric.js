// use with http://autonumeric.org/
if (!zummon) var zummon = {}
zummon.autoNumeric = function(options){
  if (typeof options == 'undefined') options = {}
  var num = options.number // example 9999
  var form = options.format

  var result = {
    baht: { // ฿ 9,999.00
      currencySymbol: '฿'
    },
    bahtSuffix: { // 9,999.00 ฿
      currencySymbol: '฿', 
      currencySymbolPlacement: 's'
    },
    brazilian: { // R$ 9.999,00
      currencySymbol: 'R$',
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    brazilianSuffix: { // 9.999,00 R$
      currencySymbol: 'R$',
      currencySymbolPlacement: 's',
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    dollar: { // $ 9,999.00
      currencySymbol: '$'
    },
    dollarSuffix: { // 9,999.00 $
      currencySymbol: '$',
      currencySymbolPlacement: 's',
    },
    french: { // € 9.999,00
      currencySymbol: '€',
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    frenchSuffix: { // 9.999,00 €
      currencySymbol: '€',
      currencySymbolPlacement: 's',
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    integer: { // 9,999
      decimalPlaces: 0,
    },
    integerD: { // 9.999
      decimalPlaces: 0,
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    pound: { // £ 9,999.00
      currencySymbol: '£'
    },
    poundSuffix: { // 9,999.00 £
      currencySymbol: '£', 
      currencySymbolPlacement: 's'
    },
    num: { // 9,999.99

    },
    numD: { // 9.999,00
      decimalPlaces: 0,
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    swiss: { // CHF 9'999.00
      currencySymbol: 'CHF',
      digitGroupSeparator: '\'',
    },
    swissSuffix: { // 9'999.00 CHF
      currencySymbol: 'CHF',
      currencySymbolPlacement: 's',
      digitGroupSeparator: '\'',
    },
    turkish: { // ₺ 9.999,00
      currencySymbol: '₺',
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    turkishSuffix: { // 9.999,00 ₺
      currencySymbol: '₺',
      currencySymbolPlacement: 's',
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    yen: { // ¥ 9,999.00
      currencySymbol: '¥',
    },
    yenSuffix: { // 9,999.00 ¥
      currencySymbol: '¥',
      currencySymbolPlacement: 's',
    },
  }

  if (result.hasOwnProperty(form)) {
    form = 'num'
  }

  if (!num) {
    return result
  }

  return result[form]

}