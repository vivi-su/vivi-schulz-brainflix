import "./Header.scss"
import { Link } from "react-router-dom";


export default function Header ({searchVideos}) {
   
    return (
      <>
        <section className="header">
          <Link to="/">
            <div className="header__logo" href="/">
              BrainFlix
            </div>
          </Link>

          {/*---search group---*/}
          <form onSubmit={searchVideos} className="header__search-wrap">
            <div className="header__search">
              <div className="header__search-group">
                <span className="header__search-icon"></span>
                <input
                  type="search"
                  className="header__search-name"
                  placeholder="Search"
                  name="search"
                  autoFocus
                />
              </div>
              <div className="header__avatar1"></div>
            </div>
            {/*---button group---*/}

            <Link to="upload">
              <button className="header__btn">
                <span className="header__btn-icon"></span>
                <span className="header__btn-name header__btn-name--with-icon">
                  Upload
                </span>
              </button>
            </Link>

            <div className="header__avatar2"></div>
          </form>
        </section>
      </>
    );

}

