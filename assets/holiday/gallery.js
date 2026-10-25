document.querySelectorAll('[data-pe-gallery]').forEach(gallery=>{
 const buttons=gallery.querySelectorAll('[data-pe-filter]');
 const cards=gallery.querySelectorAll('[data-pe-category]');
 const count=gallery.querySelector('[data-pe-count]');
 buttons.forEach(button=>button.addEventListener('click',()=>{
  buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  let visible=0;
  cards.forEach(card=>{card.hidden=button.dataset.peFilter!=='all'&&card.dataset.peCategory!==button.dataset.peFilter;if(!card.hidden)visible++});
  count.textContent=gallery.dataset.lang==='th'?'แสดง '+visible+' จาก 8 แนวคิด':visible+' of 8 concepts';
 }));
});
const giftStyle=document.getElementById('style');
function selectGift(id){
 const option=giftStyle&&Array.from(giftStyle.options).find(o=>o.dataset.gift===id);
 if(!option)return false;
 giftStyle.value=option.value;
 return true;
}
document.querySelectorAll('[data-pe-gift]').forEach(link=>link.addEventListener('click',event=>{
 if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
 if(selectGift(link.dataset.peGift)){event.preventDefault();document.getElementById('enquiry').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});giftStyle.focus({preventScroll:true});}
}));
selectGift(new URLSearchParams(location.search).get('gift'));

