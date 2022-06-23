import { useState } from "react";

function PreguntasEn() {
  const [active, setActive] = useState(false);
  const handleActive = (e) => {
    if (e.target.classList.contains("main-toogle")) {
      setActive(!active);
      e.target.classList.toggle("active");
    }
  };
  return (
    <>
      <div className="main-item">
        <div onClick={(e) => handleActive(e)} className="main-toogle">
          <h2 className="main-toogle__texto">What is Netflix?</h2>
          <div className="main-ico">
            <i className="fas fa-plus main-ico__plus" />
            <i className="fas fa-times main-ico__times" />
          </div>
        </div>
        <div className="main-texto">
          <div className="main-texto__padding">
            <p className="main-texto__texto margin">
              Netflix is ​​a streaming service that offers a wide variety of
              award-winning movies, series and documentaries on almost any
              screen connected to the Internet.
            </p>
            <p className="main-texto__texto">
              Everything you want to see, without limits or commercials, at a
              very affordable cost. There is always something new to discover,
              and more movies and series are added every week!
            </p>
          </div>
        </div>
      </div>

      <div className="main-item">
        <div onClick={(e) => handleActive(e)} className="main-toogle">
          <h2 className="main-toogle__texto">How much does Netflix cost?</h2>
          <div className="main-ico">
            <i className="fas fa-plus main-ico__plus" />
            <i className="fas fa-times main-ico__times" />
          </div>
        </div>
        <div className="main-texto">
          <div className="main-texto__padding">
            <p className="main-texto__texto">
              Enjoy Netflix on your smartphone, tablet, smart TV, laptop or
              streaming device, all for one flat monthly fee. Plans from S/24.90
              to S/44.90 per month. No additional costs or contracts.
            </p>
          </div>
        </div>
      </div>

      <div className="main-item">
        <div onClick={(e) => handleActive(e)} className="main-toogle">
          <h2 className="main-toogle__texto">Where can I watch Netflix?</h2>
          <div className="main-ico">
            <i className="fas fa-plus main-ico__plus" />
            <i className="fas fa-times main-ico__times" />
          </div>
        </div>
        <div className="main-texto">
          <div className="main-texto__padding">
            <p className="main-texto__texto margin">
              Enjoy where you want, when you want. Sign in to your Netflix
              account to watch content instantly through netflix.com from your
              personal computer or any Internet-connected device that has the
              Netflix app, such as smart TVs, smartphones, tablets, media
              players and game consoles of games.
            </p>
            <p className="main-texto__texto">
              In addition, you can download your favorite series with iOS,
              Android or the app for Windows 10. With the download function, you
              can watch wherever you go and without an internet connection. Take
              Netflix with you wherever you are.
            </p>
          </div>
        </div>
      </div>

      <div className="main-item">
        <div onClick={(e) => handleActive(e)} className="main-toogle">
          <h2 className="main-toogle__texto">How do I cancel?</h2>
          <div className="main-ico">
            <i className="fas fa-plus main-ico__plus" />
            <i className="fas fa-times main-ico__times" />
          </div>
        </div>
        <div className="main-texto">
          <div className="main-texto__padding">
            <p className="main-texto__texto">
              Netflix is ​​flexible. No annoying contracts or commitments.
              Cancel online membership with just two clicks. There are no
              cancellation fees. Start and finish whenever you want.
            </p>
          </div>
        </div>
      </div>

      <div className="main-item">
        <div onClick={(e) => handleActive(e)} className="main-toogle">
          <h2 className="main-toogle__texto">What can I watch on Netflix?</h2>
          <div className="main-ico">
            <i className="fas fa-plus main-ico__plus" />
            <i className="fas fa-times main-ico__times" />
          </div>
        </div>
        <div className="main-texto">
          <div className="main-texto__padding">
            <p className="main-texto__texto margin">
              Netflix has a vast catalog of movies, series, documentaries,
              anime, award-winning originals, and more. Everything you want to
              see, when you want.
            </p>
          </div>
        </div>
      </div>

      <div className="main-item">
        <div onClick={(e) => handleActive(e)} className="main-toogle">
          <h2 className="main-toogle__texto">Is Netflix good for children?</h2>
          <div className="main-ico">
            <i className="fas fa-plus main-ico__plus" />
            <i className="fas fa-times main-ico__times" />
          </div>
        </div>
        <div className="main-texto">
          <div className="main-texto__padding">
            <p className="main-texto__texto margin">
              The Netflix Kids experience is included in the membership so
              parents are in control while kids enjoy family shows and movies in
              their own space.
            </p>
            <p className="main-texto__texto">
              {" "}
              Kid profiles include PIN-protected parental controls that let you
              restrict what kids can watch based on age ratings and block
              certain titles you don't want kids to see.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreguntasEn;
