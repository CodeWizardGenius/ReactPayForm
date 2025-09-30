import React, { useMemo, useState } from "react";

export default function App() {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCvv] = useState("");

  const years = useMemo(() => {
    const current = new Date().getFullYear();
    return Array.from({ length: 10 }, (_, i) => String(current + i).slice(-2));
  }, []);

  const months = useMemo(() => Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")), []);

  const onSubmit = (e) => {
    e.preventDefault(); // sayfanın yenilenmesini engelle
    const payload = {
      nameOnCard,
      cardNumber,
      month: expMonth,
      year: expYear,
      cvv,
    };
    alert("\n" + JSON.stringify(payload, null, 2));
  };

  const fieldBase =
    "w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-[15px] leading-6 placeholder-neutral-400 outline-none focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200";

  const selectBase =
    "w-full appearance-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-[15px] leading-6 outline-none focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200";

  return (
    <div className="min-h-screen w-full bg-neutral-50 flex items-center justify-center p-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-2xl rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
        <div className=\"mb-6\">
          <h1 className=\"text-3xl font-bold tracking-tight text-neutral-900\">Ödeme Bilgileri</h1>
          <p className=\"mt-1 text-neutral-500\">Kredi kartı bilgilerinizi giriniz</p>
        </div>

        <label className=\"block text-[15px] font-semibold text-neutral-900\">Kart Üzerindeki İsim</label>
        <input
          className={fieldBase + " mt-2"}
          type=\"text\"
          placeholder=\"Ahmet Yılmaz\"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
          aria-label=\"Kart Üzerindeki İsim\"
        />

        <div className=\"mt-6\">
          <label className=\"block text-[15px] font-semibold text-neutral-900\">Kart Numarası</label>
          <input
            className={fieldBase + " mt-2"}
            inputMode=\"numeric\"
            placeholder=\"0000 0000 0000 0000\"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value.replace(/[^0-9 ]/g, ""))}
            aria-label=\"Kart Numarası\"
            maxLength={19}
          />
        </div>

        <div className=\"mt-6 grid grid-cols-1 gap-4 md:grid-cols-3\">
          <div>
            <label className=\"block text-[15px] font-semibold text-neutral-900\">Ay</label>
            <div className=\"relative mt-2\">
              <select
                className={selectBase + " pr-10"}
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value)}
                aria-label=\"Son Kullanma Ayı\">
                <option value=\"\">AA</option>
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <ChevronDownIcon />
            </div>
          </div>

          <div>
            <label className=\"block text-[15px] font-semibold text-neutral-900\">Yıl</label>
            <div className=\"relative mt-2\">
              <select
                className={selectBase + " pr-10"}
                value={expYear}
                onChange={(e) => setExpYear(e.target.value)}
                aria-label=\"Son Kullanma Yılı\">
                <option value=\"\">YY</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              <ChevronDownIcon />
            </div>
          </div>

          <div>
            <label className=\"block text-[15px] font-semibold text-neutral-900\">Güvenlik Kodu</label>
            <input
              className={fieldBase + " mt-2"}
              inputMode=\"numeric\"
              placeholder=\"123\"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ""))}
              maxLength={4}
              aria-label=\"Güvenlik Kodu\"
            />
          </div>
        </div>

        <button
          type=\"submit\"
          className=\"mt-8 w-full rounded-xl bg-black px-6 py-4 text-center text-[15px] font-semibold text-white hover:opacity-95 active:opacity-90\">
          Şimdi Öde
        </button>
      </form>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      className=\"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400\"
      viewBox=\"0 0 20 20\"
      fill=\"currentColor\"
      aria-hidden=\"true\">
      <path
        fillRule=\"evenodd\"
        d=\"M5.23 7.21a.75.75 0 011.06.02L10 10.168l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0l-4.24-3.36a.75.75 0 01-.02-1.06z\"
        clipRule=\"evenodd\"
      />
    </svg>
  );
}
