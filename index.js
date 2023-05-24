const articles = [
    {
    title: "1 7 Practical CSS Tips",
    caption: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    topic: "Java Script",
    date: "7 july", 
    symbol: " · ",
    author: "Authors name",
    topicname: "Topics Name",
    readingtime: "12 min read",
    select: "Selected for you",
    image: "./assets/0.png",
    image01: "./assets/4.png",
    },
    {
    title: "2 7 Practical CSS Tips",
    caption: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    topic: "Java Script",
    date: "7 july", 
    symbol: " · ",
    author: "Authors name",
    topicname: "Topics Name",
    readingtime: "12 min read",
    select: "Selected for you",
    image: "./assets/1.png",
    image01: "./assets/4.png",
    },
    {
    title: "3 7 Practical CSS Tips",
    caption: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    topic: "Java Script",
    date: "7 july", 
    symbol: " · ",
    author: "Authors name",
    topicname: "Topics Name",
    readingtime: "12 min read",
    select: "Selected for you",
    image: "./assets/2.png",
    image01: "./assets/4.png",
    },
    {
    title: "3 7 Practical CSS Tips",
    caption: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    topic: "Java Script",
    date: "7 july", 
    symbol: " · ",
    author: "Authors name",
    topicname: "Topics Name",
    readingtime: "12 min read",
    select: "Selected for you",
    image: "./assets/2.png",
    image01: "./assets/4.png",
    },
];
const articleDiv = document.getElementById("articles");

// articles.map((item) => {
//     const html = '';
//     articleDiv.innerHTML += html;
// })

function getMostPopularArticles(){
    const url = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=FBbtRYLT0ucwteIGFF1f6FaMiHAWy0TX'
    fetch(url).then(function(promise) {
        return promise.json()
    }).then(function(results) {
        console.log(results.results)
        results.results.forEach(item => {
            articleDiv.innerHTML += `<div class="article">
            <div> 
            <div class="Title01">
            <image class="smallImg" src='${item.multimedia[2].url}'/> 
            <p>&nbsp ${item.byline} &nbsp &nbsp</p>
            <p class="prefixes">in &nbsp</p>
            <p>&nbsp ${item.section} &nbsp</p>
            <p>·&nbsp&nbsp</p>
            <p>${new Date(item.created_date).toLocaleString().split(',')[0]} &nbsp</p>
            </div>
        
            <div class="Title02">
            <a href="${item.url}">
             <h4>${item.title}</h4>
            </a> 
            </div>
        
            <div class="Title03">
            <p>${item.abstract}</p>
            </div>
        
            <div class="Title04">
            <p class="Button">${item.org_facet[0] || "cat"}</p>
            <p class="time">${item.org_facet[1] || ""}</p>
            </div>
            </div>
            <div>
            <image class="img" src='${item.multimedia[2].url}' width='265' height='265'/> 
            </div>
            <div class="line">
            </div>
            </div> `
        })
    })

}

getMostPopularArticles()

//https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=yourkey

//







