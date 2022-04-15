import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Email from "./components/email/email";
import RecenPosts from "./components/education/education";
import Categroies from "./components/categroies/categroies";
import Working from "./components/working/working";
import Signup from "./components/signup/signup";
import Hero2 from "./components/hero2/hero2";
import Home from "./components/hero/hero";

function App() {
  return (
    <div className="App">
      <div>
        <>
          <Navbar />
          <Home/>
          <Hero2/>
          <Working/>
          <Signup/>
          <RecenPosts/>
          <Categroies/>
          <Email/>
          <Footer/>
        </>
      </div>
    </div>
  );
}

export default App;
