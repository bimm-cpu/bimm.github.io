const linksData = [
  { name: "Instagram", url: "https://www.instagram.com/bimss_12345?igsh=OTNuaWwxbjRrbHlv" },
  { name: "TikTok", url: "https://tiktok.com/@bimmxsanterror" },
  { name: "WhatsApp", url: "https://wa.me/6285732030090" }
];

const linksContainer = document.getElementById("links");

linksData.forEach(link => {
  const a = document.createElement("a");
  a.href = link.url;
  a.innerText = link.name;
  a.classList.add("link");
  a.target = "_blank";
  linksContainer.appendChild(a);
});

// Toggle Dark Mode
function toggleMode() {
  document.body.classList.toggle("dark");
}
