import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import crownFirstPlace from './../assets/images/Crown_1st.png';
import baseCircle from './../assets/images/Base_circle.png';
import maskProfilePick from './../assets/images/Mask-ProfilePic.png';

const Leaderboard = () => {
  return (
    <div className="main">
      <div className="main__row d-g">
        <Navbar />
        <section className="leaderboard">
          <Header />
          <div className="leaderboard__container">
            <h2>Leaderboard</h2>
            <div className="leaderboard__board-wrapper">
              <div className="leaderboard__ranking d-f ai-c jc-sb">
                <div className="leaderboard__ranking-place leaderboard__ranking-second-place">
                  <img src={crownFirstPlace} alt="crown" />
                  <img src={maskProfilePick} alt="mask profile pick" />
                  <img src={baseCircle} alt="base circle" />
                </div>
                <div className="leaderboard__ranking-place leaderboard__ranking-first-place">
                  <img src={crownFirstPlace} alt="crown" />
                  <img src={maskProfilePick} alt="mask profile pick" />
                  <img src={baseCircle} alt="base circle" />
                </div>
                <div className="leaderboard__ranking-place leaderboard__ranking-third-place">
                  <img src={crownFirstPlace} alt="crown" />
                  <img src={maskProfilePick} alt="mask profile pick" />
                  <img src={baseCircle} alt="base circle" />
                </div>
              </div>
              <div className="leaderboard__board">
                <div className="leaderboard__board-row d-g ">
                  <div className="leaderboard__board-column">Rank</div>
                  <div className="leaderboard__board-column">Username</div>
                  <div className="leaderboard__board-column">Highest Score</div>
                </div>
                <div className="leaderboard__board-row d-g ">
                  <div className="leaderboard__board-column">
                    <b>1</b>
                  </div>
                  <div className="leaderboard__board-column d-f ai-c">
                    <img
                      src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                      alt="avatar"
                    />
                    <b>Nickname</b>
                  </div>
                  <div className="leaderboard__board-column">
                    <b>xxxxxx</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Leaderboard;
