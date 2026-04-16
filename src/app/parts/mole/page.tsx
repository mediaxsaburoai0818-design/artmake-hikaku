import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'ほくろアートメイクとは？人気の位置・料金・持続期間を徹底解説【2026年最新】',
  description: 'ほくろアートメイクの施術方法、人気の位置（口元・目元・頬）と印象変化、料金相場（1箇所1〜2万円）、持続期間、注意点を徹底解説。自然なほくろで印象をアップしたい方必見。',
  keywords: 'ほくろ アートメイク,ほくろ アートメイク 料金,ほくろ アートメイク 位置,付けぼくろ アートメイク',
  openGraph: {
    title: 'ほくろアートメイクとは？人気の位置・料金・持続期間を徹底解説',
    description: 'ほくろアートメイクの施術方法・人気の位置・料金を徹底解説。',
    type: 'article',
  },
}

const popularPositions = [
  { position: '口元（下唇の横）', impression: 'セクシー・色気のある印象。マリリン・モンロー風。', popularity: '★★★★★', note: '最も人気の位置。表情が柔らかくなり、女性らしさがアップ。' },
  { position: '目元（目尻の下）', impression: '可愛らしい・愛嬌のある印象。泣きぼくろ風。', popularity: '★★★★★', note: '泣きぼくろとして人気。目元が印象的になり、記憶に残る顔に。' },
  { position: '頬（チーク付近）', impression: '上品・清楚な印象。ナチュラルな雰囲気。', popularity: '★★★★☆', note: '目立ちすぎず、さりげない印象チェンジに。自然に見えやすい位置。' },
  { position: '鼻の横', impression: 'キュート・個性的な印象。', popularity: '★★★☆☆', note: 'ユニークで個性的。小動物のような可愛らしさを演出。' },
  { position: '額・こめかみ', impression: '知的・ミステリアスな印象。', popularity: '★★★☆☆', note: '前髪の隙間からチラ見えする位置が人気。' },
  { position: '首・デコルテ', impression: '色気・大人の魅力。', popularity: '★★☆☆☆', note: 'ファッションとの組み合わせで魅力アップ。見える位置を計算して配置。' },
]

const meritDemerit = {
  merits: [
    { title: '簡単に印象を変えられる', desc: 'ほくろ1つで顔の印象がガラリと変わります。メイクで毎日描く手間がなくなり、いつでも理想の位置にほくろがある状態をキープ。' },
    { title: '施術時間が短い', desc: 'ほくろは1箇所あたり10〜15分程度と非常にスピーディー。カウンセリング含めても30〜60分で完了します。' },
    { title: '料金が手頃', desc: '1箇所10,000〜20,000円と、アートメイクの中で最も安い部位。複数箇所でも費用を抑えられます。' },
    { title: 'ダウンタイムがほぼない', desc: '施術範囲が極小のため、ダウンタイムはほぼなし。翌日からメイクも可能で、日常生活への影響は最小限。' },
    { title: '自然に見える', desc: '熟練の施術者なら、本物のほくろと見分けがつかないほど自然な仕上がりに。' },
  ],
  demerits: [
    { title: '位置の失敗は目立つ', desc: '顔の目立つ位置に施すため、位置や大きさを間違えると違和感が出ます。カウンセリングで入念にシミュレーションを。' },
    { title: '持続期間が短め', desc: '他の部位（1〜3年）に比べ、ほくろは1〜2年と短め。面積が小さいため色素が抜けやすい傾向があります。' },
    { title: '除去に時間がかかることも', desc: 'デザインに不満がある場合、レーザー除去には複数回の施術が必要になることがあります。' },
  ],
}

const clinicPrices = [
  { name: 'メディカルブロー', score: 95, price: '11,000円〜', note: '業界最大手。自然な仕上がりに定評。他部位との同時施術で割引あり。' },
  { name: 'クレアージュ東京', score: 92, price: '16,500円', note: '医師が丁寧にカウンセリング。位置の提案力が高い。' },
  { name: 'デイジークリニック', score: 90, price: '15,000円〜', note: 'SNSで人気。トレンド感のある位置提案が得意。' },
  { name: 'ファーストアートメイク', score: 87, price: '12,000円〜', note: 'コスパ重視。初回限定でさらにお得に。' },
  { name: 'トゥルーデザインクリニック', score: 85, price: '10,000円〜', note: '最安クラス。骨格分析に基づく位置提案。' },
]

