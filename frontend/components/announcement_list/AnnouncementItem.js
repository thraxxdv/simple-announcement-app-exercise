import moment from "moment";
import React from "react";
import { DateFormatter } from "../../utils/DateFormatter";
import AnnouncementStatus from "./AnnouncementStatus";

function AnnouncementItem({ title, content, startDate, endDate }) {
  return (
    <div className="shadow bg-white p-4 mb-3">
      <h4 className="fw-bold flex-grow-1">
        <AnnouncementStatus startDate={startDate} endDate={endDate} /> {title}
      </h4>
      <p>{content}</p>
      <p>
        {DateFormatter(startDate)} to {DateFormatter(endDate)}
      </p>
    </div>
  );
}

export default AnnouncementItem;
