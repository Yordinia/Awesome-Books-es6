const books = JSON.parse(localStorage.getItem('books-list')) || [{
    title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'
  },{
    title: 'Jane Eyre', author: 'Charlotte Bronte'
  }];


export {books}