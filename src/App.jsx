import "./App.css";

export const App = () => {
  return (
    <section className="container-layout">
      <section className="container">
        <header className="div-header">
          <div className="circle-header"></div>
          <span className="line-header"></span>
          <div className="container-li-header">
            <ul className="uls-header">
              <li>
                <a href="#">00 HOME</a>
              </li>
              <li>
                <a href="#">01 DESTINATION</a>
              </li>
              <li>
                <a href="#">02 CREW</a>
              </li>
              <li>
                <a href="#">03 TECHNOLOGY</a>
              </li>
            </ul>
          </div>
        </header>
        {/* <aside>Aside</aside> */}
        <main className="container-main">
          <div className="container-info-main">
            <div>SO, YOU WANT TO TRAVEL TO</div>
            <h1>SPACE</h1>
            <p>
              Lers tace it; if you want to go to space, you might as well
              genuinely go to outer space and nothover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
        </main>
        <footer>
          <div className="container-circle-footer">
            <div className="circle-explore">
              <span>EXPLORE</span>
            </div>
          </div>
        </footer>
      </section>
    </section>
  );
};
