import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'アートメイク除去の費用を実額比較【2026年最新・公式確認】対応クリニック・方式・回数',
  description:
    'アートメイク除去の費用を、除去対応クリニックの公式料金（実額）で横断比較。ピコレーザー・専用除去剤・切除の3方式の回数・リスク早見、部位別（眉・アイライン・リップ）の料金、「1回では消えない」前提での総額の考え方まで、2026年7月に公式確認した情報だけで解説します。除去は医療行為で、効果・回数には個人差があります。',
  keywords: 'アートメイク除去 費用, 眉 アートメイク 除去, アートメイク 除去 何回, アートメイク 除去 レーザー, アートメイク除去 比較',
}

const methods = [
  {
    name: 'レーザー除去（ピコ／YAG）',
    how: 'レーザーで色素を細かく粉砕し、体内のマクロファージが排出する。眉・アイライン・リップ幅広く対応。',
    count: '少なくとも2〜3回、入れ直し目的では3〜4回程度（色や量で個人差）',
    risk: '眉の一時的な脱毛（まれに永久的）、赤み・かさぶた、色素が完全に消えない場合がある',
    dt: '数日〜1週間程度のかさぶた期間。施術間隔は2ヶ月前後',
  },
  {
    name: '専用除去剤（リムーバル／除去液）',
    how: '薬剤を皮膚に入れ、色素を浮かせて排出させる。眉のみ対応の院が多い。',
    count: '色素量により複数回。院により回数の記載は異なる',
    risk: '瘢痕・色素沈着のリスク。除去液の一部は未承認医薬品にあたる場合があり、医師の説明を受けることが前提',
    dt: 'かさぶた・浸出液が出る期間あり。院の指示に従う',
  },
  {
    name: '切除',
    how: '色素の入った皮膚を外科的に切り取る。範囲が限定的な場合の選択肢。',
    count: '1回で除去できる場合があるが、範囲による',
    risk: '傷あと（瘢痕）が残るリスク。適応は医師の診断による',
    dt: '抜糸まで通院が必要。範囲により回復期間が異なる',
  },
]

// 公式確認済みの実額のみ（2026年7月時点・税込）。確認できないものは「要問い合わせ」と明記。
const clinics = [
  {
    name: 'アートメイクギャラリー（AMG）',
    method: 'ピコレーザー／専用除去剤（リムーバル）',
    prices: [
      ['両眉', '48,000円（モニター36,000円）'],
      ['片眉', '24,000円（モニター18,000円）'],
      ['アイライン上 or 下', '48,000円（モニター24,000円）'],
      ['アイライン上下', '68,000円（モニター34,000円）'],
      ['リップ', '48,000円（モニター24,000円）'],
      ['リムーバル除去（眉・薬剤）', '25,000円（モニター17,500円）'],
    ],
    count: '「少なくても2〜3回」と公式に記載',
    area: '銀座・横浜・福岡天神',
    site: true,
    reviewSlug: 'amg',
    source: 'https://artmake-g.com/removal/',
  },
  {
    name: 'エースクリニック（名古屋）',
    method: 'PicoWay（3波長ピコレーザー）',
    prices: [
      ['片眉', '33,000円'],
      ['両眉', '49,500円'],
      ['アイライン上 or 下', '49,500円'],
      ['アイライン上下', '69,300円'],
      ['麻酔クリーム（別途）', '11,000円'],
    ],
    count: '2ヶ月間隔で1〜数回',
    area: '名古屋',
    site: false,
    source: 'https://nagoya.ace-clinic.com/shinryo/artmake-removal/',
  },
  {
    name: '岡山中央クリニック',
    method: 'ピコレーザー',
    prices: [
      ['両眉（1回目）', '33,000〜44,000円'],
      ['両眉尻（2cmまで）', '19,800円'],
      ['アイライン両目', '27,500円'],
      ['麻酔（別途）', '3,300円'],
    ],
    count: '1〜5回以上（2回目以降10%off）',
    area: '岡山',
    site: false,
    source: 'https://www.c-kirei.jp/menu/tattoo/artmake/',
  },
  {
    name: 'THE ARTMAKE TOKYO',
    method: '西川式ピコレーザー',
    prices: [['料金', '公式は画像掲載のため実額を確認できず＝要問い合わせ']],
    count: '黒が少量なら1回、入れ直し目的で3〜4回',
    area: '銀座・梅田・名古屋・横浜・福岡',
    site: true,
    reviewSlug: 'the-artmake-tokyo',
    source: 'https://www.the-artmake-tokyo.tokyo/removal/',
  },
]

