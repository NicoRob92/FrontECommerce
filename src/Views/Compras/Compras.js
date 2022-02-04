import style from "./_Compras.module.scss";
import {Link} from "react-router-dom"

const Compras = () => {
  return (
    <>
      <div className={`container-fluid p-4 ${style.containerTitle}`}>
        <h1>Mis Compras</h1>
      </div>
      
      <div className={`container col ${style.containerBought}`}>
        <div className="row">
          <h5 className={`col-12 col-sm-1 ${style.camp}`}><span className="badge bg-secondary">id:</span>1</h5>
          <h5 className={`col-12 col-sm-2 ${style.camp}`}><span className="badge bg-secondary">Producto:</span> Teclado</h5>
          <h5 className={`col-12 col-sm-2 ${style.camp}`}><span className="badge bg-secondary">Cantidad:</span> 6</h5>
          <h5 className={`col-12 col-sm-2 ${style.camp}`}><span className="badge bg-secondary">Costo/U:</span> $400/U</h5>
          <h5 className={`col-12 col-sm-2 ${style.camp}`}><span className="badge bg-secondary">Total:</span> $1200</h5>
          <h5 className={`col-12 col-sm-2 ${style.camp}`}><span className="badge bg-secondary">Status:</span> Pending</h5>
          <Link className={`col-12 col-sm-1 ${style.camp}`} to="#">ver orden </Link>
        </div>
      </div>
    </>
  );
};

export default Compras;
