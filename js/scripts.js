function mensaje() {
    alert('hola mundo');
}



function validarFormulario() {

    var resp =validaRut();
    if (resp==false){
        return false;
    }
    resp = validarFecha();
    if (resp==false) {
        return false;
    }
    return true;
}

function validarFecha(){
    var fechaUsuario = document.getElementById('txtFechaNaci').value;
    var fechaSistema = new Date();
    console.log('Fecha usuario: '+fechaUsuario);
    console.log('Fecha sistema: '+fechaSistema);
    ////////////////////////////////////////////
    var ano = fechaUsuario.slice(0,4);
    var mes = fechaUsuario.slice(5,7);
    var dia = fechaUsuario.slice(8,10);
    var fechaNuevaUsuario = new Date(ano,(mes-1),dia);
    console.log('Nueva Fecha: '+fechaNuevaUsuario);
    ////////////////////////////////////////////
    if (fechaNuevaUsuario > fechaSistema) {
        alert('La fecha de nacimiento es incorrecta');
        return false;
    }
    
    var elDia = 24 * 60 * 60 * 1000; //Transformar a milisegundos el valor de un dia
    var dias =Math.trunc((fechaSistema.getTime() - fechaNuevaUsuario.getTime()) / elDia);
    console.log('Dias: '+dias);
    var anos =Math.trunc(dias/365);
    console.log('Años: '+anos);

    if (anos < 18) {
        alert('usted es menor de edad, solo tiene '+anos+' años');
        return false;
    }
    return true;
}


function validaRut() {

    var rut = document.getElementById('txtRut').value;

    console.log('Su rut es:'+rut);

    var num = 3;

    var suma = 0;

    for (let index = 0; index < 8; index++) {
        var caracter = rut.slice(index,index+1);
        console.log(caracter+ ' x '+num);

        suma = suma + ( caracter * num );
        num = num -1;
        if (num == 1) {
            num = 7;
        }
    }

    console.log('suma es:'+suma);

    var resto = suma % 11;
    console.log('resto:'+resto);
    var dv = 11 - resto;
    if ( dv > 9) {
        if ( dv == 10) {
            dv ='K';
        }else{
            dv = 0;
        }
    }
    console.log('dv:' + dv);
    var dv_usuario = rut.slice(-1).toUpperCase();
    if ( dv != dv_usuario ) {
        //alert('rut incorrecto');
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Rut incorrecto',
            footer: '<a href>Why do I have this issue?</a>'
        })
        return false;
    }
    return true;
}

