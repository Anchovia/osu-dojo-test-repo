import HighlightText from "@/components/highlightText";

export default function Home() {
    const testDataObj = {
        name: "김계롤",
        modeName: "Mania",
        danName: "멋진단",
        danLevel: "Alpha",
        achievedTime: "5분전",
    };
    const testDataList = [testDataObj, testDataObj];
    return (
        <div>
            <div className="flex flex-col w-screen h-screen">
                <section className="*:ml-16 w-full h-80 bg-neutral-800 flex flex-col justify-center gap-4">
                    <h1 className="text-4xl font-bold">OSU!DOJO</h1>
                    <div>
                        <p>더 이상 성과 스샷에 의존하지 마세요.</p>
                        <p>가장 신뢰성 있는 단위 성과 인증 서비스</p>
                    </div>
                </section>
                <section className="w-full h-8 bg-neutral-700 flex gap-2 *:flex *:items-center ">
                    {testDataList.map((data, index) => (
                        <>
                            <HighlightText data={data} />
                            <span key={index} className="mx-4 last:hidden">
                                ///
                            </span>
                        </>
                    ))}
                </section>
                <section className="ml-16 w-full h-full flex items-center">
                    <div className="w-[500px] h-64 bg-neutral-600" />
                    <div className="ml-14 flex flex-col gap-6">
                        <h1 className="text-4xl font-bold">
                            단위 인정의 새로운 이정표
                        </h1>
                        <div className="max-w-[600px] text-base">
                            <p>
                                osu!Dojo는 여태껏 없었던 단위인정을 플레이하는
                                완전 새로운 방식입니다.
                            </p>
                            <p>
                                이곳에서 여러분이 원하는 단위에 도전하세요.
                                osu!Dojo 챗봇이 멀티 로비를 통해 여러분의 단위
                                인정 결과를 자동으로 판단해 합격/불합 여부를
                                가립니다.
                            </p>
                            <p>멋진 프로필 배너는 덤이죠!</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-screen h-screen"></div>
        </div>
    );
}
