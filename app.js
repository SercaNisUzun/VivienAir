 /*
 document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

*/

// mobile menu 

window.addEventListener("load", function() {
    const menubut = document.querySelector(".menubut");
    const mobmenu = document.querySelector("#mobmenu");
    const main = document.querySelector("main");
    
    menubut.addEventListener("click", () => {
        mobmenu.classList.toggle("jsnone");
        main.classList.toggle("blur");
    })
    
    const mobbut = document.querySelectorAll ("#mobmenu a");
    
    for (mb=0;mb<mobbut.length;mb++){
        mobbut[mb].addEventListener ("click", () => {
            mobmenu.classList.add ("jsnone");
            main.classList.remove ("blur");
        })
    }
    
    main.addEventListener ("click", ()=> {
        mobmenu.classList.add ("jsnone");
            main.classList.remove ("blur");
    })
    
    
    //main page menu
    
    const btn = document.querySelectorAll(".btn");
    const area = document.querySelectorAll(".faqMenu>.flexq");
    const cont = document.getElementsByClassName("content");
    
    
    for (b = 0; b < area.length; b++) {
        const fired = btn[b].value;
    
        area[b].addEventListener("click", () => {
    
            for (i = 0; i < cont.length; i++) {
                if (!cont[i].classList.contains("jsnone")) {
                    cont[i].classList.add("jsnone");
                    btn[i].innerHTML = ("&#43");
                }
                cont[fired].classList.remove("jsnone");
                btn[fired].innerHTML = ("&#8722;");
            }
        }
        )
    }
    
    //modal
    
    const pics = document.querySelectorAll(".col>img");
    const modal = document.querySelector("#lightBox");
    const close = document.querySelector(".close");
    const modalimg = document.createElement("img");
    
    for (p = 0; p < pics.length; p++) {
        const active = pics[p];
        const id = pics[p].id;
        active.addEventListener("click", () => {
            modal.classList.remove("jsnone");
            modalimg.src = active.src;
            modal.append(modalimg);    
    })}
    
    close.addEventListener("click", () => {
        modal.classList.add("jsnone");
    })
    
    // filters
    
    const buts = document.querySelectorAll(".fbutton");
    const imgs = document.querySelectorAll(".col>img");
    const reset = document.querySelector("#reset");
    
    reset.focus();
    for (b = 0; b < buts.length; b++) {
        const fired = buts[b].id;
        buts[b].addEventListener("click", () => {
            for (i = 0; i < imgs.length; i++) {
                imgs[i].classList.add("jsnone");
                const show = document.getElementsByClassName(`${fired}`);
                if (imgs[i].classList.contains(`${fired}`)) {
                    imgs[i].classList.remove("jsnone")
                }
            }
        }
        )
    }
    
    
    
    reset.addEventListener("click", () => {
        for (d = 0; d < imgs.length; d++) {
            imgs[d].classList.remove("jsnone")
        }
    })
    
    // back to top 
    
    const backTop = document.querySelector ("#backTop");
    
    backTop.addEventListener ("click", ()=> {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
});

