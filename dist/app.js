document.documentElement.classList.add('js');
const instagram='https://instagram.com/thatgirlcovey_';
const stories=[
  {
    "category": "food",
    "image": "tk-rice.avif",
    "title": "The jollof ritual",
    "description": "From the pot to the table. Cook along with Covey.",
    "url": "https://www.tiktok.com/@thatgirlcovey/video/7583762618184256799",
    "platform": "TikTok"
  },
  {
    "category": "motherhood",
    "image": "ig-life.jpg",
    "title": "The little details",
    "description": "A little glimpse of life with her baby.",
    "url": "https://www.instagram.com/thatgirlcovey_/reel/DYsWFtRPUZH/",
    "platform": "Instagram"
  },
  {
    "category": "beauty",
    "image": "ig-beauty.jpg",
    "title": "Let’s talk personal care",
    "description": "Covey’s candid take on everyday hygiene.",
    "url": "https://www.instagram.com/thatgirlcovey_/reel/DR2gII-D-Yi/",
    "platform": "Instagram"
  },
  {
    "category": "lifestyle",
    "image": "tk-mixer.avif",
    "title": "A little dream, in pink",
    "description": "Unboxing her pink KitchenAid — and celebrating the little wins.",
    "url": "https://www.tiktok.com/@thatgirlcovey/video/7661285382033591582",
    "platform": "TikTok"
  },
  {
    "category": "food",
    "image": "tk-bread.avif",
    "title": "Slow mornings, fresh bread",
    "description": "Step into the kitchen and bake along.",
    "url": "https://www.tiktok.com/@thatgirlcovey/video/7678467069955902751",
    "platform": "TikTok"
  },
  {
    "category": "motherhood",
    "image": "tk-baby.avif",
    "title": "Tiny tastebuds, made with love",
    "description": "A little look at what’s on her baby’s menu.",
    "url": "https://www.tiktok.com/@thatgirlcovey/video/7647123586813070623",
    "platform": "TikTok"
  },
  {
    "category": "beauty",
    "image": "tk-beauty.avif",
    "title": "The shower routine",
    "description": "Cleansing, body wash, exfoliation, and a little self-care.",
    "url": "https://www.tiktok.com/@thatgirlcovey/video/7405973552622488863",
    "platform": "TikTok"
  }
];
const grid=document.querySelector('#story-grid');
function render(filter='all'){
const list=stories.filter(s=>filter==='all'||s.category===filter);
grid.replaceChildren();
if(!list.length){const block=document.createElement('div');block.className='story-empty';const title=document.createElement('h3');title.textContent=filter==='food'?'Good food. Little moments.':'The moments that matter.';const p=document.createElement('p');p.textContent=filter==='food'?'Pull up a chair. Follow along on Instagram for more from Covey’s everyday world.':'The personal side of my little world. Come along on Instagram for everyday moments and family life.';const a=document.createElement('a');a.className='text-link';a.href=instagram;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Follow along on Instagram ↗';block.append(title,p,a);grid.append(block)}
list.forEach(s=>{const a=document.createElement('a');a.className='story';a.href=s.url;a.target='_blank';a.rel='noopener noreferrer';const visual=document.createElement('div');visual.className='story-visual';const img=document.createElement('img');img.src='assets/'+s.image;img.alt=s.title+' — from Covey’s '+s.platform;img.loading='lazy';const arrow=document.createElement('span');arrow.className='arrow';arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');visual.append(img,arrow);const label=document.createElement('p');label.className='eyebrow';label.textContent=s.category+' / '+s.platform;const h=document.createElement('h3');h.textContent=s.title;const p=document.createElement('p');p.textContent=s.description;a.append(visual,label,h,p);grid.append(a)});
document.querySelector('#filter-status').textContent=list.length?list.length+' stories shown':'Follow Covey on Instagram for '+filter+' moments';
}
render();document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render(button.dataset.filter)}));
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
let ticking=false;window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.progress').style.width=(max>0?scrollY/max*100:0)+'%';ticking=false});ticking=true}},{passive:true});document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelectorAll('[data-video]').forEach(button=>button.addEventListener('click',()=>{const iframe=document.createElement('iframe');iframe.src='https://www.tiktok.com/player/v1/'+button.dataset.video+'?autoplay=1&controls=1&description=0&music_info=0&rel=0';iframe.title=button.getAttribute('aria-label');iframe.allow='autoplay; fullscreen; encrypted-media';iframe.allowFullscreen=true;button.closest('.film-screen').replaceChildren(iframe)}));
// Keep films quiet when visitors move to another story.
if('IntersectionObserver' in window){const filmVisibility=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting){const player=entry.target.querySelector('iframe');if(player)player.contentWindow.postMessage({type:'pause','x-tiktok-player':true},'https://www.tiktok.com')}}),{threshold:.1});document.querySelectorAll('.film-screen').forEach(screen=>filmVisibility.observe(screen))}
