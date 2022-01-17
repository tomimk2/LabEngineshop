import "./styles.css";

function UserCard ({
name,
category,
description,
})
{
return ( <div className="card">
       <p>{name}</p>
       <p>{category}</p>
       <p>{description}</p>
</div>
);
}

export default UserCard;