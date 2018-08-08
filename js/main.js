var btn = document.getElementById('test');
var template = `
<div class="ico"><i class="fas fa-check"></i></div>
<div class="msg">Myfirst</div>
`;
btn.addEventListener('click', () => {
    console.log('123');
    var notify =  document.querySelector('.notify').innerHTML = template;
    setTimeout(() => {
        document.querySelector('.notify').innerHTML = '';
    }, 2000);
});