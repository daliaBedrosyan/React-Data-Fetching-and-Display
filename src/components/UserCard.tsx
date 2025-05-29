type UserCardProps = {
    name: string;
    username: string;
    email: string;
};

export default function UserCard({ name, username, email }: UserCardProps) {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
}
