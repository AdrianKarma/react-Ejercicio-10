
import { useState } from "react";
import { Card, Form, Container, Button } from "react-bootstrap";
import ListaPelicula from "./ListaPelicula";




const FormularioPelicula = () => {
const [nombrePelicula, setNombrePelicula] = useState ("");
const [descripcionPelicula, setDescripcionPelicula] = useState("");
const [generoPelicula, setGeneroPelicula] = useState ("");
const [peliculas, SetPeliculas] = useState ([]);

const handleSubmit = (e)=> {e.preventDefault();
  const pelicula = {nombrePelicula, generoPelicula, descripcionPelicula};
  SetPeliculas ([...peliculas, pelicula]);
  setDescripcionPelicula ("");
  setGeneroPelicula("");
  setNombrePelicula("");
  
}

    return (
        <> 
         <Container className="mt-5">
            <Card className="" border="dark" >
        <Card.Header > <h2 className="ms-5 p-3">Carga tu Pelicula 🎥</h2></Card.Header>

        <Form onSubmit={handleSubmit}>

      <Form.Group className="m-3 nombrePelicula" controlId="nombrePelicula">
        <Form.Label>Nombre de la Pelicula</Form.Label>
        <Form.Control type="text" placeholder="Duro de Matar" 
       onChange={(e)=> setNombrePelicula(e.target.value)} 
       value={nombrePelicula}/>
     
         
      </Form.Group>

     
      <Form.Group className="m-3 descripcionPelicula" controlId="descripcionPelicula">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} resize="none" placeholder="Escriba la descripcion de la pelicula"   
     onChange={(e)=> setDescripcionPelicula(e.target.value)} 
     value={descripcionPelicula}/>
      </Form.Group>
      <Form.Group className="m-3 generoPelicula" controlId="generoPelicula">
      <Form.Label>Genero</Form.Label>
      <Form.Select size="lg" onChange={(e)=> setGeneroPelicula(e.target.value)} 
     value={generoPelicula}>
      <option></option>
        <option>Comedia</option>
        <option>Drama</option>
        <option>Infantil</option>
      </Form.Select>
      </Form.Group>
      <Button className="m-3" type="submit">Crear cita Nueva</Button>
    </Form>
      </Card>
   <ListaPelicula peliculas={peliculas} ></ListaPelicula>
      </Container>
        </>
    );
};

export default FormularioPelicula;