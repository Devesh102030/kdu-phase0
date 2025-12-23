package service;

import com.myproject.bookinventoryapp.exception.BookNotFoundException;
import com.myproject.bookinventoryapp.model.Book;
import com.myproject.bookinventoryapp.repository.BookRepository;
import com.myproject.bookinventoryapp.service.BookService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
public class BookServiceTest {
    @Mock
    private BookRepository bookRepository;

    @InjectMocks
    private BookService bookService;

    @Test
    void addBook_shouldSaveAndReturnBook() {
        Book book = new Book(null, "Intro to Java", "Mr. X", BigDecimal.valueOf(1000));

        when(bookRepository.save(book)).thenReturn(book);

        Book addedBook = bookService.addBook(book);

        assertNotNull(addedBook);
        assertEquals("Intro to Java", addedBook.getTitle());
        assertEquals("Mr. X", addedBook.getAuthor());

        verify(bookRepository, times(1)).save(book);
    }

    @Test
    void getBookByTitle_whenBookExists_shouldReturnBook() {
        String title = "Intro to Java";

        Book book = new Book(
                1L,
                title,
                "Mr X",
                BigDecimal.valueOf(1000)
        );

        when(bookRepository.findByTitleIgnoreCase(title))
                .thenReturn(Optional.of(book));

        Book found = bookService.getBookByTitle(title);

        assertNotNull(found);
        assertEquals(title, found.getTitle());

        verify(bookRepository, times(1))
                .findByTitleIgnoreCase(title);
    }

    @Test
    void getBookByTitle_whenBookNotFound_shouldThrowException() {
        String title = "Unknown Book";

        when(bookRepository.findByTitleIgnoreCase(title))
                .thenReturn(Optional.empty());

        BookNotFoundException exception =
                assertThrows(BookNotFoundException.class, () ->
                        bookService.getBookByTitle(title)
                );

        assertEquals(
                "Book Not Found",
                exception.getMessage()
        );

        verify(bookRepository, times(1))
                .findByTitleIgnoreCase(title);
    }

    @Test
    void getBookByTitle_whenTitleIsBlank_shouldThrowExceptionAndNotCallRepository(){
        String invaildTitle = " ";

        assertThrows(IllegalArgumentException.class, () -> bookService.getBookByTitle(invaildTitle));

        verify(bookRepository, never()).findByTitleIgnoreCase(anyString()
        );
    }

    @Test
    void deleteBookById_whenBookExists_shouldDeleteBook() {
        Long id = 1L;

        when(bookRepository.existsById(id)).thenReturn(true);

        bookService.deleteBookById(id);

        verify(bookRepository, times(1)).existsById(id);
        verify(bookRepository, times(1)).deleteById(id);
    }

    @Test
    void deleteBookById_whenBookDoesNotExist_shouldThrowException() {
        Long id = 99L;

        when(bookRepository.existsById(id)).thenReturn(false);

        BookNotFoundException exception =
                assertThrows(BookNotFoundException.class, () ->
                        bookService.deleteBookById(id)
                );

        assertEquals("Book not found with id: " + id, exception.getMessage());

        verify(bookRepository, times(1)).existsById(id);
        verify(bookRepository, never()).deleteById(anyLong());
    }

    @Test
    void deleteBookById_whenIdIsNull_shouldThrowIllegalArgumentException() {

        assertThrows(IllegalArgumentException.class, () ->
                bookService.deleteBookById(null)
        );

        verify(bookRepository, never()).existsById(anyLong());
        verify(bookRepository, never()).deleteById(anyLong());
    }

}
