export type WithCreateTodoProps = {
  createTodo: (value: string) => void;
};

export const WithCreateTodo = <P extends WithCreateTodoProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const createTodoComponent = ({ ...props }) => {
    const createTodo = (value: string) => {
      console.log("createTodo", value);
    };

    return <WrappedComponent {...(props as P)} createTodo={createTodo} />;
  };
  return createTodoComponent;
};
