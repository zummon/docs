(function(){
  const elsDataLabel = document.querySelectorAll('[data-label]')
  const label = Object.assign({
    client: 'ส่งถึง',
    clientAddress: 'ที่อยู่',
    clientId: 'เลขประจำตัว',
    clientName: 'ผู้ซื้อ',
    clientSign: 'ลายเซ็นต์ผู้ซื้อ',
    clientSignDate: 'วันที่',
    clientSignName: 'ชื่อผู้ซื้อ',
    clientSignRank: 'ตำแหน่ง',
    date: 'วันที่',
    duedate: 'ชำระภายใน',
    itemAmount: 'รวมเป็น',
    itemDesc: 'รายการ',
    itemPrice: 'ราคา',
    itemQty: 'จำนวน',
    line: '#',
    note: 'บันทึก',
    paymethod: 'วิธีชำระเงิน',
    ref: 'เลขที่',
    subject: 'งาน',
    thankMessage: '',
    title: 'เอกสาร',
    totalAdjust: 'ปรับปรุง',
    totalAmount: 'รวม',
    totalFinal: 'ยอดชำระ',
    totalVat: 'ภาษีมูลค่าเพิ่ม',
    totalWht: 'หัก ณ ที่จ่าย',
    vendor: 'ผู้ขาย',
    vendorAddress: 'ที่อยู่',
    vendorId: 'เลขประจำตัว',
    vendorName: 'ชื่อผู้ขาย',
    vendorSign: 'ลายเซ็นต์ผู้ขาย',
    vendorSignDate: 'วันที่',
    vendorSignName: 'ชื่อผู้ขาย',
    vendorSignRank: 'ตำแหน่ง',
  }, {
    CashSale: {
      client: 'รับเงินจาก',
      date: 'วันที่',
      ref: 'เลขที่',
      title: 'บิลเงินสด',
      totalAmount: 'รวม',
    },
    Invoice: {
      client: 'ส่งถึง',
      date: 'วันที่',
      ref: 'เลขที่',
      title: 'ใบแจ้งหนี้',
    },
    Receipt: {
      client: 'รับเงินจาก',
      date: 'วันที่',
      ref: 'เลขที่',
      title: 'ใบเสร็จรับเงิน',
      totalFinal: 'ยอดชำระ',
    },
    Quotation: {
      client: 'ส่งถึง',
      date: 'วันที่',
      duedate: 'สั่งซื้อก่อนวันที่',
      ref: 'เลขที่',
      title: 'ใบเสนอราคา',
    },
    TaxInvoice: {
      client: 'ส่งถึง',
      date: 'วันที่',
      ref: 'เลขที่',
      title: 'ใบกำกับภาษี',
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