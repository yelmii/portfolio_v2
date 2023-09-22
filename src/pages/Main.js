//import Board from "../components/Board";
import MainProfile from "../essets/images/main_profile.png";
import MainProfile2 from "../essets/images/main_profile_2.png";
import icons from "../essets/images/icon/icon";
import "../styles/scss/layout/main.scss";

function Main() {
  return (
    <main className="main-page-wrap">
      <section id="page1" className="main-page page-1">
        <div id="page1-1" className="page-1-1">
          <img src={MainProfile} alt="" />
          <p className="main">
            안녕하세요👋
            <br />
            프론트엔드 개발자
            <br />
            최예림입니다!
          </p>
        </div>
        <div id="page1-2" className="page-1-2">
          <img src={MainProfile2} alt="" />
          <div className="card">
            <p className="title">Skill</p>
            <ul className="mb-10 skill-wrap">
              <li>
                <div className="round-img-wrap mb-10">
                  <img className="icon" src={icons.html5} alt="html5 아이콘" />
                </div>
                HTML
              </li>
              <li>
                <div className="round-img-wrap mb-10">
                  <img className="icon" src={icons.css3} alt="css3 아이콘" />
                </div>
                CSS
              </li>
              <li>
                <div className="round-img-wrap mb-10">
                  <img className="icon" src={icons.sass} alt="sass 아이콘" />
                </div>
                SASS
              </li>
              <li>
                <div className="round-img-wrap mb-10">
                  <img className="icon" src={icons.js} alt="js 아이콘" />
                </div>
                JavaScript
              </li>
              <li>
                <div className="round-img-wrap mb-10">
                  <img className="icon" src={icons.react} alt="react 아이콘" />
                </div>
                React
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="page2" className="main-page page-2">
        project
      </section>
      <section id="page3" className="main-page page-3">
        contact
      </section>
    </main>
  );
}
export default Main;
