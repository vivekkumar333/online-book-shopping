package in.vivek.bookstoreservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import in.vivek.bookstoreservice.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
