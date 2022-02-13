/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Layout } from "../../compnents";
import "./style.css";
import UploadImage from "../../assets/images/upload.png";
import placeHolderUser from "../../assets/images/placeholderUser.png";
import { AiOutlineEye } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import TabComponent from "./component/TabComponent";
import EditForm from "./component/editForm";
const Profile = () => {
  const [coverImage, setCoverImage] = useState(false);
  const [profileImage, setProfileImage] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const hiddenFileInput = React.useRef(null);
  const fileHandler = (event) => {
    hiddenFileInput.current.click();
  };
  return (
    <Layout>
      <div>{coverImage ? <CoverImage /> : <DropZone />}</div>
      <div className="container lg:px-20 pb-20">
        <div className="flex  flex-col lg:flex-row justify-between">
          <div className=" max-w-max flex items-center flex-col justify-center -translate-y-1/3">
            <div className=" w-24 md:w-28 h-24 md:h-28 border-4 border-white outline outline-gray-300 mb-4  rounded-full overflow-hidden">
              <img
                src={
                  profileImage
                    ? "https://user-profile-images-cdn-bucket.storage.googleapis.com/0x0ef1b8e7564a7c0e6c52dff0b09ddc3954527d4c_avatar?ignoreCache=1644721340652"
                    : placeHolderUser
                }
                alt=""
              />
            </div>
            <div className="">
              <button
                onClick={fileHandler}
                className="text-xs border border-gray-300 p-2"
              >
                Upload cover image
              </button>
              <input
                type="file"
                className="hidden"
                ref={hiddenFileInput}
                name=""
                id=""
              />
            </div>
            <button
              className="text-xs mt-3 border border-gray-300  px-2 py-1.5"
              onClick={() => setEditProfile(true)}
            >
              Edit Profile
            </button>
          </div>
          <div className="flex flex-col lg:flex-row flex-1 justify-between lg:pl-16 pt-4">
            <div>
              <h1 className="text-4xl text-center  md:text-5xl font-light font-serif">
                0x395a...9eb7d2
              </h1>
              <div className="lg:grid grid-flow-col gap-1 mt-10 text-sm items-center justify-start hidden ">
                <span className="">
                  <AiOutlineEye />
                </span>
                <span>10</span>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex items-center ">
                <img
                  src="https://www.logo.wine/a/logo/Binance/Binance-Icon-Logo.wine.svg"
                  alt=""
                  className="w-10"
                />
                <p className="flex items-center">
                  <span>0x395a...9eb7d2</span>
                  <CopyToClipboard
                    text="0x395adA49d8F9CF72478fe83E3C4b4661bE9EB7d2"
                    onCopy={() =>
                      alert(
                        "0x395adA49d8F9CF72478fe83E3C4b4661bE9EB7d2 Copied!"
                      )
                    }
                  >
                    <button className="text-xl  ml-1 text-gray-500">
                      <FiCopy />
                    </button>
                  </CopyToClipboard>
                </p>
              </div>
              <div>
                <button className="uppercase ml-4 lg:ml-0 text-gray-600 font-thin block text-xs mt-10">
                  Download History
                </button>
                <button className="mt-8 w-full lg:w-auto py-2 px-8 block border  border-gray-300 rounded-lg">
                  Add funds with card
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-10">
          {editProfile ? <EditForm /> : <TabComponent />}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

function DropZone(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="dropzone-container bg-gray-100">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <span className="text-5xl text-center mx-auto flex justify-center text-gray-300">
          <img className="w-6 md:w-20 mb-2 md:mb-4" src={UploadImage} alt="" />
        </span>
        <p className="uppercase text-xs  md:text-base text-gray-400 md:font-bold">
          Upload Cover Image
        </p>
      </div>
      {/* <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside> */}
    </section>
  );
}

const CoverImage = () => {
  return (
    <div className="cover-image-container">
      <img
        src="https://storage.googleapis.com/user-profile-cover-images-cdn-bucket/0x0ef1b8e7564a7c0e6c52dff0b09ddc3954527d4c?time=1633347931083"
        alt=""
      />
    </div>
  );
};
