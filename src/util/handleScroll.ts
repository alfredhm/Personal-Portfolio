// Enable hidden header
{
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

// Change Text Color On Hover
{
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        let text = link.querySelector<HTMLElement>('#link-title');
        link.addEventListener('mouseover', () => {
            if (text) text.style.color = '#AAC7D8';
        })
        link.addEventListener('mouseout', () => {
            if (text) text.style.color = 'white';
        })
    })
}