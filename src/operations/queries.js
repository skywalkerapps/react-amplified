export const listTodos = `
  query ListTodos() {
    listTodos() {
      items {
        id
        item
        completed
      }
    }
  }
`;
