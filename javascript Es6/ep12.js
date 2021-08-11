//การ Loop Array
//For Loop, ForEach, ForOf

//For Loop
const data = [10, 20, 30, 40, 50]

// for (let i = 0; i < data.length; i++) {
//     if (data[i] >= 30) break
//     console.log(`ลำดับที่ ${i} = ${data[i]}`)
// }
// ลำดับที่ 0 = 10
// ลำดับที่ 1 = 20


//ForEach *ไม่สามารถใช้ break and continue ได้ แต่สามารถใช้ if ได้
//element (สมาชิกที่ดึงมาจาก array data ว่ามีค่าอะไรบ้าง จะเรียกว่า  callback function)

// data.forEach(Element => {
//     console.log(Element)
// });
// 10
// 20
// 30
// 40
// 50

//ForOf (ดึงสมาชิกแต่ละตัวใน data มาใช้งาน) * สามารถเขียน break and continue ได้
// for (const element of data) {
//     console.log(`สมาชิก Array Data = ${element}`)
// }

// สมาชิก Array Data = 10
// สมาชิก Array Data = 20
// สมาชิก Array Data = 30
// สมาชิก Array Data = 40
// สมาชิก Array Data = 50

//ยกตัวอย่าง
for (const element of data) {
    if (element >= 30) break
    console.log(`สมาชิก Array Data = ${element}`)
}

// สมาชิก Array Data = 10
// สมาชิก Array Data = 20