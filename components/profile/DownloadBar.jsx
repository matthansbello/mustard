'use client';
import React from 'react';

function DownloadBar() {
  return (
    <div className="profile-bar no-print">
      <a href="/portfolio" className="pb-back">
        <i className="ti-arrow-left"></i>
        <span>Back to site</span>
      </a>
      <div className="pb-title">MustardHQ — Company Profile</div>
      <button
        type="button"
        className="butn butn-sm butn-bg main-colorbg radius-30 magnetic"
        onClick={() => window.print()}
      >
        <span className="text">Download PDF</span>
      </button>
    </div>
  );
}

export default DownloadBar;
