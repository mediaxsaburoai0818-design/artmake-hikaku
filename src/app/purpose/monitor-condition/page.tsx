import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイク モニター条件まとめ｜掲載条件・応募資格を徹底解説【2026年最新】',
  description: 'アートメイクのモニター条件を徹底解説。写真・SNS公開範囲、応募資格、メディカルブロー・デイジークリニックなど大手クリニックのモニター情報、メリット・デメリット、注意点まで完全ガイド。',
  keywords: 'アートメイク モニター 条件,アートメイク モニター 応募,アートメイク モニター 掲載,アートメイク モニター 安い',
  openGraph: {
    title: 'アートメイク モニター条件まとめ｜掲載条件・応募資格を徹底解説',
    description: 'アートメイクのモニター条件・応募資格・掲載範囲を徹底解説。',
    type: 'article',
  },
}

const generalConditions = [
  { title: '施術前後の写真提供', desc: 'カウンセリング時・施術直後・施術2〜4週間後の定着写真を撮影し、クリニックに提供します。顔全体か施術部位のみかはクリニックにより異なります。' },
  { title: 'SNS・公式サイトへの症例掲載', desc: 'Instagram・X・公式ホームページ・YouTubeなど、クリニックが指定する媒体で症例が公開されます。掲載期間は無期限のことが多いです。' },
  { title: 'アンケートや口コミ投稿への協力', desc: '施術後の感想を口コミサイト・Googleレビューなどに投稿することが条件となる場合があります。' },
  { title: '指名不可・施術者の選択制限', desc: '研修中・ランク下位の施術者が担当するケースが多く、施術者の指定ができないことがあります。' },
  { title: '施術日時の指定', desc: '平日限定・特定時間帯限定など、クリニックの都合に合わせたスケジュール調整が必要な場合があります。' },
  { title: '再来院や経過観察への協力', desc: '定着写真撮影のため、施術後の指定日に再来院が必要となるケースがあります。' },
]

const clinicMonitors = [
  {
    name: 'メディカルブロー',
    score: 95,
    price: '1回28,000円〜（モニター価格）',
    condition: '施術のビフォーアフター写真・動画の提供、目元または口元のみの公開が原則。顔全体公開は任意。',
    discount: '最大25%OFF程度（施術者ランク・時期により変動）',
    note: '全国30院以上で実施。7Dストロークのモニターが人気。',
    highlight: true,
  },
  {
    name: 'デイジークリニック',
    score: 90,
    price: '最大50%OFF（新宿・福岡院）',
    condition: '一括払いのみ・招待コード必須・カウンセリング予約時限定。SNS掲載に同意できる方が対象。',
    discount: '最大50%OFF',
    note: '招待コードはキャンペーンごとに発行されるため、最新情報を公式で確認。',
    highlight: true,
  },
  {
    name: 'クレアージュ東京',
    score: 92,
    price: '要問い合わせ',
    condition: 'モニター募集は不定期。3回施術パッケージが基本のため、モニター条件も独自。',
    discount: '時期限定',
    note: '指名料無料・明朗会計で、通常料金でも比較的利用しやすい。',
  },
  {
    name: 'ファーストアートメイク',
    score: 87,
    price: '要問い合わせ',
    condition: '初回限定モニターが中心。銀座1院のため枠が少ない。',
    discount: '時期限定',
    note: '初心者向けの丁寧なカウンセリングが評判。',
  },
  {
    name: 'トゥルーデザインクリニック',
    score: 85,
    price: '要問い合わせ',
    condition: '症例掲載可能な方が対象。40-50代向けデザインのモニターが中心。',
    discount: '時期限定',
    note: '大阪心斎橋のみ。リタッチ29,700円〜の良心価格。',
  },
]

const merits = [
  { icon: '💰', title: '通常料金より大幅に安い', desc: '25〜50%OFFが相場。高品質な施術を低価格で受けられるのが最大のメリット。' },
  { icon: '🏥', title: '医療機関での施術は変わらない', desc: 'モニターでも有資格者（医師・看護師）が施術するため、安全性は通常と同じ。' },
  { icon: '📸', title: '経過観察が丁寧', desc: '症例写真撮影のため定着確認のフォローがあり、結果的に仕上がりを確認してもらえる。' },
]

