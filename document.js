document.getElementById("about-header").style.color = "indigo";
document.getElementById("about-header").style.cursor = "pointer";
document.getElementById("work-header").style.color = "indigo";
document.getElementById("work-header").style.cursor = "pointer";
document.getElementById("do-header").style.color = "indigo";
document.getElementById("do-header").style.cursor = "pointer";



document.getElementById("about-header").addEventListener("click",() => {
    if(document.getElementById("tempHide").style.display == "block"){
        console.log("Hiding the Block");
        document.getElementById("tempHide").style.opacity = "0";
        document.getElementById("tempHide").style.display= "none";
    }else{
        console.log("Showing the Block About");
        document.getElementById("tempHide").style.opacity= "5";
        document.getElementById("tempHide1").style.display = "none";
        document.getElementById("tempHide2").style.display = "none";
        document.getElementById("welcome").style.display = "none";
        document.getElementById("tempHide").style.display= "block";
    }
});

document.getElementById("do-header").addEventListener("click",() => {
    if(document.getElementById("tempHide1").style.display == "block"){
        console.log("Hiding the Block Projects");
        document.getElementById("tempHide1").style.opacity = "0";
        document.getElementById("tempHide1").style.display= "none";
    }else{
        console.log("Showing the Block");
        document.getElementById("tempHide1").style.opacity= "5";
        document.getElementById("tempHide").style.display = "none";
        document.getElementById("tempHide2").style.display = "none";
        document.getElementById("welcome").style.display = "none";
        document.getElementById("tempHide1").style.display= "block";
    }
});
document.getElementById("work-header").addEventListener("click",() => {
    if(document.getElementById("tempHide2").style.display == "block"){
        console.log("Hiding the Block Projects");
        document.getElementById("tempHide2").style.opacity = "0";
        document.getElementById("tempHide2").style.display= "none";
    }else{
        console.log("Showing the Block");
        document.getElementById("tempHide2").style.opacity= "5";
        document.getElementById("tempHide").style.display = "none";
        document.getElementById("tempHide1").style.display = "none";
        document.getElementById("welcome").style.display = "none";
        document.getElementById("tempHide2").style.display= "block";
    }
});