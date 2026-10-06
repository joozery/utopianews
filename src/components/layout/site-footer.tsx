import Link from "@/components/shared/page-link";
import { Logo } from "@/components/shared/logo";

export function SiteFooter() {
  return (
    <footer className="page-width">
      <div className="footer-top">
        <div>
          <Link href="/" aria-label="Utopia News หน้าหลัก">
            <Logo />
          </Link>
          <p className="footer-tagline">People · Culture · Better Living</p>
        </div>
        <nav aria-label="เมนูท้ายหน้า">
          <Link href="/">หน้าหลัก</Link>
          <Link href="/stories">เรื่องราวทั้งหมด</Link>
          <Link href="/categories/city">เมือง</Link>
          <Link href="/events">กิจกรรม</Link>
          <Link href="/about">เกี่ยวกับเรา</Link>
        </nav>
        <span className="footer-mark">
          GOOD PEOPLE.
          <br />
          BETTER PLACES.
        </span>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Utopia News. All rights reserved.
        </span>
        <span>เว็บไซต์ตัวอย่าง · เนื้อหาและกิจกรรมสำหรับสาธิตการออกแบบ</span>
      </div>
    </footer>
  );
}
