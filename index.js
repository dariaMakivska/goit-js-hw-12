import{a as w,S as b,i}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const q="49643756-826760c59f13ca953f19ee970",v="https://pixabay.com/api/";let c=1;async function d(o){try{return(await w.get(v,{params:{key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:c,per_page:15}})).data.hits}catch(t){return console.log(t),[]}}function S(){c=1}function P(){c+=1}const u=document.querySelector(".gallery"),g=document.querySelector("#loader");let x=new b(".gallery a",{captionsData:"alt",captionDelay:250});function f(o){u.innerHTML="";const t=o.map(({webformatURL:a,largeImageURL:n,tags:e,likes:r,views:s,comments:h,downloads:L})=>`
<li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${e}"
          />
        </a>
        <div class="image-info">
          <p class="image-info-text">
            <span class="image-info-tag">Likes</span> ${r}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Views</span> ${s}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Comments</span> ${h}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Downloads</span> ${L}
          </p>
      </div>
</li>
  `).join("");u.insertAdjacentHTML("beforeend",t),x.refresh()}function E(){const o=document.querySelector(".gallery");o.innerHTML=""}function m(){g.classList.remove("hidden")}function p(){g.classList.add("hidden")}const M=document.querySelector(".form"),y=document.querySelector(".search-input"),l=document.querySelector(".load-more");document.querySelector("#loader");function $(){l.classList.remove("load-more-hidden")}function O(){l.classList.add("load-more-hidden")}function k(){i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",theme:"dark"})}getBoundingClientRect();M.addEventListener("submit",async function(o){o.preventDefault();const t=y.value.trim();if(t!==""){S(),E(),m();try{const a=await d(t);if(a.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",theme:"dark"});return}f(a),a.length+(page-1)*15<100?$():k()}catch(a){console.error("Pixabay API error:",a),i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{p()}}});l.addEventListener("click",C);async function C(){P(),m();const o=y.value.trim();try{const t=await d(o);if(t.length===0){O();return}f(t)}catch(t){console.log(t)}finally{p()}}
//# sourceMappingURL=index.js.map
