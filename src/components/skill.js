import React,{Component} from 'react';
export default class Skills extends Component{
    render(){
        return(
            <div className="page">
                <div className= "colorlib-page">
                   <section className="ftco-section about-section">
                      <div className="container">
                        <div className="row mt-5 flex-column ftco-animate">
                           <div className="col-md-8">
                            <h2 className="mb-4">My Skills</h2>
                          </div>
                              <div className="col-md-6 animate-box">
                                  <div className="progress-wrap">
                                      <h4>Illustrator, Photoshop, XD</h4>
                                      <div className="progress">
                                           <div className="progress-bar color-1" role="progressbar" aria-valuenow="75"
                                            aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
                                          <span>75%</span>
                                            </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                  <div className="progress-wrap">
                                      <h4>HTML</h4>
                                      <div className="progress">
                                           <div className="progress-bar color-1" role="progressbar" aria-valuenow="60"
                                            aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                                          <span>60%</span>
                                            </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 animate-box">
                                  <div className="progress-wrap">
                                      <h4>SCSS</h4>
                                      <div className="progress">
                                           <div class="progress-bar color-1" role="progressbar" aria-valuenow="85"
                                            aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                                          <span>60%</span>
                                            </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                  <div className="progress-wrap">
                                      <h4>Javascript</h4>
                                      <div className="progress">
                                           <div class="progress-bar color-1" role="progressbar" aria-valuenow="90"
                                            aria-valuemin="0" aria-valuemax="100" style={{width:'50%'}}>
                                          <span>50%</span>
                                            </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 animate-box">
                                  <div className="progress-wrap">
                                      <h4>C++</h4>
                                      <div className="progress">
                                           <div className="progress-bar color-1" role="progressbar" aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100" style={{width:'67%'}}>
                                          <span>67%</span>
                                            </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                  <div className="progress-wrap">
                                      <h4>SQL Language</h4>
                                      <div className="progress">
                                           <div className="progress-bar color-1" role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100" style={{width:'58%'}}>
                                          <span>58%</span>
                                            </div>
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
