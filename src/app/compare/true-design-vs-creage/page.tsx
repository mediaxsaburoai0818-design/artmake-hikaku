import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'トゥルーデザインクリニック vs クレアージュ東京 徹底比較【2026年最新】40代50代向け10項目で解説',
  description: '【2026年4月最新】トゥルーデザインクリニックとクレアージュ東京を10項目で徹底比較。料金・技法・デザインの違い・リタッチコスト・40代50代向け対応まで。関西ならトゥルーデザイン、全国ならクレアージュ。',
  keywords: 'トゥルーデザイン クレアージュ 比較,トゥルーデザインクリニック クレアージュ,アートメイク 40代 50代 比較',
  openGraph: {
    title: 'トゥルーデザインクリニック vs クレアージュ東京 徹底比較',
    description: 'トゥルーデザインクリニックとクレアージュ東京を10項目で徹底比較。',
    type: 'article',
  },
}

const comparisonItems = [
  {
    label: '料金（眉2回）',
    trueDesign: '55,000円〜（2回セット）',
    creage: '132,000円〜（3回セット）\n1回あたり44,000円',
    winner: 'trueDesign',
    detail: '2回セットの総額ではトゥルーデザインが大幅にリーズナブル。ただしクレアージュは3回セットで、3回に分けて慎重に仕上げるアプローチ。1回あたりの単価ではクレアージュの44,000円も良心的ですが、総額ではトゥルーデザインがお得です。',
  },
  {
    label: '技法',
    trueDesign: '毛並みストローク\nトレンドデザインが得意',
    creage: '3回分けメソッド\nナチュラル仕上げに定評',
    winner: 'draw',
    detail: 'トゥルーデザインはトレンドを取り入れた華やかなデザインが特徴。クレアージュは3回に分けて少しずつ色素を入れる独自メソッドで、より自然で失敗リスクの少ない仕上がりが魅力。デザインの方向性が異なるため、好みで選ぶのがベストです。',
  },
  {
    label: '症例数',
    trueDesign: '非公開（実績多数）',
    creage: '10,000件以上',
    winner: 'creage',
    detail: 'クレアージュは10,000件以上の症例実績を公開しており、特に40代以上の女性の施術実績が豊富。トゥルーデザインも実績は多いですが、具体的な数字は公開していません。実績の安心感ではクレアージュが優位。',
  },
  {
    label: 'デザインの方向性',
    trueDesign: 'トレンド重視\n華やかな印象のデザイン',
    creage: 'ナチュラル重視\n骨格に合った普遍的デザイン',
    winner: 'draw',
    detail: 'トゥルーデザインはSNS映えするトレンド感のあるデザインが得意で、若い世代にも人気。クレアージュは骨格分析に基づいたナチュラルなデザインで、年齢を問わず違和感のない仕上がりが特徴。40代50代でトレンドも取り入れたいならトゥルーデザイン、あくまで自然さ優先ならクレアージュ。',
  },
  {
    label: '40代50代の実績',
    trueDesign: '対応あり\n幅広い年代の施術実績',
    creage: '40代50代の症例が特に豊富\n年齢に合わせた提案力',
    winner: 'creage',
    detail: 'クレアージュは元々エイジングケアに強いクリニックグループのため、40代50代の施術に対する理解と実績が深い。加齢による眉の変化（下がり眉、薄くなった眉毛）に対する提案力はクレアージュが頭一つ抜けています。',
  },
  {
    label: '展開エリア',
    trueDesign: '関西エリア中心\n（大阪・神戸）',
    creage: '全国展開\n（東京・大阪・名古屋）',
    winner: 'creage',
    detail: 'クレアージュは東京（有楽町）・大阪・名古屋と主要都市に展開。トゥルーデザインは関西エリアが中心のため、関東在住の方にはクレアージュが通いやすいです。一方、関西在住の方にはトゥルーデザインが便利。',
  },
  {
    label: '指名料',
    trueDesign: '指名料あり（アーティストにより変動）',
    creage: '指名料無料',
    winner: 'creage',
    detail: 'クレアージュは指名料が無料のため、追加費用を気にせずお気に入りの施術者を指名できます。トゥルーデザインは人気アーティストの指名に追加料金がかかる場合があります。料金の透明性ではクレアージュが優位。',
  },
  {
    label: 'リタッチ料金',
    trueDesign: '29,700円〜',
    creage: '33,000円〜\n（3回セットに含まれる場合あり）',
    winner: 'trueDesign',
    detail: 'リタッチ単体の料金ではトゥルーデザインが29,700円〜と最安水準。クレアージュは33,000円〜ですが、3回セットプランの場合はセット内に含まれることもあり、実質負担が少ないケースもあります。',
  },
  {
    label: 'カウンセリング',
    trueDesign: '来院カウンセリング\nデザイン提案に力',
    creage: '来院カウンセリング\n医師による丁寧な説明',
    winner: 'creage',
    detail: 'クレアージュは医師によるカウンセリングで、肌質や健康状態も含めた総合的な判断が特徴。3回に分けて施術する理由や、各回の目標を丁寧に説明してくれます。トゥルーデザインはデザイン面の提案力に強み。',
  },
  {
    label: 'アフターケア',
    trueDesign: '施術後のフォローあり',
    creage: '3回セットで手厚いフォロー\n経過観察が充実',
    winner: 'creage',
    detail: 'クレアージュは3回セットプランのため、各施術間の経過をしっかり確認し、次の施術に反映する体制が整っています。2回施術では不安な方にとって、3回に分けるクレアージュのアプローチは安心感があります。',
  },
]

