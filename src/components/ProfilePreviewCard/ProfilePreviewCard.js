import React from 'react';
import './ProfilePreviewCard.scss';

function ProfilePreviewCard(props) {
  return (
    <div className="profile-preview-card">
      <img className="profile-preview-card__avatar" src="/static_images/member.png" alt="Avatar" />
      <span className="profile-preview-card__username">BIvan Varetly</span>
    </div>
  );
}

export default ProfilePreviewCard;
