package com.demo.Library.Service;

import com.demo.Library.Entity.Book;
import org.springframework.stereotype.Service;

import java.util.List;

public interface BookService {

    public List<Book> getAllBooks();

    public Book getBook(int id);

    public Book addBook(Book book);

    public Book updateBook(Book book);

    public Book deleteBook(int id);
}
