import { clsx } from "clsx";

const Main = ({ className }) => {
    return (
        <main className={clsx(className, "bg-gray-900 p-12")}>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet saepe fugit
                consequatur tenetur nisi rerum non! Eligendi assumenda tempora esse nesciunt
                asperiores, similique sapiente eveniet placeat laudantium sit autem aliquam?
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet saepe fugit
                consequatur tenetur nisi rerum non! Eligendi assumenda tempora esse nesciunt
                asperiores, similique sapiente eveniet placeat laudantium sit autem aliquam?
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet saepe fugit
                consequatur tenetur nisi rerum non! Eligendi assumenda tempora esse nesciunt
                asperiores, similique sapiente eveniet placeat laudantium sit autem aliquam?
            </p>
        </main>
    );
};

export default Main;
