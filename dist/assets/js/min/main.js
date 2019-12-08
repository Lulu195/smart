"use strict";var gridContainers=document.querySelectorAll(".grid-container-home");gridContainers.forEach(function(e){var t=e.querySelectorAll(".card");e.classList.add("grid-container-home-".concat(t.length))});var mobileMenu=document.querySelector(".mobile-nav-menu"),mobileHamburger=document.querySelector(".navbar-mobile__hamburger-btn"),mobileMenuInner=document.querySelector(".mobile-nav-menu__inner");function closeMobileNavMenu(){mobileHamburger.classList.remove("is-active"),mobileMenu.classList.add("mobile-nav-menu--hidden"),mobileMenu.classList.remove("mobile-nav-menu--expanded"),mobileMenu.setAttribute("aria-expanded",!1),document.body.classList.remove("show-modal")}function closeByEsc(e,t){"Escape"===e.key&&(t(),document.body.removeEventListener("keydown",closeByEsc))}function openMobileNavMenu(){mobileHamburger.classList.add("is-active"),mobileMenu.classList.remove("mobile-nav-menu--hidden"),mobileMenu.classList.add("mobile-nav-menu--expanded"),mobileMenu.setAttribute("aria-expanded",!0),document.body.classList.add("show-modal"),document.body.addEventListener("keydown",function(e){return closeByEsc(e,closeMobileNavMenu)})}mobileHamburger.addEventListener("click",function(){mobileMenu.classList.contains("mobile-nav-menu--hidden")?openMobileNavMenu():closeMobileNavMenu()});var searchBtns=[document.getElementById("sm-search"),document.getElementById("lg-search")];function modalOpen(e){"sm"===e.id.substring(0,2)&&closeMobileNavMenu();var t=document.querySelector(".modal__search");t.style.transform="translate3d(0,0,0)",t.setAttribute("aria-expanded","true"),t.querySelector("input").focus(),document.body.classList.add("show-modal")}searchBtns.forEach(function(e){e.addEventListener("click",function(){modalOpen(e)})});var modalClose=document.querySelectorAll(".modal-close");modalClose.forEach(function(e){return e.addEventListener("click",function(e){e.currentTarget.parentElement.parentElement.setAttribute("aria-expanded","false"),e.currentTarget.parentElement.parentElement.style.transform="translate3d(100vw,0,0)",document.body.classList.remove("show-modal")})});var lastKnownScrollPos=0,ticking=!1,progressBar=document.querySelector(".post-reading-progress"),shareBar=document.querySelector(".post-share-bar"),footer=document.querySelector(".footer"),buffer=50,postImg=document.querySelector(".post-img"),postContentHeight=document.querySelector(".post-content");function readingBarProgress(e){var t=Math.ceil(e/postContentHeight.clientHeight*100);progressBar.style.width="".concat(t,"%")}function shareBarAnimation(){postImg.getBoundingClientRect().bottom+buffer<shareBar.getBoundingClientRect().top&&shareBar.getBoundingClientRect().bottom<footer.getBoundingClientRect().top-buffer?(1024<window.innerWidth?shareBar.style.marginLeft="0":shareBar.style.marginBottom="0",shareBar.style.opacity="1"):(1024<window.innerWidth?shareBar.style.marginLeft="-200px":shareBar.style.marginBottom="-100px",shareBar.style.opacity="0")}null!==shareBar&&window.addEventListener("scroll",function(){lastKnownScrollPos=window.scrollY,ticking||(window.requestAnimationFrame(function(){shareBarAnimation(),null!==progressBar&&readingBarProgress(lastKnownScrollPos),ticking=!1}),ticking=!0)});var copyButton=document.getElementById("copy-button");copyButton&&copyButton.addEventListener("click",function(){var e=window.location.href,t=document.createElement("input");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t)});var tables=document.querySelectorAll(".post-content > table");function tablePrepend(e){var t=document.createElement("div");t.setAttribute("style","width: 100%; overflow-x: auto; margin: 1em 0;"),e.parentNode.insertBefore(t,e),t.appendChild(e)}if(tables.forEach(function(e){return tablePrepend(e)}),"undefined"!=typeof SEARCH_API){var searchPosts=function(n){searchResult.innerHTML="",builtIdx.then(function(e){var t=e.idx.search(n);1<t.length?searchResultHeader.textContent="".concat(t.length," Results"):0!==t.length?searchResultHeader.textContent="".concat(t.length," Result"):searchResultHeader.textContent="No results",t.forEach(function(r){e.posts.filter(function(e){if(e.uuid===r.ref){var t=new Date(e.published_at),n="".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getDate(),", ").concat(t.getFullYear());searchResult.innerHTML+='<article class="search-result-item"><p class="search-result-date">'.concat(n,'</p>\n          <a class="search-result-link" href="').concat(e.url,'">').concat(e.title,"</a></article>")}})})})},api=new GhostContentAPI({url:"".concat(window.location.protocol,"//").concat(window.location.host),key:SEARCH_API,version:"v2"}),builtIdx={};builtIdx=localStorage.getItem("posts")?api.posts.browse({fields:"published_at",limit:1}).then(function(e){return new Date(e[0].published_at)}).then(function(e){var t=e.getTime(),n=localStorage.getItem("posts"),r=JSON.parse(n);if(!(new Date(r[0].published_at).getTime()<t)){var o=lunr(function(){var t=this;this.ref("uuid"),this.field("plaintext"),this.field("title"),r.forEach(function(e){t.add(e)},this)});return{posts:r,idx:o}}api.posts.browse({include:"tags,authors",formats:"plaintext",limit:"all"}).then(function(e){var t=lunr(function(){var t=this;this.ref("uuid"),this.field("plaintext"),this.field("title"),e.forEach(function(e){t.add(e)},this)});return localStorage.setItem("posts",JSON.stringify(e)),{posts:e,idx:t}}).catch(function(e){console.error(e)})}):api.posts.browse({include:"tags,authors",formats:"plaintext",limit:"all"}).then(function(e){var t=lunr(function(){var t=this;this.ref("uuid"),this.field("plaintext"),this.field("title"),e.forEach(function(e){t.add(e)},this)});return localStorage.setItem("posts",JSON.stringify(e)),{posts:e,idx:t}}).catch(function(e){console.error(e)});var searchInput=document.getElementById("search-input"),searchBtn=document.getElementById("search-btn"),searchResultHeader=document.querySelector(".search-result-header"),searchResult=document.getElementById("search-result");searchBtn.addEventListener("click",function(){""===searchInput.value?(searchResultHeader.textContent="Enter a search term",searchResult.innerHTML=""):searchPosts(searchInput.value)}),searchInput.addEventListener("keyup",function(e){""===searchInput.value?(searchResultHeader.textContent="Enter a search term",searchResult.innerHTML=""):13===e.keyCode&&searchPosts(searchInput.value)}),searchInput.addEventListener("focus",function(e){e.target.value=""})}else searchBtns.forEach(function(e){e.style.display="none"});