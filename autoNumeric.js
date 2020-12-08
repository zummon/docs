if (!zummon) var zummon = {}
zummon.autoNumeric = function(options){
  /*! Thanks to http://autonumeric.org/ */
  if (typeof options == 'undefined') options = {}
  var num = options.number // number 9999
  var form = options.format // key Number

  var result = {
    'Baht': { // ฿ 9,999.00
      currencySymbol: '฿'
    },
    'Baht Suffix': { // 9,999.00 ฿
      currencySymbol: '฿', 
      currencySymbolPlacement: 's'
    },
    'Brazilian': { // R$ 9.999,00
      currencySymbol: 'R$',
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    'Brazilian Suffix': { // 9.999,00 R$
      currencySymbol: 'R$',
      currencySymbolPlacement: 's',
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    'Dollar': { // $ 9,999.00
      currencySymbol: '$'
    },
    'Dollar Suffix': { // 9,999.00 $
      currencySymbol: '$',
      currencySymbolPlacement: 's',
    },
    'French': { // € 9.999,00
      currencySymbol: '€',
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    'French Suffix': { // 9.999,00 €
      currencySymbol: '€',
      currencySymbolPlacement: 's',
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    'Integer': { // 9,999
      decimalPlaces: 0,
    },
    'IntegerD': { // 9.999
      decimalPlaces: 0,
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    'Pound': { // £ 9,999.00
      currencySymbol: '£'
    },
    'Pound Suffix': { // 9,999.00 £
      currencySymbol: '£', 
      currencySymbolPlacement: 's'
    },
    'Number': { // 9,999.99

    },
    'NumberD': { // 9.999,00
      decimalPlaces: 0,
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    'Swiss': { // CHF 9'999.00
      currencySymbol: 'CHF',
      digitGroupSeparator: '\'',
    },
    'Swiss Suffix': { // 9'999.00 CHF
      currencySymbol: 'CHF',
      currencySymbolPlacement: 's',
      digitGroupSeparator: '\'',
    },
    'Turkish': { // ₺ 9.999,00
      currencySymbol: '₺',
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    'Turkish Suffix': { // 9.999,00 ₺
      currencySymbol: '₺',
      currencySymbolPlacement: 's',
      digitGroupSeparator: '.', 
      decimalCharacter: ',',
    },
    'Yen': { // ¥ 9,999.00
      currencySymbol: '¥',
    },
    'Yen Suffix': { // 9,999.00 ¥
      currencySymbol: '¥',
      currencySymbolPlacement: 's',
    },
  }

  if (!result.hasOwnProperty(form)) {
    form = 'Number'
  }

  if (!num) {
    return result
  }

  return result[form]

}