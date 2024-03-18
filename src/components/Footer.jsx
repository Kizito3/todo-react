import styles from './footer.module.css'
export default function Footer({completedTodos, allTodos}){
    return(
        <div className={styles.footer}>
            <span className={styles.tasks}>Completed Tasks: {completedTodos}</span>
            <span>Tasks: {allTodos}</span>
        </div>
    )
}