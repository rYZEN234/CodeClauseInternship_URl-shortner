let newUrl=document.getElementById("shortUrl");
let coptButton=document.getElementById("copy");
coptButton.onclick=()=>{
    newUrl.select();

    window.navigator.clipboard.writeText(newUrl.value);
}