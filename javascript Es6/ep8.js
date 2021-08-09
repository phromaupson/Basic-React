//Default Parameter กำหนดค่าเริ่มต้นให้กับตัว parameter

getDataCustomer = (customerName, customerAddress = "กรุงเทพ") => {

    //แบบเก่า
    // if (!customerAddress) {
    //     customerAddress = "กรุงเทพ"
    // }
    ///แบบใหม่ ใส่ customerAddress = "กรุงเทพ" ใน fucntion เลย

    const address = `ชื่อลูกค้า : ${customerName},
    ที่อยู่ : ${customerAddress}`
    return address
}

console.log(getDataCustomer("แก้ม", "ภูเก็ต"));
console.log(getDataCustomer("เลิศ"));