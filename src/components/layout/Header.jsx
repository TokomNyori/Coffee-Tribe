import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <nav className="flex items-center gap-7 text-gray-500 font-semibold">
                <Link className="text-primarySecond font-bold text-2xl" href={`/`} >
                    Coffee Tribe
                </Link>
                <Link href={`/`}>Home</Link>
                <Link href={`/about`}>Menu</Link>
                <Link href={`/contact`}>About</Link>
                <Link href={`/contact`}>Contact</Link>
            </nav>
            <nav className="flex items-center gap-4 text-gray-500 font-semibold">
                <Link href={`#`}>Login</Link>
                <Link className="bg-primarySecond text-white px-7 py-2 rounded-full" href={`/register`}>
                    Register
                </Link>
            </nav>
        </header>
    )
}

export default Header