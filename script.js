
function sendWhatsApp(){
  let ad=document.getElementById('ad')?.value||"";
  let tel=document.getElementById('tel')?.value||"";
  let adres=document.getElementById('adres')?.value||"";
  let parsel=document.getElementById('parsel')?.value||"";
  let konu=document.getElementById('konu')?.value||"";
  let mesaj=document.getElementById('mesaj')?.value||"";
  let text="Merhaba Masfey İnşaat,%0A%0AÖn başvuru yapmak istiyorum.%0A%0AAd Soyad: "+encodeURIComponent(ad)+"%0ATelefon: "+encodeURIComponent(tel)+"%0AAdres: "+encodeURIComponent(adres)+"%0AAda Parsel: "+encodeURIComponent(parsel)+"%0AKonu: "+encodeURIComponent(konu)+"%0AMesaj: "+encodeURIComponent(mesaj);
  window.open("https://wa.me/905431813485?text="+text,"_blank");
}
