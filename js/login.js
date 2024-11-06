const button=document.querySelector('.submit')
let password=document.querySelector('#Password')
const name=document.querySelector('#username')
button.addEventListener('click',(e)=>{
    if(!name.value){
        alert('Please Enter The Name' )
    }
    else if(!password.value){
        alert('Please enter the password')
    }
    else if(password.value.length<5){
        alert('Password Should be of 5 length');
    }
})
