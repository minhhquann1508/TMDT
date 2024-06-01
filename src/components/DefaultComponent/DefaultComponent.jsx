import Header from "../Header/Header";

export default function DefaultComponent({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
