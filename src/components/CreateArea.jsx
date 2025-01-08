import { useState } from "react";

export default function CreateArea(props) {
  const [item, setItem] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setItem((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    props.onSub(event, item);
    setItem({title: "", content: ""});
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={item.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={item.content}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
