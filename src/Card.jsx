function Card({ title, category, description, image, link }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <span className="category-tag">{category}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Play →</a>
    </div>
  )
}

export default Card
