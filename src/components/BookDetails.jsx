import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';


const BookDetails = () => {
    const [books, setBooks] = useState([]);
	const { id } = useParams()

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${id}&key=AIzaSyBzudRAHdI8ern7yVIp1qwrjpTBm0sQrSg`)
            .then((res) => {
            	return res.json();
            })
            .then((data) => {
                setBooks(data.items)
				console.log(data.items)
			})
    },[])
    return (
			<>
				<Navbar />
				<div className='bookdetail'>
					{books.map((book) => (
						<div key={book.id} className='bookdetail-container'>
							<div>
								<img
									src={book.volumeInfo.imageLinks.smallThumbnail}
									alt={book.volumeInfo.title}
									style={{ width: '250px', height: '350px', padding: '20px' }}
								/>
							</div>
							<div className='ml-8 leading-loose'>
								<h5 className='bookdetail-title'>
									Title: {book.volumeInfo.title}
								</h5>
								<p className='font-bold'>
									Subtitle: {book.volumeInfo.subtitle}
								</p>
								<p className='font-bold'>
									Written By: {book.volumeInfo.authors}
								</p>
								<p className='mb-3 font-bold'>
									Book published on:
									{book.volumeInfo.publishedDate}
								</p>
								
								<p className='pt-2 leading-relaxed'>
									<span>
										{book.volumeInfo.description}
									</span>
								</p>
								<a href={book.volumeInfo.infoLink} target='_blank'>
									<button className='btn-bookdetail'>
										Read More About The Book
									</button>
								</a>
							</div>
						</div>
					))}
				</div>
			</>
		);
}

export default BookDetails
