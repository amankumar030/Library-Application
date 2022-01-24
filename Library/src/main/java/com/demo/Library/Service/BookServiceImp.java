package com.demo.Library.Service;

import com.demo.Library.Entity.Book;
import com.demo.Library.Entity.FavBook;
import com.demo.Library.Repository.BookRepository;
import com.demo.Library.Repository.FavBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;
@Service
public class BookServiceImp implements BookService{

    @Autowired
    public BookRepository bookRepository;

    @Autowired
    public FavBookRepository favBookRepository;
    @Override
    public List<Book> getAllBooks() {
        return this.bookRepository.findAll();
    }

    @Override
    public Book getBook(int id) {
        return this.bookRepository.findById(id).get();

    }

    @Override
    public Book addBook(Book book) {
        if(book.getImage()==null || book.getImage()=="")
        {
            book.setImage("https://jooinn.com/images/book-58.jpg");
        }
        this.bookRepository.save(book);
        return book;
    }

    @Override
    public Book updateBook(Book book) {
        if(book.getImage()==null || book.getImage()=="")
        {
            book.setImage("https://jooinn.com/images/book-58.jpg");
        }
        this.bookRepository.save(book);
        FavBook fav=new FavBook(book.getId(),book.getTitle(),book.getAuthor(),book.getImage(),book.getPrice());

        this.favBookRepository.save(fav);
        return book;
    }

    @Override
    public Book deleteBook(int id) {
        Book b=this.bookRepository.findById(id).get();
        this.bookRepository.delete(this.bookRepository.getById(id));
        this.favBookRepository.delete(this.favBookRepository.getById(b.getId()));

        return b;
    }
}
