import React, { useState } from "react";
import AuthenticatedLayout from "../components/layouts/AuthenticatedLayout";
import AnnouncementForm from "../components/forms/AnnouncementForm";
import AnnouncementContainer from "../components/announcement_list/AnnouncementContainer";
import Button from "../components/forms/elements/Button";
import { logout } from "../api/auth";
import {useRouter} from "next/router"

function Dashboard() {

  const router = useRouter();
  const [announcementId, setAnnouncementId] = useState(0);

  const handleLogout = () => {
    logout()
    .then(r => {
      localStorage.removeItem("token");
      router.push("/");
    })
    .catch(() => alert("There was an error logging out, please refresh the page and try again."))
  }

  return (
    <AuthenticatedLayout>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <AnnouncementForm announcementId={announcementId} />
            <Button
              label="Logout"
              btnType="btn-info"
              additionalClasses="mt-4 d-block mx-auto"
              onClickCb={handleLogout}
            />
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
