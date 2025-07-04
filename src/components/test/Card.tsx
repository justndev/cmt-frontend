// components/ui/card.jsx
export function CardTest({ children, className = "" }) {
    return (
        <div className={`rounded-lg shadow p-4 bg-white ${className}`}>
            {children}
        </div>
    );
}

export function CardContentTest({ children, className = "" }) {
    return (
        <div className={`p-4 ${className}`}>
            {children}
        </div>
    );
}
