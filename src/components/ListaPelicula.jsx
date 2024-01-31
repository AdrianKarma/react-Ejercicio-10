import CardPelicula from "./CardPelicula";


const ListaPelicula = (props) => {
    return (
        <section className="Master">
           {
            props.peliculas.map((item, posicion)=> <CardPelicula key={posicion} pelicula={item} borrarPelicula={props.borrarPelicula}></CardPelicula>)
           } 
        </section>
    );
};

export default ListaPelicula;