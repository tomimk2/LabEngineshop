import "./styles.css";

function UserCard ({product})
{
return ( <div className="card">
       <p>{product.name}</p>
       <p>{product.category}</p>
       <p>{product.description}</p>
</div>
);
}

export default UserCard;