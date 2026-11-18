import type { ReactNode } from "react";

type IconName =
  | "activity"
  | "arrowDown"
  | "arrowUp"
  | "bank"
  | "bell"
  | "calendar"
  | "chart"
  | "chevronDown"
  | "circleHelp"
  | "coins"
  | "creditCard"
  | "fileText"
  | "grid"
  | "search"
  | "settings"
  | "users";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const shapes: Record<IconName, ReactNode> = {
    activity: <><path d="M3 12h4l3-8 4 16 3-8h4" /></>,
    arrowDown: <><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></>,
    arrowUp: <><path d="M12 19V5" /><path d="m5 12 7-7 7 7" /></>,
    bank: <><path d="m3 10 9-7 9 7" /><path d="M5 10v9M9 10v9M15 10v9M19 10v9M3 21h18" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
    chart: <><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-5 5" /></>,
    chevronDown: <><path d="m7 10 5 5 5-5" /></>,
    circleHelp: <><circle cx="12" cy="12" r="9" /><path d="M9.6 9a2.5 2.5 0 1 1 4.2 1.8c-1 .9-1.8 1.2-1.8 2.7M12 17h.01" /></>,
    coins: <><ellipse cx="9" cy="6" rx="6" ry="3" /><path d="M3 6v5c0 1.7 2.7 3 6 3 1 0 1.9-.1 2.7-.4M3 11v5c0 1.7 2.7 3 6 3 1.1 0 2.1-.2 3-.5" /><ellipse cx="16" cy="16" rx="5" ry="2.5" /><path d="M11 16v3.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V16" /></>,
    creditCard: <><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="M2.5 10h19M7 15h3" /></>,
    fileText: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h8" /></>,
    grid: <><rect x="3" y="3" width="8" height="8" rx="2" /><rect x="13" y="3" width="8" height="5" rx="2" /><rect x="13" y="10" width="8" height="11" rx="2" /><rect x="3" y="13" width="8" height="8" rx="2" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.8 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.8-1l-1.7.6-1.4-2.4 1.4-1.1a7 7 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.6a8 8 0 0 1 1.8-1L13 7h2.8l.3 1.8a8 8 0 0 1 1.8 1l1.7-.6 1.4 2.4-1.4 1.1a7 7 0 0 1-.2 2.3Z" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
  };

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {shapes[name]}
    </svg>
  );
}

const navGroups: {
  label: string;
  items: { label: string; icon: IconName; active?: boolean }[];
}[] = [
  {
    label: "GENEL",
    items: [{ label: "Genel bakış", icon: "grid", active: true }],
  },
  {
    label: "İŞLETME",
    items: [
      { label: "Gelir ve giderler", icon: "activity" },
      { label: "Faturalar", icon: "fileText" },
      { label: "Müşteriler", icon: "users" },
      { label: "Raporlar", icon: "chart" },
    ],
  },
];

const metrics = [
  {
    label: "Toplam bakiye",
    value: "₺ 128.450",
    detail: "Tüm hesaplarınızda",
    icon: "bank" as const,
    iconClass: "bg-indigo-50 text-indigo-600",
    trend: "+%12,8",
    trendUp: true,
  },
  {
    label: "Bu ay gelir",
    value: "₺ 86.200",
    detail: "Geçen aya göre",
    icon: "arrowDown" as const,
    iconClass: "bg-emerald-50 text-emerald-600",
    trend: "+%8,4",
    trendUp: true,
  },
  {
    label: "Bu ay gider",
    value: "₺ 42.750",
    detail: "Geçen aya göre",
    icon: "arrowUp" as const,
    iconClass: "bg-orange-50 text-orange-600",
    trend: "+%3,1",
    trendUp: false,
  },
  {
    label: "Tahsil edilecek",
    value: "₺ 24.600",
    detail: "5 açık fatura",
    icon: "creditCard" as const,
    iconClass: "bg-sky-50 text-sky-600",
    trend: "2 gecikmiş",
    trendUp: false,
  },
];

const months = [
  { label: "Haz", income: 48, expense: 24 },
  { label: "Tem", income: 62, expense: 34 },
  { label: "Ağu", income: 55, expense: 29 },
  { label: "Eyl", income: 76, expense: 40 },
  { label: "Eki", income: 67, expense: 37 },
  { label: "Kas", income: 88, expense: 48 },
];

const transactions = [
  { title: "Mavi Ofis Mobilya", category: "Ofis gideri", date: "Bugün, 11:42", amount: "− ₺ 4.850", type: "expense" },
  { title: "Pusula Danışmanlık", category: "Hizmet geliri", date: "Bugün, 09:18", amount: "+ ₺ 12.000", type: "income" },
  { title: "NetBulut Yazılım", category: "Abonelik", date: "Dün, 16:05", amount: "− ₺ 1.250", type: "expense" },
  { title: "Ada Tasarım Atölyesi", category: "Proje ödemesi", date: "Dün, 10:32", amount: "+ ₺ 8.400", type: "income" },
];

