var submitBtn = document.getElementsByClassName('submit-input')[0];
var contM = document.querySelectorAll('.Sign-up .container .right-side form div');
var errors = document.querySelectorAll('.error');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var password = document.getElementById('password');
var errorImgs = document.querySelectorAll('.error-img');

function submitFun (e) {
    e.preventDefault();
    errors.forEach(e=>{
        if(fname.value == ""){
            errors[0].style.display="block";
            errorImgs[0].style.display="block";
            fname.style.borderColor="var(--bgColor)"
        }else{
            errors[0].style.display="none";
            errorImgs[0].style.display="none";
            fname.style.borderColor="var(--borderColor)"
        }
        if(lname.value == ""){
            errors[1].style.display="block";
            errorImgs[1].style.display="block";
            lname.style.borderColor="var(--bgColor)"
        }else{
            errors[1].style.display="none";
            errorImgs[1].style.display="none";
            lname.style.borderColor="var(--borderColor)"
        }
        if(email.value == ""){
            errors[2].style.display="block";
            errorImgs[2].style.display="block";
            email.style.borderColor="var(--bgColor)"
            errors[2].innerHTML = "Email cannot be empty";
        }else if(!(email.value.includes('@'))){
            errors[2].style.display="block";
            errorImgs[2].style.display="block";
            email.style.borderColor="var(--bgColor)";
            errors[2].innerHTML = "Looks like that is not an email";
        }else{
            errors[2].style.display="none";
            errorImgs[2].style.display="none";
            email.style.borderColor="var(--borderColor)"
        }
        if(password.value == ""){
            errors[3].style.display="block";
            errorImgs[3].style.display="block";
            password.style.borderColor="var(--bgColor)"
        }else{
            errors[3].style.display="none";
            errorImgs[3].style.display="none";
            password.style.borderColor="var(--borderColor)"
        }
    })
}
submitBtn.addEventListener('click',submitFun)