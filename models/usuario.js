const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    tipo:{
        type: String,
        required: false,
        emun: ['U','C']
    },
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    primerApellido:{
        type: String,
        required: false
    },
    segundoApellido:{
        type: String,
        required: false
    },
    fecNacimiento:{
        type: String,
        required: [false, 'La fecha de Nacimiento no es obligatorio'],
    },
    correo:{
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique:true
    },
    departamento:{
        type: Number,
        required: false,
        emun: [1,2,3,4,5,6,7,8,9]
    },
    ciudad:{
        type: String,
        required: false,
        emun: ['La Paz','Cochabamba','Santa Cruz de la Sierra','Beni','Pando','Tarija','Oruro','Chuquisaca','Potosi']
    },
    telefono:{
        type: String,
        required: [true, 'El telefono es obligatorio'],
    },
    login:{
        type: String,
        required: [true, 'El login o nombre de usuario es obligatorio'],
        unique: true
    },
    clave:{
        type: String,
        required: [true, 'El contraseña es obligatorio'],
    },
    docid:{
        type: Number,
        required: false
    },
    expedido:{
        type: String,
        required: false,
        emun:['LPZ','CBA','SCZ','BEN','PAN','TJA','CHQ','ORU','PTS']
        
    },
    extension:{
        type: String,
        required: false
    },
    nacionalidad:{
        type: String,
        default: 'BOLIVIANO'
    },
    sexo:{
        type: String,
        required: false,
        emun:['F','M']
    },
    telfEmergencia:{
        type: String,
        required: false
    },
    img:{
        type: String,
    },
    estado:{
        type: Boolean,
        default: true
    },
    rol:{
        type: String,
        required: true,
        emun:['ADMIN','USER', 'DRIVER']
    },
    google:{
        type: Boolean,
        default: false
    },
    estadoOnline:{
        type: Boolean,
        default: true
    },

    detalle:[{
        tipodoc:{
            type: Number,
            required: false,
            emun: [1,2,3,4,5,6,7]
            
        },
        nombreDoc:{
            type: String,
            required: false,
        },
        documento:{
            type: String,
            required: false,
        },  
    }]
    
    

});

UsuarioSchema.methods.toJSON = function (){
    const { __v, sexo, login,estadoOnline,google, rol, detalle,clave, _id, ...usuario} = this.toObject();
    usuario.uid = _id
    return usuario;
}



module.exports = model('Ususario',UsuarioSchema);

/* funca
{
    "request": "ausuario",
    "usuario": [{       "tipo": "U",
                        "nombre": "CHOQUITO UNO",
                        "fecNacimiento": "1986-06-15",
                        "email":"test1@mail.com",
                        "departamento": 3,
                        "ciudad": "Santa Cruz de la Sierra",
                        "telefono": "12345678",
                        "login": "Acaceres2",
                        "clave": "estaesunaclave12*",
                        "token":"AAAAB3NzaC1yc2EAAAABJQAAAQEAvrKZ709xJdOEne6QlwEflw485b0Cql3FtIkJ7QOHqrYgHdjl8gEetGuk/llXcxz810pwXmxwoamB/8ytTLYuSt8EY6MxR7k7yCcnQvGgWpT+LKlZi5vJYYl5XtoyglOwxwjtBx6zzcwNryN1oUYnCWJCbK+YZkEBX4/w6I17p2mD1aXIUTLRuyoa+psRat+RiixxO26qOVWv0PL4tcMBNriTfMy/6TkNWGbXC+uvzSXQbatwQ19Z5axYf9cnbTeuQ+2VaUwhgaAFvCezyeDoU/QhMoJXXc2lwuresg34dy6t1FkbE2km4HjOWqSbS9BGY+Fcu7OtCwMjzqFYBKCYtQ=="
                                                
        }
    ]
}
{
    "request": "ausuario",
    "usuario": [{	"tipo": "U",
                    "nombre": "Antonio Cáceres Peredo", 
                    "fecNacimiento": "1986-06-15", 
                    "email":"esteesemail@mail.com", 
                    "departamento": 3,
                    "ciudad": "Santa Cruz de la Sierra", 
                    "telefono": "12345678",
                    "login": "Acaceres", 
                    "clave": "estaesunaclave12*",
                    "token":"AAAAB3NzaC1yc2EAAAABJQAAAQEAvrKZ709xJdOEne6QlwEflw485b0Cql3FtIkJ7QOHqrYgHdjl8gEetGuk/llXcxz810pwXmxwoamB/8ytTLYuSt8EY6MxR7k7yCcnQvGgWpT+L KlZi5vJYYl5XtoyglOwxwjtBx6zzcwNryN1oUYnCWJCbK+YZkEBX4/w6I17p2mD1aXIUTLRuyoa+psRat+Rii xxO26qOVWv0PL4tcMBNriTfMy/6TkNWGbXC+uvzSXQbatwQ19Z5axYf9cnbTeuQ+2VaUwhgaAFvCezyeDoU/Q hMoJXXc2lwuresg34dy6t1FkbE2km4HjOWqSbS9BGY+Fcu7OtCwMjzqFYBKCYtQ=="
    
                }
               ]
}

{
    "request": "ausuario", 
    "usuario": [{	"tipo": "C",
                    "nombre": "Antonio", 
                    "primerApellido":"Cáceres", 
                    "segundoApellido": "Peredo", 
                    "fecNacimiento": "1986-06-15", 
                    "email":"esteesemail@mail.com", 
                    "departamento": 3,
                    "ciudad": "Santa Cruz de la Sierra", 
                    "telefono": "12345678",
                    "login": "Acaceres", "clave": "estaesunaclave12*", "docid":"12345678",
                    "expedido": "LPZ", "extension": null, "nacionalidad": "BOLIVIANA", "sexo": "M", "telfEmergencia": null,
                    "token":"AAAAB3NzaC1yc2EAAAABJQAAAQEAvrKZ709xJdOEne6QlwEflw485b0Cql3FtIkJ7QOHqrYgHdjl8gEetGuk/llXcxz810pwXmxwoamB/8ytTLYuSt8EY6MxR7k7yCcnQvGgWpT+L KlZi5vJYYl5XtoyglOwxwjtBx6zzcwNryN1oUYnCWJCbK+YZkEBX4/w6I17p2mD1aXIUTLRuyoa+psRat+Rii xxO26qOVWv0PL4tcMBNriTfMy/6TkNWGbXC+uvzSXQbatwQ19Z5axYf9cnbTeuQ+2VaUwhgaAFvCezyeDoU/Q hMoJXXc2lwuresg34dy6t1FkbE2km4HjOWqSbS9BGY+Fcu7OtCwMjzqFYBKCYtQ==",
                    "detalle":[{
                            "tipodoc": 7,
                            "nombreDoc": "fotografia.jpg",
                            "documento": "LSJLSHJS/(SHSSGISH//SKJS(SJKHSKHS((HSLKJS))LSJS))/76658SJKJS8LSJS))/76658SJKJS8"
     
                                },
                                {
                                    "tipodoc": 7,
                                    "nombreDoc": "fotografia.jpg",
                                    "documento": "12REf2JS/(SHSSGISH//SKJS(SJKHSKHS((HSLKJS))"
    
                                }]
     
    
                }]
    }
 */   