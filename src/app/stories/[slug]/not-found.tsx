import { UiIcon } from "@/components/shared/ui-icon";
import Link from "@/components/shared/page-link";

export default function StoryNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
      <p className="text-xs tracking-[.3em] text-gray-500">UTOPIA NEWS · 404</p>
      <h1 className="text-3xl font-bold">ไม่พบเรื่องราวนี้</h1>
      <p className="text-gray-500">บทความอาจถูกย้าย หรือ URL ไม่ถูกต้อง</p>
      <Link
        href="/stories"
        className="rounded-full bg-black px-6 py-3 text-white"
      >
        กลับไปอ่านเรื่องราวอื่น <UiIcon name="right" />
      </Link>
    </main>
  );
}
