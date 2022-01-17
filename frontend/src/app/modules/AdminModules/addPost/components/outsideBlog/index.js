import React, { useState, useRef, forwardRef } from "react";
import UploadImage from "app/modules/AdminModules/addUser/components/uploadImage";

const InputOutside = forwardRef((props, refs) => {
  const { error } = props;

  const [cover, setCover] = useState(null);
  const [errors, setErrors] = useState("");

  const refInput = useRef(refs);

  const changeImage = (e) => {
    // setError("");

    const file = e.target.files[0];

    if (!file) {
      return;
    }

    if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      // return setError("Chỉ hỗ trợ file hình ảnh");
    }

    if (file.size / 1024 / 1024 < 1) {
      if (file) {
        const createUrl = URL.createObjectURL(file);

        setCover(createUrl);
        // setFile(file);
      }
    } else {
      // setError("Chỉ hỗ trợ file ảnh tối đa 1MB");
    }
  };

  const handleRemoveImage = () => {
    setCover(null);
  };

  return (
    <div className="blog-outside">
      {/* upload Image */}
      <label className="text-left mb-3">Cover bài viết</label>

      <div className="wrapperUpload-cover">
        <UploadImage
          image={cover}
          onChangeImage={changeImage}
          removeImage={handleRemoveImage}
          type="cover"
        />

        <p className="text-secondary text-center mt-3">
          Cho phép upload file ảnh *.jpeg, *.jpg, *.png với kích cỡ không quá
          1MB
        </p>
      </div>

      {/* category */}
      <div className="category-blog">
        <label for="category">Chọn danh mục</label>

        <select name="category" id="category">
          <option value="volvo">Danh mục 1</option>
          <option value="saab">Danh mục 2</option>
          <option value="mercedes">Danh mục 3</option>
          <option value="audi">Danh mục 4</option>
        </select>
      </div>

      {/* title */}
      <div className="title-blog">
        <textarea name="title" placeholder="Tiêu đề bài viết" />
      </div>
    </div>
  );
});

export default InputOutside;
