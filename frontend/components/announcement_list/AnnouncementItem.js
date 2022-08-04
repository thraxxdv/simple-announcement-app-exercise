import moment from "moment";
import React from "react";
import { deleteAnnouncement } from "../../api/announcement";
import { DateFormatter } from "../../utils/DateFormatter";
import Button from "../forms/elements/Button";
import AnnouncementStatus from "./AnnouncementStatus";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function AnnouncementItem({
  id,
  title,
  content,
  startDate,
  endDate,
  setEditingId,
}) {
  const router = useRouter();

  const handleDelete = () => {
    deleteAnnouncement(id).then((r) => {
      toast(
        "Announcement DELETED succesfully! Page will reload in 3 seconds...",
        {
          autoClose: false,
          type: "success",
        }
      );

      setTimeout(() => {
        router.reload(window.location.pathname);
      }, 3000);
    });
  };

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
        onClickCb={() => {
          setEditingId(id);
          window.scrollTo({top: 0, behavior: "smooth"});
        }}
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
