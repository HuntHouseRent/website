let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
    menu.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('active');
}

document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images =>{
    images.onclick = () =>{
        src = images.getAttribute('src');
        document.querySelector('.view-property .details .thumb .big-image img').src = src;
    }
});

document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{
    headings.onclick = () =>{
        headings.parentElement.classList.toggle('active');
    }   
});

        const API_KEY = "38d68e10cd41433e818c483d7513a419";
        const url = "https://newsapi.org/v2/everything?q=";

        window.addEventListener("load", () => fetchNews("India"));

        async function fetchNews(query) {
            const res = await fetch('${url}${query}&apiKey=${API_KEY}');
            const data = await res.json();
            bindData(data.articles);
        }

        function bindData(articles) {
            const cardsContainer = document.getElementById("cards-container");
            const newsCardTemplate = document.getElementById("template-news-card");

            cardsContainer.innerHTML = "";

            articles.forEach((article) => {
                if (!article.urlToImage) return;
                const cardClone = newsCardTemplate.content.cloneNode(true);
                cardsContainer.appendChild(cardClone);
            });


        }
    