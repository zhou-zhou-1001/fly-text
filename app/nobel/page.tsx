export const metadata = {
  title: "冰下信使｜2026 诺贝尔物理学奖",
  description: "2026 年诺贝尔物理学奖交互式解释：Francis Halzen、IceCube 与高能中微子天文学。",
};

export default function NobelPage() {
  return (
    <main className="fixed inset-0 bg-[#071018]">
      <iframe
        title="冰下信使｜2026 诺贝尔物理学奖"
        src="/nobel/index.html"
        className="h-full w-full border-0"
      />
    </main>
  );
}
