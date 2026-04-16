import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクのリタッチはいつ必要？最適な時期・回数・料金を徹底解説【2026年最新】',
  description: 'アートメイクのリタッチ（メンテナンス）の最適なタイミング・回数・料金を徹底解説。部位別の推奨時期、5クリニックのリタッチ料金比較表、デザイン変更の可否まで網羅。',
  keywords: 'アートメイク リタッチ いつ,アートメイク リタッチ 料金,アートメイク メンテナンス,アートメイク 2回目',
  openGraph: {
    title: 'アートメイクのリタッチはいつ必要？最適な時期・回数・料金を徹底解説',
    description: 'アートメイクのリタッチの最適なタイミング・回数・料金を徹底解説。',
    type: 'article',
  },
}

const retouchTimings = [
  {
    part: '眉（アイブロウ）',
    firstRetouch: '1回目施術の1〜3ヶ月後',
    maintenanceRetouch: '1〜2年に1回',
    reason: '眉は表情の動きや皮脂の影響を受けやすく、他の部位に比べて色抜けが早い傾向。特に脂性肌の方は1年程度で薄くなることが多いため、定期的なリタッチが必要です。',
  },
  {
    part: 'リップ（唇）',
    firstRetouch: '1回目施術の1.5〜3ヶ月後',
    maintenanceRetouch: '1〜2年に1回',
    reason: '唇は皮膚が薄く、飲食や唇を舐める癖の影響で色素の定着率に個人差が大きい部位。2回目の施術で色味を調整し、理想の血色感に近づけることが重要です。',
  },
  {
    part: 'アイライン',
    firstRetouch: '1回目施術の1.5〜3ヶ月後',
    maintenanceRetouch: '2〜3年に1回',
    reason: 'アイラインは皮膚のターンオーバーが比較的遅い部位のため、眉やリップより色持ちが良い傾向。ただし、目元は皮膚が薄くデリケートなので、施術は慎重に行う必要があります。',
  },
]

const clinicRetouchPrices = [
  {
    name: 'メディカルブロー',
    score: 95,
    eyebrow: '20,000円〜（ランクにより変動）',
    lip: '30,000円〜',
    eyeline: '20,000円〜',
    note: 'アーティストランクにより料金が異なる。2回セット後のリタッチは割引あり。',
  },
  {
    name: 'クレアージュ東京',
    score: 92,
    eyebrow: '33,000円〜',
    lip: '44,000円〜',
    eyeline: '33,000円〜',
    note: '3回セットプランに含まれる場合あり。指名料無料で追加費用が発生しにくい。',
  },
  {
    name: 'デイジークリニック',
    score: 90,
    eyebrow: '33,000円〜',
    lip: '44,000円〜',
    eyeline: '33,000円〜',
    note: 'モニター価格あり。2回セット後のリタッチ料金が明朗。',
  },
  {
    name: 'ファーストアートメイク',
    score: 87,
    eyebrow: '35,000円〜',
    lip: '40,000円〜',
    eyeline: '30,000円〜',
    note: '初回セット料金がリーズナブルなため、トータルコストで見るとお得。',
  },
  {
    name: 'トゥルーデザインクリニック',
    score: 85,
    eyebrow: '29,700円〜',
    lip: '38,500円〜',
    eyeline: '27,500円〜',
    note: 'リタッチ料金が5院中最安。関西エリアでコストを抑えたい方におすすめ。',
  },
]

const retouchCounts = [
  { scenario: '初回施術（2回セット）', count: '2回', detail: 'ほとんどのクリニックが2回セットを推奨。1回目でベースを作り、2回目で色味・デザインを微調整。' },
  { scenario: '年1回メンテナンス', count: '1回/年', detail: '色の薄くなりが気になったタイミングで。1〜2年ごとが目安。' },
  { scenario: '3年間トータル', count: '3〜4回', detail: '初回2回セット＋メンテナンス1〜2回が一般的。' },
  { scenario: '5年間トータル', count: '4〜6回', detail: '初回2回セット＋メンテナンス2〜4回。長期的なコスト計算が重要。' },
]

