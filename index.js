import{a as m,S as g,i}from"./assets/vendor-DVva8SYe.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="49643756-826760c59f13ca953f19ee970",p="https://pixabay.com/api/";function y(a){return m.get(p,{params:{key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>(console.log(r),[]))}const c=document.querySelector(".gallery"),l=document.querySelector("#loader");let h=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(a){c.innerHTML="";const r=a.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:u,downloads:f})=>`
<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}"
          />
        </a>
        <div class="image-info">
          <p class="image-info-text">
            <span class="image-info-tag">Likes</span> ${t}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Views</span> ${n}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Comments</span> ${u}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Downloads</span> ${f}
          </p>
      </div>
</li>
  `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){const a=document.querySelector(".gallery");a.innerHTML=""}function S(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const x=document.querySelector(".form"),P=document.querySelector(".search-input");x.addEventListener("submit",function(a){a.preventDefault();const r=P.value.trim();r!==""&&(b(),S(),y(r).then(o=>{if(o.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",theme:"dark"});return}L(o)}).catch(o=>{console.error("Pixabay API error:",o),i.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{q()}))});
//# sourceMappingURL=index.js.map
