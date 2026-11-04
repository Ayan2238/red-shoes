const pages = [
  {
    title: "The Girl and Her Red Shoes",
    text: [
      "There was once a little girl named Karen. Her mother was very poor, and Karen had no shoes. In summer she went barefoot, and in winter she wore large wooden clogs.",
      "One day, a kind old lady took Karen into her home. She cared for her and brought her up as her own child.",
      "Karen's old shoes were worn out. A poor shoemaker's wife made her a pair of red shoes from scraps of cloth. They were not beautiful, but Karen loved them dearly."
    ]
  },
  {
    title: "A Beautiful Gift",
    text: [
      "When Karen was older, the old lady bought her a pair of fine red shoes. They were made of soft leather and shone beautifully.",
      "Karen was to wear them to church for her confirmation. She thought only of how lovely the shoes looked, and she forgot to listen to the words of the service.",
      "The old lady could not see well, and she did not know that Karen was wearing red shoes. She believed they were black."
    ]
  },
  {
    title: "The First Dance",
    text: [
      "Outside the church stood an old soldier with a crutch. He looked at Karen's shoes and said, 'What pretty dancing shoes!'",
      "He touched the soles with his hand, and Karen felt a strange desire to dance.",
      "When she left the church, her feet began to move. She danced along the road, and she could not stop. The shoes carried her onward until she was brought home."
    ]
  },
  {
    title: "The Terrible Curse",
    text: [
      "The old lady was ill, and Karen had to care for her. But when Sunday came, Karen could think only of her red shoes.",
      "She put them on and went to a grand ball. As soon as the music began, she started dancing.",
      "She danced out of the hall and into the night. She could not stop, even when she wanted to. The shoes carried her through the woods and over the hills."
    ]
  },
  {
    title: "The Longest Dance",
    text: [
      "Karen danced day and night. Her feet were sore, and she was exhausted, but the red shoes would not let her rest.",
      "At last she came to the executioner's house. She begged him to cut off her feet, so that she might be freed from the shoes.",
      "The executioner did as she asked. The red shoes danced away with her feet still inside them, and Karen was left with wooden feet and crutches."
    ]
  },
  {
    title: "A Life of Repentance",
    text: [
      "Karen was filled with sorrow. She knew that she had been vain and disobedient, and she wished to make amends.",
      "She went to the church, but the red shoes danced before her and she could not enter.",
      "Karen worked hard and helped others. She prayed for forgiveness and tried to live a humble life."
    ]
  },
  {
    title: "The End of the Story",
    text: [
      "One Sunday, Karen heard the church bells and thought of the service. She prayed with all her heart.",
      "As she prayed, she felt that God had forgiven her. Her heart became peaceful, and she was no longer afraid.",
      "Karen's life came to an end, and her soul was carried to heaven, where there was no pain or sorrow."
    ]
  }
];

let currentPage = 0;

const coverScreen = document.getElementById("cover-screen");
const bookScreen = document.getElementById("book-screen");
const bookSpread = document.getElementById("book-spread");
const readingPage = document.getElementById("reading-page");

const openBookButton = document.getElementById("open-book");
const beginStoryButton = document.getElementById("begin-story");
const closeBookButton = document.getElementById("return-cover");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

const pageNumber = document.getElementById("page-number");
const pageTitle = document.getElementById("page-title");
const storyText = document.getElementById("story-text");

function showCover() {
  bookScreen.hidden = true;
  coverScreen.hidden = false;
  readingPage.hidden = true;
  bookSpread.hidden = false;
}

function openBook() {
  coverScreen.hidden = true;
  bookScreen.hidden = false;
  bookSpread.hidden = false;
  readingPage.hidden = true;
}

function beginReading() {
  currentPage = 0;
  bookSpread.hidden = true;
  readingPage.hidden = false;
  renderPage();
}

function renderPage() {
  const page = pages[currentPage];

  pageNumber.textContent =
    `${currentPage + 1} / ${pages.length}`;

  pageTitle.textContent = page.title;

  storyText.replaceChildren();

  page.text.forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    storyText.appendChild(p);
  });

  previousButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === pages.length - 1;
}

function previousPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    renderPage();
  }
}

function closeReading() {
  readingPage.hidden = true;
  bookSpread.hidden = false;
}

openBookButton.addEventListener("click", openBook);
beginStoryButton.addEventListener("click", beginReading);
closeBookButton.addEventListener("click", showCover);
previousButton.addEventListener("click", previousPage);
nextButton.addEventListener("click", nextPage);

showCover();
