import Chat from "./components/chat/Chat";    // Assuming 'Chat.jsx' is inside 'chat' folder
import Detail from "./components/detail/detail";
import List from "./components/list/list";


const App = () => {
    return (
        <div className="container">
            <List />
            <Chat />
            <Detail />
            
        </div>
    )
}

export default App
