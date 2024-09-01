// src/components/RedirectToGoogleDrive.js
import React, { useEffect } from 'react';

const RedirectToGoogleDrive = () => {
  useEffect(() => {
    // Google Drive link for TE Computer Subject 1 PYQ
    const googleDriveLink = 'https://drive.google.com/file/d/1UZzL2kORxkj0jaZPTm_d5QbSby-1E8it/view?usp=drive_link';
    window.location.href = googleDriveLink; // Redirect to the external link
  }, []);

  return (
    <div>
      <h3>Redirecting to Google Drive...</h3>
    </div>
  );
};

export default RedirectToGoogleDrive;