const criteria = [
  { t: '医療機関（医師の在籍）であること', d: 'レーザー・薬剤・切除いずれも医療行為です。エステサロンでの除去はできません。医師のカウンセリングでリスクと適応を確認しましょう。' },
  { t: '料金が「1回あたり」か「完了まで」か明確か', d: '除去は1回で終わらないのが一般的です。単価だけでなく「想定回数×単価」の総額で比較しましょう。モニター料金は適用条件（撮影提供等）も確認を。' },
  { t: '対応方式が自分の色・部位に合うか', d: '色素の色（黒／茶／赤等）や部位で適した方式・機器が変わります。カウンセリングで自分のケースの回数見込みを聞きましょう。' },
  { t: 'リスク説明が具体的か', d: '眉の一時的な脱毛、瘢痕、色素残存など、起こりうるリスクとダウンタイムを事前に丁寧に説明してくれる院を選びましょう。' },
  { t: '除去後の入れ直し（修正）まで相談できるか', d: '「消してから入れ直したい」場合、除去と再施術を同じ院で相談できると計画が立てやすいです。' },
]

const faqs = [
  { q: 'アートメイク除去は1回で消えますか？', a: '一般的に1回では消えません。レーザー除去では「少なくとも2〜3回」と公式に案内する院が多く、色素の色や量、肌質によって必要回数には個人差があります。費用は「1回あたりの単価×想定回数」の総額で見積もるのが現実的です。' },
  { q: '除去の費用の相場はどのくらいですか？', a: '公式に料金を確認できた院では、両眉のレーザー除去が1回あたりおおむね33,000〜49,500円（税込）でした（AMG 48,000円・モニター36,000円、エースクリニック名古屋 49,500円、岡山中央クリニック 33,000〜44,000円など。いずれも2026年7月時点・公式確認）。別途、麻酔代がかかる院もあります。回数がかかるため総額はこれらの数倍になる場合があります。' },
  { q: 'エステで除去できますか？', a: 'できません。アートメイク除去はレーザー・薬剤・切除いずれも医療行為で、医師のいる医療機関でのみ受けられます。医療機関以外での施術は避けてください。' },
  { q: '除去にリスクはありますか？', a: 'あります。レーザー除去では眉の一時的な脱毛（まれに永久的）、赤みやかさぶた、色素が完全に消えないことがあります。除去剤や切除では瘢痕・色素沈着のリスクがあります。必ず医師からリスクとダウンタイムの説明を受けたうえで判断してください。効果や仕上がりには個人差があります。' },
  { q: '除去した後にアートメイクを入れ直せますか？', a: '肌の状態が回復すれば、入れ直し（再施術）が可能な場合があります。除去と再施術の両方を相談できる院だと計画が立てやすいです。詳しくは各院のカウンセリングで確認してください。' },
]

