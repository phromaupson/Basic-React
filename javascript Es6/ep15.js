// Array Filter (คัดกรองสมาชิกภายใน Array ที่ผ่านเงื่อนไขเข้ามา)

//const data = [10, 20, 30, 40]
//ต้องผ่านเงื่อนไขก่อน
//ผ่านคัดกรอง
//ถ้าผ่านทั้งสองแล้วจะถูกจับแยกไปใส่ไว้ใน array ก้อนนึง แล้วก็ส่งกลับออกมา

// const result = data.filter(e => {
//     return e > 20
// })

// console.log(result);

//--------------------------------------------------------

const data = [
    { name: "ก้อง", salary: 25000, department: "โปรแกรมเมอร์" },
    { name: "โจโจ้", salary: 30000, department: "การตลาด" },
    { name: "นัท", salary: 10000, department: "ฝึกงาน" },
    { name: "เบล", salary: 50000, department: "การตลาด" },
    { name: "จอย", salary: 10000, department: "ฝึกงาน" },
]

const result = data.filter(e => e.salary > 10000).filter(e => e.department === "การตลาด")

console.log(result)