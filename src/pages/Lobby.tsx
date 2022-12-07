import React from 'react';
import Header from '../components/Header';

const Lobby = () => {
  return (
    <section className="lobby">
      <Header />
      <div className="lobby__container">
        <div className="lobby__top d-f jc-sb ai-c">
          <div className="lobby__top-left">
            <h2>Lobby</h2>
          </div>
          <div className="lobby__top-right d-f ai-c">
            <h3 className="online d-f ai-c">
              Users online: <b>X,XXX</b>
            </h3>
            <button></button>
          </div>
        </div>
        <div className="lobby__board">
          <div className="lobby__board-row d-g">
            <div className="lobby__board-column">
              <b>Username</b>
            </div>
            <div className="lobby__board-column">
              <b>Score</b>
            </div>
            <div className="lobby__board-column">
              <b>Funds</b>
            </div>
            <div className="lobby__board-column">
              <b>Status</b>
            </div>
          </div>
          <div className="lobby__board-row d-g ">
            <div className="lobby__board-column d-f ai-c">
              <img
                src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                alt="avatar"
              />
              <b>Nickname</b>
            </div>
            <div className="lobby__board-column">
              <b>25000</b>
            </div>
            <div className="lobby__board-column">
              <b>0.7 ETH</b>
            </div>
            <div className="lobby__board-column">
              <button className="lobby__board-button lobby__board-button--play"></button>
            </div>
          </div>
          <div className="lobby__board-row d-g">
            <div className="lobby__board-column d-f ai-c">
              <img
                src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                alt="avatar"
              />
              <b>Nicknamecsacsa</b>
            </div>
            <div className="lobby__board-column">
              <b>250</b>
            </div>
            <div className="lobby__board-column">
              <b>0.72 ETH</b>
            </div>
            <div className="lobby__board-column">
              <button className="lobby__board-button lobby__board-button--private"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lobby;
