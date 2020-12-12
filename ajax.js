
var contenido = document.getElementById('content');
//var verifScript = document.querySelectorAll('script');


document.addEventListener('click', (e)=>{

    //console.log(e);

    if(e.target.localName === 'a'){

        e.preventDefault();

        let archivo = '/elementos/' + e.target.id + '.html';
        let xhr = ajax(archivo);

        xhr.addEventListener('load', ()=>{
            if(xhr.status === 200){
                contenido.innerHTML = xhr.response;
                history.pushState({
                    template : xhr.response
                }, '', archivo);
            }
        })

        //var regex = new RegExp(/play/);
    }
})

window.addEventListener('load', ()=>{

    let home = '/elementos/home.html';
    let xhr = ajax(home);

    xhr.addEventListener('load', ()=>{
        if(xhr.status === 200){
            contenido.innerHTML = xhr.response;
            history.pushState({
                template : xhr.response
            }, '', home);
        }
    })
})

function ajax(archivo, metodo){

    let httpMetodo = metodo || 'GET';
    let xhr = new XMLHttpRequest();

    xhr.open(httpMetodo, archivo);
    xhr.send();
    return xhr;
}

window.addEventListener('popstate', (e)=>{
    let file = location.pathname.split('elementos/')[1];
    if(e.state){
        console.log(e);
        contenido.innerHTML = e.state.template;
    }
})