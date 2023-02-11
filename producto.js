import React from "react";
import"../styleComponentes/producto.css"





function Producto({ nombre, precio, descripcion, promociones, imagen, alt }) {
    return (







                        



        <div className = "container contenedorp" >
        <div className = "row lineap" >
        <div className = " columnap col-sm-4 col-m-8 col-lg-3 col-xl-3">

        <img className = "imagen"
        src = { require(`../imagenes/${imagen}.jpg`) }
        alt = { alt }
        />

        </div>

        <div className="col-sm-12 col-m-6 col-lg-6 col-xl-6  texto">


                <p className="a  nombre"> <strong>{nombre} </strong></p>
                <p className="a precio"> {precio} </p>
                <p className="a descripcion"> {descripcion} </p>
                <p className="a promociones"> {promociones} </p>
                
                

        </div>
        </div>
        </div>





        
                        











    );

}



export default Producto