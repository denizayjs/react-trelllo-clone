import { AppContainer } from "./styles";
import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";

function App() {
  const { state } = useAppState();
  return (
    <div className="App">
      <AppContainer>
        {state.lists.map((list, i) => (
          <Column key={list.id} text={list.text} index={i} />
        ))}
        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={console.log}
          dark
        />
      </AppContainer>
    </div>
  );
}

export default App;
