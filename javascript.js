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
            <h1>${inputfields["Fname"].value}</h1>
            <h3>${inputfields["title"].value}</h3>
           </div>
           <div class="main">
              
                  
                 <h2>Contact details/Important social links</h2>
                 ${Contacts.getData()}
                 <h5>ADDRESS</h5>
                 <p>${inputfields["address"].value}</p>
                 <h2>OBJECTIVE</h2>
                 <p>${inputfields["objective"].value}</p>
                 
                 <h2>SKILLS</h2>
                 ${Skill.getData()}
                 <h2>ACHIEVEMENTS</h2>
                 ${Achievement.getData()}
                
               </div>
               <div>
                <h2>WORK EXPERIENCE AND PROJECT</h2>
                ${workExpdetails.getData()}
                <h2>ACEMEDIC DETAILS</h2>
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