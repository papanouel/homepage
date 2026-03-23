import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function Disclosure() {
  const [lang, setLang] = useState<'en' | 'ja'>('en');

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 overflow-x-hidden font-sans">
      <div className="fixed inset-0 bg-mesh pointer-events-none z-0" />
      
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors w-fit"
          >
            <ChevronLeft className="w-5 h-5" />
            {lang === 'en' ? 'Back to Home' : 'ホームに戻る'}
          </a>
          
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-1 rounded-full">
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                lang === 'en' ? 'bg-emerald-500/20 text-emerald-400' : 'text-zinc-400 hover:text-white'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('ja')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                lang === 'ja' ? 'bg-emerald-500/20 text-emerald-400' : 'text-zinc-400 hover:text-white'
              }`}
            >
              日本語
            </button>
          </div>
        </div>

        <div className="glass p-10 md:p-14 rounded-[2.5rem]">
          <h1 className="text-3xl md:text-4xl font-bold mb-12">
            {lang === 'en' 
              ? 'Commercial Disclosure' 
              : '特定商取引法に基づく表記'}
          </h1>

          <div className="space-y-8">
            <DisclosureItem 
              label={lang === 'en' ? 'Legal Name' : '販売業者'}
              value="Frederic Nouel"
            />
            
            <DisclosureItem 
              label={lang === 'en' ? 'Address' : '所在地'}
              value={
                lang === 'en' 
                  ? 'We will disclose without delay if requested.' 
                  : '請求があったら遅滞なく開示します。'
              }
            />
            
            <DisclosureItem 
              label={lang === 'en' ? 'Phone number' : '電話番号'}
              value={
                lang === 'en' 
                  ? 'We will disclose without delay if requested.' 
                  : '請求があったら遅滞なく開示します。'
              }
            />
            
            <DisclosureItem 
              label={lang === 'en' ? 'Email address' : 'メールアドレス'}
              value="fred.nouel@gmail.com"
            />
            
            <DisclosureItem 
              label={lang === 'en' ? 'Head of Operations' : '運営統括責任者'}
              value="Frederic Nouel"
            />
            
            <DisclosureItem 
              label={lang === 'en' ? 'Additional fees' : '追加手数料等の追加料金'}
              value={
                lang === 'en' 
                  ? 'None.' 
                  : 'なし。'
              }
            />
            
            <DisclosureItem 
              label={lang === 'en' ? 'Exchanges & Returns Policy' : '返金・キャンセルポリシー'}
              value={
                lang === 'en' 
                  ? 'Due to the nature of consulting and digital services, we do not accept returns, exchanges, or refunds once the service has been provided or the digital product has been delivered.' 
                  : 'コンサルティングおよびデジタルサービスの性質上、サービスの提供後、またはデジタル商品の送信後における返品、交換、返金はお受けできません。'
              }
            />
            
            <DisclosureItem 
              label={lang === 'en' ? 'Delivery times' : '引渡時期'}
              value={
                lang === 'en' 
                  ? 'Consulting and mentoring sessions are provided at mutually agreed-upon times. For services through third-party platforms (e.g., MentorCruise, Upwork), delivery follows their respective terms.' 
                  : 'コンサルティングやメンタリングは、双方で合意したスケジュールにて提供されます。外部プラットフォーム（MentorCruise、Upwork等）を通じたサービスについては、各プラットフォームの規定に準じます。'
              }
            />
            
            <DisclosureItem 
              label={lang === 'en' ? 'Accepted payment methods' : '受け付け可能な決済手段'}
              value={
                lang === 'en' 
                  ? 'Credit cards (via secure Stripe invoicing), or as specified by the respective third-party platform.' 
                  : '請求書を通じたクレジットカード決済（Stripe）、または各外部プラットフォームが指定する決済方法。'
              }
            />
            
            <DisclosureItem 
              label={lang === 'en' ? 'Payment period' : '決済期間'}
              value={
                lang === 'en' 
                  ? 'Due upon receipt of invoice prior to the start of services, unless otherwise specified in the agreement. For third-party platforms, subject to their respective terms.' 
                  : '契約書に別段の定めがない限り、サービス開始前の請求書受領時に決済をお願いします。外部プラットフォームをご利用の場合は、各利用規約に準じます。'
              }
            />
            
            <DisclosureItem 
              label={lang === 'en' ? 'Price' : '販売価格'}
              value={
                lang === 'en' 
                  ? 'Determined and agreed upon directly with the client during consultation prior to billing. For third-party platforms, pricing is listed on the respective platform page.' 
                  : '請求前のご相談時に、クライアントと直接決定・合意した金額となります。外部プラットフォームをご利用の場合は、各プラットフォームのページに記載された金額となります。'
              }
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function DisclosureItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 border-b border-white/5 pb-8 last:border-0 last:pb-0">
      <div className="w-full md:w-1/3 text-zinc-500 font-medium">
        {label}
      </div>
      <div className="w-full md:w-2/3 text-zinc-300 font-light leading-relaxed">
        {value}
      </div>
    </div>
  );
}