const faqs = [
  { q: 'ほくろアートメイクは痛いですか？', a: '麻酔クリームを塗布するため、ほぼ痛みはありません。「チクッとする程度」「全く痛くなかった」という声が大半です。施術範囲が極小のため、他部位のアートメイクより痛みは少ないです。' },
  { q: 'ほくろアートメイクはどのくらい持ちますか？', a: '個人差はありますが、1〜2年程度です。ほくろは面積が小さいため、眉（1〜3年）より色素が抜けやすい傾向があります。薄くなったらリタッチで補充します。' },
  { q: '本物のほくろと見分けがつきますか？', a: '熟練の施術者であれば、本物とほぼ見分けがつきません。色味の調整や微妙な凹凸感の再現で自然な仕上がりを実現します。ただし、技術力が低いとペンで描いたような不自然な仕上がりになるリスクも。' },
  { q: '複数箇所を同時に施術できますか？', a: 'はい、2〜3箇所程度なら同時施術が可能です。複数箇所の場合はセット割引が適用されるクリニックもあります。全体のバランスを見ながら位置を決められるメリットも。' },
  { q: '施術後のダウンタイムはどのくらいですか？', a: 'ほくろアートメイクのダウンタイムはほぼありません。施術当日は少し赤みが出ることがありますが、翌日にはほぼ目立たなくなります。翌日からメイクも可能です。' },
  { q: '気に入らなかった場合、除去できますか？', a: 'レーザー除去で薄くすることが可能です。ただし、完全に消すには2〜3回の施術が必要になることもあります。また、1〜2年で自然に薄くなるため、待つという選択肢もあります。' },
]

