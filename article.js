// Функция для получения параметра URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  
  // Получение значения параметра "url" из URL
  const urlParam = getParameterByName('url');
  const decodedUrl = decodeURIComponent(urlParam);
  
  // Функция для загрузки содержимого статьи
  function loadArticle(url) {
    const articleContainer = document.getElementById('articleContainer');
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
       console.log(data.results[0])
       
      })
      .catch(error => {
        console.log('Ошибка загрузки статьи:', error);
      });
  }
  
// Вызов функции для загрузки статьи
loadArticle(decodedUrl);

const pages = [
    {
        image_pages: "./assets/5.png",
        image01_pages: "./assets/4.png",
        image02_pages: "./assets/Left.png",
        title_pages: "1 7 Practical CSS Tips",
        caption_pages: "How product designers can break from the status quo and help our planet",
        caption02_pages: "Subheader",
        date_pages: "7 july", 
        symbol_pages: " · ",
        author_pages: "Authors name",
        readingtime_pages: "12 min read",
        select_pages: "Selected for you",
        linkedin: "./assets/LinkedIn.png",
        facebook: "./assets/Facebook.png",
        twitter: "./assets/Twitter.png",
        description: "How long are you awake in the morning before you go online? Perhaps it’s while you’re still lying in bed, using a news feed or social media as the needed stimulant to push you out from under the covers. Or maybe you wait to open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might say you never signed off in the first place. And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where an internet connection now counts as an essential utility — one that’s as easy to take for granted as the natural gas heating your shower water or the electricity powering your coffee maker. But if you think we’re hyperconnected today, just wait. Globally, just over 55% of today’s households have an internet connection. This gap between the internet haves and have-nots is referred to as the digital divide, and access is skewed toward richer nations. The gap is projected to close in the next decade as billions of homes connect to the internet for the first time and by 2030 it’s estimated that the technology industry could account for 20% of the global electricity demand. This presents a troublesome dichotomy. On one hand, it supports livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our already-overloaded power grids.",
        symbol1: "./assets/Symbol1.png",
        symbol2: "./assets/Symbol2.png",
        symbol3: "./assets/Symbol3.png",
        likes: "180",
        comments: "12",
    },
]

const pagesDiv = document.getElementById("pages");

pages.map((item) => {
    pagesDiv.innerHTML = `<div class="pages">
    <div>
    <image src="${item.image01_pages}"/>
    </div>

    <div class="Block00">
    <p class="Block0">${item.author_pages}</p>
    <image src="${item.linkedin}"/>
    <image src="${item.facebook}"/>
    <image src="${item.twitter}"/>
    </div>

    <div class="Block1">
    <p>${item.date_pages} &nbsp</p>
    <p>${item.readingtime_pages} &nbsp</p>
    <p>${item.select_pages} &nbsp</p>
    </div>

    <div class="Block2">
    <h3>${item.title_pages}</h3>
    </div>

    <div class="Block3">
    <p>${item.caption_pages}</p>
    </div>

    <div >
    <image src="${item.image_pages}"/>
    </div>

    <div class="Block4">
    <h4>${item.caption02_pages}</h4>
    </div>

    <div class="Block5">
    <p>${item.description}</p>
    </div>

    <div class="Block6">
    <div class="Block7">
    <image width="24" height="24" src="${item.symbol1}"/>
    <p>${item.likes}</p>
    <image width="24" height="24" src="${item.symbol2}"/>
    <p>${item.comments}</p>
    </div>

    <div>
    <image width="24" height="24" src="${item.symbol3}"/>
    </div>
    </div>
    
    </div> `
})

