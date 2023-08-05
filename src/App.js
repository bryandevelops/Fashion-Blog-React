import { useState } from 'react'

import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

import './styles/App.css'

export default function App() {
  const [articles] = useState([
    {
      date: '11/12/20',
      title: 'On the Street in Brooklyn',
      image: "/blog-image-1.jpg",
      imageDesc: "Woman in red walking on the side walk looking down",
      text: 'Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deseruntnemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla ius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod quisquam quo ab molestiae.'
    },
    {
      date: '11/11/20',
      title: 'Vintage in Vogue',
      image: "/blog-image-2.jpg",
      imageDesc: "Three people in frame. The first two looking towards the camera and the third woman on the right looking towards the left",
      text: 'Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deseruntnemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est e at neque alias. Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius qua corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur'
    }
  ]);

  return (
    <div className="App">
      <Header />
      <main>
        {articles.map(article => <Article article={article} />)}
      </main>
      <Footer />
    </div>
  );
}
