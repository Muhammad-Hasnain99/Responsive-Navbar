function togglehide(){
    let Button = document.querySelector(".btn")
    let link = document.querySelector(".links")
    
    if(link.style.display != `none`){
    link.style.display = `none`
    }
    else{
        link.style.display = `block`
    }
}

