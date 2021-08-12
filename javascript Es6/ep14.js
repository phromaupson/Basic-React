//Array Map นำเอาค่าสามชิก Array มาทำการเปลี่ยนแปลงค่าเป็น array ก้อนใหม่ออกมาใช้งาน

// const number = [10, 20, 30, 40]
// console.log(`number = ${number}`)

// const result = number.map(e => {
//     const a = e * 2
//     return a
// })

// const result = number.map(e => {
//     return e * 2
// })


// const result = number.map(e => e * 2)

// console.log(`Array Map = ${result}`)

// number = 10,20,30,40
// Array Map = 20,40,60,80

//--------------------------------------------

// const data = ["ฝนตก", "แดดร้อน", "ฝนฟ้าคะนอง", "แดดร้อน", "ฝนตก", "อากาศดี", "หมอก"]

// const result = data.map((e, i) => {
//     return `วันที่ ${i+1} , สภาพอากาศ = ${e}`
// })

//console.log(result)

//---------------------------------------------

//Array เก็บข้อมูลเป็น object

const data = [
    { day: "01/06/2564", weather: "แดดร้อน", temp: 27 },
    { day: "03/06/2564", weather: "ฝนตก", temp: 23 },
    { day: "04/06/2564", weather: "หมอก", temp: 18 }
]

const result = data.map(e => {
    return e.weather
})

console.log(result)