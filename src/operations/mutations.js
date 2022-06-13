export const createTodo = `
mutation createTodo($item) {
  createTodo(input: item:$name completed:false) {
    id
    item
    completed
  }
}`;

export const updateTodo = `
mutation updateTodo($id, $completed) {
  updateTodo(input: id:$id, completed:$completed) {
    id
    item
    completed
  }
}`;