const faqs = [
  {
    q: '40代50代で初めてのアートメイクならどっちがおすすめ？',
    a: '40代50代で初めてのアートメイクなら、クレアージュ東京（92点）がおすすめです。エイジングケアに強いクリニックグループで、加齢による眉の変化（下がり眉、薄くなった眉毛）を考慮したデザイン提案が得意。3回に分けて慎重に仕上げるため、失敗リスクも最小限です。',
  },
  {
    q: 'トレンド眉とナチュラル眉、40代50代にはどっちが合う？',
    a: '40代50代の方には、基本的にナチュラル眉がおすすめです。トレンドは数年で変わるため、ナチュラルで骨格に合ったデザインの方が長く楽しめます。ただし、「少しだけトレンドを取り入れたい」という方はトゥルーデザインのトレンドデザインをベースに、やや控えめなアレンジを相談するのも良い選択です。',
  },
  {
    q: '関西在住ですが、クレアージュとトゥルーデザインどちらが通いやすい？',
    a: '関西在住の方にはトゥルーデザインクリニック（85点）が便利です。大阪・神戸エリアに展開しているため、アクセスが良好。クレアージュも大阪院がありますが、3回セットプランで3回通院する必要があるため、トゥルーデザインの方が来院負担が少ない場合があります。',
  },
  {
    q: 'リタッチの長期コストで比較するとどちらがお得？',
    a: '5年間のトータルコスト（初回+リタッチ2回）で比較すると、トゥルーデザインは約114,400円（初回55,000円+リタッチ29,700円×2回）、クレアージュは約198,000円（3回セット132,000円+リタッチ33,000円×2回）。トゥルーデザインの方がリタッチ含む長期コストは安い。ただし、クレアージュは3回セットで仕上がりの精度が高いため、リタッチ回数が少なくて済む可能性もあります。',
  },
  {
    q: 'デザインの修正がしやすいのはどちら？',
    a: 'クレアージュの3回セットプランは、1回目→経過確認→2回目→経過確認→3回目と段階的に仕上げるため、各段階でデザインの修正・微調整がしやすいのが大きなメリットです。トゥルーデザインの2回セットでも2回目でのリタッチ修正は可能ですが、修正の機会はクレアージュの方が多いです。',
  },
]

