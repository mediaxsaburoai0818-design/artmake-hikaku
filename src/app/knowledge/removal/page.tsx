import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイクの除去方法4選｜レーザー・除去液・費用・回数を徹底比較【2026年最新】',
  description: 'アートメイクの除去方法を4つ（レーザー・除去液・カモフラージュ・自然退色）徹底比較。各方法の費用・回数・痛み・ダウンタイム、除去クリニックの選び方、除去後のやり直しまで解説。',
  keywords: 'アートメイク 除去,アートメイク 消したい,アートメイク レーザー除去,アートメイク 除去 費用',
  openGraph: {
    title: 'アートメイクの除去方法4選｜費用・回数・痛みを徹底比較',
    description: 'アートメイクの除去方法を4つ徹底比較。費用・回数・痛み・ダウンタイムを解説。',
    type: 'article',
  },
}

const removalReasons = [
  { title: 'デザインが古くなった', desc: 'トレンドの変化で眉の形が時代遅れに。太眉ブームや細眉ブームなど、流行に合わせたデザインが数年後に違和感を感じるケース。' },
  { title: '色が変色してしまった', desc: '安価な色素の使用や経年変化により、黒からグレー・青みがかった色に変色。特に安いクリニックで施術した場合にリスクが高い。' },
  { title: 'デザインが気に入らない', desc: 'カウンセリング不足や施術者の技術不足により、希望と異なるデザインに。左右非対称、太すぎる・細すぎるなど。' },
  { title: '転職・環境の変化', desc: '職場の規定変更やライフスタイルの変化で、アートメイクのデザインがそぐわなくなったケース。' },
  { title: 'MRI検査への不安', desc: 'アートメイクの色素に含まれる金属成分がMRI検査に影響する可能性を心配するケース。最新の色素は影響が少ないが、古い施術の場合は注意。' },
]

const removalMethods = [
  {
    name: 'レーザー除去',
    mechanism: 'レーザー光で色素粒子を細かく破砕し、体内のマクロファージ（免疫細胞）が処理して排出する方法。ピコレーザーが主流。',
    sessions: '3〜10回（色の濃さ・深さによる）',
    cost: '1回 10,000〜30,000円（1回あたり）',
    totalCost: '30,000〜300,000円',
    pain: '★★★☆☆（ゴムでパチンと弾かれる程度。麻酔クリーム使用可）',
    downtime: '1〜2週間（赤み・かさぶた）',
    merit: '最も一般的で実績が多い。色素を細かく砕くため、体への負担が比較的少ない。',
    demerit: '回数がかかる。黒・茶色以外の色素（赤・黄）は反応しにくい場合がある。完全除去が難しいケースも。',
  },
  {
    name: '除去液（グリコール酸）',
    mechanism: 'グリコール酸などの薬剤を皮膚に注入し、色素を浮かせて排出する方法。アートメイクの施術と逆の原理。',
    sessions: '1〜5回',
    cost: '1回 30,000〜80,000円',
    totalCost: '30,000〜400,000円',
    pain: '★★★★☆（施術中はヒリヒリとした痛み。麻酔使用可）',
    downtime: '2〜4週間（赤み・腫れ・かさぶた）',
    merit: 'レーザーで対応しにくい色素にも効果がある。少ない回数で効果が出やすい。',
    demerit: '施術後の赤みや腫れが比較的強い。瘢痕（傷跡）が残るリスクがレーザーより高い。施術できるクリニックが限られる。',
  },
  {
    name: 'カモフラージュ（肌色注入）',
    mechanism: '肌色に近い色素を上からかぶせて、アートメイクの色を目立たなくする方法。除去というより「隠す」技術。',
    sessions: '1〜3回',
    cost: '1回 30,000〜60,000円',
    totalCost: '30,000〜180,000円',
    pain: '★★☆☆☆（通常のアートメイクと同程度）',
    downtime: '1〜2週間',
    merit: '即効性がある。肌へのダメージが少ない。ダウンタイムが比較的短い。',
    demerit: '日焼けすると肌色との差が目立つ可能性。長期的に不自然になるリスク。肌色の色素も経年変化する。根本的な除去ではない。',
  },
  {
    name: '自然退色を待つ',
    mechanism: '肌のターンオーバー（新陳代謝）により、色素が自然に薄くなるのを待つ方法。費用はゼロだが時間がかかる。',
    sessions: '-',
    cost: '0円',
    totalCost: '0円',
    pain: 'なし',
    downtime: 'なし',
    merit: '費用ゼロ。肌へのダメージなし。時間さえあれば最も安全な方法。',
    demerit: '1〜3年以上かかる。完全には消えない場合がある。その間、不満なデザインと付き合う必要がある。',
  },
]

