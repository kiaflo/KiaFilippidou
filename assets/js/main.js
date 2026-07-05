
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if(menuButton){
  menuButton.addEventListener('click',()=> nav.classList.toggle('open'));
}
const quotes = [
  'Οι ιστορίες γεννιούνται εκεί όπου οι λέξεις συναντούν τη μνήμη.',
  'Γράφω για ό,τι δεν λέγεται δυνατά, για ό,τι μένει στην καρδιά.',
  'Κάθε ιστορία είναι ένα μικρό ταξίδι στο φως και στη σκιά.'
];
const quote = document.querySelector('[data-random-quote]');
if(quote){ quote.textContent = quotes[Math.floor(Math.random()*quotes.length)]; }
