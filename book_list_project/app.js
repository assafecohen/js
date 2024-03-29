//Book contructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI contructor
function UI(){
  // add book to list
 UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    //Create  tr element
    const row = document.createElement('tr');
    // insert cols 
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
 }
//show alert
UI.prototype.showAlert =function(message, className){
  //create div
  const div = document.createElement('div');
  // add classes
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector('.container');
  // get form
  const form = document.querySelector('#book-form');
  //insert alert
  container.insertBefore(div, form)

  //timeout after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000);
}
//delete book
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentNode.parentNode.remove();
  }
}
 UI.prototype.clearFields = function(){
   document.getElementById('title').value = '';
   document.getElementById('author').value = '';
   document.getElementById('isbn').value = '';
 }
}


//Event Listeners
document.getElementById('book-form').addEventListener('submit',
  function(e){
    // get form values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    // Instantiate book
   
    const book = new Book (title,author, isbn);
    // Instantiate UI
    const ui = new UI();
    // Validate
    if(title === '' || author === '' || isbn === ''){
      //error alert
      ui.showAlert('Please fill in all fields','error');
    }else{      
      //add book to list
      ui.addBookToList(book);
      // show success
      ui.showAlert('Book Added!',"success");
      //Clear Fields
      ui.clearFields();
    }


    e.preventDefault();
});
//eventlisteners for delete
document.getElementById('book-list').addEventListener('click',
function(e){
  // Instantiate UI
  const ui = new UI();
  //delete book
  ui.deleteBook(e.target);
  //show alert
  ui.showAlert('Book Removed!','success')
e.preventDefault();

});