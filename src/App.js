import './scss/app.scss'
import books from './assets/childrensbooks.json'
import BookCover from './components/BookCover'
import BookDetails from './components/BookDetails'
import { useEffect, useState } from 'react'

function App() {
    const [showDetails, setShowDetails] = useState(false)
    const [currentBook, setCurrentBook] = useState(() => '')

    function showAllDetails(clicked) {
        setShowDetails(!showDetails)
        setCurrentBook(clicked)
    }

    function showList() {
        setShowDetails(!showDetails)
    }

    useEffect(() => {
        console.log('current book: ', currentBook)
    }, [currentBook])

    let bookList = books.map((book) => {
        return (
            <BookCover
                id={book.id}
                title={book.title}
                author={book.author}
                color={book.color}
                publisher={book.publisher}
                year={book.year}
                pages={book.pages}
                plot={book.plot}
                audience={book.audience}
                update={showAllDetails}
                key={book.id}
            />
        )
    })

    let bookDesc = (
        <BookDetails
            title={currentBook.title}
            author={currentBook.author}
            publisher={currentBook.publisher}
            year={currentBook.year}
            pages={currentBook.pages}
            plot={currentBook.plot}
            audience={currentBook.audience}
            color={currentBook.color}
            update={showList}
        />
    )

    return (
        <div className="App">
            {showDetails ? (
                bookDesc
            ) : (
                <>
                    <h1 className="header">8 Classic Children's Books</h1>
                    <div className="book-list">{bookList}</div>
                </>
            )}
        </div>
    )
}

export default App
