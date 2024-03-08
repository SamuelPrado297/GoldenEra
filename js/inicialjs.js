// Código da Navbar Transparente //
var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 100){
        nav.classList.add('bg-warning', 'shadow');
    }else{
        nav.classList.remove('bg-warning', 'shadow');
    }
});
// Fim do código da Navbar transparente //

// Código do Modo Noturno //
const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})