export default function MolePage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '部位別', href: '/parts/eyebrow' },
            { name: 'ほくろ' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">MOLE ARTMAKE GUIDE</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">ほくろアートメイク<br className="md:hidden" />完全ガイド</h1>
            <p className="text-[#6B6560] leading-relaxed">
              ほくろ1つで顔の印象が変わる。人気の位置、料金相場、持続期間まで<br />
              ほくろアートメイクの全てを解説します。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>ほくろアートメイクの施術方法と仕上がり</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>人気の位置6選と印象変化</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>料金相場（1箇所1〜2万円）と5クリニック比較</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>持続期間・ダウンタイム・注意点</li>
            </ul>
          </div>

          {/* ほくろアートメイクとは */}
          <h2 className="text-2xl font-bold mb-6 text-center">ほくろアートメイクとは</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-[var(--pink-beige)]">
            <p className="text-[#6B6560] text-sm leading-relaxed mb-4">
              ほくろアートメイクとは、専用の色素を肌に注入し、自然なほくろを描く医療アートメイクの一種です。
              「付けぼくろ」をペンシルで毎日描く手間がなくなり、汗や水でも落ちない自然なほくろを手に入れられます。
              施術時間は1箇所わずか10〜15分と手軽で、アートメイクデビューにもおすすめの部位です。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[var(--blush)] rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">⏱</p>
                <p className="font-bold text-sm">施術時間</p>
                <p className="text-xs text-[#6B6560] mt-1">1箇所 約10〜15分</p>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">💰</p>
                <p className="font-bold text-sm">料金相場</p>
                <p className="text-xs text-[#6B6560] mt-1">1箇所 10,000〜20,000円</p>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">📅</p>
                <p className="font-bold text-sm">持続期間</p>
                <p className="text-xs text-[#6B6560] mt-1">約1〜2年</p>
              </div>
            </div>
          </div>

          {/* 人気の位置 */}
          <h2 className="text-2xl font-bold mb-6 text-center">人気の位置6選と印象変化</h2>
          <div className="space-y-4 mb-10">
            {popularPositions.map((p, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <h3 className="font-bold">{p.position}</h3>
                      <span className="text-[var(--gold)] text-sm">{p.popularity}</span>
                    </div>
                    <p className="text-sm text-[var(--foreground)] mb-1">{p.impression}</p>
                    <p className="text-xs text-[#6B6560]">{p.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* メリット・デメリット */}
          <h2 className="text-2xl font-bold mb-6 text-center">メリット・デメリット</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div>
              <h3 className="font-bold text-lg mb-4 text-center text-green-700">メリット</h3>
              <div className="space-y-3">
                {meritDemerit.merits.map((m, i) => (
                  <div key={i} className="glass-card rounded-2xl p-4 border-l-4 border-green-400">
                    <p className="font-bold text-sm mb-1">{m.title}</p>
                    <p className="text-[#6B6560] text-xs">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-center text-red-400">デメリット</h3>
              <div className="space-y-3">
                {meritDemerit.demerits.map((d, i) => (
                  <div key={i} className="glass-card rounded-2xl p-4 border-l-4 border-red-300">
                    <p className="font-bold text-sm mb-1">{d.title}</p>
                    <p className="text-[#6B6560] text-xs">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 料金比較 */}
          <h2 className="text-2xl font-bold mb-6 text-center">クリニック別料金比較</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full glass-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                  <th className="p-4 text-left text-sm">クリニック</th>
                  <th className="p-4 text-center text-sm">料金（1箇所）</th>
                  <th className="p-4 text-left text-sm">特徴</th>
                </tr>
              </thead>
              <tbody>
                {clinicPrices.map((c, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[var(--blush)]' : 'bg-white/50'}>
                    <td className="p-4 text-sm">
                      <span className="font-bold">{c.name}</span>
                      <span className="badge-gold text-xs ml-1">{c.score}点</span>
                    </td>
                    <td className="p-4 text-center text-sm font-bold text-[var(--gold)]">{c.price}</td>
                    <td className="p-4 text-sm text-[#6B6560]">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-[#8B8580] mt-2 text-center">※ 料金は税込の目安です。キャンペーンにより変動する場合があります。</p>
          </div>

          {/* 持続期間・注意点 */}
          <h2 className="text-2xl font-bold mb-6 text-center">持続期間と注意点</h2>
          <div className="glass-card rounded-2xl p-6 mb-10 border border-[var(--pink-beige)]">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-sm mb-3 text-[var(--gold)]">持続期間について</h3>
                <ul className="space-y-2 text-sm text-[#6B6560]">
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>持続期間は約1〜2年（個人差あり）</li>
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>面積が小さいため、眉より色抜けが早い</li>
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>脂性肌の方は色素が抜けやすい傾向</li>
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>1年に1回のリタッチで維持がおすすめ</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-sm mb-3 text-[var(--gold)]">注意点</h3>
                <ul className="space-y-2 text-sm text-[#6B6560]">
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>位置決めはカウンセリングで入念に</li>
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>施術後は患部を触らない（当日〜翌日）</li>
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>直後は少し大きく濃く見えるが自然に落ち着く</li>
                  <li className="flex items-start gap-2"><span className="text-[var(--gold)]">・</span>日焼けすると色素が早く薄くなるため注意</li>
                </ul>
              </div>
            </div>
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
            <h2 className="text-xl font-bold mb-4">ほくろアートメイクで印象アップ</h2>
            <p className="text-[#6B6560] mb-6">たった1つのほくろで、驚くほど印象が変わります。まずはカウンセリングで理想の位置を相談しましょう。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div>
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/parts/eyebrow" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">眉毛アートメイク</p>
                <p className="text-xs text-[#8B8580] mt-1">最も人気の部位を徹底解説</p>
              </Link>
              <Link href="/parts/lip" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">リップアートメイク</p>
                <p className="text-xs text-[#8B8580] mt-1">唇の血色感をアップする施術</p>
              </Link>
              <Link href="/knowledge/duration" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">持続期間ガイド</p>
                <p className="text-xs text-[#8B8580] mt-1">部位別の持続期間を解説</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
