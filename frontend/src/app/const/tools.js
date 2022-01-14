import axios from "axios";
import { API_ENDPOINT, UPLOAD_IMAGE_BLOG } from "./Api";

// tools.js
import Embed from "@editorjs/embed";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import AlignmentTuneTool from "editorjs-text-alignment-blocktune";

export const EDITOR_TOOLS_BLOG = {
  list: {
    class: List,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
    tunes: ["alignment"],
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    tunes: ["alignment"],
  },
  alignment: {
    class: AlignmentTuneTool,
    config: {
      default: "left",
      blocks: {
        header: "center",
        list: "left",
      },
    },
  },
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        facebook: true,
        instagram: true,
        imgur: true,
        pinterest: true,
      },
    },
  },
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: {
    class: Image,
    config: {
      // Config Push Upload file image for Blog

      uploader: {
        async uploadByFile(file) {
          // your ajax request for uploading
          const formData = new FormData();

          formData.append("blog", file);

          return await axios({
            url: API_ENDPOINT + UPLOAD_IMAGE_BLOG,
            method: "POST",
            data: formData,
          })
            .then((res) => {
              return {
                success: 1,
                file: {
                  url: `http://localhost:5000/${res.data.url}`,
                  // any other image data you want to store, such as width, height, color, extension, etc
                },
              };
            })
            .catch((err) => {
              console.log("error", err);
            });
        },
      },
    },
  },
  raw: Raw,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};
