const embedHtml = sessionStorage.getItem("videoEmbedHtml");

if (embedHtml){
    const playerContainer = document.createElement("div")
    playerContainer.innerHTML = embedHtml;

    document.getElementById("video-container").appendChild(playerContainer);
}
else{
    alert("Video embed Code Not Found...")
}