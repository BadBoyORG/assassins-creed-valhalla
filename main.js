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
        <h1><span>P</span>lay a viking name eivor who as been trained since childhood to become warrior</h1> 
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
    <section>
      <h1>Valhalla</h1>
    </section>
  </main>
`
