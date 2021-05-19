import '../scss/bookcover.scss'

function BookCover(props) {
    let divStyle = {
        background: `linear-gradient(208.29deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 92.13%), ${props.color}`,
    }

    function showBook(book) {
        props.update(book)
    }
    return (
        <div className="cover" style={divStyle} onClick={() => showBook(props)}>
            <div className="line"></div>
            <h4 className="title">{props.title}</h4>
            <p className="author">{props.author}</p>
        </div>
    )
}

export default BookCover
