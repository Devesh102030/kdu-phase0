package com.myproject.bookinventoryapp.service;

import com.myproject.bookinventoryapp.exception.BookNotFoundException;
import com.myproject.bookinventoryapp.model.Book;
import org.springframework.stereotype.Service;
import com.myproject.bookinventoryapp.repository.BookRepository;

@Service
public class BookService {
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public Book getBookByTitle(String  title) {
        if(title == null || title.isBlank()){
            throw new IllegalArgumentException("Title must not be blank");
        }
        return bookRepository.findByTitleIgnoreCase(title)
                .orElseThrow(()->new BookNotFoundException("Book Not Found"));
    }
}
