const results = document.querySelector('.results');
const general = document.querySelector(".general");
const business = document.querySelector(".business");
const science = document.querySelector(".science");
const sports = document.querySelector(".sports");
const technology = document.querySelector(".technology");
const entertainment = document.querySelector(".entertainment");
const header = document.querySelector(".header");
const cat = document.querySelector(".categories");

function click(button) {
    // console.log(button.textContent);
    fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${button.textContent}/in.json`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            // results.innerHTML = '';
            for (let i = 0; i < data.totalResults; i++) {
                // console.log(data.totalResults);
                let div = document.createElement("div");
                div.classList.add("news");
                let img = document.createElement("img");
                img.classList.add("img");
                img.src = data.articles[i].urlToImage;
                img.alt = data.articles[i].content;
                div.appendChild(img);
                let details = document.createElement("div");
                details.classList.add("details");
                div.appendChild(details);
                let h = document.createElement("h4");
                h.textContent = data.articles[i].title;
                h.classList.add("title");
                let p = document.createElement("p");
                p.textContent = data.articles[i].description;
                p.classList.add("desc");
                let read = document.createElement("button");
                read.classList.add("read");
                let readLink = document.createElement("a");
                readLink.textContent = "Read more";
                readLink.href = data.articles[0].url;
                readLink.target = "_blank";
                read.appendChild(readLink);
                details.appendChild(h);
                details.appendChild(p);
                details.appendChild(read);
                results.appendChild(div);
            }
        })
}
click(general);
business.addEventListener("click", () => {
    results.innerHTML = '';
    click(business);
    business.classList.add("now");
    general.classList.remove("now");
    science.classList.remove("now");
    sports.classList.remove("now");
    technology.classList.remove("now");
    entertainment.classList.remove("now");
})
general.addEventListener("click", () => {
    results.innerHTML = '';
    click(general);
    general.classList.add("now");
    business.classList.remove("now");
    science.classList.remove("now");
    sports.classList.remove("now");
    technology.classList.remove("now");
    entertainment.classList.remove("now");
})
science.addEventListener("click", () => {
    results.innerHTML = '';
    click(science);
    science.classList.add("now");
    general.classList.remove("now");
    business.classList.remove("now");
    sports.classList.remove("now");
    technology.classList.remove("now");
    entertainment.classList.remove("now");
    // cat.classList.add("hidden");
})
sports.addEventListener("click", () => {
    results.innerHTML = '';
    click(sports);
    sports.classList.add("now");
    general.classList.remove("now");
    science.classList.remove("now");
    business.classList.remove("now");
    technology.classList.remove("now");
    entertainment.classList.remove("now");
})
technology.addEventListener("click", () => {
    results.innerHTML = '';
    click(technology);
    technology.classList.add("now");
    general.classList.remove("now");
    science.classList.remove("now");
    sports.classList.remove("now");
    business.classList.remove("now");
    entertainment.classList.remove("now");
})
entertainment.addEventListener("click", () => {
    results.innerHTML = '';
    click(entertainment);
    entertainment.classList.add("now");
    general.classList.remove("now");
    science.classList.remove("now");
    sports.classList.remove("now");
    technology.classList.remove("now");
    business.classList.remove("now");
})

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 0) {
//         $('.header').addClass('hidden');
//     } else {
//         $('.header').removeClass('hidden');
//     }
// });

