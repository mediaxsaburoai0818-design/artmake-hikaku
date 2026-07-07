import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from "next";
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title:
    "メンズ眉アートメイクおすすめ比較【2026年】バレない自然な男性眉・料金・選び方を解説",
  description:
    "男性の眉アートメイクを「自然さ・バレにくさ・料金・メンズ対応」で比較。濃すぎ・直線的すぎでバレるのを防ぐ選び方と、主要クリニックの眉料金（2026年6月時点）を一覧化。すっぴんでも整った眉になりたい男性向けの実践ガイドです。",
  keywords:
    "メンズアートメイク, アートメイク 眉 メンズ おすすめ, メンズ 眉 アートメイク, メンズアートメイク 銀座, 男性 アートメイク バレる",
};

// 眉料金は2026年6月12日に各院公式サイトで確認した値。メンズ対応可否は各院により異なるため要確認。
const clinics = [
  {
    name: "メディカルブロー",
    slug: "/review/medicalbrow/",
    brow: "1回 28,000円〜 / 2回 90,000円〜",
    point: "毛流れを1本ずつ再現する6D・7Dストロークが自然眉と相性が良い。メンズ向けメニューを設けており、男性症例の実績も豊富とされる。",
    mens: "メンズ対応あり（公式要確認）",
  },
  {
    name: "デイジークリニック",
    slug: "/review/dazzy/",
    brow: "2回 49,800円〜（モニター）/ 2回 69,800円〜（通常）",
    point: "ストローク・パウダー・コンビネーションから選べ、ナチュラル寄りの濃度調整がしやすい。院により対応技法が異なる。",
    mens: "公式要確認",
  },
  {
    name: "ファーストアートメイク",
    slug: "/review/first-artmake/",
    brow: "2回 50,000円〜",
    point: "機械彫り・手彫り・コンビネーションに対応。比較的料金を抑えやすく、初めての方が試しやすい価格帯。",
    mens: "公式要確認",
  },
  {
    name: "トゥルーデザインクリニック",
    slug: "/review/true-design/",
    brow: "2回 55,000円〜",
    point: "デザイン提案力に定評。リタッチ29,700円〜と長期コストが安く、形を更新しながら長く付き合いやすい。関西エリア中心。",
    mens: "公式要確認",
  },
  {
    name: "クレアージュ東京",
    slug: "/review/creage/",
    brow: "3回 132,000円〜（1回あたり44,000円）",
    point: "3回かけて段階的に仕上げる手法で「やりすぎない自然さ」を狙える。指名料無料で明朗会計。",
    mens: "公式要確認",
  },
];

const points = [
  {
    t: "「自然さ」を最優先する（濃すぎ・直線的すぎは不自然の原因）",
    d: "男性の眉アートメイクで最も多い失敗が「濃すぎてバレる」「直線的すぎて人工的に見える」というもの。1本ずつ毛流れを描くストローク（毛並み）技法を得意とし、元の眉を活かして足りない部分だけ補うデザインを提案してくれるクリニックを選びましょう。",
  },
  {
    t: "男性の症例実績・メンズメニューがあるか",
    d: "男性は女性より眉の骨格・毛量・希望デザインが異なります。男性の症例写真を公開しているか、メンズ向けメニューがあるかを公式サイトやカウンセリングで確認すると、仕上がりのイメージがつかみやすくなります。",
  },
  {
    t: "総額（リタッチ込み）で比較する",
    d: "アートメイクは1〜3年で薄くなるため、定期的なリタッチが前提です。初回料金だけでなく、リタッチ料金を含めた数年単位の総額で比べると、本当のコストが見えてきます。",
  },
  {
    t: "医療機関（クリニック）で受ける",
    d: "アートメイクは医行為のため、医師または医師の指示下の看護師が行う医療機関でしか受けられません。「メンズサロン」を名乗る医療機関以外での施術は違法です。必ずクリニックを選んでください。",
  },
];

const faqs = [
  {
    q: "メンズの眉アートメイクはバレますか？",
    a: "技法とデザイン次第です。1本ずつ毛流れを描くストローク技法で、元の眉を活かして足りない部分だけを補えば、近くで見てもアートメイクと気づかれにくい自然な仕上がりになります。逆に濃く塗りつぶすパウダー単体や、直線的すぎるデザインは不自然に見えやすいので、自然眉が得意なクリニックを選ぶことが重要です。",
  },
  {
    q: "メンズアートメイクの料金はいくらくらいですか？",
    a: "眉の場合、主要クリニックでおおむね2回セットで5〜9万円前後が目安です（モニター価格ならさらに安くなる場合あり）。クレアージュ東京のように3回セット（1回あたり44,000円）で段階的に仕上げるところもあります。リタッチ費用も含めた総額で比較するのがおすすめです（料金は2026年6月時点）。",
  },
  {
    q: "痛みはありますか？",
    a: "医療機関で行うため、表面麻酔や局所麻酔で痛みを抑えられます。痛みの感じ方には個人差がありますが、麻酔が使えるのはサロンにはない医療機関の利点です。",
  },
  {
    q: "どれくらい持ちますか？",
    a: "個人差はありますが、おおむね1〜3年で徐々に薄くなります。色が抜けてきたタイミングでリタッチをすると、きれいな状態を長く保てます。",
  },
];

