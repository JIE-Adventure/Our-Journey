/* =========================================================
   OUR JOURNEY
   Main JavaScript
========================================================= */


/* =========================================================
   PHOTOS
=========================================================

   Put your photos inside:

   images/

   and name them:

   photo-01.jpg
   photo-02.jpg
   ...
   photo-43.jpg

========================================================= */

const photoCount = 47;

const photoGrid = document.getElementById("photo-grid");

for (let i = 1; i <= photoCount; i++) {

    const number = String(i).padStart(2, "0");

    const card = document.createElement("div");

    card.className = "photo-card";

    card.innerHTML = `
        <img
            src="images/photo-${number}.jpg"
            alt="Memory ${number}"
            loading="lazy"
        >

        <span class="photo-number">
            memory-${number}
        </span>
    `;

    card.addEventListener("click", () => {
        openLightbox(i);
    });

    photoGrid.appendChild(card);
}


/* =========================================================
   LIGHTBOX
========================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const photoNumber = document.getElementById("photo-number");

const closeLightboxButton =
    document.getElementById("close-lightbox");

const previousButton =
    document.getElementById("previous-photo");

const nextButton =
    document.getElementById("next-photo");

let currentPhoto = 1;


function openLightbox(photo) {

    currentPhoto = photo;

    updateLightbox();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


function updateLightbox() {

    const number = String(currentPhoto).padStart(2, "0");

    lightboxImage.src =
        `images/photo-${number}.jpg`;

    lightboxImage.alt =
        `Memory ${number}`;

    photoNumber.textContent =
        `memory-${number} / ${photoCount}`;
}


function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}


function nextPhoto() {

    currentPhoto++;

    if (currentPhoto > photoCount) {
        currentPhoto = 1;
    }

    updateLightbox();
}


function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 1) {
        currentPhoto = photoCount;
    }

    updateLightbox();
}


closeLightboxButton.addEventListener(
    "click",
    closeLightbox
);

nextButton.addEventListener(
    "click",
    nextPhoto
);

previousButton.addEventListener(
    "click",
    previousPhoto
);


/* Close by clicking outside image */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


/* Keyboard controls */

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowRight") {
        nextPhoto();
    }

    if (event.key === "ArrowLeft") {
        previousPhoto();
    }

});


/* =========================================================
   COMMITS
=========================================================

   Replace these examples with the real dates/messages
   from your spreadsheet.

   You can add as many commits as you want.

========================================================= */

