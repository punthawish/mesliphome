import React, { useState } from "react";

// MESlip – Mobile App UI (User version)
// - LINE & Register are top buttons on Home (icons only)
// - Home = Summary Dashboard + buttons to go into Income (POS) & Expense pages
// - POS, Expense, Funding remain dedicated views
// - Lender removed

function TopBar({ title }) {
  return (
    <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b px-4 py-3 flex items-center justify-between">
      <div className="text-base font-semibold truncate">{title}</div>
      <div className="text-[11px] px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">SME Score: <b>78</b> (A-)</div>
    </div>
  );
}

function Stat({ label, value, tone = "gray" }) {
  const tones = {
    gray: "text-gray-800",
    green: "text-green-600",
    red: "text-red-600",
    blue: "text-blue-600",
    purple: "text-purple-600",
  };
  return (
    <div className="bg-gray-50 rounded-xl p-3 text-center">
      <div className="text-[11px] text-gray-500">{label}</div>
      <div className={`text-base font-bold ${tones[tone] || tones.gray}`}>{value}</div>
    </div>
  );
}

function Card({ title, subtitle, children, actions }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      {(title || subtitle) && (
        <div className="mb-2">
          {title && <div className="text-sm font-semibold">{title}</div>}
          {subtitle && <div className="text-[11px] text-gray-500">{subtitle}</div>}
        </div>
      )}
      {children}
      {actions && <div className="mt-3 flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

function HomeView({ go }) {
  return (
    <div className="space-y-3 p-3">
      {/* Quick Actions: LINE & Register */}
      <div className="grid grid-cols-2 gap-3">
        <button onClick={()=> alert('เปิด LINE OA (mock)')} className="w-full flex flex-col items-center justify-center py-3 bg-[#06C755] text-white rounded-xl">💬<div className="text-xs mt-1">LINE</div></button>
        <button onClick={()=> alert('ไปที่ Register (mock)')} className="w-full flex flex-col items-center justify-center py-3 bg-gray-800 text-white rounded-xl">📝<div className="text-xs mt-1">Register</div></button>
      </div>

      {/* KPI Snapshot */}
      <div className="grid grid-cols-2 gap-3">
        <Stat label="รายรับวันนี้" value="฿2,450" tone="green" />
        <Stat label="รายจ่ายวันนี้" value="฿1,250" tone="red" />
        <Stat label="กำไร (เดือนนี้)" value="฿9,400" tone="blue" />
        <Stat label="ข้อมูลครบ" value="&gt; 180 วัน" tone="purple" />
      </div>

      {/* Summary Monthly */}
      <Card title="สรุปรายเดือน">
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <div className="text-[11px] text-gray-500">รายรับ</div>
            <div className="font-bold">฿28,300</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <div className="text-[11px] text-gray-500">รายจ่าย</div>
            <div className="font-bold">฿18,900</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <div className="text-[11px] text-gray-500">กำไรสุทธิ</div>
            <div className="font-bold">฿9,400</div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button onClick={()=> go('pos')} className="w-full px-4 py-3 bg-green-600 text-white rounded-xl">ดูรายรับ (Income)</button>
          <button onClick={()=> go('expense')} className="w-full px-4 py-3 bg-red-600 text-white rounded-xl">ดูรายจ่าย (Expense)</button>
        </div>
      </Card>

      {/* Insights */}
      <Card title="อินไซต์">
        <ul className="text-[13px] text-gray-700 list-disc ml-5 space-y-1">
          <li>ช่วงขายดีที่สุด 11:00–13:00</li>
          <li>รายรับเดือนนี้ +15% จากเดือนก่อน</li>
          <li>รายจ่ายประจำคิดเป็น 45% ของทั้งหมด</li>
        </ul>
      </Card>
    </div>
  );
}

function ExpenseView() {
  return (
    <div className="space-y-3 p-3">
      <Card title="อัปโหลดสลิป (AI)">
        <label className="border-2 border-dashed border-gray-300 rounded-xl w-full h-36 flex flex-col items-center justify-center text-gray-500">
          <input type="file" className="hidden" />
          <span className="text-2xl">📄</span>
          <span className="text-[11px] mt-1">แตะเพื่อเลือกไฟล์ / ถ่ายรูป</span>
        </label>
        <div className="text-[11px] text-gray-500 mt-2">ระบบจะอ่านยอด/วันเวลา/ผู้ขาย และจัดหมวดอัตโนมัติ</div>
        <button className="mt-3 w-full px-4 py-3 bg-red-600 text-white rounded-xl">สแกนด้วย AI</button>
      </Card>
      <Card title="ค่าใช้จ่ายล่าสุด">
        <ul className="text-sm divide-y">
          <li className="py-2 flex justify-between"><span>12 ส.ค. 10:42</span><b>฿820</b><span className="text-gray-500">ต้นทุนวัตถุดิบ</span></li>
          <li className="py-2 flex justify-between"><span>11 ส.ค. 16:45</span><b>฿1,250</b><span className="text-gray-500">ค่าไฟ</span></li>
          <li className="py-2 flex justify-between"><span>11 ส.ค. 09:30</span><b>฿5,000</b><span className="text-gray-500">ค่าเช่า</span></li>
        </ul>
      </Card>
    </div>
  );
}

function PosView() {
  return (
    <div className="space-y-3 p-3">
      <Card title="ลงรายการขาย &amp; สร้าง QR">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <input className="border rounded-xl px-3 py-2" placeholder="ชื่อสินค้า/บริการ" />
          <input className="border rounded-xl px-3 py-2" placeholder="ยอดชำระ (฿)" />
          <input className="border rounded-xl px-3 py-2 col-span-2" placeholder="โน้ต (ไม่บังคับ)" />
        </div>
        <button className="mt-3 w-full px-4 py-3 bg-indigo-600 text-white rounded-xl">สร้าง QR ชำระเงิน</button>
        <div className="mt-3 flex items-center justify-center mx-auto w-40 h-40 bg-gray-50 border rounded-xl">QR</div>
        <div className="text-[11px] text-gray-500 mt-1">Thai QR (Dynamic) ตัวอย่าง • หมดเวลาใน 180s</div>
      </Card>
    </div>
  );
}

function FundingView() {
  return (
    <div className="space-y-3 p-3">
      <Card title="ยื่นขอเงินทุน">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <input className="border rounded-xl px-3 py-2" placeholder="จำนวนเงิน (฿)" defaultValue={150000} />
          <select className="border rounded-xl px-3 py-2">
            {[6,9,12,18,24,36].map((m)=> (<option key={m} value={m}>{m} เดือน</option>))}
          </select>
          <select className="border rounded-xl px-3 py-2 col-span-2">
            <option>หมุนเวียนกิจการ</option>
            <option>ซื้อวัตถุดิบ/คงคลัง</option>
            <option>ปรับปรุงร้าน/อุปกรณ์</option>
            <option>ขยายสาขา</option>
          </select>
        </div>
        <div className="text-[11px] text-gray-500 mt-2">จะส่งเฉพาะข้อมูลจำเป็น: SME Score, Cashflow Summary, P&amp;L Trend</div>
        <button className="mt-3 w-full px-4 py-3 bg-emerald-600 text-white rounded-xl">ยื่นคำขอด้วย SME Score</button>
      </Card>
      <Card title="ข้อเสนอจากพาร์ทเนอร์">
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
            <div>
              <div className="font-semibold">ธนาคาร A</div>
              <div className="text-[11px] text-gray-500">วงเงิน ฿50k–200k • โอกาสอนุมัติสูง</div>
            </div>
            <button className="px-3 py-2 bg-blue-600 text-white rounded-xl">ยื่นขอ</button>
          </div>
          <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
            <div>
              <div className="font-semibold">Fintech B</div>
              <div className="text-[11px] text-gray-500">วงเงิน ฿30k–150k • อนุมัติไว</div>
            </div>
            <button className="px-3 py-2 bg-blue-600 text-white rounded-xl">ยื่นขอ</button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("home");

  return (
    <div className="min-h-screen flex items-start justify-center bg-neutral-200">
      {/* Phone frame */}
      <div className="w-[390px] min-h-screen bg-white shadow-2xl relative">
        <TopBar title={{ home: "หน้าหลัก", pos: "POS / QR", expense: "รายจ่าย", funding: "ยื่นขอเงินทุน" }[tab]} />

        {/* Views */}
        <div className="pb-20">
          {tab === "home" && <HomeView go={setTab} />}
          {tab === "expense" && <ExpenseView />}
          {tab === "pos" && <PosView />}
          {tab === "funding" && <FundingView />}
        </div>

        {/* Bottom Nav */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-white border-t px-2 py-1">
          <div className="grid grid-cols-4 gap-1 text-xs">
            <button onClick={()=> setTab("home")} className={`py-2 rounded-xl ${tab==='home'?'bg-gray-100':''}`}>🏠<div>Home</div></button>
            <button onClick={()=> setTab("pos")} className={`py-2 rounded-xl ${tab==='pos'?'bg-gray-100':''}`}>📲<div>POS</div></button>
            <button onClick={()=> setTab("expense")} className={`py-2 rounded-xl ${tab==='expense'?'bg-gray-100':''}`}>🧾<div>Expense</div></button>
            <button onClick={()=> setTab("funding")} className={`py-2 rounded-xl ${tab==='funding'?'bg-gray-100':''}`}>🏦<div>Funds</div></button>
          </div>
        </div>
      </div>
    </div>
  );
}
