import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'

 const app=express();
 dotenv.config();
app.use(express.json());
app.use(cors())

import { getHealth } from './Controller/health.js';
import { getStudent, putStudent,postStudent,deleteStudent,patchStudent,getStudentsByRollNo} from './Controller/student.js';
import { error} from './Controller/other.js';
const STUDENTS=[
    {rollNo:1,name:"Ram",city:"nagpur"},
    {rollNo:2,name:"syam",city:"amaravati"},
    {rollNo:3,name:"Jack",city:"pune"},
    {rollNo:4,name:"Tom",city:"solarpur"}
]


app.get("/health",getHealth)

app.get("/students",getStudent)

app.post("/students",postStudent)

app.delete("/students/:rollNo",deleteStudent)

app.put("/students/:rollNo",putStudent)

app.patch("/students/city/:rollNo",patchStudent)

app.get("/students/:rollNo",getStudentsByRollNo)

app.get("*",error)
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
})