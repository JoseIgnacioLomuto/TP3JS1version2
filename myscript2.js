let op;

document.querySelector('#porcentaje1').addEventListener('click', () =>{
    op = 'Estudiante';
});
document.querySelector('#porcentaje2').addEventListener('click', () =>{
    op = 'Trainee';
});
document.querySelector('#porcentaje3').addEventListener('click', () =>{
    op = 'Junior';
});

document.querySelector('#calcular').addEventListener('click', () =>{
    const n1 = parseInt(document.querySelector('#n1').value);
    const n2 = 200
    //const op = document.querySelector('#op').value;
    let r;
    if(op == 'Estudiante'){
        r = n1 * n2 * 0.20;
    }else if( op == 'Trainee'){
        r = n1 * n2 * 0.50;
    }else if(op == 'Junior'){
        r = n1 * n2 * 0.85;
    }
    document.querySelector('#r').innerHTML = r;

});


