package com.demo.Library.Service;

import com.demo.Library.Entity.FavBook;
import com.demo.Library.Repository.FavBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavService {
    @Autowired
    FavBookRepository favBookRepository;

    public List<FavBook> getFavBook()
    {
        return this.favBookRepository.findAll();
    }
    public void addFavBook(FavBook book)
    {
        this.favBookRepository.save(book);
    }
    public void deleteFavBook(int id)
    {
       this.favBookRepository.delete(this.favBookRepository.getById(id));
    }

}
