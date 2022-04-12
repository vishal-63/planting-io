import React, { useState, useEffect } from "react";
// import { Document, Page } from "react-pdf";
import { useParams } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import ItemPage from "../Components/ItemPage";
import { UserNavbar } from "../Components/Navbar";
import Topbar from "../Components/Topbar";
import { getPlant } from "../data/plants";
import { getSeed } from "../data/seeds";
import { getTool } from "../data/tools";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@2.6.347/legacy/build/pdf.worker.min.js`;
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import axios from "axios";

const Item = () => {
  const params = useParams();
  const key = Object.keys(params)[0];

  const [item, setItem] = useState({});
  const [id, setId] = useState(params[key]);

  const [file, setFile] = useState(
    "./MSc-Data-Science-Entrance-Test-Syllabus.pdf"
  );
  const [url, setUrl] = useState();

  // const base64toBlob = (data) => {
  //   // Cut the prefix `data:application/pdf;base64` from the raw base 64
  //   const base64WithoutPrefix = data.substr(
  //     "data:application/pdf;base64,".length
  //   );

  //   const bytes = atob(base64WithoutPrefix);
  //   let length = bytes.length;
  //   let out = new Uint8Array(length);

  //   while (length--) {
  //     out[length] = bytes.charCodeAt(length);
  //   }

  //   return new Blob([out], { type: "application/pdf" });
  // };

  function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  const getPdf = async () => {
    axios({
      url: "http://localhost:8080/api/report/test", //your url
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      // console.log(response);
      // console.log(blobToBase64(response.data));
      var reader = new FileReader();
      reader.readAsDataURL(response.data);
      reader.onloadend = function () {
        var base64data = reader.result;
        console.log(base64data);
        setFile(base64data);
      };
      // const url = window.URL.createObjectURL(new Blob([response.data]));
      // const link = document.createElement("a");
      // link.href = url;
      // link.setAttribute("download", "file.pdf"); //or any other extension
      // document.body.appendChild(link);
      // link.click();
    });

    // const res = await fetch("http://localhost:8080/api/report/test", {
    //   method: "GET",
    //   mode: "no-cors",
    //   headers: {
    //     Accept: "application/pdf",
    //   },
    // });

    // console.log(res.arrayBuffer());
    // const blob = res.blob();
    // const file = new Blob([blob], { type: "application/pdf" });
    // const fileURL = URL.createObjectURL(file);
    // setFile(fileURL);
  };
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Topbar />
      <UserNavbar />
      <button onClick={getPdf}> Test</button>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(err) => console.log(err)}
      >
        <Page pageNumber={pageNumber} />
      </Document>{" "}
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button
        onClick={() =>
          setPageNumber(pageNumber + 1 > numPages ? 1 : pageNumber + 1)
        }
      >
        {" "}
        2{" "}
      </button>
      <Footer />
    </>
  );
};

export default Item;
