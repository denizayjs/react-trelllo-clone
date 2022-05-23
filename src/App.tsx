import { AppContainer } from "./styles";
import { Column } from "./Column";

import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";

function App() {
  const { state, dispatch } = useAppState();
  return (
    <div className="App">
      <AppContainer>
        {state.lists.map((list, i) => (
          <Column id={list.id} key={list.id} text={list.text} index={i} />
        ))}
        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
          dark
        />
      </AppContainer>
    </div>
  );
}

export default App;