export default function TrueDesignVsCreagePage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '比較', href: '/compare/price' },
            { name: 'トゥルーデザイン vs クレアージュ' },
          ]} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--gold)] text-sm font-semibold mb-2">2026年4月最新</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            トゥルーデザインクリニック vs クレアージュ東京<br />
            <span className="text-[var(--gold)]">40代50代向け徹底比較</span>
          </h1>
          <p className="text-[#6B6560] leading-relaxed mb-8">
            トレンドデザインのトゥルーデザイン vs ナチュラル仕上げのクレアージュ。<br className="md:hidden" />
            40代50代の方に最適なのはどっち？10項目で比較します。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#comparison-table" className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">比較表を見る</a>
            <a href="#conclusion" className="glass-card px-8 py-4 rounded-full font-bold border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--blush)] transition-colors">結論を先に見る</a>
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-12 px-4 bg-section-warm" id="conclusion">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">結論：どっちを選ぶべき？</h2>
          <p className="text-center text-[#6B6560] mb-8">あなたの状況で最適なクリニックが変わります</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-8 border-2 border-[var(--gold)]">
              <div className="text-center mb-4">
                <span className="badge-gold text-sm font-bold px-4 py-1 rounded-full mb-3 inline-block">関西在住・コスパ重視なら</span>
                <h3 className="text-2xl font-bold">トゥルーデザインクリニック</h3>
                <p className="text-sm text-[var(--gold)]">（85点）</p>
              </div>
              <ul className="space-y-3 text-sm text-[#6B6560]">
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>眉2回55,000円〜のリーズナブル料金</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>リタッチ29,700円〜で長期コストも安い</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>トレンドを取り入れたデザイン力</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>関西エリアでアクセス良好</li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-8 border-2 border-[var(--pink-beige)]">
              <div className="text-center mb-4">
                <span className="bg-[var(--pink-beige)] text-[var(--foreground)] text-sm font-bold px-4 py-1 rounded-full mb-3 inline-block">全国・ナチュラル重視なら</span>
                <h3 className="text-2xl font-bold">クレアージュ東京</h3>
                <p className="text-sm text-[var(--gold)]">（92点）</p>
              </div>
              <ul className="space-y-3 text-sm text-[#6B6560]">
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>3回セットで失敗リスクを最小化</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>40代50代の施術実績が特に豊富</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>指名料無料で追加費用なし</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)] font-bold">✓</span>全国展開（東京・大阪・名古屋）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10項目比較表 */}
      <section className="py-12 px-4" id="comparison-table">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">10項目比較表</h2>
          <p className="text-center text-[#6B6560] mb-8">トゥルーデザインとクレアージュを10の観点で徹底比較</p>
          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-xl">
              <thead>
                <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                  <th className="p-4 text-left rounded-tl-xl min-w-[120px]">比較項目</th>
                  <th className="p-4 text-center min-w-[200px]">トゥルーデザイン</th>
                  <th className="p-4 text-center min-w-[200px]">クレアージュ東京</th>
                  <th className="p-4 text-center rounded-tr-xl min-w-[80px]">判定</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, i) => (
                  <tr key={i} className={`border-b border-[var(--pink-beige)] ${i % 2 === 0 ? 'bg-[var(--blush)]/30' : ''}`}>
                    <td className="p-4 font-semibold text-sm">{item.label}</td>
                    <td className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === 'trueDesign' ? 'font-semibold text-[var(--gold)]' : 'text-[#6B6560]'}`}>{item.trueDesign}</td>
                    <td className={`p-4 text-sm text-center whitespace-pre-line ${item.winner === 'creage' ? 'font-semibold text-[var(--gold)]' : 'text-[#6B6560]'}`}>{item.creage}</td>
                    <td className="p-4 text-center">
                      {item.winner === 'trueDesign' && <span className="badge-gold text-xs font-bold px-2 py-1 rounded-full">TD</span>}
                      {item.winner === 'creage' && <span className="bg-[var(--pink-beige)] text-[var(--foreground)] text-xs font-bold px-2 py-1 rounded-full">CL</span>}
                      {item.winner === 'draw' && <span className="bg-gray-200 text-[#6B6560] text-xs font-bold px-2 py-1 rounded-full">引分</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-center gap-6 text-xs text-[#8B8580]">
            <span><span className="inline-block w-3 h-3 bg-[var(--gold)] rounded-full mr-1 align-middle" />TD = トゥルーデザイン優位</span>
            <span><span className="inline-block w-3 h-3 bg-[var(--pink-beige)] rounded-full mr-1 align-middle" />CL = クレアージュ優位</span>
            <span><span className="inline-block w-3 h-3 bg-gray-300 rounded-full mr-1 align-middle" />引分 = ほぼ同等</span>
          </div>
        </div>
      </section>

      {/* 各項目の詳細解説 */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">各項目の詳細解説</h2>
          <div className="space-y-6">
            {comparisonItems.map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <h3 className="text-lg font-bold">{item.label}</h3>
                  {item.winner !== 'draw' && (
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.winner === 'trueDesign' ? 'badge-gold' : 'bg-[var(--pink-beige)]'}`}>
                      {item.winner === 'trueDesign' ? 'トゥルーデザイン優位' : 'クレアージュ優位'}
                    </span>
                  )}
                  {item.winner === 'draw' && <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-200 text-[#6B6560]">好みで選択</span>}
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className={`rounded-xl p-4 ${item.winner === 'trueDesign' ? 'bg-[var(--blush)] border border-[var(--gold-light)]' : 'bg-white border border-[var(--pink-beige)]'}`}>
                    <p className="text-xs font-bold text-[var(--gold)] mb-1">トゥルーデザインクリニック</p>
                    <p className="text-sm text-[#6B6560] whitespace-pre-line">{item.trueDesign}</p>
                  </div>
                  <div className={`rounded-xl p-4 ${item.winner === 'creage' ? 'bg-[var(--blush)] border border-[var(--gold-light)]' : 'bg-white border border-[var(--pink-beige)]'}`}>
                    <p className="text-xs font-bold text-[var(--gold)] mb-1">クレアージュ東京</p>
                    <p className="text-sm text-[#6B6560] whitespace-pre-line">{item.creage}</p>
                  </div>
                </div>
                <p className="text-sm text-[#6B6560] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* デザインの違い特集 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">デザインの違い：トレンド vs ナチュラル</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-[var(--gold)]">
              <h3 className="font-bold text-lg mb-4 text-[var(--gold)]">トゥルーデザイン：トレンドデザイン</h3>
              <ul className="space-y-3 text-sm text-[#6B6560]">
                <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>SNS映えする華やかなデザイン</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>韓国風の平行眉やアーチ眉も対応</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>メイク映えする眉に仕上がる</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>「眉を描いた感」が出やすい場合も</li>
              </ul>
              <p className="mt-4 text-xs text-[#8B8580] bg-[var(--blush)] rounded-lg p-3">おすすめ：トレンドを取り入れたい方、華やかな印象が好みの方、メイクを楽しみたい方</p>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
              <h3 className="font-bold text-lg mb-4 text-[var(--gold)]">クレアージュ：ナチュラルデザイン</h3>
              <ul className="space-y-3 text-sm text-[#6B6560]">
                <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>骨格分析に基づいた自然な形</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>すっぴんでも違和感のない仕上がり</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>年齢を問わず似合うデザイン</li>
                <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>トレンドに左右されない普遍性</li>
              </ul>
              <p className="mt-4 text-xs text-[#8B8580] bg-[var(--blush)] rounded-lg p-3">おすすめ：自然さ重視の方、すっぴんに自信を持ちたい方、40代50代で初めての方</p>
            </div>
          </div>
        </div>
      </section>

      {/* リタッチコスト比較 */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">リタッチコスト 長期比較</h2>
          <div className="glass-card rounded-3xl p-6 border border-[var(--gold-light)]">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                    <th className="p-3 text-left rounded-tl-xl">期間</th>
                    <th className="p-3 text-center">トゥルーデザイン</th>
                    <th className="p-3 text-center rounded-tr-xl">クレアージュ東京</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--pink-beige)]">
                    <td className="p-3 font-bold">初回施術</td>
                    <td className="p-3 text-center">55,000円（2回）</td>
                    <td className="p-3 text-center">132,000円（3回）</td>
                  </tr>
                  <tr className="border-b border-[var(--pink-beige)]">
                    <td className="p-3 font-bold">+リタッチ1回</td>
                    <td className="p-3 text-center">84,700円</td>
                    <td className="p-3 text-center">165,000円</td>
                  </tr>
                  <tr className="border-b border-[var(--pink-beige)]">
                    <td className="p-3 font-bold">+リタッチ2回（3年目安）</td>
                    <td className="p-3 text-center font-bold text-[var(--gold)]">114,400円</td>
                    <td className="p-3 text-center">198,000円</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">+リタッチ3回（5年目安）</td>
                    <td className="p-3 text-center font-bold text-[var(--gold)]">144,100円</td>
                    <td className="p-3 text-center">231,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#8B8580] mt-4">※ 料金は最低価格での試算。実際の料金はメニュー・アーティストランクにより異なります。</p>
          </div>
        </div>
      </section>

      {/* 使い分けガイド */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">使い分けガイド</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8 border border-[var(--gold)]">
              <div className="text-center mb-6">
                <span className="badge-gold text-lg font-bold px-6 py-2 rounded-full inline-block">トゥルーデザイン向き</span>
              </div>
              <ul className="space-y-4">
                {[
                  '関西（大阪・神戸）在住',
                  'コスパを重視したい',
                  'トレンド感のあるデザインが好み',
                  'リタッチも含めた長期コストを抑えたい',
                  'SNS映えする眉にしたい',
                  '華やかな印象のメイク顔が好き',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="bg-[var(--blush)] text-[var(--gold)] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{i + 1}</span>
                    <span className="text-[#6B6560]">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-[var(--pink-beige)]">
              <div className="text-center mb-6">
                <span className="bg-[var(--pink-beige)] text-[var(--foreground)] text-lg font-bold px-6 py-2 rounded-full inline-block">クレアージュ向き</span>
              </div>
              <ul className="space-y-4">
                {[
                  '全国（東京・大阪・名古屋）で通いたい',
                  '40代50代で年齢に合ったデザインが欲しい',
                  'ナチュラルで自然な仕上がりが好み',
                  '3回に分けて慎重に仕上げたい',
                  '指名料無料で追加費用を避けたい',
                  '初めてのアートメイクで失敗が怖い',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="bg-[var(--blush)] text-[var(--gold)] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{i + 1}</span>
                    <span className="text-[#6B6560]">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">よくある質問（FAQ）</h2>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center">
          <h2 className="text-xl font-bold mb-4">まずは無料カウンセリングで相談</h2>
          <p className="text-[#6B6560] mb-6">どちらのクリニックも無料カウンセリングを実施中。実際の症例を見ながら、自分に合うデザインを相談しましょう。</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/review/true-design" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">トゥルーデザインクリニック</p>
              <p className="text-xs text-[#8B8580] mt-1">口コミ・評判を徹底調査</p>
            </Link>
            <Link href="/review/creage" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">クレアージュ東京</p>
              <p className="text-xs text-[#8B8580] mt-1">口コミ・評判を徹底調査</p>
            </Link>
            <Link href="/purpose/40s-50s" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">40代50代のアートメイク</p>
              <p className="text-xs text-[#8B8580] mt-1">年代別おすすめガイド</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
