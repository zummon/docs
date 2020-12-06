(function(){
  const elsDataLabel = document.querySelectorAll('[data-label]')
  const label = Object.assign({
    client: 'Send to',
    clientAddress: 'Address',
    clientId: 'Register',
    clientName: 'Customer Name',
    clientSign: 'Client Sign',
    clientSignDate: 'Date',
    clientSignName: 'Client Name',
    clientSignRank: 'Position',
    date: 'Date',
    duedate: 'Due Date',
    itemAmount: 'Amount',
    itemDesc: 'Description',
    itemPrice: 'Price',
    itemQty: 'Qty',
    line: 'No',
    note: 'Note',
    paymethod: 'Payment',
    ref: 'No',
    subject: 'Project',
    thankMessage: 'Thank You!',
    title: 'Document',
    totalAdjust: 'Adjust',
    totalAmount: 'Subtotal',
    totalFinal: 'Pay Amount',
    totalVat: 'Vat',
    totalWht: 'Tax withheld',
    vendor: 'Vendor',
    vendorAddress: 'Address',
    vendorId: 'Register',
    vendorName: 'Vendor Name',
    vendorSign: 'Vendor Sign',
    vendorSignDate: 'Date',
    vendorSignName: 'Vendor Name',
    vendorSignRank: 'Position',
    // vendorImage
    // vendorStamp
  }, {
    CashSale: {
      client: 'Received from',
      date: 'Date',
      ref: 'No',
      title: 'Cash Sale',
      totalAmount: 'Total',
    },
    Invoice: {
      client: 'Bill to',
      date: 'Inv-Date',
      ref: 'Inv-No',
      title: 'Invoice',
    },
    Receipt: {
      client: 'Received from',
      date: 'Rec-Date',
      ref: 'Rec-No',
      title: 'Receipt',
      totalFinal: 'Paid Amount',
    },
    Quotation: {
      client: 'Offer to',
      date: 'Qn-Date',
      duedate: 'Offer Until',
      ref: 'Qn-No',
      title: 'Quotation',
    },
    TaxInvoice: {
      client: 'Bill to',
      date: 'TaxInv-Date',
      ref: 'TaxInv-No',
      title: 'Tax Invoice',
    },
  }[localStorage.getItem('doc')])

  document.querySelector('#display').style.fontFamily = ''

  for (let z = 0; z < elsDataLabel.length; z++) {
    // console.log(elsDataLabel[z].dataset.label)
    zm_setElemValue(elsDataLabel[z], label[
      elsDataLabel[z].dataset.label
    ])
  }
  
})()