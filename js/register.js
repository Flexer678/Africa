const register = document.querySelector('.register')
const firstName = document.querySelector('.f_name')






register.addEventListener('click',function(){
    profileName = firstName.value
    document.cookie = "first name"+ "=" + encodeURIComponent(profileName) + "; path=/";
    
})



