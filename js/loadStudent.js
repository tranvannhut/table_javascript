var student = [
        {
                name: "Tran Van Nhut",
                age: 26,
                birthPlace: "Dien An"
        },

        {
                name: "Tran Thi Kim Anh",
                age: 23,
                birthPlace: "Dien An"
        },
        {
                name: "Tran Van Y",
                age: 18,
                birthPlace: "Dien An"
        },

];
let x = localStorage.getItem("student");
if(x == null){
localStorage.setItem("student", JSON.stringify(student)); 
}        
               
