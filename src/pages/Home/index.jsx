import Link from "@/components/LinkItem";

export default function Home() {
    return (
        <ul>
            <li>
                <Link to="/lista-links">Listar Links</Link>
            </li>
            <li>
                <Link to="/lista-links">Dashboard</Link>
            </li>
        </ul>
    );
}