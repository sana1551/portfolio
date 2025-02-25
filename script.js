function clickinsta(){
    window.location.href = "instalogin.html";
}
function clickpic(){
    window.location.href = "picloginpage.html"
}
function cvclick(){
    window.alert("Are you sure...?")
    
}
 function about() {
    document.getElementById('about-hear').scrollIntoView({
    behavior: 'smooth'});
}
function skills(){
    document.getElementById("skills-hear").scrollIntoView({behavior:"smooth"});
}
function contact(){
    document.getElementById("contact-hear").scrollIntoView({behavior:"smooth"})
}
function home(){
    document.getElementById("location-home").scrollIntoView({behavior:"smooth"})
}
// menu box showing
function menuclick(){
    var menuBox = document.getElementById("menu-box");
    if (menuBox.style.display === "none" || menuBox.style.display === "") {
        menuBox.style.display = "block";
    } else {
        menuBox.style.display = "none";
    }
}
function insta(){
    window.location.href = ("https://www.instagram.com/sa__.na__hh/")
}
function whats(){
    window.location.href = ("wa.me/+918606415355")
}