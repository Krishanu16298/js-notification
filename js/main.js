var btn = document.getElementById('test');

btn.addEventListener('click', () => {
    console.log('123');
    document.querySelector('.notify').classList.add('toggle');
    setTimeout(() => {
        document.querySelector('.notify').classList.remove('toggle');
    }, 2000);
});