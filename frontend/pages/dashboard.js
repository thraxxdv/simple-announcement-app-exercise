import React from "react";
import AuthenticatedLayout from "../components/layouts/AuthenticatedLayout";
import AddAnnouncementForm from "../components/forms/AddAnnouncementForm";
import AnnouncementContainer from "../components/announcement_list/AnnouncementContainer";

function Dashboard() {
  return (
    <AuthenticatedLayout>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <AddAnnouncementForm />
          </div>
          <div className="col-lg-7">
            <AnnouncementContainer />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default Dashboard;
