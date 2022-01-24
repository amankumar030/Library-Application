package com.demo.Library.Repository;

import com.demo.Library.Entity.FavBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavBookRepository extends JpaRepository<FavBook,Integer> {
}
