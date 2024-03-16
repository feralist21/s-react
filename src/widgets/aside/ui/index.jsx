import { clsx } from "clsx";

const Aside = () => {
    return (
        <aside className={clsx("w-1/6", "bg-gray-800 py-6 block")}>
            <nav>
                <ul className="divide-y divide-gray-900">
                    <li className="px-6 py-3">
                        <a href="/">Пункт меню 1</a>{" "}
                    </li>
                    <li className="px-6 py-3">
                        <a href="/">Пункт меню 1</a>{" "}
                    </li>
                    <li className="px-6 py-3">
                        <a href="/">Пункт меню 1</a>{" "}
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;