const faqs = [
  {
    q: 'アートメイクは完全に除去できますか？',
    a: '完全な除去は難しいケースもありますが、レーザー治療を複数回行うことで、ほぼ目立たないレベルまで薄くすることは可能です。色素の深さ・色・肌質によって結果は異なるため、除去専門のカウンセリングで見込みを確認することをおすすめします。最新のピコレーザーは従来のQスイッチレーザーよりも細かい粒子に対応でき、除去率が向上しています。',
  },
  {
    q: '除去にかかる期間はどれくらいですか？',
    a: 'レーザー除去の場合、1回の施術間隔は1〜2ヶ月空ける必要があるため、3〜10回の施術で半年〜2年程度かかります。除去液の場合は回数が少なくて済むことが多いですが、施術間隔はやはり1〜2ヶ月必要です。自然退色は1〜3年以上。急いでいる場合はレーザーと除去液の併用が効果的な場合もあります。',
  },
  {
    q: '除去した後にアートメイクをやり直すことはできますか？',
    a: 'はい、除去後のやり直しは可能です。ただし、除去後の肌が十分に回復してから（通常3〜6ヶ月後）の再施術が推奨されます。除去方法によっては皮膚の質感が変わる場合があるため、やり直し前に必ずカウンセリングで肌の状態を確認してもらいましょう。最初から信頼できるクリニック（メディカルブロー95点、クレアージュ東京92点など）を選ぶことが、除去の必要性を減らす最善策です。',
  },
  {
    q: '眉・リップ・アイライン、部位によって除去の難易度は違いますか？',
    a: 'はい、部位によって難易度が異なります。眉は比較的除去しやすい部位です。リップは粘膜に近い部分があるため、レーザーの出力に制限があり、回数がかかることがあります。アイラインは目の近くという繊細な部位のため、施術可能なクリニックが限られ、専門性の高い医師による施術が必要です。',
  },
  {
    q: '除去の痛みはどれくらいですか？',
    a: 'レーザー除去は「ゴムでパチンと弾かれる程度」と表現されることが多く、麻酔クリームを使用すれば耐えられる範囲です。除去液はヒリヒリとした刺激がやや強めですが、こちらも麻酔で対応可能。いずれもアートメイクの施術時と同程度かやや強い痛みと考えてください。痛みに弱い方は事前に相談しましょう。',
  },
  {
    q: '除去クリニックはどう選べばいいですか？',
    a: '除去クリニックを選ぶポイントは、(1)レーザー機器の種類（ピコレーザーが望ましい）、(2)アートメイク除去の症例数、(3)カウンセリングでの丁寧な説明、(4)除去後のアフターケア体制の4点です。アートメイク施術を行っているクリニックは除去にも対応していることが多いので、まずは施術を受けたクリニックに相談するのがおすすめです。',
  },
]

