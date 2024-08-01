import "../../Styles/Body.css";
import Container from '../subComponents/Container'; 
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
function Body(){
    return(
        <div className="mainBody-Style">
            <Container>
                <img src={`${process.env.PUBLIC_URL}/university.jpg`} alt="Main-Image" className="mainimg-Style"/>
                <p className="bodytitle-Style">Find Your <span className="future-Style">Future</span>  Today</p>
                <p className="bodysubtitle-Style">The Ultimate Guide for Students</p>
            </Container>
            <Container>
                <p className="articel-Style">Explore your options and make informed decisions with our comprehensive guide to universities around the world. 
                Discover top-ranked institutions, explore diverse programs, and connect with like-minded individuals to build your academic future. 
                With easy-to-use search tools, in-depth profiles, and trusted ratings and reviews, 
                we provide everything you need to make the right choice for your academic journey. Start your search today and find your perfect fit!
                </p>
                <Link to="/Login"><button className="button-Style">Get Started</button></Link>
            </Container>
            <Container>
                <p className="title-Style">Features</p>
                <Container className={"gridcontainer"}>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/image1.avif`} alt="img"/>
                        <p >Determine Semester Hours</p>
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/image2.jpg`} alt="img"/>
                        <p>Determine Study topics</p>
                    </div>
                </Container>
            </Container>
            <hr className="styled-line"></hr>
            <Container>
                <img src={`${process.env.PUBLIC_URL}/image3.jpg`} alt="img"/>
                <div className="bodytitle-Style">
                    <p>We are here to help</p>
                </div>
                <div className="question-Style">
                    <CiMail/>
                    <button className="link-Style">Ask a Question</button>
                </div>
            </Container>
        </div>);
}
export default Body;