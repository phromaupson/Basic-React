//splice & slice
//splice(ตำแหน่งที่จะลบ, จำนวนที่จะลบ, สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่ลบ)

const data = [10, 20, 30, 40, 50]

//data.splice(1, 3)
//console.log(data)
//[ 10, 50 ]

//ลบละแทรกข้อมูลไปได้
// data.splice(1, 2, 900)
// console.log(data)
//[ 10, 900, 40, 50 ]

//slice (ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย -1)
//ดึงสมาชิกจาก array มาใช้งาน

const lastdata = data.slice(1, 3)
console.log(lastdata)
    //[ 20, 30 ]