const faqs = [
  {
    q: 'リタッチは必ず受けなければならないですか？',
    a: 'リタッチは必須ではありませんが、受けることを強く推奨します。1回の施術だけでは色素の定着率が30〜50%程度のため、2回目のリタッチで色の補充とデザインの微調整を行うことで、より自然で長持ちする仕上がりになります。メンテナンスリタッチは、色が薄くなったと感じたタイミングで受ければOKです。',
  },
  {
    q: 'リタッチの時に前回と違うデザインに変更できますか？',
    a: 'はい、リタッチ時のデザイン変更は可能です。ただし、前回の色素が残っている状態での変更となるため、大幅なデザイン変更は難しい場合があります。眉の太さを少し変える、角度を微調整するなどの範囲であれば問題ありません。大きく変えたい場合は、前回の色素が十分に薄くなってから（1〜2年後）の施術をおすすめします。',
  },
  {
    q: 'リタッチは前回と同じクリニックで受けるべきですか？',
    a: '同じクリニックで受けるのがベストです。カルテに前回の色素の配合やデザイン情報が記録されているため、一貫性のある仕上がりが期待できます。また、同院でのリタッチは割引料金が適用されることが多いです。別のクリニックで受ける場合は、前回の施術内容を伝え、十分なカウンセリングを受けましょう。',
  },
  {
    q: 'リタッチしないとアートメイクはどうなりますか？',
    a: 'リタッチしなくても健康上の問題はありません。1〜3年かけて自然に薄くなり、最終的にはほぼ目立たなくなります。ただし、退色のスピードは均一ではないため、色がまだらに残る可能性があります。完全に消えるまでの期間は個人差が大きく、肌質や使用した色素によって異なります。',
  },
  {
    q: 'リタッチのダウンタイムは初回より軽いですか？',
    a: 'はい、リタッチのダウンタイムは初回より軽い傾向があります。初回は広範囲に色素を入れるため赤みや腫れが出やすいですが、リタッチは色が薄い部分を中心に補充するため、施術範囲が限定的です。ただし、個人差があるため、大事なイベント前は余裕を持ったスケジュールをおすすめします。',
  },
  {
    q: '他院で受けたアートメイクのリタッチは可能ですか？',
    a: '多くのクリニックで他院施術のリタッチに対応しています。ただし、他院リタッチの場合は料金が割増になるケースや、使用している色素の種類によっては対応できない場合もあります。メディカルブロー（95点）やクレアージュ東京（92点）では他院リタッチメニューも用意されています。事前にカウンセリングで相談しましょう。',
  },
]

