export default function Button({
    children,
    onClick,
    disabled,
}: {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}) {
    return <button disabled={disabled} style={{ backgroundColor: "white" }} onClick={onClick}>
        {children}
    </button>
}