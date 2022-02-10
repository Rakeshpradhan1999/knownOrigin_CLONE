import Logo from "../../assets/images/logo.svg";
const Footer = () => {
  return (
    <div className=" bg-dark-600">
      <div className="container text-white pt-20 pb-40">
        <div className="grid  gap-y-10 md:gap-y-0 md:grid-cols-2">
          <div>
            <div>
              <div>
                <img src={Logo} alt="" />
              </div>
              <h5 className="font-serif font-light text-2xl mt-2">
                KnownOrigin.
              </h5>
              <p className="font-light text-gray-400 mb-10">
                Discover and collect rare NFT art
              </p>
              <p className="font-bold text-lg">
                Stay in the picture, join our newsletter
              </p>
              <div className="bg-white mt-4 overflow-hidden max-w-fit rounded-lg">
                <input
                  type="text"
                  className="bg-transparent px-2 focus:outline-none text-dark-600"
                  placeholder="arts@knownorigin.io"
                />
                <button className=" text-dark-600 p-2 px-4 border-l border-dark-600 rounded-r-md">
                  Subscribe
                </button>
              </div>
              <p
                className="font-serif text-gray-400 text-xs mt-10"
                style={{ fontSize: "10px" }}
              >
                KNOWNORIGIN LABS LTD (COMPANY NO. 13047869)
              </p>
            </div>
          </div>
          <div>
            <div className="grid  gap-y-10 md:gap-y-0 md:grid-flow-col justify-start gap-x-36">
              <div>
                <h6 className="font-bold mb-2">Follow Us</h6>
                <ul>
                  {followList.map((val, i) => (
                    <li key={i}>
                      <a href={val.link} className="font-light py-1.5 block">
                        {val.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h6 className="font-bold mb-2">Help</h6>
                <ul>
                  {helpList.map((val, i) => (
                    <li key={i}>
                      <a href={val.link} className="font-light py-1.5 block">
                        {val.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const followList = [
  {
    text: "Twitter",
    link: "#",
  },
  {
    text: "Discord",
    link: "#",
  },
  {
    text: "Instagram",
    link: "#",
  },
  {
    text: "Reddit",
    link: "#",
  },
  {
    text: "YouTube",
    link: "#",
  },
  {
    text: "Telegram",
    link: "#",
  },
  {
    text: "Medium",
    link: "#",
  },
  {
    text: "Linktree",
    link: "#",
  },
];

const helpList = [
  {
    text: "Documentation / Press kit",
    link: "#",
  },
  {
    text: "Terms of Service",
    link: "#",
  },
  {
    text: "Privacy",
    link: "#",
  },
  {
    text: "Code of Conduct",
    link: "#",
  },
  {
    text: "Support",
    link: "#",
  },
  {
    text: "Report infringement",
    link: "#",
  },
  {
    text: "Partnership enquiry ",
    link: "#",
  },
];
