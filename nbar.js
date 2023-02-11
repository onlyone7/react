import { React } from "react";
import { FaRegHandshake,FaShoppingCart,FaTint} from "react-icons/fa";
import  "../styleComponentes/nbar.css";






 function Nbar(params) {
    
    return ( 

                 
     
      <div className='container nbar'>
         <div className="row vacia"></div>
      <div className='row lineau' >   
      <div className='col sm-12 m-4 lg-4 xl-4'> <img className="imagen-nbar "src={require('../imagenes/logo.jpg')}/> </div>  
      <div className="col linead">
                    <div className='col sm-12 m-4 lg-4 xl-6'>  <h2>Catalogo Productos Only.One  </h2> </div> 
                    
                    </div> 
                  
      <div className='col sm-12 m-4 lg-4 xl-4 iconos'>  
                
                    
                 
                <ul> <a  href="#productos"rel="noreferrer noopener" target="_blank"><FaShoppingCart></FaShoppingCart><p>Productos</p></a></ul>
                <ul>  <a href="#conocenos"rel="noreferrer noopener" target="_blank"><FaRegHandshake></FaRegHandshake><p>Conocenos</p></a></ul>
              
                    
                    </div> 
                    
                    
      </div>
      <div className="row vacia"></div>   
    </div> 







   


     );
}
 
export default Nbar;