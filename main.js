import "./styles/css/main.css"

/* Menu active when the page is visible */
const sections = document.querySelectorAll("main section[id]")
function activeteMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active")
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active")
    }
  }
}

/* Button for back to top the page */
function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top")

  if (window.scrollY >= 800) {
    backToTopButton.classList.add("show")
  } else {
    backToTopButton.classList.remove("show")
  }
}

/* When scroll */
window.addEventListener("scroll", () => {
  backToTop()
  activeteMenuAtCurrentSection()
})

/* HTML content */
document.querySelector("#app").innerHTML = `
  <header class='header'>
    <input id='menu-control' type="checkbox" />
    <img 
      class="logo" 
      src="/assets/valhalla-logo.png"
      alt="Valhalla logo"
    />
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item"> 
          <a href="#home" class="nav-link">home</a>
        </li>
        <li class="nav-item">
          <a href="#features" class="nav-link">universe</a>  
        </li>
        <li class="nav-item">
          <a href="#about-us" class="nav-link">about us</a>
        </li>
      </ul>
    </nav>
    <div class="toggle-buttons">
      <label for="menu-control">
        <img
          class="hamburguer-icon" 
          src="/assets/menu.svg" alt="hamburguer icon" 
        />
        <img
          class="x-icon" 
          src="/assets/x.svg" 
          alt="x icon"
        />
      </label>
    </div>
  </header>
  <main>
    <section id="home">
      <div class="container">
        <img
          class="img-home" 
          src="/assets/home-picture.png" alt="Illustrative image of the game" 
        />
        <p><span>P</span>lay a viking name eivor who as been trained since childhood to become warrior</p> 
        <a href="https://store.ubi.com/ofertas/assassins-creed-valhalla/5e8353ff5cdf9a21c0b4e72e.html?lang=en-us " target="_blank">buy now</a>
        <div class="cards">   
          <img
            class="card" 
            src="/assets/home-card-basim.jpg" alt="Illustrative image of a game character called Basim" 
          />
          <img
            class="card" 
            src="/assets/home-card-flann.jpg" alt="Illustrative image of a game character called Flann Sinna" 
          />
          <img
            class="card"           
            src="/assets/home-card-aelfred.jpg" alt="Illustrative image of a game character called Aelfred" 
          />
        </div>
      </div>
    </section>
    <section id="story">
      <div class="container">
        <h1 class="title">story</h1>
        <div class="text-grid">
          <p class="text-left">
            <span>S</span>et in <span>873 CE,</span> <span>V</span>alhalla has players take the role of <span>E</span>ivor<span>,</span> a <span>V</span>iking <span>R</span>aider and <span>C</span>lan <span>L</span>eader of the <span>N</span>orsemen who can be played either as male or female<span>. T</span>he game retains the dialogue choice and <span>NPC</span> relationship elements from <span>A</span>ssassin's <span>C</span>reed
          </p>
          <p class="text-right">
            <span>O</span>dyssey<span>,</span> with new elements such as forging political alliances with <span>NPC</span> clans<span>. E</span>very choice and decision of the players affects the world of the game in real time<span>. P</span>layers can travel from the cold shores of <span>N</span>orway to <span>E</span>ngland<span>...</span> 
          </p>
        </div>
        <figure>
          <img 
            src="/assets/story-picture.jpg"
            alt="Illustrative image of the game"
          />
          <figcaption>
            <span>A D</span>ark <span>A</span>ge <span>O</span>pen <span>W</span>orld
          </figcaption>
        </figure>
        <div class="social-networks">
          <a href="https://www.instagram.com/ubisoft/" target="_blank"> 
            <img 
              src="/assets/social-network-instagram.svg" 
              alt="Social network Instagram" 
            />
          </a>
          <a href="https://www.ubisoft.com/" target="_blank">
            <img 
              src="/assets/social-network-website.svg" 
              alt="Social network Website" 
            />
          </a>
          <a href="https://discord.com/invite/ubisoftsupport" target="_blank">
            <img 
              src="/assets/social-network-discord.svg" 
              alt="Social network Discord" 
            />
          </a>
        </div>
      </div>
    </section>
    <section id="features">
      <div class="container">
        <h1 class="title">features</h1>
        <figure class="figure-left">
          <img
            class="figure-img" 
            src="/assets/features-picture1.jpg" 
            alt"Illustrative image of the game" 
          />
          <figcaption>
            <h2 class="figure-title">adventure</h2>
            <p class="figure-content">
              <span>A</span>ssassin's <span>C</span>reed <span>V</span>alhalla tells a complex story set against an equally<span>,</span> if not more<span>,</span> enticing time in history<span>,</span> explored through a breathtaking world design<span>. T</span>he game is well over <span>100-</span>hours<span>,</span> which keeps getting better as you play along
            </p>
          </figcaption>
          <img
            class="detail1" 
            src="/assets/features-detail-figure1.png"
            alt="Valhalla theme figure detail"
          />
        </figure>
        <figure class="figure-right">
          <figcaption>
            <h2 class="figure-title">action</h2>
            <p class="figure-content">
              <span>A</span>s for stealth and combat<span>,</span> there is little to add to my initial impressions <span>–</span> stealth play and parkour are extremely fun<span>,</span> and open combat <span>–</span> both melee and ranged <span>–</span> are satisfying
            </p>
          </figcaption>
          <img
            class="figure-img" 
            src="/assets/features-picture2.jpg" 
            alt"Illustrative image of the game" 
          />
          <img
            class="detail2" 
            src="/assets/features-detail-figure2.png"
            alt="Valhalla theme figure detail"
          />
        </figure>
      </div>
    </section>   
  </main>
  <footer id="about-us">
    <div class="container-ubisoft">
      <div class="logo-ubisoft">
        <img 
          src="/assets/ubisoft-logo.png"
          alt="Logo Ubisoft"
        />
      </div>
      <div class="painel-links">
        <a href="http://store.ubi.com/" target="_blank">store</a>
        <a href="https://ubisoftconnect.com/" target="_blank">ubisoft connect</a>
        <a href="https://ubisoft.com/en-us/company/overview.aspx" target="_blank">company</a>
        <a href="https://support.ubi.com/" target="_blank">support</a>
      </div>
      <div class="painel-legal-links">
        <a href="https://www.ubisoft.com/en-us/company/contact-us" target="_blank">contacts</a>
        <a href="https://legal.ubi.com/privacypolicy/en-us" target="_blank">privacy</a>
        <a href="https://legal.ubi.com/termsofuse/en-us" target="_blank">terms</a>
      </div>
    </div>
    <div class="container-valhalla">
      <div class="logo-valhalla">
        <img 
          src="/assets/valhalla-logo.png" alt="Valhalla logo" 
        />
      </div>
      <div class="container-game-info">
        <div class="info-studios">
          <h3>studios</h3>
          <div class="info-studios-tags">
            <span>ubisoft montreal</span>
          </div>
        </div>
        <div class="info-plataforms">
          <h3>plataforms</h3>
          <div class="info-plataforms-tags">
            <span>xbox series x|s</span>
            <span>xbox one</span>
            <span>playstation 5</span>
            <span>playstation 4</span>
            <span>ubisoft connect</span>
            <span>steam</span>
          </div>
        </div>
        <div class="info-partners">
          <h3>partners</h3>
          <div class="info-partners-tags">
            <span>epic games</span>
            <span>amd ryzen</span>
            <span>geforce now</span>
          </div>
        </div>
      </div>
      <div class="copyright-terms">
        <p class="copyright-terms-content">© 2021 Ubisoft Entertainment. All Rights Reserved. Assassin's Creed, Ubisoft and the Ubisoft logo are registered or unregistered trademarks of Ubisoft Entertainment in the U.S. and/or other countries.</p> 
      </div>
    </div>
    <div class="container-github">
      <div class="photo-profile-github">
        <img 
          src="/assets/photo-perfil-github.jpg" 
          alt="Photo profile github" 
        />
      </div>
      <div class="info-profile-github">
        <h3>Brian Santos <span>/ BadBoyORG</span></h3>
        <p>Web Developer</p>
        <a class="btn" href="https://github.com/BadBoyORG" target="_blank">my profile</a>
      </div>
    </div>
  </footer>

  <a href="#home" class="back-to-top">
    <svg enable-background="new 0 0 40 40" version="1.1" viewBox="0 0 40 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentcolor" fill-opacity="1"><g><path d="M27.9,23.6c-0.3,0-0.5-0.1-0.7-0.3L19.9,16l-7.3,7.3c-0.4,0.4-1,0.4-1.4,0s-0.4-1,0-1.4l8-8c0.4-0.4,1-0.4,1.4,0l8,8   c0.4,0.4,0.4,1,0,1.4C28.4,23.5,28.2,23.6,27.9,23.6z"/></g><g><path d="M20,40C9,40,0,31,0,20S9,0,20,0c4.5,0,8.7,1.5,12.3,4.2c0.4,0.3,0.5,1,0.2,1.4c-0.3,0.4-1,0.5-1.4,0.2C27.9,3.3,24,2,20,2   C10.1,2,2,10.1,2,20s8.1,18,18,18s18-8.1,18-18c0-3.2-0.9-6.4-2.5-9.2c-0.3-0.5-0.1-1.1,0.3-1.4c0.5-0.3,1.1-0.1,1.4,0.3   C39,12.9,40,16.4,40,20C40,31,31,40,20,40z"/></g></svg>
  </a>
`
