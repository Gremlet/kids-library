import '../scss/bookcover.scss'

function BookCover({ book, update }) {
    let divStyle = {
        background: `linear-gradient(208.29deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 92.13%), ${book.color}`,
    }

    function showBook(show) {
        update(show)
    }
    return (
        <div className="cover" style={divStyle} onClick={() => showBook(book)}>
            <div className="line"></div>
            <h4 className="title">{book.title}</h4>
            <p className="author">{book.author}</p>
        </div>
    )
}

export default BookCover
