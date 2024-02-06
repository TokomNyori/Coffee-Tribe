import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <Link className="text-primary font-bold text-2xl" href={`/`} >
                Coffee Tribe
            </Link>
            <nav className="flex items-center gap-7 text-gray-500 font-semibold">
                <Link href={`/`}>Home</Link>
                <Link href={`/about`}>Menu</Link>
                <Link href={`/contact`}>About</Link>
                <Link href={`/contact`}>Contact</Link>
                <Link className="bg-primary text-white px-7 py-2 rounded-full" href={`/login`}>Login</Link>
            </nav>
        </header>
    )
}

export default Header