import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import {
  footerPose1,
  reason1,
  reason2,
  reason3,
  reason4,
  reason5,
  reason6,
} from "../Components";
import Footer from "../Components/Footer/Footer";
import JobData from "../Components/CareerPageComponent/JobData";
import Seo from "../Components/SEO/Seo";
import { Link } from "react-router-dom";

function Career() {
  
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg careerBg">
      <Seo
        title="MadPopo Best Hosting Solution which is Secure, Scalable, Reliable and Affordable for your Online Business"
        description="Our WordPress hosting services provide top-notch performance, security, high availability, load balancing, uto-scaling and reliability for your website. With optimized servers and expert support, your website online presence will be in good hands."
        keywords="WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling"
      />
      <Navbar />

      <div className="gb_infraWrap">
        <div className="container">
          <div className="gb_top_para">
            <div className="gb_pageTitle">
              <h1>Career</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="positionWrapper">
        <div className="container">
          <div className="careerTitleWrap">
            <h2>Your Career at MadPopo</h2>
            <p>See our job openings and fast track your career with MadPopo</p>
          </div>
          <div className="jobResonWrap">
            <h4>6 Reasons to join MadPopo</h4>
            <div className="jobReasonBoxWrap">
              <div className="col-md-4">
                <div className="jobReasonDesc">
                  <div className="reasonImg">
                    <img src={reason1} alt="Stability" />
                  </div>
                  <div className="reasonName">
                    <h3>Stability</h3>
                  </div>
                  <div className="reasonDesc">
                    <p>
                      We are a stable company with over 20 years proven track
                      record in the industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jobReasonDesc">
                  <div className="reasonImg">
                    <img src={reason2} alt="Diversity" />
                  </div>
                  <div className="reasonName">
                    <h3>Diversity</h3>
                  </div>
                  <div className="reasonDesc">
                    <p>
                      We believe in diversity and are committed to building
                      teams with a broad spectrum of backgrounds, perspectives
                      and skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jobReasonDesc">
                  <div className="reasonImg">
                    <img src={reason3} alt="Training" />
                  </div>
                  <div className="reasonName">
                    <h3>Training</h3>
                  </div>
                  <div className="reasonDesc">
                    <p>
                      We offer best-in-industry comprehensive job training for
                      support-related positions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jobReasonDesc">
                  <div className="reasonImg">
                    <img src={reason4} alt="Remote work" />
                  </div>
                  <div className="reasonName">
                    <h3>Remote work</h3>
                  </div>
                  <div className="reasonDesc">
                    <p>
                      We offer flexible remote working options and are committed
                      to keeping you safe in the current environment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jobReasonDesc">
                  <div className="reasonImg">
                    <img src={reason5} alt="Refreshments" />
                  </div>
                  <div className="reasonName">
                    <h3>Refreshments</h3>
                  </div>
                  <div className="reasonDesc">
                    <p>
                      We keep our offices well supplied with a wide variety of
                      snacks and drinks!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jobReasonDesc">
                  <div className="reasonImg">
                    <img src={reason6} alt="Growth" />
                  </div>
                  <div className="reasonName">
                    <h3>Growth</h3>
                  </div>
                  <div className="reasonDesc">
                    <p>
                      We supply the tools and give you the support to help your
                      career grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="jobOpeningTableWrap">
            <div className=" jobTable">
              <h3>Current Job Openings</h3>
              <table className="table mt-10 mobTable">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Position</th>
                    <th scope="col">Department</th>
                    <th scope="col">Location</th>
                    <th scope="col">Employment</th>
                  </tr>
                </thead>
                <tbody>
                  {JobData.map((domItem) => {
                    return (
                      <tr key={domItem.id}>
                        <Link to={`/career/${domItem.jdUrlName}`}>
                          <td>{domItem.techName}</td>
                          <td>{domItem.techDepartment}</td>
                          <td>{domItem.jobLocation}</td>
                          <td>{domItem.jobTime}</td>
                        </Link>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="noteWrap">
            <div className="noteBox">
              <div className="noteTitle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 22"
                  className="infoCircle"
                >
                  <path
                    fill="#242837"
                    d="M11 0a11 11 0 1011 11A11 11 0 0011 0zm0 4.88a1.86 1.86 0 11-1.86 1.86A1.86 1.86 0 0111 4.88zm2.48 11.27a.53.53 0 01-.53.53h-3.9a.53.53 0 01-.53-.54v-1.06a.53.53 0 01.53-.53h.53V11.7h-.53a.53.53 0 01-.53-.53V10.1a.53.53 0 01.53-.53h2.84a.53.53 0 01.53.53v4.44h.54a.53.53 0 01.53.53z"
                    className="svelte-oqbn2j"
                  ></path>
                </svg>
                <h5>Data Processing</h5>
              </div>
              <div className="noteData">
                <p>
                  We process your data to handle your job application and make
                  our decision on filling the vacancy as per our privacy notice.
                  Your application will only be considered for the vacancy you
                  apply for and will be deleted afterwards in accordance with
                  our privacy notice. If you wish your application to be
                  considered for other vacancies or future vacancies as well,
                  please include this expressly in your application email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wp_hostingFaqSection">
        <div className="pose_1 gb_fooPose">
          <img src={footerPose1} alt="Footer Imgage" />
        </div>
        <svg className="bg-wave-box-end-z1" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="footer-gradient">
              <stop offset="0%" stopColor="#212433" />
              <stop offset="39%" stopColor="#242837" />
              <stop offset="100%" stopColor="#0e1019" />
            </linearGradient>
          </defs>
          <path
            fill="rgb(36,40,55)"
            d="M0,128L80,138.7C160,149,320,171,480,192C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Footer />
    </div>
  );
}

export default Career;
