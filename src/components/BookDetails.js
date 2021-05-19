import '../scss/bookdetails.scss'
import { IoArrowBackCircle } from 'react-icons/io5'

function BookDetails(props) {
    let coverStyle = {
        background: `linear-gradient(208.29deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 92.13%), ${props.color}`,
    }

    function goBack() {
        props.update()
    }
    return (
        <div className="detail">
            <div className="back" onClick={props.update}>
                <IoArrowBackCircle />
            </div>

            <div className="cover-art" style={coverStyle}>
                <div className="line-details"></div>
                <h1 className="big-title">{props.title}</h1>
                <p className="big-author">{props.author}</p>
            </div>
            <div className="blurb">
                <h1 className="blurb-title">{props.title}</h1>
                <p className="blurb-author">{props.author}</p>
                <p className="blurb-para">{props.plot}</p>
                <div className="info">
                    <p className="audience">
                        <strong>Audience: </strong>
                        {props.audience}
                    </p>
                    <p className="published">
                        <strong>First published: </strong> {props.year}
                    </p>
                    <p className="pages">
                        <strong>Pages: </strong> {props.pages}
                    </p>
                    <p className="publisher">
                        <strong>Publisher: </strong>
                        {props.publisher}
                    </p>
                </div>
                <button className="read-it" onclick={() => goBack}>
                    Oh! I want to read it!
                </button>
            </div>
        </div>
    )
}

export default BookDetails
