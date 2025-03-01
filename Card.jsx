export default function Card({ title, description, link, image }) {
  return (
    <div className="card">
      <img
        src={image || "default-coffee.jpg"}
        alt={title}
        className="card-image"
      />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="menu-button"
        >
          Visit Webiste
        </a>
      </div>
    </div>
  );
}

import "./Card.css";
