import AboutDetails from "../../components/about/AboutDetails"
import SponsersView from "../../components/sponsers/SponsersView";
const About = () => {
  return (
    <>
    <div>
        <h1 className="text-center mt-5">About</h1>
        <AboutDetails/>
    </div>
    <SponsersView/>
    </>
  )
}

export default About;