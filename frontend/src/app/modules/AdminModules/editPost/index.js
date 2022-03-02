import React from "react";
import LPEEditor from "app/components/editor";
import LPEModal from "app/components/modal";
import { EDITOR_TOOLS_BLOG } from "app/const/tools";
import InputOutside from "../addPost/components/outsideBlog";
import PreviewBlog from "../addPost/components/preview";

function EditPost() {
  const miss = {
    blocks: [
      {
        id: "DvojMdoVVb",
        type: "paragraph",
        data: {
          text: "Không ai sinh ra là một cá thể tách biệt khỏi vũ trụ, mỗi chúng ta đều đang góp phần vào thế giới xung quanh bằng nhiều cách khác nhau. Ví như khi bạn cười với một người, thì cũng đã phần nào chạm vào cảm xúc họ. Hoặc khi bạn là lãnh đạo, cấp dưới sẽ bị ảnh hưởng cách làm việc từ bạn. Nhưng điều gì đã khiến một vài người suy nghĩ mình chẳng có sức ảnh hưởng trong cuộc đời?",
        },
        tunes: {
          alignment: {
            alignment: "left",
          },
        },
      },
      {
        id: "reijhvvmjV",
        type: "paragraph",
        data: {
          text: "Ai cũng muốn mình hoàn thiện để cống hiến cho đời, nhưng điều đó khiến một số người chỉ nhìn vào thiếu sót để nâng cấp mình. Khi đó, họ sẽ nghĩ việc thất bại vì mình kém cỏi, thiếu kiến thức hoặc không được sinh ra để làm điều mình thích. Đến cuối cùng, họ chọn cách từ bỏ lý tưởng cuộc sống. Nếu những suy nghĩ này không giúp bạn nhìn thấy giá trị bản thân, đã đến lúc nên thay đổi chúng.",
        },
        tunes: {
          alignment: {
            alignment: "left",
          },
        },
      },
      {
        id: "GfZKIeEM7O",
        type: "image",
        data: {
          file: {
            url: "https://lpe.vn/api/public/images/blog/1643508516835_253683834_3084477171829121_6930707038994392072_n.jpg",
          },
          caption: "",
          withBorder: false,
          stretched: false,
          withBackground: false,
        },
      },
      {
        id: "MSsGodmQPJ",
        type: "paragraph",
        data: {
          text: "Thay vì trách cứ và phán xét bản thân và làm mình chùn bước, hãy cho mình góc nhìn tích cực. Mỗi ngày, bạn có thể lưu lại những điều tốt đẹp mà bản thân đã làm, có thể là việc bảo vệ môi người, tạo ra niềm vui cho người khác. Chỉ cần sống tích cực mỗi ngày, thì bạn đã và đang tạo nên điều đẹp đẽ cho đời. Từ đó, hãy bước dần mình đến những điều lớn lao, tạo nên những đóng góp mạnh mẽ hơn.&nbsp;&nbsp;",
        },
        tunes: {
          alignment: {
            alignment: "left",
          },
        },
      },
    ],
  };

  return (
    <div className="addblog-screen">
      <div className="row">
        {/* <InputOutside ref={refOutside} errors={errors} /> */}

        <div className="col-12 mt-4">
          <LPEEditor
            // onHandleSubmit={handlePostBlog}
            // onPreview={handlePreview}
            // ref={refEditor}
            tools={EDITOR_TOOLS_BLOG}
            placeholder="Nhập nội dung bài viết"
            defaultValue={miss}
          />
        </div>

        <div className="fixed-layout">
          <button
            className="btn-addblog btn-addblog-preview"
            // onClick={handlePreview}
          >
            Preview
          </button>

          <button
            className="btn-addblog btn-addblog-post"
            // onClick={handleEdit}
            // disabled={isLoadingPost}
          >
            Xác nhận
          </button>
        </div>
      </div>
      {/* <LPEModal ref={refModal} width={900} height="80vh">
        <PreviewBlog render={rawToHtml} />
      </LPEModal> */}
    </div>
  );
}

export default EditPost;
