/**
 * URL de acceso a recurso
 */
 const BASE_URL_ACCESSORY = "http://localhost:8080/api/accessory";

 function onLoadAdminAccessoryjs(){
     console.log('pruebaOnLoadAdminAccessoryjs');    
 }
 
 /**
  * Muestra la tabla de productos, 
  * lanza funcion que recarga tabla.
  */
 function mostrarTablaAccesorios() {
     document.getElementById("tablaProductos").hidden = false;
     document.getElementById("tablaUsuarios").hidden = true;
     cargarTablaProductos();
 }
 
 /**
  * Se recarga la tabla de productos,
  * se muestran los productos al dar clic.
  */
 async function cargarTablaProductos() {
     let items = await getAllAccessory();
     let tablaProductos = "";
     for (let i of items) {
         tablaProductos += `<tr>
                         <td>
                         <img src="`+ i.photography + `" alt="Accesorio" style="width:50px;height:50px;"
                         onerror="this.src='./images/no_d.png'">
                         </td>
                         <td>
                         <span>`+ i.reference + `</span><br>    
                         </td>
                         <td>
                             <span class="text-muted">`+ i.brand + `</span>
                         </td>
                         <td>
                             <span class="text-muted">`+ i.category + `</span>
                         </td>
                         <td>
                             <span class="text-muted">`+ i.material + `</span>
                         </td>
                         <td>
                             <span class="text-muted">`+ i.gender + `</span>
                         </td>
                         <td>
                             <span class="text-muted">`+ i.size + `</span>
                         </td>
                         <td>
                             <span class="text-muted">`+ i.availability + `</span>
                         </td>
                         <td>
                             <span class="text-muted">`+ i.price + `</span>
                         </td>
                         <td>
                             <span class="text-muted">`+ i.quantity + `</span>
                         </td>
                         <td>
                         <span class="text-muted">`+ i.description + `</span>
                         </td>
                         <td>
                             <button type="button"
                             class="btn btn-info btn-circle btn-lg btn-circle ml-2"
                             onclick=\'editarProducto(`+ JSON.stringify(i) + `)\'><i
                             class="fa fa-edit"></i> </button>
                             <button type="button"
                             class="btn btn-danger btn-circle btn-lg btn-circle ml-2"
                             onclick=\'eliminarProducto(`+ JSON.stringify(i) + `)\'><i
                             class="fa fa-trash"></i> </button>
                         </td>`;
 
     }
     document.getElementById("cuerpoTablaProductos").innerHTML = tablaProductos;
 }
 
 
 /**
  * Funcion encarga de retornar la lista de productos,
  * se realiza una peticion GET al endpoint /api/accessory
  * 
  * @returns Lista Productos
  */
 async function getAllAccessory() {
     try {
         const url = BASE_URL_ACCESSORY + '/all';
         console.log("GET all accessory : ", url);
         const fetchOptions = {
             method: "GET",
             headers: {
                 "Content-type": "application/json; charset=UTF-8",
             },
         };
         const response = await fetch(url, fetchOptions);
         const responseConverted = await response.json();
         console.log(`getAllAccessory:`, responseConverted);
         return responseConverted;
     } catch (error) {
         console.log(`error`, error);
     }
 }