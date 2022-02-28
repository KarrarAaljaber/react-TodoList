import { useState, useEffect } from "react";

const Form = ({ addToDo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(title, content);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        <label htmlFor="content">Content </label>
        <textarea
          type="text"
          id="content"
          required
          name="content"
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></textarea>

        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
};

export default Form;