export default function RetouchPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: 'リタッチガイド' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">RETOUCH GUIDE</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイクのリタッチ<br className="md:hidden" />いつ・何回・いくら？</h1>
            <p className="text-[#6B6560] leading-relaxed">
              リタッチ（メンテナンス）の最適なタイミングから料金まで。<br />
              長くキレイを保つために知っておきたい全知識を解説します。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>リタッチとは何か・なぜ必要なのか</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>部位別の最適なリタッチタイミング</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>5クリニックのリタッチ料金比較表</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>リタッチ時のデザイン変更について</li>
            </ul>
          </div>

          {/* リタッチとは */}
          <div className="glass-card rounded-3xl p-8 mb-10 border border-[var(--pink-beige)]">
            <h2 className="text-2xl font-bold mb-4">リタッチとは？</h2>
            <p className="text-[#6B6560] mb-4 leading-relaxed">
              リタッチとは、アートメイクの<strong>色の補充・デザインの微調整</strong>を行うメンテナンス施術のことです。アートメイクは1回の施術では色素が十分に定着しないため、通常2回セットでの施術が推奨されています。
            </p>
            <p className="text-[#6B6560] leading-relaxed">
              また、アートメイクは時間とともに自然に薄くなるため、キレイな状態を保つには定期的なメンテナンスリタッチが必要です。リタッチのタイミングは部位や肌質によって異なりますが、一般的には<strong>1〜2年に1回</strong>が目安です。
            </p>
          </div>

          {/* なぜ必要か */}
          <h2 className="text-2xl font-bold mb-8 text-center">リタッチが必要な3つの理由</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { num: 1, title: '色素の定着率向上', desc: '1回目の施術では色素の定着率は30〜50%程度。2回目のリタッチで色を補充することで、定着率が大幅に向上し、色持ちが1〜3年に伸びます。' },
              { num: 2, title: 'デザインの微調整', desc: '1回目の施術後に色が定着すると、微妙な左右差や色ムラが見えてくることがあります。リタッチでこれらを修正し、より理想的な仕上がりに近づけます。' },
              { num: 3, title: '美しい状態の維持', desc: 'アートメイクは永久ではなく、1〜3年で自然に薄くなります。定期的なリタッチで色を補充することで、常にキレイな状態を保てます。' },
            ].map((item) => (
              <div key={item.num} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{item.num}</span>
                  <h3 className="font-bold">{item.title}</h3>
                </div>
                <p className="text-sm text-[#6B6560]">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 部位別タイミング */}
          <h2 className="text-2xl font-bold mb-8 text-center">部位別リタッチの最適タイミング</h2>
          <div className="space-y-6 mb-12">
            {retouchTimings.map((timing, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <h3 className="text-lg font-bold mb-3">
                  <span className="badge-gold px-3 py-1 rounded-full text-sm mr-2">{timing.part}</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div className="bg-[var(--blush)] rounded-xl p-4">
                    <p className="text-sm"><strong className="text-[var(--gold)]">初回リタッチ：</strong>{timing.firstRetouch}</p>
                  </div>
                  <div className="bg-[#F0FAF0] rounded-xl p-4">
                    <p className="text-sm"><strong className="text-green-700">メンテナンス：</strong>{timing.maintenanceRetouch}</p>
                  </div>
                </div>
                <p className="text-sm text-[#6B6560]">{timing.reason}</p>
              </div>
            ))}
          </div>

          {/* リタッチ回数の目安 */}
          <h2 className="text-2xl font-bold mb-8 text-center">リタッチの回数目安</h2>
          <div className="glass-card rounded-3xl p-6 mb-12 border border-[var(--gold-light)]">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--blush)]">
                    <th className="p-3 text-left font-bold">シナリオ</th>
                    <th className="p-3 text-center font-bold">回数</th>
                    <th className="p-3 text-left font-bold">詳細</th>
                  </tr>
                </thead>
                <tbody>
                  {retouchCounts.map((item, i) => (
                    <tr key={i} className="border-b border-[var(--pink-beige)]">
                      <td className="p-3 font-semibold">{item.scenario}</td>
                      <td className="p-3 text-center text-[var(--gold)] font-bold">{item.count}</td>
                      <td className="p-3 text-[#6B6560]">{item.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 5クリニック リタッチ料金比較表 */}
          <h2 className="text-2xl font-bold mb-8 text-center">5クリニック リタッチ料金比較表</h2>
          <div className="glass-card rounded-3xl p-6 mb-12 border border-[var(--gold-light)]">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                    <th className="p-3 text-left rounded-tl-xl">クリニック</th>
                    <th className="p-3 text-center">眉リタッチ</th>
                    <th className="p-3 text-center">リップリタッチ</th>
                    <th className="p-3 text-center rounded-tr-xl">アイラインリタッチ</th>
                  </tr>
                </thead>
                <tbody>
                  {clinicRetouchPrices.map((clinic, i) => (
                    <tr key={i} className={`border-b border-[var(--pink-beige)] ${clinic.name === 'トゥルーデザインクリニック' ? 'bg-[var(--blush)]' : ''}`}>
                      <td className="p-3">
                        <span className="font-bold">{clinic.name}</span>
                        <span className="text-[var(--gold)] text-xs ml-1">（{clinic.score}点）</span>
                        {clinic.name === 'トゥルーデザインクリニック' && (
                          <span className="badge-gold text-xs px-2 py-0.5 rounded-full ml-1">最安</span>
                        )}
                      </td>
                      <td className={`p-3 text-center ${clinic.name === 'トゥルーデザインクリニック' ? 'font-bold text-[var(--gold)]' : ''}`}>{clinic.eyebrow}</td>
                      <td className={`p-3 text-center ${clinic.name === 'トゥルーデザインクリニック' ? 'font-bold text-[var(--gold)]' : ''}`}>{clinic.lip}</td>
                      <td className={`p-3 text-center ${clinic.name === 'トゥルーデザインクリニック' ? 'font-bold text-[var(--gold)]' : ''}`}>{clinic.eyeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#8B8580] mt-4">※ 料金は税込・2026年4月時点の情報です。詳細は各クリニック公式サイトをご確認ください。</p>
            <p className="text-xs text-[#8B8580] mt-1">※ トゥルーデザインクリニックの眉リタッチ29,700円〜が5院中最安です。</p>
          </div>

          {/* リタッチしないとどうなるか */}
          <div className="glass-card rounded-3xl p-8 mb-12 border border-[var(--pink-beige)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">リタッチしないとどうなる？</h2>
            <div className="space-y-4">
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <p className="text-sm"><strong className="text-[var(--gold)]">半年〜1年後：</strong>全体的に色が薄くなり始めます。メイクで補えるレベルですが、アートメイクのメリットが減少。</p>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <p className="text-sm"><strong className="text-[var(--gold)]">1〜2年後：</strong>色がかなり薄くなり、まだら模様になることも。すっぴんだとアートメイクの跡が気になる場合があります。</p>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <p className="text-sm"><strong className="text-[var(--gold)]">2〜3年後：</strong>ほぼ目立たなくなります。完全には消えない場合もありますが、メイクでカバーできるレベルに。新しいデザインでのやり直しも可能です。</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-8 text-center">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card rounded-xl border border-[var(--pink-beige)] group">
                <summary className="px-6 py-5 cursor-pointer font-semibold hover:bg-[var(--blush)] transition-colors rounded-xl text-[var(--foreground)] list-none flex items-center justify-between">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-[var(--gold)] ml-4 flex-shrink-0 transition-transform group-open:rotate-45 text-xl">+</span>
                </summary>
                <div className="px-6 py-5 border-t border-[var(--pink-beige)] text-[#6B6560] leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center">
            <h2 className="text-xl font-bold mb-4">リタッチ料金を抑えるなら</h2>
            <p className="text-[#6B6560] mb-6">トゥルーデザインクリニックは眉リタッチ29,700円〜と5院中最安。コスパ重視の方におすすめです。</p>
            <Link href="/review/true-design" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">トゥルーデザインの詳細を見る →</Link>
          </div>

          {/* 関連記事 */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/duration" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">持続期間は？</p>
                <p className="text-xs text-[#8B8580] mt-1">何年持つか徹底解説</p>
              </Link>
              <Link href="/knowledge/price-guide" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">料金の相場は？</p>
                <p className="text-xs text-[#8B8580] mt-1">部位別・クリニック別料金ガイド</p>
              </Link>
              <Link href="/review/true-design" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">トゥルーデザインクリニック</p>
                <p className="text-xs text-[#8B8580] mt-1">口コミ・評判を徹底調査</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
