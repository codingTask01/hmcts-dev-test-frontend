const TaskList = ({allTasks, deleteTask}) => {
    
    const mapTasks = () => {
        if(allTasks.length < 1) {
            return <p>Loading Tasks</p>
        }
        return allTasks.map((Task) => {
            if (Task) {
                return <Task />
            } else {
                return <p>Loading data...</p>
            }

        })
    } 
    
    return (
        <>
        <section id='list-section'>
            <h1>Tasks Dashboard</h1>
                <label htmlFor="search">Search</label>
                <input id = "search" type="text" placeholder="search..."/>
                <input className="search-button" type="submit" />
            <h2>Upcoming Tasks</h2>
            <div className="container">
                <ul>
                    {mapTasks()}
                </ul>
            </div>
        </section>
            
        </>
    )
}

export default TaskList