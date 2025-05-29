import UserCard from "./UserCard";
import type { User } from "../types/User";

type UserListProps = {
    users: User[];
};

export default function UserList({ users }: UserListProps) {

    return (
        <div>
            {users.map(user => (
                <UserCard key={user.email} name={user.name} username={user.username} email={user.email} />
            ))}
        </div>
    )
}
