function onLoad(header) {
    const headerPlaceholder = document.getElementById('header-placeholder');
    headerPlaceholder.innerHTML = header;

    const pages = Array.from(document.querySelectorAll('.navbar a'));
    const path = location.pathname;
    const currentPage = pages.find(p => path.includes(p.pathname))
    if (currentPage) currentPage.classList.add('active');

    const ham = document.querySelector('.ham-menu')
    const nav = document.querySelector('.navbar')
    ham.addEventListener("click", ()=>{
        ham.classList.toggle('active')
        nav.classList.toggle('active')
    })

    const loadder = document.getElementById('preloadder')
    loadder.style.display = "none";
}

window.addEventListener("load",()=>{
    fetch('header.html').then(response => response.text()).then((header) => {
        onLoad(header);
    });
});

