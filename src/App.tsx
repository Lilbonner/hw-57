import Navbar from "./components/Navbar/Navbar.tsx";
import UserForm from "./components/Form/Form.tsx";
import {useState} from "react";
import {User} from "./Types";
import Users from "./components/Users/UserList.tsx";

function App() {
    const [users, setUsers] = useState<User[]>([
    ]);

    const addUser = (user: User) => {
        setUsers((prev) => [...prev, user]);
    };
  return (
    <>
      <nav>
        <Navbar/>
      </nav>
        <main className="container-fluid">
            <div className="row mt-2">
                <div className="col-4">
                    <h3 className="text-center">User form</h3>
                    <UserForm onSubmit={addUser}/>
                </div>
                <div className="col-4">
                    <h3 className="text-center">User list</h3>
                    <Users users={users}/>
                </div>
            </div>
        </main>
    </>
  )
}

export default App
