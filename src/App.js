import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1,setLinea1] = useState('');
  const [linea2,setLinea2] = useState('');
  const [imagen, setImagen] = useState('');
  {/* linea1 es una variable y setLinea1 es una funcion que va a modificar a linia1 , el useState("") es donde ponemos que valor va a tener la variable linea1*/} 

  const onChangeLinea1 = function(evento){
    
    setLinea1(evento.target.value);

  }
  
  const onChangeLinea2 = function(evento){
    
    setLinea2(evento.target.value);

  }

  const onChangeImagen = function(evento){
    setImagen(evento.target.value);
  }

  const onClickExportar = function(evento){
    alert("exportar")
      html2canvas(document.querySelector("#meme")).then(canvas => {
        var img    = canvas.toDataURL("image/png");
       
       
        var link = document.createElement('a');
        link.download = 'meme.png';
        link.href = img;
        link.click();
    }); 
  }
  
  return (
    <div className="App">
     {/* select piker de memes */}

     <select onChange={onChangeImagen}>
       <option value="fire">Casa en Llamas</option>
       <option value="futurama">Futurama</option>
       <option value="history">History Channel</option>
       <option value="matrix">Matrix</option>
       <option value="philosoraptor">Philosoraptor</option>
       <option value="smart">Smart Guy</option>
     </select> <br/>

     {/* input text promera linea */}
     <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"/> <br/>
     {/* input text segunda linea*/}
     <input onChange={onChangeLinea2} type="text" placeholder="Linea 2"/><br/>
     {/*  boton de exportar*/ }
     <button onClick={onClickExportar}>Exportar</button>

     {/* EXTRUCTURA DEL MEME*/}

     <div className="meme" id="meme">
       <span>{linea1}</span> <br/>
       <span>{linea2}</span>
       <img src={"/img/"+ imagen +".jpg"} />
     </div>



    </div>
  );
}

export default App;
