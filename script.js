const headerLinks = document.querySelectorAll('.plainAnch');

headerLinks.forEach ( link => {
    link.addEventListener('mouseover', function() {
        link.style.color = '#AE0001';
        link.style.background = 'white';
    })
});

headerLinks.forEach ( link => {
    link.addEventListener('mouseout', function() {
        link.style.color = 'black';
        link.style.background ='#bdccea';
    })
});