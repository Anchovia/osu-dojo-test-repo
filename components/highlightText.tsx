interface HighlightTextProps {
    name: string;
}

export default function HighlightText({ name }: HighlightTextProps) {
    return (
        <>
            <span className="">{name}</span>
            <span>님이 </span>
        </>
    );
}
