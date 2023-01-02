type WithCreateTodoProps = {
  createTodo: () => void;
};

export const WithCreateTodo = <P extends WithCreateTodoProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const createTodoComponent = ({ ...props }) => {
    const createTodo = () => {
      console.log("createTodo");
    };

    return <WrappedComponent {...(props as P)} createTodo={createTodo} />;
  };
  return createTodoComponent;
};
