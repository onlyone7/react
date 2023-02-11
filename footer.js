


import { React } from "react";
import {  FaFacebook, FaYoutube, FaCommentsDollar,FaEnvelopeOpen,FaArrowUp} from "react-icons/fa";
import  "../styleComponentes/footer.css";






 function Footer(params) {
    
    return ( 

                 

      <div className='container contenedorf'>
      <div className='row lineaf' > 
      <div className="columnaf col-sm-12 col-m-8 col-lg-8 col-xl-8"> 
                   <small> Only One Company OOC - Dirección General <br></br>
                      Calle 22 j # 114ª-46 Bogotá D.C (Cundinamarca), Colombia <br></br>
                      Atención presencial: lunes a viernes 7:00 a.m. a 5:30 p.m.<br></br>
                      Resto del país sedes y horarios Atención telefónica: lunes a viernes 7:00 a.m. a 7:00 p.m. - sábados 8:00 a.m. a 1:00 p.m.<br></br>
                      Líneas de atención al ciudadano: Bogotá (57) 3212378535 - 3226576334<br></br>
                      </small>
                      </div> 
                               
             
               <div className="columnaf   col-sm-3 col-m-3 col-lg-3 col-xl-3 "> 
               <img className="imagenf "src={require('../imagenes/footer.jpg')}/> 
               </div>  
                </div>  
             
               <div className='row lineafi' >   
               <div className="columnafi col-sm-6 col-m-4 col-lg-4 col-xl-4">  
               
                         
                       <a  href="https://www.facebook.com/OnlyOnecompany7/" rel="noreferrer noopener" target="_blank"><FaFacebook></FaFacebook></a>


                       <a href="https://wa.me/573226576334"rel="noreferrer noopener" target="_blank"><FaCommentsDollar></FaCommentsDollar></a>
                         
                         
                       <a href="mailto:alexanderguiza18@gmail.com"rel="noreferrer noopener" target="_blank"><FaEnvelopeOpen></FaEnvelopeOpen></a>
                         
                         
                      <a href="https://www.youtube.com/channel/UCHPJfdj8NzeeuMpYZsXFIgw"rel="noreferrer noopener" target="_blank"><FaYoutube></FaYoutube></a>
                            
                    
                      </div> 
                </div> 
                <div className='row lineacopi' >   
                <div className="copic col-">  
                   
                         <div className="copi col-sm-12 col-m-12 col-lg-12 col-xl-12"> <small>&copy;2023 <b>OnlyOneCompany*</b>Todos los derechos reservados</small> </div> 
                    
                         </div> 
                  </div>
                 
     
                  </div> 


     





   


     );
}
 
export default Footer;