import moment from "moment";
import React from "react";
import { DateFormatter } from "../../utils/DateFormatter";
import Button from "../forms/elements/Button";
import AnnouncementStatus from "./AnnouncementStatus";

function AnnouncementItem({ id, title, content, startDate, endDate, setEditingId }) {

  const handleDelete = () => {
    console.log(id)
  }

  return (
    <div className="shadow bg-white p-4 mb-3">
      <h4 className="fw-bold flex-grow-1">
        <AnnouncementStatus startDate={startDate} endDate={endDate} /> {title}
      </h4>
      <p>{content}</p>
      <p>
        {DateFormatter(startDate)} to {DateFormatter(endDate)}
      </p>
      <Button
        label="Edit Announcement"
        type="button"
        btnType="btn-secondary"
        onClickCb={() => setEditingId(id)}
      />
      <Button
        label="Delete Announcement"
        type="button"
        btnType="btn-danger"
        additionalClasses="ms-3"
        onClickCb={handleDelete}
      />
    </div>
  );
}

export default AnnouncementItem;
