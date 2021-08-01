function App() {
  return (
    <>
      <header>
        <div className="header__sale">
          <a href="#">SUMMER SALES 60% off selected items</a>
        </div>
        <div className="header__middle">
          <div>
            <a href="#">Search</a>
          </div>
          <div>
            <a href="#">Won Hundred</a>
          </div>
          <div className="header__middle__right">
            <div>
              <a href="#">Currency</a>
            </div>
            <div>
              <a href="#">Bag(0)</a>
            </div>
          </div>
        </div>
        <div className="header__end">
          <div>
            <a href="#">Jeans</a>
          </div>
          <div>
            <a href="#">Women</a>
          </div>
          <div>
            <a href="#">Men</a>
          </div>
          <div>
            <a href="#">Journal</a>
          </div>
        </div>
      </header>
      <div className="annouce">
        <div className="annouce__left">
          We use cookies on www.wonhundred.com -
          <span>
            <a href="#"> Read more</a>
          </span>
        </div>
        <div className="annouce__right">
          <div> Ok, I understand </div>
        </div>
      </div>
      <main>
        <div className="main__picture">
          <div className="pic__left"></div>
          <div className="pic__right"></div>
        </div>
        <div className="summer__setTimeout">summer sale</div>
        <div className="products">
          <div className="product">
            <img
              src="https://source.unsplash.com/random/640x1060"
              alt="asd"
            ></img>
            <div className="product__detail">
              <div>Odette Overshirt - Tesk Melange</div>
              <div>
                <span>960 DKK</span>
                <span>Sale</span>
                <span>1600 DKK</span>
              </div>
              <div>
                <div>responsible</div>
                <div>❌</div>
              </div>
            </div>
          </div>
          <div className="product">
            <img
              src="https://source.unsplash.com/random/640x1061"
              alt="asd"
            ></img>
            <div className="product__detail">
              <div>Esther Coat - Monnstruck</div>
              <div>
                <span>1500 DKK</span>
                <span>Sale</span>
                <span>2500 DKK</span>
              </div>
              <div>
                <div>responsible</div>
                <div>❌</div>
              </div>
            </div>
          </div>
          <div className="product">
            <img
              src="https://source.unsplash.com/random/640x1062"
              alt="asd"
            ></img>
            <div className="product__detail">
              <div>Kirby Zip Shirt - Black</div>
              <div>
                <span>540 DKK</span>
                <span>Sale</span>
                <span>900 DKK</span>
              </div>
              <div>
                <div>responsible</div>
                <div>❌</div>
              </div>
            </div>
          </div>
        </div>
        <div className="saleTitle">
          <div>women'sale</div>
          <div>men'sale</div>
        </div>
      </main>

      <footer>
        <div className="footer__left">
          <div>Sign up our newsletter</div>
          <div>
            <div>Enter your email</div>
            <div>Women's fashion</div>
            <div>Men's fashion</div>
          </div>
        </div>
        <div className="footer__right">
          <div>
            <div className="footer__right__title">Shopping</div>
            <div className="footer__right__detail">
              <div>Gift Card</div>
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div>
              <div>Account</div>
            </div>
          </div>
          <div>
            <div className="footer__right__title">Company</div>
            <div className="footer__right__detail">
              <div>Contact</div>
              <div>About</div>
              <div>Sustainability</div>
              <div>Press & B2B</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