const demerits = [
  { icon: '📷', title: '写真・SNS公開の負担', desc: '顔の一部が公式媒体で公開されるため、プライバシー面で気になる方には不向き。' },
  { icon: '👤', title: '施術者の指定ができないことが多い', desc: '希望する特定の施術者が選べない場合があり、相性の不安が残る。' },
  { icon: '📅', title: 'スケジュール調整の制約', desc: '平日限定・特定時間帯のみなど、社会人には不便なケースも。' },
]

const precautions = [
  { num: 1, title: '契約前に掲載範囲を必ず書面で確認', desc: '「目元のみ」「顔全体」「掲載媒体」「掲載期間」を契約書で明記してもらう。口頭説明だけで契約しない。' },
  { num: 2, title: 'キャンセル時のペナルティ確認', desc: 'モニター価格は通常料金より厳しいキャンセルポリシーが設定されている場合がある。' },
  { num: 3, title: 'デザインに制限がないか確認', desc: 'クリニックが練習したい技法に合わせる場合があるため、希望するデザインが可能か事前に確認。' },
  { num: 4, title: '掲載削除の条件確認', desc: '後から掲載を取り下げたい場合の対応可否・条件を事前に確認しておく。' },
]

const faqs = [
  { q: 'モニター条件はクリニックごとに大きく違いますか？', a: 'はい、クリニックごとに条件は異なります。掲載範囲（顔全体か部位のみか）、掲載媒体（SNS／公式サイト／動画）、掲載期間、施術者の指名可否などが主な違いです。必ずカウンセリング時に書面で確認しましょう。' },
  { q: 'モニター写真はどこまで公開されますか？', a: 'メディカルブローのように「目元または口元のみ」とする方針のクリニックもあれば、顔全体を公開するケースもあります。一般的には施術部位を中心に撮影され、顔全体の場合は目元にぼかしを入れるなどの配慮がされることもあります。' },
  { q: 'モニター価格で仕上がりは通常と同じですか？', a: '基本的には同じ品質です。モニターでも医療機関の有資格者が施術を行うため、安全性・技術水準は保たれます。ただし施術者の指名ができない場合があるため、特定の施術者を希望する方は通常料金を選ぶほうが確実です。' },
  { q: 'デイジークリニックの50%OFFモニターはどう応募しますか？', a: 'デイジークリニックの最大50%OFFは、新宿院・福岡院で一括払い・招待コード必須・カウンセリング予約時限定という条件が公式情報で案内されています。最新の招待コードや対象施術はクリニック公式SNS・公式サイトで確認してください。' },
  { q: 'モニターを途中でキャンセルしたらどうなりますか？', a: 'モニター価格は通常料金より厳しいキャンセル規定が設定されていることがあります。施術当日キャンセルや無断キャンセルの場合、通常料金との差額請求やモニター枠のペナルティが生じる可能性があります。契約前に必ず確認しましょう。' },
  { q: '施術後に掲載を取り下げてもらうことは可能ですか？', a: 'クリニックによります。契約書に「掲載期間」「取り下げ条件」が明記されていれば可能ですが、「掲載期間無期限・取り下げ不可」となっている場合もあります。公開前提での契約となるため、慎重に検討が必要です。' },
]

