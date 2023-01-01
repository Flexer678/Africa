const profile =document.querySelector('.join')
const member = document.querySelector('.member')
const member_link = document.querySelector('.member a')
const sheet = new CSSStyleSheet();

document.cookie = ""
var profileName = document.cookie.split(";")[0].split("=")[1];
console.log(profileName)
window.addEventListener("load", function(){
    if (profile.innerHTML != 'JOIN'){
        try{
            profile.innerText = profileName.substr(0,1)
            sheet.replaceSync('.join {color: black; border-radius: 60px; padding: 20px 27px; background:gold; font-size: 25px; font-weight: bolder;  }');
    document.adoptedStyleSheets = [sheet];
    profile.href = '#,';
    member_link.href = "members.html";
        }catch (error){
            console.log('ok')
        }
        //profile.innerText = profileName.substr(0,1)
    }
    else{
        
    }
})


let clicked = 0;
const signout = document.createElement('p')
signout.classList.add('signout')
var signout_text = document.createTextNode("signout?");
signout.appendChild(signout_text)


profile.addEventListener("click", function(){
    if (clicked == 0 && profile.innerText != "JOIN"){
        //profile.style.height = "120px";
        profile.appendChild(signout)
        clicked = 1;
    }
    else if (clicked = 1 && profile.innerText != "JOIN"){
        profile.style.height = "70px";
        signout.remove()
        clicked = 0;
    }
})




signout.addEventListener('click', function(){
    profile.innerHTML = "JOIN";
    deleteCookies()
    //window.location.href = "./reset.html"
})

function deleteCookies() {
    var allCookies = document.cookie.split(';');
    for (var i = 0; i < allCookies.length; i++)
    document.cookie = allCookies[i] + "=;expires="+ new Date(0).toUTCString();
    member.style.display = "none"
    alert("unable to logout")
    window.location.replace('index.html');
}
