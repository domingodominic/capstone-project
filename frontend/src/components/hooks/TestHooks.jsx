import React, { useReducer } from "react";

function TestHooks() {
  function reducer(state, action) {
    const { tasks } = state;
    switch (action.type) {
      case "ADD_TASK":
        const { title, status, category, taskID } = action.payload.taskItem;

        return {
          tasks: [...tasks, { title, status, category, taskID }],
        };

      case "TOGGLE_TASK":
        const { taskID: ID } = action.payload;

        return {
          ...state,
          tasks: tasks?.map((item) =>
            item.taskID === ID
              ? { ...item, status: !item.status, title: "UPDATED" }
              : item
          ),
        };
    }
  }
  const [task, dispatch] = useReducer(reducer, { tasks: [] });

  const addItem = () => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        taskItem: {
          title: "Going to work",
          status: true,
          category: "work",
          taskID: task?.tasks?.length + 1,
        },
      },
    });
  };

  const toggleTask = (taskID) => {
    dispatch({ type: "TOGGLE_TASK", payload: { taskID } });
  };

  const taskStyle = {
    border: "1px solid black",
    borderRadius: "1rem",
    padding: ".5rem",
    marginBottom: ".5rem",
  };

  return (
    <>
      <h1>TASKS</h1>

      {task?.tasks?.length !== 0 &&
        task.tasks?.map((item, i) => (
          <p key={i}>
            {
              <div style={taskStyle}>
                <p style={{ fontWeight: "bold" }}>Title</p>
                <p>{item.title}</p>
                <p>Task ID</p>
                <p>{item.taskID}</p>
                <p>status</p>
                <p style={item.status ? { color: "green" } : { color: "red" }}>
                  {item.status ? "Completed" : "On-going"}
                </p>
                <button onClick={() => toggleTask(item.taskID)}>
                  mark as completed
                </button>
              </div>
            }
          </p>
        ))}

      <button onClick={() => addItem()}>ADD TASK</button>
    </>
  );
}

export default TestHooks;
