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

    function close() {
        setShowDetails(!showDetails)
    }

    // Not strictly necessary
    useEffect(() => {
        console.log('current book: ', currentBook.title)
    }, [currentBook])

    let bookList = books.map((book) => {
        return <BookCover book={book} update={showAllDetails} key={book.id} />
    })

    let bookDesc = <BookDetails currentBook={currentBook} close={close} />

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
