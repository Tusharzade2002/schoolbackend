import express from 'express'
 const app=express();
app.use(express.json());

const STUDENTS=[
    {rollNo:1,name:"Ram",city:"nagpur"},
    {rollNo:2,name:"syam",city:"amaravati"},
    {rollNo:3,name:"Jack",city:"pune"},
    {rollNo:4,name:"Tom",city:"solarpur"}
]


app.get("/health",(req,res)=>{
      res.json({
        success:true,
        message:"davakhaniyat ja lavkar"
      })      
})

app.get("/students",(req,res)=>{
    res.json({
        success:"true",
        data:STUDENTS,
        message:"student data fetched"

    })
})

app.post("/students",(req,res)=>{
   const {rollNo,name,city} = req.body;

    if(!rollNo){
      return  res.json({
        success:false,
        message:"rollNo is Required"
      })
    }

    if(!name){
        return  res.json({
            success:false,
          message:"name is Required"
         
        })
      }

      if(!city){
        return  res.json({
            success:false,
          message:"city is Required"
          
        })
      }

      const studentwithRollno=STUDENTS.find((stud)=>{
        if(stud.rollNo==rollNo){
            return stud
        }
      })

      if(studentwithRollno){
        return res.json({
            success:false,
            message:"Student roll no is already exists"
        })
      } 
   const student={
    rollNo,
    name,
    city
   }

   STUDENTS.push(student);
  res.json({
    success:true,
    message:"student added sucessfully",
    data:student
  })
})

app.delete("/students/:rollNo",(req,res)=>{
    const {rollNo} =req.params;
    let StudentIndex =-1;

    STUDENTS.map((stud,index)=>{
     if(stud.rollNo==rollNo){
         StudentIndex = index
     }
  })  

  if(StudentIndex == -1){
     return res.json({
         success:false,
         message:"Student Not found"
     })
  }

  STUDENTS.splice(StudentIndex,1);

  res.json({
    success:true,
    message:"Student deleted sucessfully"
  })
})

app.put("/students/:rollNo",(req,res)=>{
    const {rollNo} =req.params;
    const {name,city}=req.body;
    let StudentIndex =-1;

    STUDENTS.map((stud,index)=>{
     if(stud.rollNo==rollNo){
         StudentIndex = index
     }
  })  

  if(StudentIndex == -1){
     return res.json({
         success:false,
         message:"Student Not found"
     })
  }

   const student={
    city,
    rollNo,
    name,
   }

   STUDENTS[StudentIndex]=student;
   
   res.json({
    success:true,
    data:student,
    message:"student update sucessfully"
   })
})

app.patch("/students/city/:rollNo",(req,res)=>{
  const {rollNo} =req.params;
  const {city}=req.body;
  let StudentIndex =-1;

  STUDENTS.map((stud,index)=>{
   if(stud.rollNo==rollNo){
       StudentIndex = index
   }
})  

if(StudentIndex == -1){
   return res.json({
       success:false,
       message:"Student Not found"
   })
}

const student =STUDENTS[StudentIndex];
 student.city=city;
 STUDENTS[StudentIndex]=student;
 
 res.json({
  success:true,
  data:student,
  message:"student city update sucessfully"
 })
})

app.get("/students/:rollNo",(req,res)=>{
  const {rollNo} =req.params;
  
  let StudentIndex =-1;

  STUDENTS.map((stud,index)=>{
   if(stud.rollNo==rollNo){
       StudentIndex = index
   }
})  

if(StudentIndex == -1){
   return res.json({
       success:false,
       message:"Student Not found"
   })
}
const student=STUDENTS[StudentIndex];
 res.json({
  success:true,
  data:student,
  message:"student update sucessfully"
 })
})

app.get("*",(req,res)=>{
    res.json({
        success:false,
        message:"invalid"
    })
})
const PORT=5005;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
})