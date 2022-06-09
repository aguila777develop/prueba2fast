const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


// para grabar importamos nuestro modelo
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');





// ****************   GET   **************************************

const usuariosGet =  async(req = request, res = response) => {
    // const query = req.query; // 1era forma
    // res.json({
    //     "ok": true,
    //     "msg": "get Api - usuariosGet",
    //     query
    // });
    // otra forma desestruturada

//para pruebas
    // const { q, nombre='Sin nombre', apikey} = req.query; // 2era 
    
    
    // para obterner a los usuarios de forma paginada
    // Caso 1
    // Caso 1 para obtener el numero de registros en este caso solo obtenemos 5 
    //const {limite= 5} = req.query;// caso1 paso1
    //const usuarios = await Usuario.find()
    // .limit(limite); ///  caso 1 paso 2 funca cambaindo el limite desde aqui
    //.limit(Number(limite)); /// funca cuando desde la ruta se llama asi /api/usuarios?limite=3


    // caso 2
    //caso 2  obtener registros desde y cantidad ejemplo desde el registro 0 solo 1 registro
    //const {limite= 1, desde=0} = req.query;// caso2 paso1
    //const usuarios = await Usuario.find()
    //.skip(desde)   //  caso 2 paso 2 desde la ruta de postman se llama asi /api/usuarios?desde=3
    //.limit(Number(desde)); /// funca cuando desde la ruta se llama asi /api/usuarios?limite=3
    //.limit(limite); ///  caso 1 paso 2 funca cambaindo el limite desde aqui
    //.limit(Number(limite)); /// funca cuando desde la ruta se llama asi /api/usuarios?limite=3
    
    
    // para devolver el total de numeros de registros siempre devuelve todo
    //const total = await Usuario.countDocuments();
    
    //para solodevelver los usarios activos con estado true de forma rapida eficiente
    const {limite= 15, desde=0} = req.query;
    const query ={ estado:true};// query para que solo nos muestre los q tienen estado true
    
    const[total, usuarios] = await Promise.all([
      Usuario.countDocuments(query),// consulta 1
      // Usuario.count(query),
      Usuario.find(query)   // consulta 2
      .skip(Number(desde))
      // .limit(limite)
      .limit(Number(limite))

    ]);
    

    res.json({
        "ok": true,

        // "msg": "get Api - usuariosGet",
        // q,
        // nombre,
        // apikey
        total, // devolvemos total de registros en la BD
        usuarios
    });
  }
// ******************************************************************
// ****************   PUT  ******************************
const usuariosPut =  async(req, res= response) => {
    // const id = req.params.id;
    // sihubeira mas podriamos desustructurar como abajo
    const { id } = req.params;
    
    const { _id, clave, correo, ...resto} = req.body;

    // TODO: validar contra la BD
    if (clave) {
         //Encriptar la contraseña
      const salt = bcryptjs.genSaltSync();
      resto.clave = bcryptjs.hashSync(clave,salt);

    }
    const usuario = await Usuario.findByIdAndUpdate(id, resto,{new:true});

    res.json({
        "ok": true,
        // "msg": "put API - usuariosPut",
        // id
        usuario
    });
  }
// *********************************************************
// *****************   POST   ********************************
  const usuariosPost = async (req, res = response) =>  {

   

    //  const body = req.body; //guarda todo loq ue viene PASO1.1


    // desestrutruramos solo guarda lo que esta dentro de las llaves
     const {tipo,nombre,primerApellido,segundoApellido, fecNacimiento, correo,departamento,ciudad,telefono,login,clave, docid,expedido,extension,nacionalidad, sexo,telfEmergencia,img,estado,rol, detalle, tipodoc,nombreDoc,documento} = req.body; //PASO 2.1
     
    //  const usuario = new Usuario(body); // PASO 1.2
     const usuario = new Usuario({tipo,nombre,primerApellido,segundoApellido, fecNacimiento, correo,departamento,ciudad,telefono,login,clave, docid,expedido,extension,nacionalidad, sexo,telfEmergencia,img,estado,rol, detalle, tipodoc,nombreDoc,documento}); //PASO 2.2

         
     // const isBase64doc =Usuario.detalle.isBase64({documento});
    // if (isBase64doc) {
    //   return res.status(400).json({
    //     msg:'No es base 64'
    //   });
    // }
     //Encriptar la contraseña
      const salt = bcryptjs.genSaltSync();
      usuario.clave = bcryptjs.hashSync(clave,salt);


    // Guardar en BD
    await usuario.save();

    const token = await generarJWT(usuario.id);

    // const {nombre, edad} = req.body;
    res.json({
        "ok": true,
        "msg":"Usuario creado con exito",
        // "msg": "post Api - usuariosPost",
        // nombre,
        // edad
        // body
        usuario,
        token
    });
  }
// **************************************************************


// *******************  DELETE    **********************************
  const usuariosDelete = async(req, res = response) => {
    const { id } = req.params; 
    
    // const uid = req.uid;
    // borrado fisico de la BD forma no recomendada
    // const usuario = await Usuario.findByIdAndDelete(id);
    
    // Forma recomendada borrado logico solo cambiamos el estado del usaurio
    // es la mejor opcion 
    // const usuario = await Usuario.findByIdAndUpdate(id,{ estado: false}, {new: true});
    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );
   
    const usuarioAutenticado = req.usuario; //aqui tenemos la informacion del usuario

   res.json({
        "ok": true,
        //  "msg": "delete Api - usuariosDelete",
        id,
       usuario, usuarioAutenticado
    });
  }
// *************************************************************
// *******************    PATCH     *****************************
  const usuariosPatch = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "patch Api - usuariosPatch"
    });
  }
// ***************************************************************
  module.exports ={
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosDelete,
      usuariosPatch
  }