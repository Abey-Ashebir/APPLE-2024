import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Pages from "./components/main/Pages";
import Fourth from "./components/fourth/Fourth";
import watch from "./images/icons/watch-series5-logo.png";
import servantlogo from "./images/icons/servant-logo.png";
import Mac from "./components/Mac/Mac";
import { Routes, Route } from "react-router-dom"; // Ensure you import from react-router-dom
import Apple from "./components/Apple/Apple";
import Iphone from "./components/Iphone/Iphone";
import Ipad from "./components/Ipad/Ipad";
import Watch from "./components/Watch/Watch";
import Music from "./components/Music/Music";
import Support from "./components/Support/Suppport";
import Search from "./components/Search/Search";
import Cart from "./components/Search/Search";
import Youtube from "./components/Youtube/youtube";
// import Four04 from "./components/Four04/Four04";

function App() {  // Use 'function' instead of 'Function'
  return (
    <div>
      <Header /> 
      <Routes>
        <Route path='/' element={<Pages />} />
        <Route path='/fourth' element={
          <Fourth
            myImages1={watch}
            descriptionOne="With the new Always-On Retina display. You’ve never seen a watch like this."
            myImages2={servantlogo}
            descriptionTwo="Get 3% Daily Cash on purchases from Apple using Apple Card."
          />
        } />
        <Route path='/apple' element={<Apple />} />
        <Route path='/mac' element={<Mac />} />
        <Route path='/iphone' exact Component={Iphone} />
        <Route path="/Ipad" element={<Ipad/>}/>
        <Route path="/Watch" element={<Watch/>}/>
        <Route path="/Music" element={<Music/>}/>
        <Route path="/Support" element={<Support/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        {/* <Route path="*" element={<Four04/>}/> */}
      </Routes>
      <Youtube/>
      <Footer />
    </div>
  );
}

export default App; // Use 'export default' instead of 'export'
