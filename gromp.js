

window.addEventListener('mousedown', (e)=>{

    //console.log(e);

    if(e.target.id === 'hands'){

        //let parent = e.target.parentNode;
        let legromp = document.getElementById('legromp');

        e.target.classList.add('lemove');

        legromp.classList.add('lepet');

        console.log(legromp.classList);

    }
})

window.addEventListener('mouseup', (e)=>{

    if(e.target.id === 'hands'){

        let legromp = document.getElementById('legromp');

        e.target.classList.remove('lemove');

        legromp.classList.remove('lepet');

    }
})
