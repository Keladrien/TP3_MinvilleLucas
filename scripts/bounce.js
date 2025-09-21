const kofi = document.getElementById("kofi");
const artistree = document.getElementById("artistree");
const insta = document.getElementById("insta");
const twitch = document.getElementById("twitch");
const youtube = document.getElementById("youtube");

kofi.addEventListener("mouseover", (e) => {
  kofi.classList.add("bounce");
});

kofi.addEventListener("animationend", (e) => {
  kofi.classList.remove("bounce");
});

artistree.addEventListener("mouseover", (e) => {
  artistree.classList.add("bounce");
});

artistree.addEventListener("animationend", (e) => {
  artistree.classList.remove("bounce");
});

insta.addEventListener("mouseover", (e) => {
  insta.classList.add("bounce");
});

insta.addEventListener("animationend", (e) => {
  insta.classList.remove("bounce");
});

twitch.addEventListener("mouseover", (e) => {
  twitch.classList.add("bounce");
});

twitch.addEventListener("animationend", (e) => {
  twitch.classList.remove("bounce");
});

youtube.addEventListener("mouseover", (e) => {
  youtube.classList.add("bounce");
});

youtube.addEventListener("animationend", (e) => {
  youtube.classList.remove("bounce");
});