export default function MonitorConditionPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '目的別', href: '/purpose/cheap' },
            { name: 'モニター条件' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">MONITOR CONDITIONS</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイク モニター条件まとめ<br className="md:hidden" />掲載条件・応募資格を徹底解説</h1>
            <p className="text-[#6B6560] leading-relaxed">
              モニター価格は最大50%OFFになる一方、写真公開・SNS掲載など独自の条件があります。<br />
              応募前に知っておくべき条件・注意点を完全ガイドします。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>モニター制度の基本と一般的な応募条件</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>大手5クリニックのモニター条件比較</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>モニターのメリット・デメリット</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>契約前に確認すべき注意点4項目</li>
            </ul>
          </div>

          {/* モニターとは */}
          <h2 className="text-2xl font-bold mb-6 text-center">モニターとは？</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-[var(--pink-beige)]">
            <p className="text-[#6B6560] text-sm leading-relaxed">
              アートメイクの「モニター」とは、施術の症例写真・動画・口コミなどをクリニックのマーケティング素材として提供することを条件に、通常料金より安く施術を受けられる制度です。
              クリニックは質の高い症例事例を獲得でき、モニター側は費用を抑えられるため、双方にメリットのある仕組みとなっています。
              ただし、顔写真や個人情報がSNS・公式サイトに掲載されるため、条件の確認は慎重に行う必要があります。
            </p>
          </div>

          {/* 一般的なモニター条件 */}
          <h2 className="text-2xl font-bold mb-6 text-center">一般的なモニター条件</h2>
          <div className="space-y-4 mb-10">
            {generalConditions.map((c, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                  {c.title}
                </h3>
                <p className="text-[#6B6560] text-sm ml-9">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* クリニック別モニター情報 */}
          <h2 className="text-2xl font-bold mb-6 text-center">5クリニックのモニター条件比較</h2>
          <div className="space-y-5 mb-10">
            {clinicMonitors.map((c, i) => (
              <div key={i} className={`glass-card rounded-2xl p-6 ${c.highlight ? 'border-2 border-[var(--gold-light)]' : 'border border-[var(--pink-beige)]'}`}>
                <div className="flex flex-wrap items-baseline gap-2 mb-3">
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <span className="badge-gold text-xs">{c.score}点</span>
                  {c.highlight && <span className="bg-[var(--gold)] text-white text-xs px-2 py-0.5 rounded-full">公式情報あり</span>}
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-[var(--gold)]">モニター価格：</strong>{c.price}</p>
                  <p><strong className="text-[var(--gold)]">割引率：</strong>{c.discount}</p>
                  <p><strong className="text-[var(--gold)]">条件：</strong>{c.condition}</p>
                  <p className="text-[#8B8580] text-xs">※ {c.note}</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-[#8B8580] text-center">※ 最新の条件・価格は各クリニック公式情報をご確認ください。</p>
          </div>

          {/* メリット */}
          <h2 className="text-2xl font-bold mb-6 text-center">モニターのメリット</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {merits.map((m, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 text-center">
                <p className="text-3xl mb-2">{m.icon}</p>
                <h3 className="font-bold mb-2">{m.title}</h3>
                <p className="text-[#6B6560] text-xs">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* デメリット */}
          <h2 className="text-2xl font-bold mb-6 text-center">モニターのデメリット</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {demerits.map((d, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 text-center border border-red-100">
                <p className="text-3xl mb-2">{d.icon}</p>
                <h3 className="font-bold mb-2">{d.title}</h3>
                <p className="text-[#6B6560] text-xs">{d.desc}</p>
              </div>
            ))}
          </div>

          {/* 注意点 */}
          <h2 className="text-2xl font-bold mb-6 text-center">契約前に必ず確認すべき注意点</h2>
          <div className="space-y-4 mb-10">
            {precautions.map((p) => (
              <div key={p.num} className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm">{p.num}</span>
                  <h3 className="font-bold text-lg">{p.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm ml-12">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-6 text-center">よくある質問（FAQ）</h2>
          <div className="space-y-4 mb-10">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card rounded-2xl group border border-[var(--pink-beige)]">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-[var(--blush)] transition-colors flex justify-between items-center">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-[var(--gold)] text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 border-t border-[var(--pink-beige)] text-[#6B6560] leading-relaxed text-sm">
                  <span className="font-semibold text-[var(--gold)]">A.</span> {faq.a}
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center mb-12">
            <h2 className="text-xl font-bold mb-4">モニターでお得にアートメイクを始めよう</h2>
            <p className="text-[#6B6560] mb-6">実績豊富なクリニックのモニター制度なら、安心してお得に受けられます。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div>
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/purpose/monitor" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">モニター募集ガイド</p>
                <p className="text-xs text-[#8B8580] mt-1">安く受ける完全ガイド</p>
              </Link>
              <Link href="/purpose/cheap" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">安いクリニック特集</p>
                <p className="text-xs text-[#8B8580] mt-1">コスパ重視の選び方</p>
              </Link>
              <Link href="/review/medicalbrow" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">メディカルブロー口コミ</p>
                <p className="text-xs text-[#8B8580] mt-1">業界最大手の評判を徹底調査</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />
    </main>
  )
}
