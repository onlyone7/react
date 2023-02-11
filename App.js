
import './App.css';
import Producto from './componentes/producto';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Nbar  from "./componentes/nbar";
import"./componentes/footer";
import Footer from './componentes/footer';
import Conocenos from "./componentes/sobremi";
import Movil from "./componentes/Movil.js";


    



function App() {
    return (


      


        <div className = "App" >
            
            <div id='inicio'></div>
            <Nbar></Nbar>               

       
        <div id='productos'></div>
        <Producto 
    
        imagen = "galleta-mantequilla"
        nombre = "Galletas de mantequilla"
        precio = "10.000 pesos colombianos caja por 40 unidades."
        descripcion = "Las galletas danesas, conocidas también como Brysselkex, butter cookies, galletas de mantequilla o sablés, son galletas preparadas con mantequilla, harina y azúcar. A menudo son clasificadas como galleta crujiente debido a su textura, causado en parte a la cantidad de mantequilla y azúcar. En general, es necesario enfriar la masa para permitir una adecuada manipulación y procesamiento."
        promociones = "Si su compra es mayor de 20.000 se le ace un descuento del 10%"
        alt = "imagen-galletas"

        />
        
        <Producto 

        imagen = "brazoReina"
        nombre = "Brazo de reina "
        precio = "11.000 pesos colombianos la Docena."
        descripcion = "El brazo de  reina o gitano, es un postre relleno que se arrolla en forma de cilindro.1​ Se elabora con una masa genovesa cubierta de una mermelada o crema (nata, moca, chocolate) y luego enrollada. Puede estar decorado con una cobertura de azúcar glas, chocolate, glaseado, quemada, merengue o nata, entre otros."
        promociones = "Por cada 12 unidades compradas, se la encima una totalmente gratis"
        alt = "BrazoReina"
        

        />

<Producto 

imagen = "repolla"
nombre = "Repollas o profiteroles"
precio = "12 unidades por 3000 pesos colombianos."
descripcion = "generalmente se utilizan como postre y se rellenan de crema pastelera o nata, en España; y de helado o chocolate, en Italia. También pueden llegar a usarse como un aperitivo salado con rellenos como queso crema y algunas veces mariscos."
promociones = "Por cada 20000 pesos colombianos de hace un descuento de 2000 pesos colombianos."
alt = "repolla"



/>
<Producto 

imagen = "ojuelas"
nombre = "Ojuelas de Maiz azucaradas o corn flakes"
precio = "El kilo a 8000 COP(pesos colombianos)"
descripcion = "Los copos de maíz, también conocidos como hojuelas de maíz o corn flakes, son un producto alimenticio empaquetado derivado del maíz.Es el típico cereal para desayuno, que se estila comer con leche o yogur."
promociones = "Si desea llevar de 3 kilos en adelante, cada kilo quedaria en 7000 COP (pesos colombianos)"
alt = "corn-flakes"



/>
<Producto 

imagen = "chocolate-rice"
nombre = "Chocolate Rice"
precio = "El kilo a 8000 COP(pesos colombianos)"
descripcion = "Cereal utilizado para desayunos deliciosos granos de arroz inflado con un sabor de chocolate ligero. Es uno de los cereales más consumidos por niños y niñas."
promociones = "Si desea llevar de 3 kilos en adelante, cada kilo quedaria en 7000 COP (pesos colombianos)"
alt = "chocolate rice"
/>
<Producto 

imagen = "fruit-rings"
nombre = "Fruit rings"
precio = "El kilo a 8000 COP(pesos colombianos)"
descripcion = "Delicioso cereal en forma anillos con sabor a frutas utilizado para desayunos."
promociones = "Si desea llevar de 3 kilos en adelante, cada kilo quedaria en 7000 COP (pesos colombianos)"
alt = "chocolate rice"
/>
<Producto 

imagen = "hojaldre"
nombre = "Pasteles de Hojaldre"
precio = "Docena 14.000 COP (Pesos Colombianos)"
descripcion = "El temino hojaldre se caracteriza por su textura cujiente,con rellenos variados, como chhorizo,pollo y carne."
promociones = "Al llevar los productos, de ONLyONE COMPANY se le realizara un descuento por cada 30000 COP (Pesos Colombianos) del 10% "
alt = "Pastel de Hojaldre"
/>

<Producto 

imagen = "cheesecake"
nombre = "Torta de queso al horno ó Cheesecake"
precio = "Ronda individual por 12 porciones 14.000 COP (Pesos Colombianos)"
descripcion = "Torta de queso o en inglés cheese cake, clasificada  uno de los postres mas consumidos en el  mundo Por el gran beneficio del QUESO, al ser  muy rico en proteinas,vitaminas y sales minerales, PROPORCIONA las principales fuentes de calcio."
promociones = "Para llevarle una mejor alternativa ONLYONE COMPANY, brinda a sus clientes descuentos del 10% en compras superiores de 50000 COP (Pesos colombianos)"
alt = "Tarta dequeso"
/>
<Producto 

imagen = "palmeras"
nombre = "Palmeras de hojaldre u orejas"
precio = "Caja individual por 20 unidades 14.000 COP (Pesos Colombianos)"
descripcion = "Crocantes preparaciones culinarias de reposteria, galletas barnizadas con azucar y cubierta de chocolate "
promociones = "60 inicades (3 cajas) por 30000 COP (pesos colombianos)"
alt = "palmeras"
/>




<div id='conocenos'></div>
<Conocenos></Conocenos>

        <Footer></Footer>

<Movil></Movil>

















       
        </div>
        
    );
}

export default App;