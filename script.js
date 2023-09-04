const menu_btn = document.querySelector("#close_btn");
const overlay = document.querySelector("#overlay");
const signup = document.querySelector("#signup_btn");
const body = document.querySelector("#body");

menu_btn.addEventListener("click", function(){

    if(overlay.classList.contains("overlay_off")){
        overlay.classList.add("overlay_on");
        overlay.classList.remove("overlay_off");
    }else{
        overlay.classList.add("overlay_off");
        overlay.classList.remove("overlay_on");
    }  
    if(body.classList.contains("noscroll_on")){
        body.classList.add("noscroll_off");
        body.classList.remove("noscroll_on");
    }else{
        body.classList.remove("noscroll_off");
        body.classList.add("noscroll_on");
    }
});



signup.addEventListener("click", function(){

    if(overlay.classList.contains("overlay_off")){
        overlay.classList.add("overlay_on");
        overlay.classList.remove("overlay_off");
    }else{
        overlay.classList.add("overlay_off");
        overlay.classList.remove("overlay_on");
    }

    if(body.classList.contains("noscroll_off")){
        body.classList.add("noscroll_on");
        body.classList.remove("noscroll_off");
    }else{
        body.classList.add("noscroll_off");
        body.classList.remove("noscroll_on");
    }

});