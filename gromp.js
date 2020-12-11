
var contenido = document.getElementById('content');

document.addEventListener('click', (e)=>{
    if(e.target.localName === 'a'){

        let archivo = e.target.id + '.html';
        let xhr = ajax(archivo);

        xhr.addEventListener('load', ()=>{
            if(xhr.status === 200){
                contenido.innerHTML = xhr.response;
                history.pushState({
                    template : xhr.response
                }, '', archivo);
            }
        })
    }
})

window.addEventListener('load', ()=>{

    let home = 'home.html';
    let xhr = ajax(home);

    xhr.addEventListener('load', ()=>{
        if(xhr.status === 200){
            contenido.innerHTML = xhr.response;
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
    if(e.state){
        contenido.innerHTML = e.state.template;
    }
})