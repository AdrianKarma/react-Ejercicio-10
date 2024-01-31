import { Card, Button,Form } from "react-bootstrap";

const CardPelicula = ({pelicula, borrarPelicula}) => {
    return (
      
        <div className="mt-2 d-flex">
          <Card className="CardCita">
          <Card.Header></Card.Header>
      <Card.Body> 
      <Form.Group className="m-3 d-flex FormCuadro" controlId="Nombre">
        <Form.Label>Nombre </Form.Label>
        <Form.Control className="mx-4" type="text"placeholder={pelicula.nombrePelicula} />         
      </Form.Group>
      <Form.Group className="m-3 d-flex FormCuadro" controlId="Genero">
        <Form.Label>Genero</Form.Label>
        <Form.Control className="mx-4" type="text" placeholder={pelicula.generoPelicula} />         
      </Form.Group>
      <Form.Group className="m-3  FormCuadro2 " controlId="Descripcion">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control className="" as="textarea" rows={3} resize="none" placeholder={pelicula.descripcionPelicula} />         
      </Form.Group>
       
      </Card.Body>
      <Button variant="danger" onClick={()=>borrarPelicula(pelicula)} >Borrar Cita</Button>
      <Card.Footer></Card.Footer>
    </Card>
    
    
        </div>
    );
};

export default CardPelicula;