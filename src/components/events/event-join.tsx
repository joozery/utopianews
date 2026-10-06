"use client";

import { Dialog } from "radix-ui";
import styles from "./events.module.css";

export function EventJoin({
  title,
  registrationUrl = "",
}: {
  title: string;
  registrationUrl?: string;
}) {
  if (registrationUrl)
    return (
      <a
        className={styles.joinButton}
        href={registrationUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        เข้าร่วมกิจกรรม <span aria-hidden="true">↗</span>
      </a>
    );
  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.joinButton}>
        เข้าร่วมกิจกรรม <span aria-hidden="true">↗</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className={styles.joinDialog}>
          <Dialog.Close className={styles.joinClose} aria-label="ปิด">
            ×
          </Dialog.Close>
          <p className={styles.eyebrow}>JOIN THE EXPERIENCE</p>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description>
            กิจกรรมนี้ยังไม่เปิดลงทะเบียน
            รายละเอียดวันเวลาและช่องทางเข้าร่วมจะประกาศอีกครั้ง
          </Dialog.Description>
          <div className={styles.joinStatus}>รอเปิดลงทะเบียน</div>
          <Dialog.Close className={styles.joinButton}>รับทราบ</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
