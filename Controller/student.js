import {STUDENTS} from '../Data/student.js'

const getStudent =(req,res)=>{
    res.json({
        success:"true",
        data:STUDENTS,
        message:"student data fetched"

    })
}

const postStudent =(req,res)=>{
    const { rollNo  ,name ,city } = req.body;
     // const data =  req.body;
     // res.json({message : data});
     if(!rollNo){
       return  res.json({
         success:true,
         message:"rollNo is Required"
       })
     }
 
     if(!name){
         return  res.json({
             success:true,
           message:"name is Required"
          
         })
       }
 
       if(!city){
         return  res.json({
             success:true,
           message:"city is Required"
           
         })
       }
 
       const studentwithRollno=STUDENTS.find((stud)=>{
         if(stud.rollNo==rollNo){
             // res.status(400).json({message : error}) ;
             return stud ;
         }
       })
 
       if(studentwithRollno){
         return res.json({
             success:false,
             message:"Student roll no is already exists"
         })
       } 
    const student={
     rollNo ,
     name,
     city
    }
    console.log(student);
    STUDENTS.push(student);
 
     res.json({
       success:true,
       data:student,
       message:"student added sucessfully"
       
     })
 }

 const deleteStudent=(req,res)=>{
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
}

const putStudent= (req,res)=>{
    const {rollNo} = req.params;
    const {name,city} = req.body;
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
    name,
    rollNo,
    city,
   }

   STUDENTS[StudentIndex]=student;
   
   res.json({
    success:true,
    data:student,
    message:"student update sucessfully"
   })
}

const patchStudent =(req,res)=>{
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
  }
const getStudentsByRollNo =(req,res)=>{
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
  }

export{
    getStudent ,postStudent ,deleteStudent,putStudent,patchStudent,getStudentsByRollNo
}