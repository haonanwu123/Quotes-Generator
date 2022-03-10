let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
    '"Spread love everywhere you go. Let no one ever come to you without leaving happier".<div class="author">-Mother Teresa</div>',
    '"When you reach the end of your rope, tie a knot in it and hang on." <div class="author">-Franklin D. Roosevelt</div>',
    '"Always remember that you are absolutely unique. Just like everyone else." <div class="author">-Margaret Mead</div>',
    '"Don❜t judge each day by the harvest you reap but by the seeds that you plant." <div class="author">-Robert Louis Stevenson</div>',
    '"The future belongs to those who believe in the beauty of their dreams." <div class="author">-Eleanor Roosevelt</div>',
    '"Tell me and I forget. Teach me and I remember. Involve me and I learn." <div class="author">-Benjamin Franklin</div>',
    '"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart." <div class="author">-Helen Keller</div>',
    '"It is during our darkest moments that we must focus to see the light." <div class="author">-Aristotle</div>',
    '"Whoever is happy will make others happy too." <div class="author">-Anne Frank</div>',
    '"Do not go where the path may lead, go instead where there is no path and leave a trail." <div class="author">-Ralph Waldo Emerson</div>',
];

btn.addEventListener("click", showQuotes);

function showQuotes() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
}