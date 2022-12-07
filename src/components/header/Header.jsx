import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://nhi.sg/images/home/banner.jpeg"
        alt="banner"
      />
    </div>
  );
}
