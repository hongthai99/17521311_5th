import React,{Component} from 'react';
export default class contact extends Component{
    render(){
        return(
            <div className="page">
                <div className= "colorlib-page">
                <section className="ftco-section contact-section">
            <div className="container mt-5">
              <div className="row d-flex mb-5 contact-info">
              <h2 className="mb-4">Get in Touch</h2>
                <div className="col-md-12 mb-4">
                  <h2 className="h4">Contact Information</h2>
                </div>
              </div>
              <div className="row block-9">
                <div className="col-md-6 pr-md-5">
                  <form action="https://api-assingment5-17521311.herokuapp.com/message" method="POST">
                    <div className="form-group">
                      <input type="text" className="form-control contactname" name="name" placeholder="Your Name"></input>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control contactemail" name="email" placeholder="Your Email"></input>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control contactsubject" name="subject" placeholder="Subject"></input>
                    </div>
                    <div className="form-group">
                      <textarea name="" id="" cols="30" rows="7" className="form-control contactmessage" name="mess" placeholder="Message"></textarea>
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5  contactsubmit"></input>
                    </div>
                  </form>
                </div>
                <div class="col-md-6" id="map"></div>
              </div>
            </div>
          </section>

                </div>
            </div>
        );
    }
};
