import React from "react";

import css from "./index.module.css";

const Home = () => {
  return (
    <div>
      <section>
        <div className={css.container}>
          <h1 className={css.heading}>Access team</h1>
          <div className={css.cardwrapper}>
            {/* <!-- card1 --> */}
            <div className={css.card}>
              <img src='images/card-bg.jpeg' alt='bg' className={css.cardimg} />
              <img
                src='images/karthik.jpg'
                alt='profile'
                className={css.profileimg}
              />
              <h1>Karthik Tabjul</h1>
              <p className={css.jobtitle}>
                Chartered Accountant | Corporate Finance
              </p>
              <p className={css.about}>
                A qualified chartered accountant,a corporate finance
                professional with hands-on experience in initial public
                offers(IPO)
              </p>
              <a href='+919731802020' className={css.btn}>
                {" "}
                Contact
              </a>
              <ul className={css.socialmedia}>
                <li>
                  <a
                    href='https://www.twitter.com/karthikTabjul'
                    style={{ color: "#55acee" }}>
                    <i class='fab fa-twitter-square'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/karthik-tabjul-ab9801150'
                    style={{ color: "#0e76a8" }}>
                    <i class='fab fa-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:karthik.tabjul@gmail.com'
                    style={{ color: "#dd4b39" }}>
                    <i class='fab fa-google-plus-square'></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- card2 --> */}
            <div className={css.card}>
              <img
                src='images/card-bg.jpeg'
                alt='card background'
                className={css.cardimg}
              />
              <img
                src='images/ameensir.jpg'
                alt='profile'
                className={css.profileimg}
              />
              <h1>Syed Ameen Murtuza</h1>
              <p className={css.jobtitle}>UI/UX Designer</p>
              <p className={css.about}>
                A Dynamic UI/UX designer responsible to deliver an outstanding
                user experience and Assistant Professor.
              </p>
              <a href='+919900437862' className={css.btn}>
                Contact
              </a>
              <ul className={css.socialmedia}>
                <li>
                  <a
                    href='https://www.twitter.com/Murtuza_ameen'
                    style={{ color: "#55acee" }}>
                    {" "}
                    <i class='fab fa-twitter-square'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/syed-ameen-murtuza-7631341a'
                    style={{ color: "#0e76a8" }}>
                    <i class='fab fa-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:ameen.pse@gmail.com'
                    style={{ color: "#dd4b39" }}>
                    <i class='fab fa-google-plus-square'></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- card3 --> */}
            <div className={css.card}>
              <img
                src='images/card-bg.jpeg'
                alt='card background'
                className={css.cardimg}
              />
              <img
                src='images/ilyazsir.jpg'
                alt='profile'
                className={css.profileimg}
              />
              <h1>Muhammad Ilyaz</h1>
              <p className={css.jobtitle}>Frontend Developer</p>
              <p className={css.about}>
                A Dynamic Frontend web developer responsible to deliver an
                outstanding user experience and Assistant Professor.
              </p>
              <a href='+919844575661' className={css.btn}>
                Contact
              </a>
              <ul className={css.socialmedia}>
                <li>
                  <a
                    href='https://www.twitter.com/'
                    style={{ color: "#55acee" }}>
                    <i class='fab fa-twitter-square'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/muhammad-ilyaz-880337114'
                    style={{ color: "#0e76a8" }}>
                    <i class='fab fa-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:ilyaz.k.m@gmail.com'
                    style={{ color: "#dd4b39" }}>
                    <i class='fab fa-google-plus-square'></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- card4 --> */}

            <div className={css.card}>
              <img
                src='images/card-bg.jpeg'
                alt='card background'
                className={css.cardimg}
              />
              <img
                src='images/salman.jpg'
                alt='profile'
                className={css.profileimg}
              />
              <h1>Salman Khan</h1>
              <p className={css.jobtitle}>Fullstack Developer</p>
              <p className={css.about}>
                A Tech enthusiastic, Software developer,Teacher and Motivational
                Speaker.
              </p>
              <a href='+919535386618' className={css.btn}>
                Contact
              </a>
              <ul className={css.socialmedia}>
                <li>
                  <a
                    href='https://www.twitter.com/Salman18Dev'
                    style={{ color: "#55acee" }}>
                    <i class='fab fa-twitter-square'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/salman18'
                    style={{ color: "#0e76a8" }}>
                    <i class='fab fa-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:salmanaleemkhan783@gamail.com'
                    style={{ color: "#dd4b39" }}>
                    <i class='fab fa-google-plus-square'></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- card5 --> */}

            <div className={css.card}>
              <img
                src='images/card-bg.jpeg'
                alt='card background'
                className={css.cardimg}
              />
              <img
                src='images/tajammul.jpg'
                alt='profile'
                className={css.profileimg}
              />
              <h1>Tajammul Pasha</h1>
              <p className={css.jobtitle}>Mobile Developer</p>
              <p className={css.about}>
                A Software engineer whose passion lies in between software
                engineering and Teaching.
              </p>
              <a href='+918147564935' className={css.btn}>
                Contact
              </a>

              <ul className={css.socialmedia}>
                <li>
                  <a
                    href='https://www.twitter.com/Tajammul1996'
                    style={{ color: "#55acee" }}>
                    <i className='fab fa-twitter-square'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/tajammul1996'
                    style={{ color: "#0e76a8" }}>
                    <i className='fab fa-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:tajammulpasha1996@gmail.com'
                    style={{ color: "#dd4b39" }}>
                    <i className='fab fa-google-plus-square'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
