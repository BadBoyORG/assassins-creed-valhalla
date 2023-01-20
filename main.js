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
        <li>story</li>
        <li>features</li>
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
        <a href="https://store.ubi.com/ofertas/assassins-creed-valhalla/5e8353ff5cdf9a21c0b4e72e.html?lang=en " target="_blank">buy now</a>
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
        
        </div>
      </div>
    </section>
  </main>
`
