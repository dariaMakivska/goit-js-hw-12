import{a as q,S as v,i as d}from"./assets/vendor-Db2TdIkw.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const M="49643756-826760c59f13ca953f19ee970",P="https://pixabay.com/api/";let f=1,i=0;async function g(r){try{const e=await q.get(P,{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:f,per_page:15}});return i=e.data.totalHits,e.data.hits}catch(e){return console.log(e),i=0,[]}}function x(){f=1}function E(){f+=1}const c=document.querySelector(".gallery"),m=document.querySelector("#loader");let p=new v(".gallery a",{captionsData:"alt",captionDelay:250});function k(r){c.innerHTML="";const e=h(r);c.insertAdjacentHTML("beforeend",e),p.refresh()}function H(r){const e=h(r);c.insertAdjacentHTML("beforeend",e),p.refresh()}function h(r){return r.map(({webformatURL:e,largeImageURL:n,tags:s,likes:t,views:o,comments:a,downloads:S})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img
      class="gallery-image"
      src="${e}"
      alt="${s}"
    />
  </a>
  <div class="image-info">
    <p class="image-info-text">
      <span class="image-info-tag">Likes</span> ${t}
    </p>
    <p class="image-info-text">
      <span class="image-info-tag">Views</span> ${o}
    </p>
    <p class="image-info-text">
      <span class="image-info-tag">Comments</span> ${a}
    </p>
    <p class="image-info-text">
      <span class="image-info-tag">Downloads</span> ${S}
    </p>
  </div>
</li>
`).join("")}function $(){c.innerHTML=""}function y(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}const O=document.querySelector(".form"),w=document.querySelector(".search-input"),b=document.querySelector(".load-more-wrapper"),A=document.querySelector(".load-more");document.querySelector("#loader");function B(){b.classList.remove("load-more-hidden")}function l(){b.classList.add("load-more-hidden")}function u(){d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",theme:"dark"})}function C(){const r=document.querySelector(".gallery-item");if(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}l();O.addEventListener("submit",async function(r){r.preventDefault();const e=w.value.trim();if(e!==""){x(),$(),l(),y();try{const n=await g(e);if(n.length===0){d.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",theme:"dark"});return}k(n),n.length<15||n.length>=i?u():B()}catch(n){console.error("Pixabay API error:",n),d.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{L()}}});A.addEventListener("click",T);async function T(){E(),y();const r=w.value.trim();try{const e=await g(r);if(e.length===0){l(),u();return}H(e),C(),(e.length<15||e.length>=i)&&(l(),u())}catch(e){console.log(e)}finally{L()}}
//# sourceMappingURL=index.js.map
