import { books } from "./modules";

const title = document.querySelector('.title');
const author = document.querySelector('.author');

class Books {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  
    static addBook(e) {
      e.preventDefault();
  
      const book = new Books(title.value, author.value);
  
      books.push(book);
      localStorage.setItem('books-list', JSON.stringify(books));
  
      Books.display();
      document.querySelector('form').reset();
      title.focus();
    }
  
    static display() {
      let i = 0;
      tbody.innerHTML = '';
      if (books.length !== 0) {
        books.forEach((book) => {
          tbody.innerHTML += `
        <tr class='book'>
          <td><strong>"${book.title}"</strong> by <em>${book.author}</em></td>
          <td><button onclick="Books.remove(${i})" class='btn btn-outline-primary'> Remove </button> </td> 
        </tr>
        `;
          i += 1;
        });
      }
      return 0;
    }
  
    static remove(i) {
      const x = document.querySelectorAll('.book')[i];
      tbody.removeChild(x);
      books.splice(i, 1);
      localStorage.setItem('books-list', JSON.stringify(books));
      Books.display();
    }
  }