import TimeCard from "./TimeCard";
import "./Experience.css";
import "./AboutMe.css";

function Experience() {
  return (
    <div class="experience-container" id="experience">
      <h2 className="title">Experience</h2>
       <TimeCard 
        time_range="Feb 2025 — Apr 2025"
        header="IT Specialist - VN Service" 
        paragraph="As an IT Specialist supporting a professional tax 
        office, I delivered frontline technical support to maintain 
        reliable daily operations. I resolved over 20 hardware and 
        software issues across workstations, printers, and office display 
        systems, minimizing downtime during client-facing hours. My role 
        included configuring user accounts and enforcing basic security 
        practices to help safeguard sensitive client financial data. I also 
        restored and maintained in-office digital signage and connectivity, 
        contributing to improved visibility of promotional content and an 
        estimated 5% increase in client foot traffic." 
        
      />     
      <TimeCard 
        time_range="Apr 2022 — Aug 2022"
        header="Microchips and Robotics Intern - NASA CaSGC" 
        paragraph="As the team leader for a moon rover project, 
        I directed a group of five engineers in the design and 
        development of an automated moon rover. My role was pivotal 
        in conceptualizing and implementing a GPS navigation system 
        that significantly improved the rover’s navigation accuracy 
        and operational efficiency." 
      />
    </div>
  );
}

export default Experience;
