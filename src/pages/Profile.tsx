import React from 'react';
import addPicture from './../assets/images/AddPicture-Normal.png';

const Profile = () => {
  return (
    <div className="main">
      <div className="main__row">
        <section className="profile">
          <div className="profile__row ">
            <div className="profile__column">{/* <img src={addPicture} alt="avatar" /> */}</div>
            <div className="profile__column">
              <p className="profile__name">Unnamed</p>
              <p className="profile__score">Score 0</p>
              <p className="profile__address">Copy address [0xb26...136d]</p>
            </div>
          </div>
          <p className="profile__logout"></p>
          <div className="profile__social-rows">
            <div className="profile__social-row">
              <div className="profile__social-row-left">
                <img src="" alt="social" /> <span>Twitter</span>
              </div>
              <div className="profile__social-row-right profile__social-row-right--connect"></div>
            </div>
            <div className="profile__social-row profile__social-row-right--connected">
              <div className="profile__social-row-left">
                <img src="" alt="social" /> <span>Instagram</span>
              </div>
              <div className="profile__social-row-right">
                <span>Sample_Unlink</span>
              </div>
            </div>
            <div className="profile__social-row profile__social-row-right--connect">
              <div className="profile__social-row-left">
                <img src="" alt="social" /> <span>Telegram</span>
              </div>
              <div className="profile__social-row-right"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
