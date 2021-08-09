//join , concat (ทบทวนการใช้ฟังชันที่อยู่ใน array)

// const data = [100, 200, 300]
// console.log(data)

//แปลง Array ให้เป็น String ไม่กระทบ array เดิม และเก็บในตัวแปร
// const result = data.join()
// console.log(result)
// ผลลัพธ์ 100,200,300

//console.log(data.join())

//ไม่อยากให้ระหว่างเลขเป็นเครื่องหมาย , 100*200*300 
//console.log(data.join("*"))

//---------------------------------------------------------
//concat

const data1 = [100, 200, 300]
const data2 = [400, 500]

//ต้องการให้ สมาชิก data1 ต่อกับ data2

const alldata = data1.concat(data2)
console.log(alldata)

//console.log(data1.concat(data2))

//ผลลัพธ์ [ 100, 200, 300, 400, 500 ]