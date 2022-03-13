import React from "react";
import "./schedule.css";

const MobileSchedule = () => {
  return (
    <>
      <div className="mobile_schedule" >
        <div className="center_line"></div>
        <div className="right_arrow_container">
          <div className="right_horizontal_line">
            <div className="right_ellipse"></div>
          </div>
          <div className="right_schedule_content">
            <p>16th Mar 2022
                Introduction to PROMETHEAN
            </p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="right_arrow_container">
          <div className="right_horizontal_line">
            <div className="right_ellipse"></div>
          </div>
          <div className="right_schedule_content">
            <p>18th Mar 2022
            Topic Selection for Teams
            </p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="right_arrow_container">
          <div className="right_horizontal_line">
            <div className="right_ellipse"></div>
          </div>
          <div className="right_schedule_content">
            <p>23rd Mar 2022
            Mentoring Round
            </p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="right_arrow_container">
          <div className="right_horizontal_line">
            <div className="right_ellipse"></div>
          </div>
          <div className="right_schedule_content">
            <p>1st Apr 2022
            Elimination Round
            </p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="right_arrow_container">
          <div className="right_horizontal_line">
            <div className="right_ellipse"></div>
          </div>
          <div className="right_schedule_content">
            <p>6th Apr 2022
            Promethean first Round
            </p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="right_arrow_container">
          <div className="right_horizontal_line">
            <div className="right_ellipse"></div>
          </div>
          <div className="right_schedule_content">
            <p>10th Apr 2022
            Results !!!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Schedule = () => {
  return (
    <>
    <div className = "Desktop">
      <div className="center_line"></div>
      <div className="desktop_schedule">
        <div className="left_arrow_container">
          <div className="left_schedule_content">
            <p>26th Feb 2022
            Introduction to PROMETHEAN
            </p>
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
            <p>16th Mar 2022
            Register for Promethean
            </p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="left_arrow_container">
          <div className="left_schedule_content">
            <p>16th Mar 2022
            Topic Selection for Teams
            </p>
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
            <p>21st Mar 2022
            Mentoring Round
            </p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="left_arrow_container">
          <div className="left_schedule_content">
            <p>1st Apr 2022
            Elimination Round
            </p>
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
            <p>9th Apr 2022
            Promethean first Round
            </p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="left_arrow_container">
          <div className="left_schedule_content">
            <p>10th Apr 2022
            Results !!!
            </p>
          </div>
          <div className="left_horizontal_line">
            <div className="left_ellipse"></div>
          </div>
        </div>
      </div>
      </div>
      <MobileSchedule/>
    </>
  );
};

export default Schedule;
