import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import baseURL from "../../api/request";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats =  async () => {
      const res = await baseURL.get('categories')

      setCats(res.data)
    }

    getCats()
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="data:image/jpeg;base64,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"
          alt="avatar"
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c, i) => (
            <li key={i} className="sidebarListItem">
            <Link className="link" to={`/posts?cat=${c.name}`}>
              {c.name}
            </Link>
          </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
