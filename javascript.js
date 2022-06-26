const inputfields = document.querySelector('.input-fields')
const output = document.querySelector('.output')

let inputShow = true


async function TextEditor(element){
  const newEditor =  await ClassicEditor
  .create(element,/*{
    toolbar: [ 'heading', 'bold', 'italic', 'link', 'bulletedList', 'insertImage', 'numberedList' ],
  } */)
  return newEditor
 
}

let workExpdetails;
TextEditor(inputfields["workexp"]).then(nEditor=>{
  workExpdetails = nEditor
})
let Academic;
TextEditor(inputfields["academics"]).then(nEditor=>{
  Academic = nEditor
})
let Skill;
TextEditor(inputfields["skills"]).then(nEditor=>{
  Skill = nEditor
})
let Achievement;
TextEditor(inputfields["achievements"]).then(nEditor=>{
  Achievement= nEditor
})

let Contacts;
TextEditor(inputfields["contact"]).then(nEditor=>{
  Contacts= nEditor
})
function toggle(){
    if(inputShow){
         inputfields.style.display = "none"
         inputShow = false 
         output.innerHTML=`
           <div class="top">
            <h3>${inputfields["Fname"].value}</h3>
            <h3>${inputfields["title"].value}</h3>
           </div>
           <div class="main">
           <div>
              
                  
                 <h3>Contact details</h3>
                 ${Contacts.getData()}
                 <h3>ADDRESS</h3>
                 <p>${inputfields["address"].value}</p>
                 <h3>OBJECTIVE</h3>
                 <p>${inputfields["objective"].value}</p>
                 
                 <h3>SKILLS</h3>
                 ${Skill.getData()}
                 <h3>ACHIEVEMENTS</h3>
                 ${Achievement.getData()}
                
               </div>
               <div>
                <h3>WORK EXPERIENCE AND PROJECT</h3>
                ${workExpdetails.getData()}
                <h3>ACEMEDIC DETAILS</h3>
                 ${Academic.getData()}
                 
                
               </div>
           </div>
           <div class="btn">
              <button onclick="print()">Print Resume</button>
        </div>
         `
    }else{
        inputfields.style.display =  "block"
        inputShow = true
        output.innerHTML=""
    }
}
