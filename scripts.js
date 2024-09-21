onload = function() {

    function changeSvgColorOnHover() {
        const downArrows = document.querySelectorAll(".intro-sect__down-arrow");
        const upArrows = document.querySelectorAll(".intro-sect__up-arrow");
        const navDrop = document.querySelectorAll(".intro-sect__nav-drop");
            for (let i = 0; i < navDrop.length; i++) {
                navDrop[i].addEventListener("mouseover", function() {
                    downArrows[i].style.display = 'none';
                    upArrows[i].style.display = 'inline';
                    document.querySelectorAll(".intro-sect__up-path")[i].setAttribute('stroke', 'hsl(0, 0%, 8%)');
                })
            }

            for (let i = 0; i < navDrop.length; i++) {
                navDrop[i].addEventListener("mouseout", function() {
                    downArrows[i].style.display = 'inline';
                    upArrows[i].style.display = 'none';
                })
            }    
    }

    changeSvgColorOnHover();

    function showHideMobileMenu() {
        const drop = document.querySelector(".intro-sect__mobile-drop");
        const overlay = document.querySelector(".intro-sect__mobile-overlay");
        const menu = document.querySelector(".intro-sect__mobile-menu");
        const close = document.querySelector(".intro-sect__mobile-close");

        drop.addEventListener("click", function() {
            overlay.setAttribute("style", "opacity: 1; transform: scale(1)");
            drop.style.display = 'none';
            setTimeout(() => {
                menu.style.maxWidth = '500px';
            }, 200);
            setTimeout(() => {
                close.style.opacity = '1';
            }, 300);
        })

        document.querySelector(".intro-sect__mobile-close").addEventListener("click", function() {
            setTimeout(() => {
                menu.style.maxWidth = '0%';
            }, 100);
            setTimeout(() => {
                close.style.opacity = '0';
            }, 300)
            setTimeout(() => {
                overlay.setAttribute("style", "opacity: 0; transform: scale(0)");
                drop.style.display = 'block';
            }, 500);
        })
    }

    showHideMobileMenu();


    function showHideMobileDrop() {
        const mobileDropWraps = document.querySelectorAll(".intro-sect__mobile-drop-wrap");
        const mobileLinkDrops = document.querySelectorAll(".intro-sect__mobile-link-drop");
        const downArrows = document.querySelectorAll(".intro-sect__down-arrow-mobile");
        const upArrows = document.querySelectorAll(".intro-sect__up-arrow-mobile");
    
        for (let i = 0; i < downArrows.length; i++) {
                mobileDropWraps[i].addEventListener("click", function() {
                   if (mobileDropWraps[i].classList.contains("openDrop") === false) {
                        mobileLinkDrops[i].style.maxHeight = '500px';
                        mobileDropWraps[i].classList.add("openDrop");
                        downArrows[i].style.display = 'none';
                        upArrows[i].style.display = 'block';     
                   } else if (mobileDropWraps[i].classList.contains("openDrop")) {
                        mobileLinkDrops[i].style.maxHeight = '0px';
                        mobileDropWraps[i].classList.remove("openDrop");
                        downArrows[i].style.display = 'block';
                        upArrows[i].style.display = 'none'; 
                   }  
            });
             
        }

    }
    

    showHideMobileDrop();




























}