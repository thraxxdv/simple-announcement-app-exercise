import React, { useEffect, useState } from "react";
import Input from "./elements/Input";
import Button from "./elements/Button";
import { createAnnouncement, getAnnouncement } from "../../api/announcement";
import Handle422Error from "../../utils/Handle422Error";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function AnnouncementForm({announcementId = 0}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const router = useRouter();

  useEffect(() => {

    if (announcementId !== 0) {
      getAnnouncement(announcementId)
      .then(r => {
        let data = r.data;
        setTitle(data.title);
        setContent(data.content);
        setStartDate(data.start_date);
        setEndDate(data.end_date);
      })
      .catch(e => console.log(e))
    }

    return () => {
      setTitle("");
      setContent("");
      setStartDate("");
      setEndDate("");
    }
  }, [announcementId])
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (announcementId) {
      
    } else {
      createAnnouncement(title, content, startDate, endDate)
      .then((r) => {
        toast("Announcement added succesfully! Page will reload in 5 seconds...", {
          autoClose: false,
          type: "success"
        });
        setTimeout(() => {
          router.reload(window.location.pathname)
        }, 5000);
      })
      .catch((e) => {
        if (e.response.status == 422) {
          Handle422Error(e.response.data.errors);
        }
      });
    }
  };

  return (
    <form action="" className="p-5 shadow mt-4 rounded" onSubmit={handleSubmit}>
      <h1 className="fw-bold mb-4">Add New Announcement</h1>
      <Input
        name="title"
        containerClass="mb-4"
        label="Title:"
        value={title}
        onChangeCb={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <div className="mb-4">
        <label htmlFor="content">Content:</label>
        <textarea
          className="form-control"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="d-flex">
        <Input
          name="start_date"
          label="Start Date:"
          type="date"
          value={startDate}
          onChangeCb={(e) => setStartDate(e.target.value)}
          containerClass="flex-grow-1 me-2"
        />
        <Input
          name="end_date"
          label="End Date:"
          type="date"
          value={endDate}
          onChangeCb={(e) => setEndDate(e.target.value)}
          containerClass="flex-grow-1 ms-2"
        />
      </div>
      <Button
        label={announcementId ? "Update Announcement" : "Add Announcement"}
        additionalClasses="mt-4 mx-auto d-block"
      />
    </form>
  );
}

export default AnnouncementForm;
