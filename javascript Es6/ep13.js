//ค้นหาข้อมูลใน array
//indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
//find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่เจอ ถ้าค้นไม่เจอจะได้ undefined
//findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นเจอจะได้ -1


// == เทียบค่า ไม่เทียบชนิด  === เทียบค่า เทียบชนิด
const colors = ["แดง", "เขียว", "น้ำเงิน", "ม่วง", "ขาว "]

// const index = colors.indexOf("แดง")
// console.log(index)

//const search = colors.find(Element => Element === "เขียว")
const search = colors.findIndex(Element => Element === "เขียว")
console.log(search)