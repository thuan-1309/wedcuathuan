document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('mouseover', () => {
        product.style.backgroundColor = '#f0f8ff';
    });
    product.addEventListener('mouseout', () => {
        product.style.backgroundColor = 'white';
    });
});
document.querySelector('.toggle-button').addEventListener('click', () => {
    const productSection = document.querySelector('.products');
    if (productSection.style.display === 'none') {
        productSection.style.display = 'grid';
    } else {
        productSection.style.display = 'none';
    }
});
document.querySelector('.search-bar input').addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    document.querySelectorAll('.product').forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const image = document.getElementById('dynamic-image');
image.addEventListener('mouseover', function(){
    image.src = 'https://img.upanh.tv/2025/03/16/slider_1.webp';
});
image.addEventListener('mouseout', function(){
    image.src = 'https://img.upanh.tv/2025/03/17/slider_2.webp';
});