import React, { useMemo } from "react";
import PageHeader from "@/components/page-header";
import PaymentBox from "@/components/payment-box";
export default function ProductPayment() {
  return (
    <main>
      <PageHeader title="Payment Page" />
      <div className="m-auto w-90">{<PaymentBox />}</div>
    </main>
  );
}
