import React, { useEffect, useState } from "react";
import "./ComingSoon.css";
import ContactSection from "./ContactSection"; 

const ComingSoon = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isLoading, setIsLoading] = useState(true); // State for preloader visibility

  useEffect(() => {
    // Preloader logic
    const preloaderTimeout = setTimeout(() => setIsLoading(false), 3000); // Adjust delay as needed

    // Check if an end date already exists in localStorage
    let endDate = localStorage.getItem("endDate");

    if (!endDate) {
      // If no end date exists, set a new one for one month from now
      const oneMonthFromNow = new Date();
      oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);
      endDate = oneMonthFromNow.getTime();
      localStorage.setItem("endDate", endDate); // Persist in localStorage
    } else {
      endDate = parseInt(endDate, 10); // Convert to integer
    }

    const countdown = () => {
      const now = new Date().getTime();
      const timeLeft = endDate - now;

      if (timeLeft > 0) {
        setTimeRemaining({
          days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeLeft / (1000 * 60)) % 60),
          seconds: Math.floor((timeLeft / 1000) % 60),
        });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Timer has ended
      }
    };

    const timerId = setInterval(countdown, 1000);
    countdown(); // Trigger countdown immediately on mount

    return () => {
      clearInterval(timerId); // Cleanup timer on component unmount
      clearTimeout(preloaderTimeout); // Cleanup preloader timeout
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="preloader" id="preloader">
          <div id="loader"></div>
        </div>
      )}

      {/* Main Content */}
      <div className="content-wrap" style={{ display: isLoading ? "none" : "block" }}>
        <div className="logo-box">
        <img src="/logo-i.jpg" alt="School Logo" />

        </div>
        <div className="cta-box">
          <h1>
            Exciting Updates <span className="highlight">Coming Soon!</span>
          </h1>
          <p>
            We're preparing an enhanced experience for our learning community.
            Leave your email, and we'll notify you when our new features and
            announcements go live.
          </p>
        </div>

        <form
          action="https://formspree.io/f/xvgppbqr"
          className="newsletter"
          method="post"
        >
          <input
            type="email"
            className="form-field"
            name="email"
            placeholder="Your Email"
          />
          <button type="submit" className="btn-main">
            Notify me!
          </button>
        </form>

        <div className="countdown">
          <p className="timer-cta">Our new platform will be available in:</p>
          <ul className="timer">
            <li>
              <div className="time-box">
                <span className="time">{timeRemaining.days}</span>
                <span className="time-txt">Days</span>
              </div>
            </li>
            <li>
              <div className="time-box">
                <span className="time">{timeRemaining.hours}</span>
                <span className="time-txt">Hours</span>
              </div>
            </li>
            <li>
              <div className="time-box">
                <span className="time">{timeRemaining.minutes}</span>
                <span className="time-txt">Minutes</span>
              </div>
            </li>
            <li>
              <div className="time-box">
                <span className="time">{timeRemaining.seconds}</span>
                <span className="time-txt">Seconds</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default ComingSoon;
