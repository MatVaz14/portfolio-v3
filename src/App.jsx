import { Navbar } from './components';
import { Home,About,Skill,Project,Contact,Footer } from "./pages";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

export default App
