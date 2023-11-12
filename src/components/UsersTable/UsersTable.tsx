import { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
  age: number;
}
interface Props {
  users: IUser[];
}
const UsersTable = ({ users }: Props) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
  });
  return (
    <div className="">
      <table>
        <thead>
          <th>Name</th>
          <th>Age</th>
        </thead>
        <tbody data-testid="users">
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showMessage && <div data-testid="welcome">Welcome John Wick</div>}
    </div>
  );
};

export default UsersTable;
