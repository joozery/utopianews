import { UiIcon } from "@/components/shared/ui-icon";
import Link from "@/components/shared/page-link";
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
      <p className="text-xs tracking-[.3em] text-gray-500">
        UTOPIA EVENTS · 404
      </p>
      <h1 className="text-3xl font-bold">ไม่พบกิจกรรมนี้</h1>
      <Link
        href="/events"
        className="rounded-full bg-black px-6 py-3 text-white"
      >
        กลับไปดูกิจกรรมทั้งหมด <UiIcon name="right" />
      </Link>
    </main>
  );
}
