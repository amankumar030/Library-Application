package com.demo.Library.Controller;

import com.demo.Library.Entity.Book;
import com.demo.Library.Entity.FavBook;
import com.demo.Library.Service.BookServiceImp;
import com.demo.Library.Service.FavService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin
public class BookController {
    @Autowired
    BookServiceImp bookService;

    @Autowired
    FavService favService;

    @GetMapping("/books")
    public List<Book> getBooks()
    {
        return this.bookService.getAllBooks();
    }

    @GetMapping("/fav")
    public List<FavBook> getFav(){ return this.favService.getFavBook();}

    @PostMapping("/fav")
    public void addFav(@RequestBody FavBook favBook )
    {
         this.favService.addFavBook(favBook);
    }

    @DeleteMapping("/fav/{id}")
    public void deleteFav(@PathVariable int id)
    {
        this.favService.deleteFavBook(id);
    }


    @GetMapping("/books/{id}")
    public Book getBook(@PathVariable String id)
    {
        return this.bookService.getBook(Integer.parseInt(id));
    }

    @PostMapping("/books")
    public Book addBook(@RequestBody Book book)
    {
        return this.bookService.addBook(book);
    }

    @PutMapping("/books")
    public Book updateBook(@RequestBody Book book)
    {
        return this.bookService.updateBook(book);
    }
    @DeleteMapping("/books/{id}")
    public Book deleteBook(@PathVariable String id)
    {
        return this.bookService.deleteBook(Integer.parseInt(id));
    }




}
