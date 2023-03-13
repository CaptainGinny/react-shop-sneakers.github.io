
function App() {
  return (
    <div className="wrapper">
      <header>
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.svg" alt="logo"/>
        <div>
          <h3 className="text-logo">React Shop-Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li>
          <img width={18} height={18} src="/img/cart.svg" alt="cart"/>
            <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="user"/>
        </li>
      </ul>
      </header>
      <div className="content">
        <div className="search">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск ..."/>
          </div>
        </div>

        <div className="sneakers">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked"/> 
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers"/>
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers"/>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers"/>
            <p>Кроссовки Puma X Aka Boku Future Rider</p>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
