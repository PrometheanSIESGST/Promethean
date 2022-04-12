import React from "react";
import "./schedule.css";

const MobileSchedule = () => {
  return (
    <>
      <div className="mobile_schedule">
        <div className="center_line"></div>
        <div className="right_arrow_container">
          <div className="right_horizontal_line">
            <div className="right_ellipse"></div>
          </div>
          <div className="right_schedule_content">
            <p>10th April 2022 
              Topic Appending for Round 2</p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="right_arrow_container">
          <div className="right_horizontal_line">
            <div className="right_ellipse"></div>
          </div>
          <div className="right_schedule_content">
            <p>11th to 14th April 2022 
              Mentoring of Round 2</p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="right_arrow_container">
          <div className="right_horizontal_line">
            <div className="right_ellipse"></div>
          </div>
          <div className="right_schedule_content">
            <p>22rd April 2022 
              Final Mentoring</p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="right_arrow_container">
          <div className="right_horizontal_line">
            <div className="right_ellipse"></div>
          </div>
          <div className="right_schedule_content">
            <p>23rd Apr 2022 
              PROMETHEAN Round 2</p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="right_arrow_container">
          <div className="right_horizontal_line">
            <div className="right_ellipse"></div>
          </div>
          <div className="right_schedule_content">
            <p>23rd April 2022 
              Results !!!</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Schedule = () => {
  return (
    <>
      <div className="Desktop">
        <div className="center_line"></div>
        <div className="desktop_schedule">
          <div className="left_arrow_container">
            <div className="left_schedule_content">
              <p>10th Apr 2022 
                Topic Appending for Round 2</p>
            </div>
            <div className="left_horizontal_line">
              <div className="left_ellipse"></div>
            </div>
          </div>

          <div className="separator"></div>

          <div className="right_arrow_container">
            <div className="right_horizontal_line">
              <div className="right_ellipse"></div>
            </div>
            <div className="right_schedule_content">
              <p>11th to 14th Apr 2022 
                Mentoring of Round 2</p>
            </div>
          </div>

          <div className="separator"></div>

          <div className="left_arrow_container">
            <div className="left_schedule_content">
              <p>22rd Apr 2022 
                Final Mentoring</p>
            </div>
            <div className="left_horizontal_line">
              <div className="left_ellipse"></div>
            </div>
          </div>

          <div className="separator"></div>

          <div className="right_arrow_container">
            <div className="right_horizontal_line">
              <div className="right_ellipse"></div>
            </div>
            <div className="right_schedule_content">
              <p>23rd Apr 2022 
                PROMETHEAN Round 2</p>
            </div>
          </div>

          <div className="separator"></div>

          <div className="left_arrow_container">
            <div className="left_schedule_content">
              <p>23rd Apr 2022 
                Results !!!</p>
            </div>
            <div className="left_horizontal_line">
              <div className="left_ellipse"></div>
            </div>
          </div>
        </div>
      </div>
      <MobileSchedule />
    </>
  );
};

export default Schedule;
