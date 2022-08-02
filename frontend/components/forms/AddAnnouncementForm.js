import React, { useState } from "react";
import Input from "./elements/Input";
import Button from "./elements/Button";

function AddAnnouncementForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <form action="" className="p-5 shadow mt-4 rounded">
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
        <Button label="Add Announcement" additionalClasses="mt-4 mx-auto d-block" />
    </form>
  );
}

export default AddAnnouncementForm;
