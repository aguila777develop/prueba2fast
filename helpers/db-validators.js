const Usuario = require('../models/usuario');
const Role = require('../models/role');


const  esRolValido =   async (rol = '') =>{
      const existeRol = await Role.findOne({ rol });
      if ( !existeRol ) {
              throw new Error(`${ rol } no está registrado en la BD, roles velidos, ADMIN, USER, DRIVER`);
      }

}


const emailExiste = async(correo = '') => {
  //Verificar si el correo existe
const existeEmail = await Usuario.findOne({correo});
  if (existeEmail) {
      throw new Error(`El correo: ${ correo }, ya esta registrado `);
    
  }
}

 const existeLogin = async(login = '') => {
//   //Verificar si el correo existe
 const existeLogin = await Usuario.findOne({login});
   if (existeLogin) {
       throw new Error(`El Nombre de usuario: ${ login }, ya esta registrado `);
    
   }
 }

 const existeEmailLogin = async (login = '', correo ='' ) =>{
      const existeEmail = await Usuario.findOne({correo});
      const existeLogin = await Usuario.findOne({login});
      if (existeEmail) {
          throw new Error(`El correo: ${ correo }, ya esta registrado `);
    
      }else if (existeLogin) {
        throw new Error(`El Nombre de usuario: ${ login }, ya esta registrado `);
      }

 }

const existeUsuarioPorId = async( id ) => {

  // Verificar 
  const existeUsuario = await Usuario.findById(id);
  if ( !existeUsuario ) {
      throw new Error(`El id no existe ${ id }`);
  }
}



module.exports ={
    emailExiste,
    existeUsuarioPorId,
    esRolValido,
    existeLogin,
    existeEmailLogin
}