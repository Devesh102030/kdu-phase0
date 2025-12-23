package com.myproject.bookinventoryapp.repository;

import com.myproject.bookinventoryapp.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book,Long> {
    Optional<Book> findByTitleIgnoreCase(String title);
}
