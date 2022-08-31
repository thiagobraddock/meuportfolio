import React from 'react';
import './home.css';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLaptop,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from 'react-icons/ai';

import { SiVisualstudiocode } from 'react-icons/si';
function Home() {
  return (
    <>
      <div className="profile">
        <div className="rgb">
          <img
            src="https://avatars.githubusercontent.com/u/50876157?v=4"
            alt="profile"
          />
        </div>
        <h1>THIAGO BRADDOCK</h1>
        <div className="squares">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* botoes */}
      <section>
        <div className="links">
          <a href="https://github.com/thiagobraddock">
            <div className="link__content">
              <AiOutlineGithub />
            </div>
          </a>

          <a href="https://github.com/thiagobraddock">
            <div className="link__content">
              <AiOutlineLinkedin />
            </div>
          </a>

          <a href="https://github.com/thiagobraddock">
            <div className="link__content">
              <AiOutlineYoutube />
            </div>
          </a>

          <a href="https://github.com/thiagobraddock">
            <div className="link__content">
              <AiOutlineInstagram />
            </div>
          </a>

          <a href="https://github.com/thiagobraddock">
            <div className="link__content">
              <AiOutlineLaptop />
            </div>
          </a>

          <a href="https://github.com/thiagobraddock" title="portfolio">
            <div className="link__content highlight">
              <SiVisualstudiocode />
              <h2>Porfólio</h2>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
