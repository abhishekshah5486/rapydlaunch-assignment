import React, {useState} from "react";
import "./HeroSection.scss";
import star_icon from "../../assets/icons/star.png";

const StatItem = ({ stat_number, stat_description }) => {
  return (
    <div className="stat-item">
      <h2 className="stat-number">{stat_number}</h2>
      <p className="stat-description">{stat_description}</p>
    </div>
  );
};

const HeroSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [topic, setTopic] = useState('');

  
    const BookFreeLiveClassForm = () => {
        return (
        <div className="form-container">
            <h2>Book a Live Class, For Free!</h2>
            <form action="">
            <div className="form-group">
                <p>Your Topic of Interest</p>
                <select
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
                >
                <option value="" disabled>Select Program</option>
                <option value="Software Development">Software Development</option>
                <option value="Data Science & ML">Data Science & ML</option>
                <option value="DevOps">DevOps</option>
                </select>
            </div>
            <div className="form-group">
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                required
                />
            </div>
            <div className="form-group">
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
                />
            </div>
            <div className="form-group">
                <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone"
                required
                />
            </div>

            <button type="submit" className="book-class-btn">
              Book Free Live Class
            </button>

            <p className="existing-account">
              Already have an account? <a href="/login">Click here</a>
            </p>

            </form>
        </div>
        );
    };

  return (
    <div className="hero-section">
      <h1 className="hero-title">Become the Top 1% in Tech</h1>
      <div className="hero-content">
        <div className="left-hero-content">
          <div className="advisor-section">
            <h2>Talk to our Advisor</h2>
            <p>AND GET</p>
            <ul>
              <li>
                <img src={star_icon} alt="" />
                <p>
                  Personalized <b>Career Roadmap</b>
                </p>
              </li>
              <li>
                <img src={star_icon} alt="" />
                <p>
                  Free <b>Career Counselling</b>
                </p>
              </li>
              <li>
                <img src={star_icon} alt="" />
                <p>
                  Free Access to <b>Scaler Events</b>
                </p>
              </li>
            </ul>
            <button className="request-call-btn">REQUEST A CALL</button>
          </div>
          <div className="stats-section">
            <div className="stat-container">
              <StatItem
                stat_number="900+"
                stat_description="Placement Partners"
              ></StatItem>
              <StatItem
                stat_number="15K+"
                stat_description="Careers Transformed"
              ></StatItem>
              <StatItem
                stat_number="100+"
                stat_description="Capstone Projects"
              ></StatItem>
            </div>
          </div>
        </div>
        <div className="right-hero-content">
            <BookFreeLiveClassForm />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
