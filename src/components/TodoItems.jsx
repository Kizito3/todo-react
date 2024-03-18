import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
    // console.log("clicked for item", item);
  }

  function handleClick(name) {
    // console.log("clicked", item.name);
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    // console.log(todos);
  }
  const myClassName = item.done ? styles.completed : "";
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.todoflex}>
          <div className={styles.itemname}>
            <span
              className={myClassName}
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </span>
          </div>
          <span>
            <button
              onClick={() => handleDelete(item)}
              className={styles.deletebtn}
            >
              x
            </button>
          </span>
        </div>
        <hr className={styles.line} />
      </div>
    </div>
  );
}
