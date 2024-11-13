import Link from "next/link";

export default function Header() {
    return (
        <div className="w-screen h-24">
            <ul className="flex size-full items-center gap-12 ml-16">
                <li>
                    <Link className="text-3xl font-bold" href="/">
                        osu!Dojo
                    </Link>
                </li>
                <li>
                    <Link className="text-xl" href="/">
                        링크1
                    </Link>
                </li>
                <li>
                    <Link className="text-xl" href="/">
                        링크2
                    </Link>
                </li>
            </ul>
        </div>
    );
}
