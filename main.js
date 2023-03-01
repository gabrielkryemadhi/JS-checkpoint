let arr = [];

let save = document.getElementById('save-book')
let input = document.getElementById('book-input')
let title = document.getElementById('book-title')

save.addEventListener('click', () => {
    let newBook = input.value;
    arr.push(newBook);
    let json = JSON.stringify(arr);
    localStorage.setItem('books', json);
    title.innerText = newBook;
    input.value = '';
    let parse = localStorage.getItem('books');
    console.log(JSON.parse(parse));
})