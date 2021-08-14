//Array Reduce การลดข้อมูลสมาชิกข้างใน Array คือการทำค่าทั้งหมดมาทำเพื่อให้ได้คำตอบค่าเดียว

const data = [10, 20, 30, 40]

/* ตัวอย่าง map filter
const mapData = data.map(e => 100)
    // console.log(mapData)

//[ 100, 100, 100, 100 ]

const filterData = data.filter(e => e > 20)
console.log(filterData)

//[ 30, 40 ]

*/

/* วิธีการ array reduce */
// array.reduce((ค่าที่ถูกประมวลผล, element คือค่า array ของมัน) => {}, ค่าเริ่มต้น) //value =0

//ค่าประมวลผลเอามาจากค่าที่เราระบุเริ่มต้นลงไป value = 0
// const summation = data.reduce((value, e) => {
//     const total = e + value
//     return total
// }, 0)

//const summation = data.reduce((value, e) => e + value, 0)

/*
value = 0
total = 10 + 0

value = 10 <= มาจาก total ล่าสุด
total = 20 + 10

value = 30 <= มาจาก total ล่าสุด
total = 30 + 30

value = 60 <= มาจาก total ล่าสุด
total = 40 +60
*/

//console.log(summation) //100

/* ทำงานแบบ object */

const cart = [
    { name: "กระเป๋า", price: 500 },
    { name: "หนังสือ", price: 900 },
    { name: "กล้องถ่ายรูป", price: 5000 }
]

// const summation = cart.reduce((value, e) => {
//     const total = e.price + value
//     return total
// }, 0)

const summation = cart.reduce((value, e) => e.price + value, 0)

console.log(summation)