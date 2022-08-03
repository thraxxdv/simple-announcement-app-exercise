import React, { useState } from "react";
import AuthenticatedLayout from "../components/layouts/AuthenticatedLayout";
import AnnouncementForm from "../components/forms/AnnouncementForm";
import AnnouncementContainer from "../components/announcement_list/AnnouncementContainer";

function Dashboard() {

  const [announcementId, setAnnouncementId] = useState(0);

  return (
    <AuthenticatedLayout>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <AnnouncementForm announcementId={announcementId} />
          </div>
          <div className="col-lg-7">
            <AnnouncementContainer setSelectedAnnouncementId={setAnnouncementId} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default Dashboard;
