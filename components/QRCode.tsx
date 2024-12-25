'use client'

import { useEffect, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling'
import { Card } from "@nextui-org/react"

interface QRCodeProps {
  url: string;
  size?: number;
}

export default function QRCode({ url, size = 200 }: QRCodeProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const qrCode = new QRCodeStyling({
        width: size,
        height: size,
        type: "svg",
        data: url,
        dotsOptions: {
          color: "#4F46E5",
          type: "rounded"
        },
        backgroundOptions: {
          color: "#FFFFFF",
        },
        imageOptions: {
          crossOrigin: "anonymous",
          margin: 20
        }
      });

      qrCode.append(ref.current);
    }
  }, [url, size]);

  return (
    <Card className="p-6 flex flex-col items-center bg-transparent" shadow="none">
      <h3 className="mb-4">Scan to RSVP</h3>
      <div ref={ref} />
    </Card>
  );
}