export default function RemovalPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '知識', href: '/knowledge/risk' },
            { name: '除去方法' },
          ]} />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-sm font-semibold mb-2">REMOVAL GUIDE</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイクの除去方法4選<br className="md:hidden" />費用・回数・痛みを徹底比較</h1>
            <p className="text-[#6B6560] leading-relaxed">
              「アートメイクを消したい」「デザインを変えたい」方のための完全ガイド。<br />
              4つの除去方法を費用・回数・痛み・ダウンタイムで比較します。
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>除去が必要になる5つのケース</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>4つの除去方法の詳細と比較表</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>除去クリニックの選び方</li>
              <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>除去後にアートメイクをやり直せるか</li>
            </ul>
          </div>

          {/* 除去が必要になるケース */}
          <h2 className="text-2xl font-bold mb-8 text-center">除去が必要になる5つのケース</h2>
          <div className="space-y-4 mb-12">
            {removalReasons.map((reason, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)] flex items-start gap-4">
                <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold mb-1">{reason.title}</h3>
                  <p className="text-sm text-[#6B6560]">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 4つの除去方法 */}
          <h2 className="text-2xl font-bold mb-8 text-center">4つの除去方法を徹底比較</h2>
          <div className="space-y-8 mb-12">
            {removalMethods.map((method, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  {method.name}
                </h3>
                <div className="bg-[var(--blush)] rounded-xl p-4 mb-4">
                  <p className="text-sm"><strong className="text-[var(--gold)]">仕組み：</strong>{method.mechanism}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <div className="bg-white rounded-xl p-3 border border-[var(--pink-beige)]">
                    <p className="text-xs text-[#8B8580]">施術回数</p>
                    <p className="text-sm font-bold">{method.sessions}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-[var(--pink-beige)]">
                    <p className="text-xs text-[#8B8580]">1回あたり費用</p>
                    <p className="text-sm font-bold">{method.cost}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-[var(--pink-beige)]">
                    <p className="text-xs text-[#8B8580]">総額目安</p>
                    <p className="text-sm font-bold text-[var(--gold)]">{method.totalCost}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-[var(--pink-beige)]">
                    <p className="text-xs text-[#8B8580]">痛み</p>
                    <p className="text-sm font-bold">{method.pain}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-[#F0FAF0] rounded-xl p-4">
                    <p className="text-sm"><strong className="text-green-700">メリット：</strong>{method.merit}</p>
                  </div>
                  <div className="bg-[#FFF0F0] rounded-xl p-4">
                    <p className="text-sm"><strong className="text-red-400">デメリット：</strong>{method.demerit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 比較表 */}
          <div className="glass-card rounded-3xl p-6 mb-12 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">除去方法 比較一覧表</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                    <th className="p-3 text-left rounded-tl-xl">項目</th>
                    <th className="p-3 text-center">レーザー</th>
                    <th className="p-3 text-center">除去液</th>
                    <th className="p-3 text-center">カモフラージュ</th>
                    <th className="p-3 text-center rounded-tr-xl">自然退色</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--pink-beige)]">
                    <td className="p-3 font-bold">費用</td>
                    <td className="p-3 text-center">3〜30万円</td>
                    <td className="p-3 text-center">3〜40万円</td>
                    <td className="p-3 text-center">3〜18万円</td>
                    <td className="p-3 text-center font-bold text-[var(--gold)]">0円</td>
                  </tr>
                  <tr className="border-b border-[var(--pink-beige)]">
                    <td className="p-3 font-bold">回数</td>
                    <td className="p-3 text-center">3〜10回</td>
                    <td className="p-3 text-center">1〜5回</td>
                    <td className="p-3 text-center">1〜3回</td>
                    <td className="p-3 text-center">-</td>
                  </tr>
                  <tr className="border-b border-[var(--pink-beige)]">
                    <td className="p-3 font-bold">痛み</td>
                    <td className="p-3 text-center">中程度</td>
                    <td className="p-3 text-center">やや強い</td>
                    <td className="p-3 text-center">軽い</td>
                    <td className="p-3 text-center">なし</td>
                  </tr>
                  <tr className="border-b border-[var(--pink-beige)]">
                    <td className="p-3 font-bold">ダウンタイム</td>
                    <td className="p-3 text-center">1〜2週間</td>
                    <td className="p-3 text-center">2〜4週間</td>
                    <td className="p-3 text-center">1〜2週間</td>
                    <td className="p-3 text-center">なし</td>
                  </tr>
                  <tr className="border-b border-[var(--pink-beige)]">
                    <td className="p-3 font-bold">期間</td>
                    <td className="p-3 text-center">半年〜2年</td>
                    <td className="p-3 text-center">3ヶ月〜1年</td>
                    <td className="p-3 text-center">1〜3ヶ月</td>
                    <td className="p-3 text-center">1〜3年以上</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">おすすめ度</td>
                    <td className="p-3 text-center font-bold text-[var(--gold)]">最もおすすめ</td>
                    <td className="p-3 text-center">色次第で有効</td>
                    <td className="p-3 text-center">応急処置向き</td>
                    <td className="p-3 text-center">時間がある方</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 除去クリニックの選び方 */}
          <h2 className="text-2xl font-bold mb-8 text-center">除去クリニックの選び方</h2>
          <div className="space-y-5 mb-12">
            {[
              { num: 1, title: 'ピコレーザーを導入しているか', desc: '最新のピコレーザーは従来のQスイッチレーザーよりも精密に色素を破砕でき、少ない回数で効果が出やすい。導入機器の種類を確認しましょう。' },
              { num: 2, title: 'アートメイク除去の症例実績が豊富か', desc: 'タトゥー除去とアートメイク除去では技術が異なります。アートメイク除去の専門実績があるクリニックを選びましょう。' },
              { num: 3, title: '事前カウンセリングが丁寧か', desc: '除去の見込み・回数・費用の総額を正直に伝えてくれるクリニックを選びましょう。「1回で消えます」は要注意。' },
              { num: 4, title: '除去後のアフターケア体制', desc: '除去後の肌トラブルに対応できる体制があるか。皮膚科専門医がいるクリニックが安心です。' },
            ].map((item) => (
              <div key={item.num} className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm">{item.num}</span>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm ml-12">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 除去後のやり直し */}
          <div className="glass-card rounded-3xl p-8 mb-12 border border-[var(--gold-light)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">除去後にアートメイクをやり直せる？</h2>
            <p className="text-[#6B6560] mb-4 leading-relaxed">
              除去後のやり直しは<strong>可能</strong>です。ただし、除去方法や肌の回復状態によって、やり直しまでの期間が異なります。
            </p>
            <div className="space-y-3">
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <p className="text-sm"><strong className="text-[var(--gold)]">レーザー除去後：</strong>最終照射から3〜6ヶ月後に再施術可能。肌の状態を医師が確認してから。</p>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <p className="text-sm"><strong className="text-[var(--gold)]">除去液使用後：</strong>肌の回復に時間がかかるため、6ヶ月〜1年後が目安。瘢痕の有無を確認。</p>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <p className="text-sm"><strong className="text-[var(--gold)]">自然退色後：</strong>十分に薄くなったタイミングでいつでも可能。前回の色素が残っている場合は、それを考慮したデザイン・色選びが必要。</p>
              </div>
            </div>
            <p className="text-sm text-[#8B8580] mt-4">※ 除去の必要がないよう、最初から信頼できるクリニックを選ぶことが最も重要です。メディカルブロー（95点）やクレアージュ東京（92点）など、実績豊富なクリニックがおすすめです。</p>
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
            <h2 className="text-xl font-bold mb-4">除去不要な仕上がりを目指すなら</h2>
            <p className="text-[#6B6560] mb-6">最初から実績豊富なクリニックを選ぶことが、除去リスクを回避する最善策です。</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
          </div>

          {/* 関連記事 */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/knowledge/permanent-risk" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">消えないリスクは？</p>
                <p className="text-xs text-[#8B8580] mt-1">持続期間と除去方法</p>
              </Link>
              <Link href="/knowledge/failure" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">失敗事例と対策</p>
                <p className="text-xs text-[#8B8580] mt-1">後悔しないための10選</p>
              </Link>
              <Link href="/knowledge/duration" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
                <p className="font-bold text-sm">持続期間は？</p>
                <p className="text-xs text-[#8B8580] mt-1">何年持つか徹底解説</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
