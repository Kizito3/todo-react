import styles from "./header.module.css"
export default function Header () {
    return(
        <div className={styles.header}>
            <div>
              <h2>my todo list</h2>
            </div>
        </div>
    )
}