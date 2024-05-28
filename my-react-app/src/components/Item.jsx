import './Item.css'

function Item(props) {
    const item = props.name;

    return(
       <>
           <p> {item} </p>
           {props.children}
       </>
    );
}

export default Item;