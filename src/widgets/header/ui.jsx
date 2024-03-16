const Header = () => {
    return (
        <header className="bg-gray-800 py-6 px-6 flex justify-between items-center border-b-2 border-black">
            <p className="uppercase text-2xl">FF dashboard</p>
            <div className="flex gap-x-2 items-center pr-8">
                <img className="block w-[40px] h-[40px]" src="https://placehold.jp/0efb94/ffffff/40x40.png" alt="Аватарка пользователя" />
                <p>User Name</p>
            </div>
        </header>
    );
};

export default Header;
