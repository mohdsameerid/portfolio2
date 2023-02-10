
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7} className="wow fadeIn" dataWowDuration="1.5s">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi! I'm Samir`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'></span></h1>
              <p>Have skills in Web development role, looking for a software developer position in a fast-growing company to utilize my technical skills and working knowledge of software applications, development and design.</p>
              <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5} className="wow zoomIn" dataWowDuration="1.5s">
            <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}