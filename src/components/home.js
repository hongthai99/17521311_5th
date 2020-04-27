import React,{Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Skill from './skill';
export default class home extends Component{
    render(){
        return(
            <div className="page">
                <div className="colorlib-page">
                    <section className="home-slider owl-carousel js-fullheight">
                        <div className="slider-item js-fullheight">
                            <div className="overlay"></div>
                                <div className="container">
                                    <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                                        <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                                            <p><a href="#" className="scroll">Hello! I'm</a></p>
                                            <h1 className="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Thai</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <div className="slider-item js-fullheight">
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                                    <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                                        <p><a href="#" class="scroll">I'm a Student</a></p>
                                        <h1 className="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">From UIT</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="ftco-section about-section">
                        <div className="container">
                            <div className="row d-flex" data-scrollax-parent="true">
                                <div className="col-md-4 author-img" style={{backgroundImage:'url(images/img.jpg)'}} data-scrollax=" properties: { translateY: '-70%'}"></div>
                                    <div className="col-md-2"></div>
                                    <div className="col-md-6 wrap ftco-animate">
                                    <div className="about-desc">
                                        <h1 className="bold-text">About</h1>
                                        <div className="p-5">
                                            <h2 className="mb-5">Hi! I'm Hong Thai,</h2>
                                            <p>I love Design, Technology and Story</p>
                                            <ul className="ftco-footer-social list-unstyled mt-4">
                                                <li><a href="#"><span className="icon-facebook"></span></a></li>
                                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                            </ul>
                                            <h5>Contact me here!</h5>
                                            <br></br>
                                            <p>Email: <a href="#">bachh.thai@gmail.com</a></p>                                               <p>Phone: <a href="#">(+84) 965 417 682</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="ftco-section">
                    <div class="container">
              <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                  <span>What i do</span>
                  <h2>My Experience</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services p-3 py-4 d-block text-center">
                    <div className="icon mb-3"><span className="icon-layers"></span></div>
                    <div className="media-body">
                      <h3 className="heading">UI/UX Design</h3>
                    </div>
                  </div>      
                </div>
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services p-3 py-4 d-block text-center">
                    <div className="icon mb-3"><span className="icon-gears"></span></div>
                    <div className="media-body">
                      <h3 className="heading">Analysis</h3>
                    </div>
                  </div>      
                </div>
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services p-3 py-4 d-block text-center">
                    <div className="icon mb-3"><span className="icon-code"></span></div>
                    <div className="media-body">
                      <h3 className="heading">HTML/CSS</h3>
                    </div>
                  </div>    
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section">
            <div className="container">
              <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                  <span>My Story</span>
                  <h2>A few of my story</h2>
                </div>
              </div>
              <div className="row no-gutters">
              <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                <a className="image d-flex justify-content-center align-items-center" style={{backgroundImage:'url(images/img5.jpg)'}} data-scrollax=" properties: { translateY: '-30%'}">
                </a>
                <div className="text">
                  <h4 className="subheading">Volunteer</h4>
                  <h2 className="heading"><a>Member of Social Work Team UIT<br></br>Volunteer of BAN CUA BE and UNICEF Viet Nam</a></h2>
                  <p>We usually take part in helping people in mountainous areas. We teach the children to read and write. We enjoy the work very much because we like helping people.</p>
                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                <a className="image order-2 d-flex justify-content-center align-items-center" style={{backgroundImage:'url(images/img3.jpg)'}} data-scrollax=" properties: { translateY: '-30%'}">

                </a>
                <div className="text order-1">
                  <h4 className="subheading">Photographer</h4>
                  <h2 className="heading"><a>Talk to myself: You aren't a photographer, you are the keeper of the moments...</a></h2>
                  <p>Explore the world and save memories</p>

                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                <a className="image d-flex justify-content-center align-items-center" style={{backgroundImage:'url(images/img6.png)'}} data-scrollax=" properties: { translateY: '-30%'}">
                </a>
                <div className="text">
                  <h4 className="subheading">UX/UI Designer</h4>
                  <h2 className="heading"><a>I think design is like a "magic wand." </a></h2>
                  <p>If services and products are magic to solve problems, the role of design is to become a medium for users to master them. We will make every effort to create a "magic wand" that matches the user.</p>

                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                <a className="image order-2 d-flex justify-content-center align-items-center" style={{backgroundImage:'url(images/img9.jpg)'}} data-scrollax=" properties: { translateY: '-30%'}">
                </a>
                <div className="text order-1">
                  <h4 className="subheading">Technology</h4>
                  <h2 className="heading"><a>Technology has the power to change the world and the lives of individuals, as the phrase “well-developed science and technology is indistinguishable from magic”.</a></h2>
                  <p> I want to be a person who can always catch up with the latest technology and respond to changes. I think that it is the mission of engineers and designers to spread innovation.</p>

                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                <a className="image d-flex justify-content-center align-items-center" style={{backgroundImage:'url(images/img10.jpg)'}} data-scrollax=" properties: { translateY: '-30%'}">
                </a>
                <div className="text">
                  <h4 className="subheading">Story</h4>
                  <h2 className="heading"><a>I love stories, movies, comics, and other content that has a story.</a></h2>
                  <p>Stories can get people's attention and make things easier to understand and remember. I believe that if you can study all the patterns of stories and make your output story-oriented, you can make a great return.</p>
                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                <a className="image order-2 d-flex justify-content-center align-items-center" style={{backgroundImage:'url(images/img7.jpg)'}} data-scrollax=" properties: { translateY: '-30%'}">
                </a>
                <div className="text order-1">
                  <h4 className="subheading">NOW</h4>
                  <h2 className="heading"><a>I am a student of information system at The University of Information Technology</a></h2>
                  <p>Learn more and make me better.</p>
                </div>
              </div>
            </div>
            <Router>
              <ul>
                <li>
                  <Link to="/skill">Show me More</Link>
                </li>
              </ul>
                <Switch>
                  <Route exact path="/skill">
                    <Skill/>
                  </Route>
                </Switch>
            </Router>
            </div>
          </section>
                  
          <section className="ftco-section ftco-counter" id="section-counter">
            <div className="container">
              <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                  <span>I love everthing</span>
                  <h2>Life is short to share emotion</h2>
                </div>
              </div>
              <div className="row d-flex justify-content-start">
                <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <span className="ftco-label">Years</span>
                      <strong className="number" data-number="21">0</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <span className="ftco-label">Days</span>
                      <strong className="number" data-number="7755">0</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-end">
                <div className="col-md-5 counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <span className="ftco-label">Cups of coffee</span>
                      <strong className="number" data-number="999">0</strong>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
                </div>
            </div>
            
        );
    }
};
