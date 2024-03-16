const AuthPage = () => {
    return (
        <div className="bg-gray-900 w-full h-screen text-white flex items-center justify-center">
            <div className="p-10 shadow-md rounded-md">
                <h1 className="text-4xl block mb-4">Добро пожаловать!</h1>
                <form className="flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-2">
                        <label className="block" htmlFor="userName">
                            Логин
                        </label>
                        <input
                            className="block outline-none border-2 border-slate-400 p-2 text-black"
                            type="text"
                            name="userName"
                            id="userName"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label className="block" htmlFor="password">
                            Пароль
                        </label>
                        <input
                            className="block outline-none border-2 border-slate-400 p-2 text-black"
                            type="password"
                            name="password"
                            id="password"
                        />
                    </div>
                    <button
                        className="block py-3 outline-none bg-green-500 text-white"
                        type="submit"
                    >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;
