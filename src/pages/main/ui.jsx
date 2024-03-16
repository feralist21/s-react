import { Aside } from "@/widgets/aside/index.js";
import { Header } from "@/widgets/header";
import { Main } from "@/widgets/main";

const MainPage = () => {
    return (
        <div className="text-white h-screen w-full flex flex-col">
            <Header />
            <div className="flex-grow flex">
                <Aside className="w-1/6"/>
                <Main className="w-5/6"/>
            </div>
        </div>
    );
};

export default MainPage;
