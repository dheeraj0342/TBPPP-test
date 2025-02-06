
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
    return (
        <div>
            <UserForm onUserAdded={() => window.location.reload()} />
            <UserList />
        </div>
    );
};

export default App;