export default function MensArtmakePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: '比較', href: '/compare/all-clinics/' },
          { name: 'メンズ眉アートメイク比較' },
        ]}
      />

      <section className="py-12 px-4 bg-gradient-to-br from-slate-50 to-rose-50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            メンズ眉アートメイク<br className="md:hidden" />おすすめ比較・選び方【2026年】
          </h1>
          <p className="text-[#6B6560] leading-relaxed">
            「すっぴんでも眉を整えたい」「でも<strong>バレるのは避けたい</strong>」という男性向けに、<strong>自然さ・バレにくさ・料金・メンズ対応</strong>の観点でクリニックを比較します。男性の眉アートメイクで失敗しないための選び方と、主要クリニックの眉料金（2026年6月時点）をまとめました。
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 mb-10">
            <h2 className="text-xl font-bold mb-3">男性が失敗しないための要点</h2>
            <ul className="space-y-2 text-[#4B4540] leading-relaxed">
              <li>① <strong>濃すぎ・直線的すぎ</strong>はバレる原因。毛流れを描く<strong>ストローク技法</strong>＋元の眉を活かすデザインが基本。</li>
              <li>② <strong>男性症例・メンズメニュー</strong>のあるクリニックだと仕上がりイメージが共有しやすい。</li>
              <li>③ アートメイクは医行為。必ず<strong>医療機関（クリニック）</strong>で受ける。</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">主要クリニック 眉料金比較</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-3 text-left border border-slate-200">クリニック</th>
                  <th className="p-3 text-left border border-slate-200">眉料金（2026年6月時点）</th>
                  <th className="p-3 text-left border border-slate-200">メンズ対応</th>
                </tr>
              </thead>
              <tbody>
                {clinics.map((c) => (
                  <tr key={c.name} className="align-top">
                    <td className="p-3 border border-slate-200 font-bold whitespace-nowrap">
                      <Link href={c.slug} className="text-rose-600 hover:underline">{c.name}</Link>
                    </td>
                    <td className="p-3 border border-slate-200">{c.brow}</td>
                    <td className="p-3 border border-slate-200 text-xs">{c.mens}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#8B8580] mb-10">
            ※料金は2026年6月12日に各院公式サイトで確認した眉メニューの値です。メンズ対応の可否・男性症例の有無は院やアーティストにより異なるため、必ず公式サイトまたはカウンセリングでご確認ください。
          </p>

          <h2 className="text-2xl font-bold mb-6 text-center">各クリニックの特徴（眉・男性視点）</h2>
          <div className="space-y-4 mb-12">
            {clinics.map((c) => (
              <div key={c.name} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-lg mb-1">
                  <Link href={c.slug} className="hover:text-rose-600">{c.name}</Link>
                </h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{c.point}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">メンズが選ぶときの4つのポイント</h2>
          <div className="space-y-4 mb-12">
            {points.map((p, i) => (
              <div key={p.t} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold mb-2">{i + 1}. {p.t}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>

      {/* メンズ関連メニューの接続 */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-3">眉以外のメンズメニューも検討する方へ</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-bold text-gray-800 mb-1">薄毛向けヘアアートメイク（SMP）</p>
                <p className="text-gray-600 mb-2">M字・頭頂部に対応するメンズSMPはAMGが公式メニュー化（1回75,000円・2026年7月7日確認）。生え際の後退が気になる方は眉と同時相談も可能です。</p>
                <Link href="/review/amg/" className="text-rose-500 font-semibold underline">AMGのレビュー →</Link>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-bold text-gray-800 mb-1">男性専門院で受けたい方</p>
                <p className="text-gray-600 mb-2">メディカルブローのメンズ専門「メンズブロー」（六本木）は男性専門院として実在を公式確認済み。男性の来院しやすさを重視するならこちら。</p>
                <Link href="/review/medicalbrow/" className="text-rose-500 font-semibold underline">メディカルブローのレビュー →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">よくある質問（FAQ）</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <p className="font-bold mb-2">Q{i + 1}. {faq.q}</p>
                  <p className="text-sm text-[#6B6560] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 関連記事 */}
          <section className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4 text-center">関連記事</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/compare/all-clinics/" className="text-rose-600 font-medium hover:underline">アートメイク全クリニック比較ランキング【12院】</Link></li>
              <li><Link href="/compare/price/" className="text-rose-600 font-medium hover:underline">アートメイク料金比較DB｜実質総額で比べる</Link></li>
              <li><Link href="/compare/artmake-vs-tattoo/" className="text-rose-600 font-medium hover:underline">アートメイクとタトゥー（刺青）の違い7項目</Link></li>
            </ul>
          </section>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">自然な男性眉を叶えるクリニックを探す</h2>
          <p className="text-white/85 mb-6 leading-relaxed">バレにくさは技法とデザイン提案力で決まります。料金・技法・症例で比較して、自分に合うクリニックを選びましょう。</p>
          <Link href="/compare/all-clinics/" className="inline-block bg-white text-slate-800 font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition-colors">クリニック比較ランキングを見る</Link>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4">
        <AuthorBox />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
    </>
  );
}
