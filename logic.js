// target the shorten button
let btn = document.getElementById("shorten");
btn.addEventListener("click", short);
async function short() {
  let longUrl = document.getElementById("longurl").value;
  let shortUrl = document.getElementById("shortUrl");

  const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
  const data = await result.json();
  //   console.log(data);
  shortUrl.value = data.result.short_link2;
  //   console.log(data.result.short_link2);
}