const reminders = [
  { name: "Kuzey Gıda", label: "FTR-2025-018 · 2 gün gecikti", amount: "₺ 8.400", color: "bg-rose-500" },
  { name: "Mert Elektronik", label: "FTR-2025-021 · Bugün", amount: "₺ 5.200", color: "bg-amber-400" },
  { name: "Lale Kırtasiye", label: "FTR-2025-024 · 3 gün içinde", amount: "₺ 3.750", color: "bg-sky-500" },
];

function SectionHeading({ children }: { children: ReactNode }) {
  return <p className="px-3 pb-2 pt-6 text-[10px] font-bold tracking-[0.16em] text-slate-400">{children}</p>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-900 lg:flex">
      <aside className="hidden w-[248px] shrink-0 border-r border-slate-200/80 bg-white lg:flex lg:flex-col">
        <div className="flex h-[76px] items-center gap-3 border-b border-slate-100 px-6">
          <div className="flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white shadow-sm shadow-indigo-200">H</div>
          <div>
            <p className="text-[15px] font-bold tracking-tight text-slate-900">HesapPusula</p>
            <p className="text-[10px] font-medium tracking-[0.12em] text-slate-400">İŞLETME PANELİ</p>
          </div>
        </div>

        <div className="mx-4 mt-5 flex items-center gap-3 rounded-xl border border-slate-200/80 p-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-amber-50 text-sm font-bold text-amber-700">İ</div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-slate-800">İşletmem</p>
            <p className="mt-0.5 text-[10px] text-slate-400">Demo çalışma alanı</p>
          </div>
          <Icon name="chevronDown" size={16} />
        </div>

        <nav aria-label="Ana menü" className="flex-1 px-4 pb-5">
          {navGroups.map((group) => (
            <div key={group.label}>
              <SectionHeading>{group.label}</SectionHeading>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <div
                      aria-current={item.active ? "page" : undefined}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium ${
                        item.active
                          ? "bg-indigo-50 text-indigo-700"
                          : "text-slate-500"
                      }`}
                    >
                      <Icon name={item.icon} size={18} />
                      <span>{item.label}</span>
                      {item.label === "Faturalar" && (
                        <span className="ml-auto rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-rose-600">5</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <SectionHeading>TERCİHLER</SectionHeading>
          <ul className="space-y-1">
            <li className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-slate-500"><Icon name="settings" size={18} /><span>Ayarlar</span></li>
            <li className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-slate-500"><Icon name="circleHelp" size={18} /><span>Yardım merkezi</span></li>
          </ul>
        </nav>

        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <div className="flex size-9 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">FK</div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-slate-800">Hesap sahibi</p>
              <p className="text-[10px] text-slate-400">Başlangıç planı</p>
            </div>
            <Icon name="chevronDown" size={16} />
          </div>
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <header className="flex h-[76px] items-center justify-between border-b border-slate-200/80 bg-white px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white lg:hidden">H</div>
            <div>
              <p className="text-xs text-slate-400">HesapPusula <span className="px-1">/</span> Genel bakış</p>
              <h1 className="mt-0.5 text-sm font-semibold text-slate-800">İşletme özeti</h1>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 sm:flex"><Icon name="calendar" size={15} /> Son 30 gün <Icon name="chevronDown" size={14} /></span>
            <span className="relative flex size-9 items-center justify-center rounded-full text-slate-500"><Icon name="bell" size={19} /><span className="absolute right-1.5 top-1.5 size-2 rounded-full border-2 border-white bg-rose-500" /></span>
            <div className="flex size-9 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">FK</div>
          </div>
        </header>

        <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-600"><span className="size-1.5 rounded-full bg-indigo-500" /> Demo görünüm</div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[28px]">Günaydın 👋</h2>
              <p className="mt-1 text-sm text-slate-500">İşletmenizin finansal durumu tek bakışta.</p>
            </div>
            <p className="text-xs text-slate-400">Son güncelleme: bugün, 09:41</p>
          </div>

          <div className="mb-6 grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
            {metrics.map((metric) => (
              <section key={metric.label} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.025)]">
                <div className="flex items-start justify-between">
                  <p className="text-xs font-medium text-slate-500">{metric.label}</p>
                  <span className={`flex size-9 items-center justify-center rounded-xl ${metric.iconClass}`}><Icon name={metric.icon} size={18} /></span>
                </div>
                <p className="mt-4 text-[25px] font-bold tracking-tight text-slate-900">{metric.value}</p>
                <div className="mt-2 flex items-center gap-2 text-[11px]">
                  <span className={`font-semibold ${metric.trendUp ? "text-emerald-600" : "text-slate-500"}`}>{metric.trend}</span>
                  <span className="text-slate-400">{metric.detail}</span>
                </div>
              </section>
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1.65fr)_minmax(310px,0.9fr)]">
            <section className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-800">Gelir ve gider akışı</h3>
                  <p className="mt-1 text-xs text-slate-400">Son 6 ayın karşılaştırması</p>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5"><i className="size-2 rounded-full bg-indigo-500" /> Gelir</span>
                  <span className="flex items-center gap-1.5"><i className="size-2 rounded-full bg-indigo-100" /> Gider</span>
                </div>
              </div>
              <div className="mt-7 grid grid-cols-[34px_1fr] gap-3">
                <div className="flex h-[190px] flex-col justify-between pb-6 text-[10px] text-slate-400"><span>₺100b</span><span>₺75b</span><span>₺50b</span><span>₺25b</span><span>₺0</span></div>
                <div className="relative h-[190px]">
                  <div className="absolute inset-0 flex flex-col justify-between pb-6" aria-hidden="true"><div className="border-t border-dashed border-slate-100" /><div className="border-t border-dashed border-slate-100" /><div className="border-t border-dashed border-slate-100" /><div className="border-t border-dashed border-slate-100" /><div className="border-t border-slate-100" /></div>
                  <div className="relative flex h-full items-end justify-around gap-2 pb-6">
                    {months.map((month) => (
                      <div key={month.label} className="flex h-full flex-1 flex-col items-center justify-end">
                        <div className="flex h-[155px] w-full max-w-14 items-end justify-center gap-1.5">
                          <div className="w-3.5 rounded-t-md bg-indigo-500 sm:w-5" style={{ height: `${month.income}%` }} title={`${month.label} gelir`} />
                          <div className="w-3.5 rounded-t-md bg-indigo-100 sm:w-5" style={{ height: `${month.expense}%` }} title={`${month.label} gider`} />
                        </div>
                        <span className="absolute mt-[174px] text-[10px] text-slate-400">{month.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-800">Yaklaşan tahsilatlar</h3>
                  <p className="mt-1 text-xs text-slate-400">Takip etmeniz gereken faturalar</p>
                </div>
                <span className="rounded-lg bg-rose-50 px-2 py-1 text-[10px] font-semibold text-rose-600">5 açık</span>
              </div>
              <div className="mt-5 space-y-4">
                {reminders.map((reminder) => (
                  <div key={reminder.name} className="flex items-center gap-3">
                    <span className={`size-2 shrink-0 rounded-full ${reminder.color}`} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-slate-700">{reminder.name}</p>
                      <p className="mt-1 truncate text-[10px] text-slate-400">{reminder.label}</p>
                    </div>
                    <p className="whitespace-nowrap text-xs font-semibold text-slate-700">{reminder.amount}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between text-xs"><span className="text-slate-500">Toplam beklenen</span><span className="font-bold text-slate-800">₺ 24.600</span></div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-[62%] rounded-full bg-indigo-500" /></div>
                <p className="mt-2 text-[10px] text-slate-400">Bu ayki tahsilat hedefinin %62’si</p>
              </div>
            </section>
          </div>

          <section className="mt-5 overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-6">
              <div>
                <h3 className="text-sm font-bold text-slate-800">Son hareketler</h3>
                <p className="mt-1 text-xs text-slate-400">İşletme hesabınızdaki son işlemler</p>
              </div>
              <span className="rounded-lg border border-slate-200 px-3 py-2 text-[11px] font-semibold text-slate-500">Tüm işlemler</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-left">
                <thead><tr className="border-y border-slate-100 bg-slate-50/70 text-[10px] font-semibold uppercase tracking-wider text-slate-400"><th className="px-6 py-3">İşlem</th><th className="px-4 py-3">Kategori</th><th className="px-4 py-3">Tarih</th><th className="px-6 py-3 text-right">Tutar</th></tr></thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={`${transaction.title}-${index}`} className="border-b border-slate-50 last:border-0">
                      <td className="px-6 py-3.5"><div className="flex items-center gap-3"><span className={`flex size-8 items-center justify-center rounded-lg ${transaction.type === "income" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"}`}><Icon name={transaction.type === "income" ? "arrowDown" : "creditCard"} size={15} /></span><span className="text-xs font-semibold text-slate-700">{transaction.title}</span></div></td>
                      <td className="px-4 py-3.5 text-xs text-slate-500">{transaction.category}</td>
                      <td className="px-4 py-3.5 text-xs text-slate-400">{transaction.date}</td>
                      <td className={`px-6 py-3.5 text-right text-xs font-semibold ${transaction.type === "income" ? "text-emerald-600" : "text-slate-700"}`}>{transaction.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <p className="mt-5 text-center text-[10px] text-slate-400">Örnek görünüm · Buradaki rakamlar demo amaçlıdır; henüz gerçek işletme verisine bağlı değildir.</p>
        </div>
      </main>
    </div>
  );
}
