window.onscroll = function() {
    // Enable hidden header
    const nav = document.querySelector<HTMLElement>('header');
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        console.log("scroll")
        if (lastScrollY < window.scrollY) {
            nav?.classList.add("hidden")
        } else {
            nav?.classList.remove("hidden")
        }
        lastScrollY = window.scrollY;
        if (window.scrollY <= 0) {
            nav?.classList.remove("hidden")
        }
    }); 

}
