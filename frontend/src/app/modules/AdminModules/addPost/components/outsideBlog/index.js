import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import UploadImage from "app/modules/AdminModules/addUser/components/uploadImage";
import { useSelector } from "react-redux";

const InputOutside = forwardRef((props, ref) => {
  const { errors } = props;
  const { list } = useSelector((state) => state.topic);
  const [errorImage, setErrorImage] = useState("");
  const [cover, setCover] = useState(null);
  const [file, setFile] = useState(null);
  const [valueForm, setValueForm] = useState({
    topic: list[0]._id,
    title: "",
  });

  const changeImage = (e) => {
    setErrorImage("");

    const file = e.target.files[0];

    if (!file) {
      return;
    }

    if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      return setErrorImage("Chỉ hỗ trợ file hình ảnh");
    }

    if (file.size / 1024 / 1024 < 1) {
      if (file) {
        const createUrl = URL.createObjectURL(file);

        setCover(createUrl);
        setFile(file);
        console.log("ham run");
      }
    } else {
      setErrorImage("Chỉ hỗ trợ file ảnh tối đa 1MB");
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    setCover(null);
  };

  const handleChangeForm = (e) => {
    const { value, name } = e.target;

    setValueForm({
      ...valueForm,
      [name]: value,
    });
  };

  useImperativeHandle(ref, () => ({
    getImage() {
      return file;
    },
    getValue() {
      return valueForm;
    },
  }));

  return (
    <form className="blog-outside" ref={ref}>
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

        {errorImage && <p className="text-danger">{errorImage}</p>}
      </div>

      {/* category */}
      <div className="topic-blog">
        <label htmlFor="topic">Chọn danh mục</label>

        <select
          name="topic"
          id="topic"
          onChange={handleChangeForm}
          value={valueForm.topic}
        >
          {list?.map((option, index) => {
            return (
              <option value={option._id} key={index}>
                {option.name.toLowerCase()}
              </option>
            );
          })}
        </select>
      </div>

      {/* title */}
      <div className="title-blog">
        <textarea
          name="title"
          placeholder="Tiêu đề bài viết"
          onChange={handleChangeForm}
        />
      </div>

      {errors.length > 0 && <p className="text-danger">{errors}</p>}
    </form>
  );
});

export default InputOutside;
