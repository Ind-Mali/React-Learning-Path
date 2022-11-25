import Background from "./Background"
import ContactArea from "./ContactArea"
import Container from "./Container"
import Footer from "./Footer"
import Header from "./Header"
import MenuContainer from "./MenuContainer"
import Navbar from "./Navbar"

const CaffePage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Background/>
        <Container/>
        <MenuContainer/>
        <ContactArea/>
        <Footer/>
        
    </div>
  )
}

export default CaffePage