import React, { useEffect, useState } from "react";
import { getAnnouncements } from "../../api/announcement";
import AnnouncementItem from "./AnnouncementItem";

function AnnouncementContainer() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getAnnouncements()
      .then((r) => setAnnouncements(r.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="p-4">
      {announcements ? (
        announcements.map((obj) => (
          <AnnouncementItem
            key={obj.id}
            id={obj.id}
            title={obj.title}
            content={obj.content}
            startDate={obj.start_date}
            endDate={obj.end_date}
          />
        ))
      ) : (
        <p>Announcements is empty</p>
      )}
    </div>
  );
}

export default AnnouncementContainer;
