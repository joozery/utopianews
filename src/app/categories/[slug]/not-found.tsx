import { UiIcon } from "@/components/shared/ui-icon";
import Link from "@/components/shared/page-link";
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 px-6">
      <h1 className="text-3xl font-bold">ไม่พบหมวดหมู่นี้</h1>
      <Link
        href="/stories"
        className="rounded-full bg-black px-6 py-3 text-white"
      >
        ดูเรื่องราวทั้งหมด <UiIcon name="right" />
      </Link>
    </main>
  );
}
