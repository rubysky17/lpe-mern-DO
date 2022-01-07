import React, { useRef } from "react";

function UploadAvatar({ avatar, onChangeImage, removeImage }) {
  const hiddenRef = useRef(null);

  console.log("avatar", avatar);

  return (
    <>
      {avatar ? (
        <div className="wrapperUpload">
          <img
            src={avatar}
            alt="icon-has-uploaded"
            className="avatarHasUpload"
          ></img>

          <div className="buttonDeleteImage" onClick={removeImage}>
            <i className="fas fa-trash"></i>
          </div>
        </div>
      ) : (
        <label className="labelAvatar">
          <input
            type="file"
            id="avatarundefined"
            name="avatar"
            ref={hiddenRef}
            onChange={onChangeImage}
          />
          {
            <img
              src="https://kt.city/static/icon-upload.png"
              alt="icon-upload"
            ></img>
          }
        </label>
      )}
    </>
  );
}

export default UploadAvatar;
