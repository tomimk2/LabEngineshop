import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const FinalizarPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});

  const navigate = useNavigate();

  const GoToHome = () => {
    navigate("/")
  }

  useEffect(() => {
    const db = getFirestore();
    db.collection("orders")
      .doc(orderId)
      .get()
      .then((res) => setOrder({ id: res.id, ...res.data() }));
  }, [orderId]);

  if (!order.id) {
    return (
        <div>
          <h2>Cargando...</h2>
        </div>
    );
  }
  return (
    <div >
      <div >
        <h1 >Gracias por su compra, sr/sra. {order.buyer.name}</h1>
        <h2>Detalle de su compra:</h2>
      </div>
      <div className="col-12">
        <div className="row">
          {order.items.map((product) => {
            return (
              <div className="col-4 my-3">
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    width: "550px",
                    border: "2px solid green",
                  }}>
                  <img src={product.item.img} style={{ maxHeight: '100px', width: '100px' }} alt={product.item.name} />
                    <h4 className="card-title">{product.item.name}</h4>
                    <p className="card-text">Precio: ${product.item.price}</p>
                    <p className="card-text">Cantidad: {product.quantity} Unidades</p>
                    <p className="card-text">Total Producto: {product.item.price * product.quantity}</p>

                </div>
              </div>
            )
          })}
          <p className="card-text">Total: ${order.total}</p>
          <button onClick={GoToHome}>Aceptar</button>
        </div>
      </div>
    </div>
  );
}

  export default FinalizarPage;


  