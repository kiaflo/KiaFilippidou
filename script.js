const quotes=[
'Οι ιστορίες γεννιούνται εκεί όπου οι λέξεις συναντούν τη μνήμη.',
'Γράφω για ό,τι δεν λέγεται δυνατά, για ό,τι μένει στην καρδιά.',
'Κάθε βιβλίο είναι ένα ταξίδι που αρχίζει με μία λέξη.'
];
document.addEventListener('DOMContentLoaded',()=>{const q=document.querySelector('[data-quote]'); if(q) q.textContent=quotes[Math.floor(Math.random()*quotes.length)];});
