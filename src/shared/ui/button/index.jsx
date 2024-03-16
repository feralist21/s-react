import { clsx } from "clsx";

const UiButton = ({ children, className }) => {
    return (
        <button className={clsx(className, "block")} type="button">
            {children}
        </button>
    );
};

export default UiButton;
