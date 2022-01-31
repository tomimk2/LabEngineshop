function ItemDetail ({product})
{
return ( <div>
       <p>{product.name}</p>
       <p>{product.category}</p>
       <p>{product.descriptionLong}</p>
       <p>{product.price}</p>
       <p>{product.img}</p>
</div>
);
}

export default ItemDetail;