import { AppContainer } from "./styles";
import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Column text="To Do">
          <Card text="Generate app scaffold"></Card>
        </Column>
        <Column text="In Progress">
          <Card text="Learn Typescript"></Card>
        </Column>
        <Column text="Done">
          <Card text="Begin to use static typing"></Card>
        </Column>
        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={console.log}
          dark={true}
        ></AddNewItem>
      </AppContainer>
    </div>
  );
}

export default App;
