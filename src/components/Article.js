export default function Article ({ article }) {
  return (
    <article>
      <time>{article.date}</time>
        <h2>{article.title}</h2>
        <img src={article.image} alt={article.imageDesc}/>
        <p>{article.text}</p>
        <p><a href="">Continues ...</a></p>
    </article>
  )
}