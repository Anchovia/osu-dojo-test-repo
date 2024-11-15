interface HighlightTextProps {
    data: {
        name: string;
        modeName: string;
        danName: string;
        danLevel: string;
        achievedTime: string;
    };
}

export default function HighlightText({
    data: { name, modeName, danName, danLevel, achievedTime },
}: HighlightTextProps) {
    return (
        <>
            <span className="font-black">{name}님이</span>
            <span>{modeName}의</span>
            <span>{danName}에서</span>
            <span>{danLevel}단을 취득했습니다!</span>
            <span>({achievedTime})</span>
        </>
    );
}
