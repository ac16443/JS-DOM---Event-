/**Signup Form */
let myForm= document.getElementById("myForm");
let fullName = document.getElementById('full-name');
let myEmail = document.getElementById('email');
let emailMsg = document.getElementById('message');

myEmail.addEventListener('focus', ()=>{
console.log("Focus: You are in the email Field");
});

myEmail.addEventListener('blur', ()=>{
console.log("Blur: You leave the email Field");
});

myEmail.addEventListener('change', ()=>{
console.log("Change: Value from email Field", myEmail.value);
});

fullName.addEventListener('select', ()=>{
const selectedText = fullName.value.slice(fullName.selectionStart, fullName.selectionEnd);

console.log('You Selected', selectedText)
});

fullName.addEventListener('cut', ()=>{
console.log('cut text from name');
});

fullName.addEventListener('copy', ()=>{
console.log('copy text from name');
});

fullName.addEventListener('paste', (e)=>{
let pastedText = e.clipboardData.getData('text/plain');
console.log('Paste text ', pastedText);
});

myForm.addEventListener('submit', (e)=>{
e.preventDefault();
console.log('Form Submitted');

let emailValue = myEmail.value.trim();

if(emailValue === ""){
   myEmail.style.borderColor = 'red';
   emailMsg = textContent = "Email is required";
return
}
})


