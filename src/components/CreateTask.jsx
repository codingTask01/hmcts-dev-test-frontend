import {useState} from 'react'

const CreateTask = ({postTask}) => {

  const [newTaskDTO, setNewTaskDTO] = useState(
    {
        title: "",
        description: "",
        status: "",
        dueDate: "",
        
    }
  )


  const handleTextValueChange = (e) => {
    const propertyName = e.target.name;
    const copiedTask = {...newTaskDTO};
    copiedTask[propertyName] = e.target.value;
    setNewTaskDTO(copiedTask);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    const createdTask = {...newTaskDTO}
    postTask(createdTask);
    setNewTaskDTO({
      title: "",
      description: "",
      status: "",
      dueDate: "",
    }); 
    navigate('/'); 
  }



  return (
    <>
      <article>
        <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input 
                  name="title"
                  id='title'
                  onChange={handleTextValueChange}
                  type="text" 
                  placeholder="Input title of task..."/>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input 
                  name="description"
                  id='description'
                  onChange={handleTextValueChange}
                  type="text" 
                  placeholder="Input description of task..."/>
            </div>
            <div>
              <label htmlFor="status">Status</label>
              <input 
                  name="status"
                  id='status'
                  onChange={handleTextValueChange}
                  type="text" 
                  placeholder="Input status of task..."/>
            </div>
            <div>
              <label htmlFor="dueDate">Due Date</label>
              <input 
                  name="dueDate"
                  id='dueDate'
                  onChange={handleTextValueChange}
                  type="text" 
                  placeholder="Input due date as YYYY-MM-DD..."/>
            </div>
            <div>
              <input type="submit" />
            </div>
        </form>
      </article>
    </>
  )

}

export default CreateTask