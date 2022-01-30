import React from "react";
import { v4 as uuid } from "uuid";

const TaskAddInput = ({ inputText, setInputText, setTaskList, taskList }) => {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    // カードを追加する
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskList.length}`,
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="タスクを追加"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
