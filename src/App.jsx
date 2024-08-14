import Home from './components/Home'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Events from './components/Events'
import ArticlePage from './components/ArticlePage'
import myImage from './photo/groupPhoto.jpeg'
import articles from './articles'

function App() {

  return (
    <>

      <Routes>
        <Route path='/esnhaagahelia' element={<Layout />}>
          <Route index element={<Home imagePath={myImage} />} />
          <Route path='/esnhaagahelia/about' element={<About imagePath={myImage} />} />
          <Route path='/esnhaagahelia/events' element={<Events />} />
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
