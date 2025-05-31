import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <form>
        <h2>Create Task</h2>
        <h3>Task Title</h3>
        <input
          type="text"
          placeholder="Enter the task title"
          name=""
          value=""
        />
        <h3>Description</h3>
        <input
          type="text"
          placeholder="Detailed description of the task (max 500 words) "
          name=""
          value=""
        />
        <h3>Date</h3>
        <input type="date" name="" value="" />
        <h3>Assign To</h3>
        <input type="text" name="" value="" />
        <h3>Category</h3>
        <input
          type="text"
          placeholder="Design, Development, etc."
          name=""
          value=""
        />
      </form>
    </div>
  )
}

export default CreateTask