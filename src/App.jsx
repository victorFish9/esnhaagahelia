import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Events from './components/Events'
import ArticlePage from './components/ArticlePage'
import myImage from '/Users/admin/Desktop/ESN_Haaga-Helia/esnhaagahelia/src/photo/groupPhoto.jpeg'
import articles from './articles'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home imagePath={myImage} />} />
          <Route path='about' element={<About imagePath={myImage} />} />
          <Route path='events' element={<Events />} />
          {articles.map(article => (
            <Route
              key={article.id}
              path={article.id}
              element={<ArticlePage title={article.title} imagePath={article.imagePath} description={article.description} />}
            />
          ))}
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
