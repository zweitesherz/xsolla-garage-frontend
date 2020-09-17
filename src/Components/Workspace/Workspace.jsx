import React from 'react'
import styles from './WorkspaceStyles.module.css'
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader'
import Task from '../Task/Task'

const Workspace = ({ tasks }) => {
  return (
    <form>
      <div className={styles.workspace}>
        <WorkspaceHeader/>
        {tasks.map(task => (
          <Task key={task.id} id={task.id} title={task.title} bodyTask={task.text_content}/>
        ))}
      </div>
    </form>
  )
}
export default Workspace
