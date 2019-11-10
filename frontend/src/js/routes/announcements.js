import React from "react";
import NavBar from "../navbar";

class Announcements extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
              <NavBar/>
              {/*Main layout*/}
              <main className="mt-5 pt-5">
                <div className="container">
                  {/*Section: Cards*/}
                  <section >
                    {/* Heading & Description */}
                    <div className="wow fadeIn">
                      {/*Section heading*/}
                      <h2 className="h1 text-center mb-5">Notifications</h2>
                      <h5 className="text-center mb-5">Messages from organizations you subscribe to are listed below. </h5>
                    </div>
                    {/* Heading & Description */}
                    <hr className="mb-5" />
                    <div className="profiles">
                      <div className="profile">
                        <header className="heading">
                          <h3>Fraternity Apple Pie Alpha</h3>
                        </header>
                        <div className="toast" data-autohide="false" role="alert" aria-live="assertive" aria-atomic="true">
                          <div className="toast-header">
                            <svg className=" rounded mr-2" width={20} height={20} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                              <rect fill="#007aff" width="100%" height="100%" /></svg>
                            <strong className="mr-auto">Bootstrap</strong>
                            <small className="text-muted">11 mins ago</small>
                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="toast-body">
                            Hello, world! This is a toast message.
                          </div>
                        </div> 
                        <div className="toast" data-autohide="false" role="alert" aria-live="assertive" aria-atomic="true">
                          <div className="toast-header">
                            <svg className=" rounded mr-2" width={20} height={20} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                              <rect fill="#007aff" width="100%" height="100%" /></svg>
                            <strong className="mr-auto">Bootstrap</strong>
                            <small className="text-muted">11 mins ago</small>
                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="toast-body">
                            Hello, world! This is a toast message.
                          </div>
                        </div> 
                      </div>
                    </div>
                </section>
                </div>
              </main>
            </div>
          );
    }
}


export default Announcements;