const commits = [
    {
        "date": "2025-05-03",
        "message": "initial commit : First meeting 🎉",
        "hash": "3551801"
    },
    {
        "date": "2025-06-05",
        "message": "Happy Eid the beginning 🎈🎊",
        "hash": "fc36879"
    },
    {
        "date": "2025-06-20",
        "message": "Welcome Home 🏡",
        "hash": "d994473"
    },
    {
        "date": "2025-08-03",
        "message": "Fatiha🤲✨",
        "hash": "a1956bd"
    },
    {
        "date": "2025-08-08",
        "message": "Flowers Day 💐",
        "hash": "6f8fcdb"
    },
    {
        "date": "2025-08-15",
        "message": "Rings Day 💍",
        "hash": "0d152af"
    },
    {
        "date": "2025-08-22",
        "message": "Question Rituals Start🎬🏁",
        "hash": "d71c449"
    },
    {
        "date": "2025-08-29",
        "message": "Engagement :official start and the fun begins 💍🎉",
        "hash": "10d5390"
    },
    {
        "date": "2025-08-31",
        "message": "Let's meet 💍🍨🍳",
        "hash": "c53828c"
    },
    {
        "date": "2025-09-04",
        "message": "Happy Breakfast 🌳🕊️🎶✨",
        "hash": "478bd5d"
    },
    {
        "date": "2025-09-20",
        "message": "Chocolate day 🍫",
        "hash": "af29b93"
    },
    {
        "date": "2025-09-21",
        "message": "All English All the time ♥️",
        "hash": "3825cb4"
    },
    {
        "date": "2025-10-08",
        "message": "Turathna 🛍️🎨🖌️",
        "hash": "bbc9b9b"
    },
    {
        "date": "2025-10-18",
        "message": "Tour 🕌👣",
        "hash": "18d6450"
    },
    {
        "date": "2025-11-02",
        "message": "The Amazing Surprise 🥗☕🚗",
        "hash": "bc53727"
    },
    {
        "date": "2025-11-17",
        "message": "First Road 👣☕",
        "hash": "35dffb7"
    },
   {
        "date": "2025-11-25",
        "message": "First Tour 🏡✨",
        "hash": "35dffb7"
    },
    {
        "date": "2025-11-27",
        "message": "Crazy Machines Spree🏃‍♂️🔌",
        "hash": "4ed46ae"
    },
    {
        "date": "2025-12-01",
        "message": "Pancakes Day 🥞",
        "hash": "1c68b78"
    },
    {
        "date": "2025-12-25",
        "message": "Best Christmas gift 🎁🎧♥️",
        "hash": "e23c4dd"
    },
    {
        "date": "2026-01-01",
        "message": "Happy New year 🎆🐢",
        "hash": "10ce3c4"
    },
    {
        "date": "2026-01-02",
        "message": "Hassaan the Event leader 🎤",
        "hash": "499561f"
    },
    {
        "date": "2026-01-09",
        "message": "Best Molten Cake 👨‍🍳🍫",
        "hash": "7672a93"
    },
    {
        "date": "2026-01-31",
        "message": "Happy birthday Hassaan 🎂",
        "hash": "026b410"
    },
    {
        "date": "2026-02-03",
        "message": "Sushi Day 🍣🍤 🎂",
        "hash": "c0bbc51"
    },
    {
        "date": "2026-02-19",
        "message": "Happy Ramadan🌙 🏮",
        "hash": "cd9c782"
    },
    {
        "date": "2026-02-28",
        "message": "Ramadan Gathering 🏡",
        "hash": "f4530fd"
    },
    {
        "date": "2026-03-05",
        "message": "Safe Travels Hassaan 🕋👋",
        "hash": "c2d251f"
    },
    {
        "date": "2026-03-17",
        "message": "Welcome back ♥️",
        "hash": "391767d"
    },
    {
        "date": "2026-03-20",
        "message": "Best Happy Eid Surprise Ever🎁🫣",
        "hash": "41bf8c7"
    },
    {
        "date": "2026-04-17",
        "message": "Pancakes Full Day V2 🥞 🏡 🎉",
        "hash": "22b548a"
    },
    {
        "date": "2026-05-02",
        "message": "Nature Spring tour 🌼🌱🪷🌳🍇",
        "hash": "969f255"
    },
    {
        "date": "2026-05-04",
        "message": "IKEA day 📏🛋️🏡",
        "hash": "155882d"
    },
    {
        "date": "2026-05-08",
        "message": "First Hike for the Hikers 🥾⛰️🏜️",
        "hash": "73f8ac0"
    },
    {
        "date": "2026-05-28",
        "message": "Happy Eid Outing 👱‍♂️🌊🐚",
        "hash": "a418ab9"
    },
    {
        "date": "2026-06-19",
        "message": "let's see the Nile 🌊⛴️👨‍💻",
        "hash": "c29372b"
    },
    {
        "date": "2026-06-22",
        "message": "Happy birthday Janna 🎂💐",
        "hash": "13aa5fd"
    },
    {
        "date": "2026-07-17",
        "message": "Peaceful walk in the Castle 🏰🌱🦋",
        "hash": "b1f245e"
    },
    {
        "date": "2026-07-27",
        "message": "Delicious Molten Cake 🍫👨‍🍳",
        "hash": "d0c6258"
    },
    {
        "date": "2026-08-29",
        "message": "Happy Anniversary 💍♥️",
        "hash": "1bf30e0"
    }
];


/* =========================================================
   RENDER COMMITS
========================================================= */

const commitList =
    document.getElementById("commit-list");


function renderCommits() {

    commitList.innerHTML = "";

    commits.forEach(commit => {

        const element =
            document.createElement("div");

        element.className = "commit";

        element.innerHTML = `

            <div class="commit-date">
                ${formatDate(commit.date)}
            </div>

            <div class="commit-message">
                ${escapeHTML(commit.message)}
            </div>

            <div class="commit-hash">
                ${commit.hash}
            </div>

        `;

        commitList.appendChild(element);

    });

}


function formatDate(dateString) {

    const date =
        new Date(`${dateString}T12:00:00`);

    return date.toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
    );

}


/*
   Prevent accidental HTML inside commit messages.
*/

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


renderCommits();


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("current-year").textContent =
    new Date().getFullYear();


/* =========================================================
   SMALL TERMINAL ANIMATION
========================================================= */

const terminalOutput =
    document.getElementById("terminal-output");

const terminalProgress =
    document.getElementById("terminal-progress");


setTimeout(() => {

    terminalOutput.textContent =
        "Receiving objects: 100%";

}, 1000);


setTimeout(() => {

    terminalProgress.innerHTML =
        `Resolving deltas: <span>100%</span>`;

}, 1600);
