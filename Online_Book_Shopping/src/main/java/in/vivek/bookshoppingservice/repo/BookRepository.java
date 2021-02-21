package in.vivek.bookshoppingservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import in.vivek.bookshoppingservice.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
