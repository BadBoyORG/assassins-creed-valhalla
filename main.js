import "./styles/css/main.css"

document.querySelector("#app").innerHTML = `
  <header>
    <nav class="navbar">
      <img 
        class="logo" 
        src="./src/assets/valhalla-logo.png"
        alt="Valhalla logo" 
      />
      <ul>
        <li>home</li>
        <li>universe</li>
        <li>about us</li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="home">
      <div class="container">
        <img 
          src="./src/assets/home-picture.png" alt="Illustrative image of the game" 
        />
        <p><span>P</span>lay a viking name eivor who as been trained since childhood to become warrior</p> 
        <a href="https://store.ubi.com/ofertas/assassins-creed-valhalla/5e8353ff5cdf9a21c0b4e72e.html?lang=en-us " target="_blank">buy now</a>
        <div class="cards">   
          <img
            class="card" 
            src="./src/assets/home-card-basim.jpg" alt="Illustrative image of a game character called Basim" 
          />
          <img
            class="card" 
            src="./src/assets/home-card-flann.jpg" alt="Illustrative image of a game character called Flann Sinna" 
          />
          <img
            class="card"           
            src="./src/assets/home-card-aelfred.jpg" alt="Illustrative image of a game character called Aelfred" 
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
            src="./src/assets/story-picture.jpg"
            alt="Illustrative image of the game"
          />
          <figcaption>
            <span>A D</span>ark <span>A</span>ge <span>O</span>pen <span>W</span>orld
          </figcaption>
        </figure>
        <div class="social-networks">
          <a href="https://www.instagram.com/ubisoft/" target="_blank"> 
            <img 
              src="./src/assets/social-network-instagram.png" 
              alt="Social network Instagram" 
            />
          </a>
          <a href="https://www.ubisoft.com/" target="_blank">
            <img 
              src="./src/assets/social-network-website.png" 
              alt="Social network Website" 
            />
          </a>
          <a href="https://discord.com/invite/ubisoftsupport" target="_blank">
            <img 
              src="./src/assets/social-network-discord.png" 
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
            src="./src/assets/features-picture1.jpg" 
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
            src="./src/assets/features-detail-figure1.png"
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
            src="./src/assets/features-picture2.jpg" 
            alt"Illustrative image of the game" 
          />
          <img
            class="detail2" 
            src="./src/assets/features-detail-figure2.png"
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
          src="./src/assets/ubisoft-logo.png"
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
          src="./src/assets/valhalla-logo.png" alt="Valhalla logo" 
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
      <p class="copyright-terms">© 2021 Ubisoft Entertainment. All Rights Reserved. Assassin's Creed, Ubisoft and the Ubisoft logo are registered or unregistered trademarks of Ubisoft Entertainment in the U.S. and/or other countries.</p> 
    </div>
    <div class="container-github">
      <div class="photo-profile-github">
        <img 
          src="./src/assets/photo-perfil-github.jpg" 
          alt="Photo profile github" 
        />
      </div>
      <div class="info-profile-github">
        <h3>Brian Santos <span>/ BadBoyORG</span></h3>
        <p>Web Developer</p>
        <a href="https://github.com/BadBoyORG">my profile</a>
      </div>
    </div>
  </footer>
`
