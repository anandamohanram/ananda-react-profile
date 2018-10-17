import React, {Component} from 'react'
import './ResumePage.css'
import OrganisationCard from '../OrganisationCard/OrganisationCard';
import igate from "../../assets/images/igate.jpg"
import capgemini from "../../assets/images/cg.jpg"
import srm from "../../assets/images/srm.png"
import unitec from "../../assets/images/unitec.png"

class ResumePage extends Component{
    render(){
        return(
        <section className="resumeWrapper">
            <h5><a href="https://drive.google.com/uc?export=download&id=1gBRDyA9LxtlJA-Om188q3o73kdUUgumt" download>Download Resume. </a></h5>

            <div className="resumeWrapper__content">
            <h3>Objective</h3> 
            <p>
            Being a passionate front-end developer with 3+ years of experience in the ICT industry, I am Highly
            enthusiastic, inquisitive and keen to create innovative solutions. I have extensive experience in
            implying business standards in all phases of project life cycle and am currently seeking to be a part of a
            collaborative organisation and apply my strong Front-End skills to continuously challenge my
            capabilities.
            </p>
            </div>

           
           <div className="resumeWrapper__content">  
            <h3>Experience</h3>          
            <OrganisationCard title="Anderson Corp, USA" time="MAR 2015 - JULY 2017"
                                subtitle="Senior Software Engineer - Capgemini, India"
                                img={capgemini} alt="CAPGEMINI"/>
           <p>
            Anderson Corp is an international window and door
            manufacturing enterprise found in 1903, with headquarters in
            Bayport, Minnesota. Employing approximately 12,000 people at more
            than 30 manufacturing, logistic centres and company owned retail
            locations, Andersen Corporation and the affiliates they comprise, are
            the largest window and door manufacturer in North America.
            Capgemini is involved in the design, development and maintenance
            of the supply chain management system of Anderson Corp.
        
        
            <li>Converted design concepts in Photoshop and Axure into fully
            functional web pages using HTML5, CSS3 and Vanilla JavaScript
            and jQuery.</li>
            <li>Implemented design changes, added new features and ensured
            the application is responsive on all test devices.</li>
            <li>Involved in analysing and understanding the customer
            requirements and the estimation of time and cost.</li>
            <li>Interaction with Business Analysts for understanding and
            optimizing requirements, preparation of program specifications
            and test cases.</li>
            <li>Debug complex issues pertaining to service, manufacturing, sales
            and distribution, and provide fixes to incidents raised by the
            customer.</li>
            <li>Experienced in both waterfall and Agile structured environments.</li>
            <li>Collaborated working with cross functional teams like the design
            team and the sales team.</li>
            <li>Coordinated work between a team of 5 members reporting from
            various locations using GIT.</li>
            </p>
            </div>


            <div className="resumeWrapper__content">
            <OrganisationCard title="Tyco EMEA, Germany" time="JULY 2014 - MAR 2015"
                                subtitle="Software Engineer – IGATE Global solutions, India"
                                img={igate} alt="IGATE"/>
            <p>
                Tyco International Ltd. is a diversified, global company that provides vital products and services to customers
                in more than 60 countries. Tyco is a leading provider of electronic security products and services, fire
                protection and detection products. IGATE (now Capgemini) supported Tyco EMEA through a maintenance
                project that was initiated to handle the development and customization requests of all the Tyco Fire and
                Security divisions across Continental Europe.
          
                <li>Created prototype web pages. </li>
                <li>Performed modification and maintenance of the code. </li>
                <li>Responsible for unit testing of various JavaScript modules. </li>
                <li>Performed user testing on various products. </li>
                <li>Interacted with clients and maintained a log of user issues and fixes. </li>
                <li>Fixed user issues within deadline. </li>
                <li>Maintain application availability and performance to all the employees in the supply chain management. </li>
                <li>Improvised internal work documents. </li>
              
            </p>
          </div>
            
          <div className="resumeWrapper__content">
              <h3>Education</h3>
              <OrganisationCard title="GRADUATE DIPLOMA IN COMPUTING | CGPA: 7.25/9.00" time="JULY 2017 - JULY 2018"
                                subtitle="Unitec Institute of Technology, Auckland, New Zealand"
                                img={unitec} alt="IGATE"/>

              <OrganisationCard title="BACHELOR OF TECHNOLOGY | CGPA: 8.66/10.00" time="JULY 2010 - JULY 2014"
                                subtitle="SRM University, Chennai, India"
                                img={srm} alt="IGATE"/>                 
                  
          </div>

          <div className="resumeWrapper__content">
              <h3>Achievements</h3>
              Created POCs for upcoming projects using JavaScript frameworks like ReactJs. <br />
              Successfully trained new associates and team members on the business objectives.<br />
              Pat on the Back Award-2016 for best performance during UAT.<br />
              Promoted to the role of Senior Software Engineer/Analyst within a year of joining the organization.    
          </div>

          <div className="resumeWrapper__content">
            <h3>Highlights</h3>
            Passion for the digital industry. <br />
            Experienced in using Linux as a development environment.<br />
            Experienced working with multicultural clients from different time zones (Germany and USA).<br />
            A self-learner who can quickly adapt to different technologies.<br />
            Excellent written and verbal communication skill.<br />
            Attention to detail and responsiveness of the product.<br />
            Related courses
            <ul><li>Internet and Website Development – A+ </li>
            <li>Web Application Development – A </li>
            <li>Cloud Application Design and Development – A- </li>
            <li>Information systems and analysis – A- </li> </ul>
        </div>


        </section>            
        );
    }
}

export default ResumePage;