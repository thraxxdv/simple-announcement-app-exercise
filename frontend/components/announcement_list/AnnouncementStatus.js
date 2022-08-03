import moment from "moment";
import React, { useEffect, useState } from "react";

function AnnouncementStatus({ startDate, endDate }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if ( moment().isSameOrAfter(startDate) && moment().isSameOrBefore(endDate)) {
      setActive(true);
    }
  }, []);

  return (
    <span className={`badge bg-${active ? "success" : "warning"}`}>
      {active ? "Active" : "Inactive"}
    </span>
  );
}

export default AnnouncementStatus;
