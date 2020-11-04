const
setofDateFormat = (function (){
/* import include
    identify language: zm_disc.lang */

/* special text set */
const month = {
    short: [
        [],
        ['Jan', 'ม.ค.'],
        ['Feb', 'ก.พ.'],
        ['Mar', 'มี.ค.'],
        ['Apr', 'เม.ย.'],
        ['May', 'พ.ค.'],
        ['Jun', 'มิ.ย.'],
        ['Jul', 'ก.ค.'],
        ['Aug', 'ส.ค.'],
        ['Sep', 'ก.ย.'],
        ['Oct', 'ต.ค.'],
        ['Nov', 'พ.ย.'],
        ['Dec', 'ธ.ค.'],
    ],
    full: [
        [],
        ['January', 'มกราคม'],
        ['February', 'กุมภาพันธ์'],
        ['March', 'มีนาคม'],
        ['April', 'เมษายน'],
        ['May', 'พฤษภาคม'],
        ['June', 'มิถุนายน'],
        ['July', 'กรกฎาคม'],
        ['August', 'สิงหาคม'],
        ['September', 'กันยายน'],
        ['October', 'ตุลาคม'],
        ['November', 'พฤศจิกายน'],
        ['December', 'ธันวาคม'],
    ],
}
/* read from date input that look like "2020-12-31" */
return {
    yyyyDmmDdd: { text: ['2020-12-31','2020-12-31'],
        call: function(d){
            return d
        }
    },
    mmDddDyyyy: { text: ['12-31-2020','12-31-2020'],
        call: function(d){
            d = d.split('-')
            return d[1] +'-'+ d[2] +'-'+ d[0]
        }
    },
    ddDmmDyyyy: { text: ['31-12-2020','31-12-2020'],
        call: function(d){
            d = d.split('-')
            return d[2] +'-'+ d[1] +'-'+ d[0]
        }
    },
    ddSmmSyyyy: { text: ['31/12/2020','31/12/2020'],
        call: function(d){
            d = d.split('-')
            return d[2] +'/'+ d[1] +'/'+ d[0]
        }
    },
    dSmSyy: { text: ['d/m/yy','d/m/yy'],
        call: function(d){
            d = d.split('-')
            return parseInt(d[2]) +'/'+ parseInt(d[1]) +'/'+ d[0].slice(2)
        }
    },
    dmmmyy: { text: ['1 Dec 20','1 ธ.ค. 20'],
        call: function(d){
            d = d.split('-')
            return parseInt(d[2]) +' '+ month.short[parseInt(d[1])][zm_disc.lang] +' '+ d[0].slice(2)
        }
    },
    dmmmyyyy: { text: ['31 Dec 2020','31 ธ.ค. 2020'],
        call: function(d){
            d = d.split('-')
            return parseInt(d[2]) +' '+ month.short[parseInt(d[1])][zm_disc.lang] +' '+ d[0]
        }
    },
    dmmmmyyyy: { text: ['2 December 2020','2 ธันวาคม 2020'],
        call: function(d){
            d = d.split('-')
            return parseInt(d[2]) +' '+ month.full[parseInt(d[1])][zm_disc.lang] +' '+ d[0]
        }
    },
}
})(),
setofAnPrice = (function (){
return {
    num: { text: '9,999.99',
        option: {},
    },
    numD: { text:'9.999,00',
        option: { 
            decimalPlaces: 0, 
            digitGroupSeparator: '.', 
            decimalCharacter: ',',
        }
    },
    integer: { text: '9,999',
        option: { 
            decimalPlaces: 0,
        },
    },
    integerD: { text:'9.999',
        option: { 
            decimalPlaces: 0,
            digitGroupSeparator: '.', 
            decimalCharacter: ',',
        }
    },
    baht: { text: '฿ 9,999.00',
        option: { 
            currencySymbol: '฿' 
        }
    },
    bahtSuffix: { text: '9,999.00 ฿',
        option: { 
            currencySymbol: '฿', 
            currencySymbolPlacement: 's' 
        }
    },
    dollar: { text: '$ 9,999.00',
        option: { 
            currencySymbol: '$' 
        },
    },
    dollarSuffix: { text: '9,999.00 $',
        option: { 
            currencySymbol: '$',
            currencySymbolPlacement: 's',
        }
    },
    french: { text: '€ 9.999,00',
        option: { 
            currencySymbol: '€',
            digitGroupSeparator: '.', 
            decimalCharacter: ',',
        }
    },
    frenchSuffix: { text: '9.999,00 €',
        option: { 
            currencySymbol: '€',
            currencySymbolPlacement: 's',
            digitGroupSeparator: '.', 
            decimalCharacter: ',',
        }
    },
    pound: { text: '£ 9,999.00',
        option: { 
            currencySymbol: '£' 
        }
    },
    poundSuffix: { text: '9,999.00 £',
        option: { 
            currencySymbol: '£', 
            currencySymbolPlacement: 's' 
        }
    },
    yen: { text: '¥ 9,999.00',
        option: { 
            currencySymbol: '¥',
        }
    },
    yenSuffix: { text: '9,999.00 ¥',
        option: { 
            currencySymbol: '¥', 
            currencySymbolPlacement: 's',
        }
    },
    swiss: { text: 'CHF 9,999.00',
        option: { 
            currencySymbol: 'CHF',
            digitGroupSeparator: '\'',
        }
    },
    swissSuffix: { text: '9,999.00 CHF',
        option: { 
            currencySymbol: 'CHF',
            currencySymbolPlacement: 's',
            digitGroupSeparator: '\'',
        }
    },
    brazilian: { text: 'R$ 9.999,00',
        option: { 
            currencySymbol: 'R$',
            digitGroupSeparator: '.', 
            decimalCharacter: ',',
        }
    },
    brazilianSuffix: { text: '9.999,00 R$',
        option: { 
            currencySymbol: 'R$',
            currencySymbolPlacement: 's',
            digitGroupSeparator: '.', 
            decimalCharacter: ',',
        }
    },
    turkish: { text: '₺ 9.999,00',
        option: { 
            currencySymbol: '₺',
            digitGroupSeparator: '.', 
            decimalCharacter: ',',
        }
    },
    turkishSuffix: { text: '9.999,00 ₺',
        option: { 
            currencySymbol: '₺',
            currencySymbolPlacement: 's',
            digitGroupSeparator: '.', 
            decimalCharacter: ',',
        }
    },
}
})(),
setofAnQty = {
    integer: setofAnPrice.integer,
    integerD: setofAnPrice.integerD,
    num: setofAnPrice.num,
    numD: setofAnPrice.numD,
}
// setofDocType = {
//     Standard: []
// }
// setofdocfont