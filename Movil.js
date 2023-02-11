import React from "react";
import {  FaFacebook, FaYoutube, FaCommentsDollar,FaEnvelopeOpen,FaArrowUp} from "react-icons/fa";
import"../styleComponentes/Movil.css";


function Movil(params) {
    return ( 


<div className="container contenedorflo">
     <div className="row lineafl0">
     <div className="columnaflo col-sm-12 col-m-12 col-lg-12 col-xl-12">   
     
                     <a  href='#inicio' rel="noreferrer noopener" target="_blank"><FaArrowUp></FaArrowUp></a> 
                    
                     <a  href="https://www.facebook.com/OnlyOnecompany7/" rel="noreferrer noopener" target="_blank"><FaFacebook></FaFacebook></a>


                       <a href="https://wa.me/573226576334" rel="noreferrer noopener" target="_blank"><FaCommentsDollar></FaCommentsDollar></a>
                         
                         
                       <a href="mailto:alexanderguiza18@gmail.com"rel="noreferrer noopener" target="_blank"><FaEnvelopeOpen></FaEnvelopeOpen></a>
                         
                         
                      <a href="https://www.youtube.com/channel/UCHPJfdj8NzeeuMpYZsXFIgw"rel="noreferrer noopener" target="_blank"><FaYoutube></FaYoutube></a>
                            
                    
     </div> 
     </div> 
     </div>




     );
}

export default Movil;