export default function RemovalComparePage() {
  return (
    <>
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ name: '比較' }, { name: 'アートメイク除去 費用比較' }]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            アートメイク除去の費用を実額比較<br className="md:hidden" />【2026年最新・公式確認】
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            「入れたアートメイクを消したい」方向けに、<strong>除去対応クリニックの公式料金（実額）を横断で比較</strong>しました。ピコレーザー・専用除去剤・切除の3方式の違いと回数・リスク、部位別の費用、そして<strong>「1回では消えない」前提で総額をどう見積もるか</strong>まで、2026年7月に公式サイトで確認した情報だけでまとめています。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-700">
            アートメイク除去はレーザー・薬剤・切除いずれも<strong>医療行為</strong>です。効果・回数・仕上がりには<strong>個人差</strong>があり、1回で完全に消えるとは限りません。実施の可否・回数・リスクは必ず医師のカウンセリングでご確認ください。本ページの料金は各院公式の2026年7月時点の情報で、変更される場合があります。
          </div>
        </div>
      </section>

      {/* 3方式早見 */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">除去の3方式（回数・リスク早見）</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {methods.map((m) => (
              <div key={m.name} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[var(--gold)] mb-2">{m.name}</h3>
                <dl className="text-sm text-gray-700 space-y-2">
                  <div><dt className="font-semibold">仕組み</dt><dd>{m.how}</dd></div>
                  <div><dt className="font-semibold">回数の目安</dt><dd>{m.count}</dd></div>
                  <div><dt className="font-semibold">主なリスク</dt><dd>{m.risk}</dd></div>
                  <div><dt className="font-semibold">ダウンタイム</dt><dd>{m.dt}</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 実額比較表（本命） */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">除去対応クリニックの実額比較</h2>
          <p className="text-center text-gray-500 text-sm mb-8">各院公式サイトで確認した料金（税込・2026年7月時点）。確認できない料金は「要問い合わせ」と明記しています。</p>
          <div className="space-y-6">
            {clinics.map((c) => (
              <div key={c.name} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{c.name}</h3>
                  <span className="text-xs text-gray-500">方式：{c.method}</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      {c.prices.map(([part, price]) => (
                        <tr key={part} className="border-b border-gray-100 last:border-0">
                          <th className="text-left py-2 pr-4 whitespace-nowrap font-semibold text-gray-700">{part}</th>
                          <td className="py-2 text-gray-800">{price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-3">回数の目安：{c.count} ／ 対応エリア：{c.area}</p>
                <div className="flex flex-wrap gap-3 mt-3 text-sm">
                  {c.site && c.reviewSlug && (
                    <Link href={`/review/${c.reviewSlug}/`} className="text-[var(--gold)] font-semibold hover:underline">当サイトの{c.name}レビューを見る →</Link>
                  )}
                  <a href={c.source} target="_blank" rel="nofollow noopener noreferrer" className="text-gray-500 hover:underline">公式の料金ページ（出典）</a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            ※上記は各院公式サイトの2026年7月時点の掲載料金です。麻酔代・カウンセリング料が別途かかる場合や、モニター料金に適用条件（症例写真の提供等）がある場合があります。最新・正確な料金と適応は必ず各院にご確認ください。
          </p>
        </div>
      </section>

      {/* 総額で考える */}
      <section className="py-8 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">「1回では消えない」— 総額で考える</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            除去の料金表は「1回あたり」の単価であることがほとんどです。レーザー除去は色素を少しずつ排出させるため、公式でも「少なくとも2〜3回」と案内されることが多く、色や量によってはそれ以上かかることもあります。したがって、<strong>実際に必要な費用は「単価 × 想定回数（＋麻酔代）」</strong>で見積もるのが現実的です。
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
            <p className="font-semibold mb-2">例：両眉のレーザー除去を3回受ける場合の総額イメージ</p>
            <ul className="space-y-1">
              <li>・単価 約40,000〜49,500円 × 3回 ＝ <strong>約12〜15万円</strong>（＋麻酔代が別途の院あり）</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">※回数・単価は院と個人差により変動します。モニター料金が使える院では総額を抑えられる場合があります。正確な回数見込みはカウンセリングで確認してください。</p>
          </div>
        </div>
      </section>

      {/* 部位別 */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">部位別の費用・注意点（眉・アイライン・リップ）</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[var(--gold)] mb-2">眉</h3>
              <p className="text-gray-700">両眉のレーザー除去は1回あたり約33,000〜49,500円（公式確認院）。眉は一時的な脱毛リスクの記載がある点に注意。薬剤（リムーバル）対応の院もあります。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[var(--gold)] mb-2">アイライン</h3>
              <p className="text-gray-700">上または下で約48,000〜49,500円、上下で約68,000〜69,300円（公式確認院）。目のきわのため、対応可否と安全管理を医師に確認しましょう。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[var(--gold)] mb-2">リップ</h3>
              <p className="text-gray-700">AMGではリップ除去48,000円（モニター24,000円）。赤系の色素はレーザーの反応が色により異なるため、回数の見込みを事前に確認するのがおすすめです。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 選び方 */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">除去で後悔しないクリニック選び 5つの基準</h2>
          <div className="space-y-3">
            {criteria.map((c, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{c.t}</h3>
                  <p className="text-sm text-gray-700">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm group">
                <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-800 list-none flex items-center justify-between">
                  <span>Q{i + 1}. {f.q}</span>
                  <span className="text-[var(--gold)] ml-4 shrink-0 transition-transform group-open:rotate-45 text-xl">+</span>
                </summary>
                <div className="px-6 py-5 border-t border-gray-200 text-gray-600 leading-relaxed text-sm">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 関連 */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">関連記事</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/knowledge/removal/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-[var(--gold)] text-xs font-semibold">知識</span>
              <p className="font-semibold mt-1">アートメイクの除去方法4選（費用・回数・痛み）</p>
            </Link>
            <Link href="/review/amg/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-[var(--gold)] text-xs font-semibold">クリニック</span>
              <p className="font-semibold mt-1">アートメイクギャラリー（除去・修正対応）の口コミ・評判</p>
            </Link>
            <Link href="/compare/amg-vs-medicalbrow/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-[var(--gold)] text-xs font-semibold">比較</span>
              <p className="font-semibold mt-1">アートメイクギャラリー vs メディカルブロー（除去対応で比較）</p>
            </Link>
            <Link href="/compare/all-clinics/" className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-[var(--gold)] text-xs font-semibold">比較</span>
              <p className="font-semibold mt-1">全クリニック比較ランキング</p>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-8 text-sm text-gray-700">
          <p className="font-bold mb-2">ご利用にあたって</p>
          <p>アートメイク除去は医療行為であり、効果・回数・仕上がりには個人差があります。1回で完全に消えるとは限らず、眉の一時的な脱毛や瘢痕・色素残存などのリスクがあります。除去剤の一部は未承認医薬品にあたる場合があり、使用の可否・リスクは医師の説明を受けてください。料金は各院公式の2026年7月時点の情報をもとに当サイトが整理したもので、変更される場合があります。最新・正確な情報と適応は必ず各医療機関でご確認ください。</p>
        </div>
        <AuthorBox />
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://artmake-hikaku.com/' }, { '@type': 'ListItem', position: 2, name: 'アートメイク除去 費用比較', item: 'https://artmake-hikaku.com/compare/removal/' }] }) }} />
    </>
  )
}
