import React from 'react';

const Image = props => <img src={props.image} width={300} height={"auto"} alt={""}/>;
const Title = props => <h1>{props.title}</h1>
const Author = props => <h4 style={{}}>{props.author.toUpperCase()}</h4>

function Book(props) {
    const {image, title, author, children} = props;

    const handleDetails = (title, author) => {
        alert(`${title} - written by ${author}`);
    }
    return (
        <article className="book" onMouseOver={() => console.log(title)}>
            <Image image={image}/>
            <Title title={title}/>
            <Author author={author}/>
            {children}
            <button type={"button"} onClick={() => {
                alert('Added to Cart!');
            }}>Add to Cart</button>
            <button type={"button"} onClick={() => handleDetails(title, author)}>Details</button>
        </article>
    )
}

export default Book;
