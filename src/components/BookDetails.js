import '../scss/bookdetails.scss'
import { IoArrowBackCircle } from 'react-icons/io5'

function BookDetails({ currentBook, close }) {
    let coverStyle = {
        background: `linear-gradient(208.29deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 92.13%), ${currentBook.color}`,
    }

    return (
        <div className="detail">
            <div className="cover-art" style={coverStyle}>
                <div className="back" onClick={close}>
                    <IoArrowBackCircle />
                </div>
                <div className="line-details"></div>
                <h1 className="big-title">{currentBook.title}</h1>
                <p className="big-author">{currentBook.author}</p>
            </div>
            <div className="blurb">
                <h1 className="blurb-title">{currentBook.title}</h1>
                <p className="blurb-author">{currentBook.author}</p>
                <p className="blurb-para">{currentBook.plot}</p>
                <div className="info">
                    <p className="audience">
                        <strong>Audience: </strong>
                        {currentBook.audience}
                    </p>
                    <p className="published">
                        <strong>First published: </strong> {currentBook.year}
                    </p>
                    <p className="pages">
                        <strong>Pages: </strong> {currentBook.pages}
                    </p>
                    <p className="publisher">
                        <strong>Publisher: </strong>
                        {currentBook.publisher}
                    </p>
                </div>
                <button className="read-it">Oh! I want to read it!</button>
            </div>
        </div>
    )
}

export default BookDetails
