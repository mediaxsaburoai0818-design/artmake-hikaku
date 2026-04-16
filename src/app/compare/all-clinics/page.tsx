import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイク全クリニック比較｜5院を15項目で徹底ランキング【2026年最新】',
  description: '【2026年4月最新】アートメイクおすすめ5クリニックを15項目以上で完全比較。料金・技法・症例数・口コミ・展開エリアから、目的別・部位別おすすめ、選び方フローチャートまで。あなたに最適なクリニックが見つかる。',
  keywords: 'アートメイク クリニック 比較,アートメイク ランキング,アートメイク おすすめ,眉毛アートメイク 比較',
  openGraph: {
    title: 'アートメイク全クリニック比較｜5院を15項目で徹底ランキング',
    description: 'アートメイクおすすめ5クリニックを15項目以上で完全比較。',
    type: 'article',
  },
}

const clinics = [
  {
    rank: 1,
    name: 'メディカルブロー',
    score: 95,
    eyebrowPrice: '1回 28,000円〜\n2回 90,000円〜',
    lipPrice: '1回 50,000円〜',
    eyelinePrice: '1回 30,000円〜',
    retouchPrice: '20,000円〜',
    technique: '7Dストローク（独自技術）',
    cases: '23万件超',
    area: '全国9院以上',
    counseling: '来院のみ',
    designationFee: 'ランク制（別途あり）',
    discount: '学割・ペア割 最大25%OFF',
    pain: '麻酔クリーム（ほぼ無痛）',
    downtime: '1〜2週間',
    mens: 'メンズ専用メニューあり',
    online: 'なし',
    highlight: '毛並みの自然さNo.1。累計23万件超の圧倒的実績。7Dストロークによる超精密な毛流れ再現技術。',
  },
  {
    rank: 2,
    name: 'クレアージュ東京',
    score: 92,
    eyebrowPrice: '3回 132,000円〜\n（1回あたり44,000円）',
    lipPrice: '3回 198,000円〜',
    eyelinePrice: '3回 99,000円〜',
    retouchPrice: '33,000円〜',
    technique: '3回分けメソッド',
    cases: '10,000件以上',
    area: '全国（東京・大阪・名古屋）',
    counseling: '来院（医師カウンセリング）',
    designationFee: '無料',
    discount: '特になし',
    pain: '麻酔クリーム（ほぼ無痛）',
    downtime: '1〜2週間',
    mens: '対応あり',
    online: 'なし',
    highlight: '3回に分けて慎重に仕上げる独自メソッド。40代50代の実績が豊富。指名料無料で追加費用なし。',
  },
  {
    rank: 3,
    name: 'デイジークリニック',
    score: 90,
    eyebrowPrice: '2回 49,800円〜（モニター）\n2回 69,800円〜（通常）',
    lipPrice: '2回 99,000円〜',
    eyelinePrice: '2回 66,000円〜',
    retouchPrice: '33,000円〜',
    technique: 'dazzy brow（3技法選択可）',
    cases: '非公開（多数）',
    area: '全国4院',
    counseling: 'オンライン+来院',
    designationFee: '料金に含む場合あり',
    discount: 'モニター最大50%OFF',
    pain: '麻酔クリーム（ほぼ無痛）',
    downtime: '1〜2週間',
    mens: '対応あり',
    online: '対応あり',
    highlight: 'コスパ最強。モニター2回49,800円〜は業界最安水準。3技法から選べる柔軟性。オンラインカウンセリング対応。',
  },
  {
    rank: 4,
    name: 'ファーストアートメイク',
    score: 87,
    eyebrowPrice: '2回 50,000円〜',
    lipPrice: '2回 80,000円〜',
    eyelinePrice: '2回 60,000円〜',
    retouchPrice: '35,000円〜',
    technique: 'ナチュラルストローク（手彫り中心）',
    cases: '非公開（実績多数）',
    area: '東京都内中心',
    counseling: '来院（丁寧な説明）',
    designationFee: '要確認',
    discount: '初回限定割引・セット割',
    pain: '麻酔クリーム＋追加対応可',
    downtime: '1〜2週間',
    mens: '対応あり（男性実績豊富）',
    online: 'なし',
    highlight: '初心者に寄り添った丁寧なカウンセリング。手彫りの自然な毛並み感。痛みに敏感な方への追加対応。',
  },
  {
    rank: 5,
    name: 'トゥルーデザインクリニック',
    score: 85,
    eyebrowPrice: '2回 55,000円〜',
    lipPrice: '2回 77,000円〜',
    eyelinePrice: '2回 55,000円〜',
    retouchPrice: '29,700円〜',
    technique: '毛並みストローク',
    cases: '非公開（実績多数）',
    area: '関西エリア中心',
    counseling: '来院',
    designationFee: 'アーティストにより変動',
    discount: '要確認',
    pain: '麻酔クリーム（ほぼ無痛）',
    downtime: '1〜2週間',
    mens: '対応あり',
    online: 'なし',
    highlight: 'リタッチ29,700円〜で長期コスト最安。関西エリアで通いやすい。トレンドデザインが得意。',
  },
]

const comparisonHeaders = [
  '眉料金', 'リップ料金', 'アイライン料金', 'リタッチ料金', '技法', '症例数',
  '展開エリア', 'カウンセリング', '指名料', '割引制度', '痛み対策',
  'ダウンタイム', 'メンズ対応', 'オンライン対応',
]

const purposeRecommendations = [
  { purpose: 'コスパ重視', recommended: 'デイジークリニック（90点）', reason: 'モニター2回49,800円〜は業界最安。コストを最重視するならデイジー一択。' },
  { purpose: '自然な仕上がり重視', recommended: 'メディカルブロー（95点）', reason: '7Dストロークの毛流れ再現技術は業界最高峰。すっぴんでも自然な眉に。' },
  { purpose: '初心者・安心感重視', recommended: 'ファーストアートメイク（87点）', reason: 'カウンセリングの丁寧さに定評。初めてで不安な方に最適。' },
  { purpose: '40代50代', recommended: 'クレアージュ東京（92点）', reason: 'エイジングケアに強く、40代50代の施術実績が特に豊富。3回分けメソッドで失敗リスク最小。' },
  { purpose: 'メンズ', recommended: 'メディカルブロー（95点）', reason: 'メンズ専用メニューあり。男性の骨格・毛質に合わせたデザイン提案の実績が豊富。' },
  { purpose: '関西在住', recommended: 'トゥルーデザインクリニック（85点）', reason: '大阪・神戸エリアでアクセス良好。リタッチ29,700円〜で長期コストも安い。' },
]

const partRecommendations = [
  { part: '眉（アイブロウ）', first: 'メディカルブロー', reason: '7Dストロークの毛並み再現が業界最高。自然な眉を目指すなら。' },
  { part: 'リップ', first: 'クレアージュ東京', reason: '3回に分けて色味を慎重に調整。リップは色の変化が大きいため、慎重なアプローチが安心。' },
  { part: 'アイライン', first: 'メディカルブロー', reason: '累計23万件の実績にはアイラインも多数。繊細な部位だからこそ実績重視で。' },
]

const flowchart = [
  { question: 'Q1. 予算は？', optionA: '5万円以下 → デイジークリニック（モニター49,800円〜）', optionB: '5万円以上OK → Q2へ' },
  { question: 'Q2. 住んでいるエリアは？', optionA: '関西 → トゥルーデザインクリニック', optionB: '関東・その他 → Q3へ' },
  { question: 'Q3. 年代は？', optionA: '40代以上 → クレアージュ東京', optionB: '20代〜30代 → Q4へ' },
  { question: 'Q4. 最も重視することは？', optionA: '自然さ・実績 → メディカルブロー', optionB: '安心感・丁寧さ → ファーストアートメイク' },
]

export default function AllClinicsPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: '比較', href: '/compare/price' },
            { name: '全クリニック比較' },
          ]} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--gold)] text-sm font-semibold mb-2">2026年4月最新 COMPLETE COMPARISON</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">アートメイク全5クリニック<br className="md:hidden" />完全比較ランキング</h1>
          <p className="text-[#6B6560] leading-relaxed mb-8">
            15項目以上で徹底比較。目的別・部位別おすすめから<br className="md:hidden" />
            選び方フローチャートまで、あなたに最適な1院が見つかる。
          </p>
        </div>
      </section>

      <div className="glass-card rounded-3xl p-6 mb-10 border border-[var(--gold-light)] max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-[var(--gold)]">この記事でわかること</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>5クリニックを15項目で完全比較</li>
          <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>目的別おすすめ（コスパ/自然さ/初心者/40代50代/メンズ/関西）</li>
          <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>部位別おすすめ（眉/リップ/アイライン）</li>
          <li className="flex items-start gap-2"><span className="text-[var(--gold)]">✦</span>選び方フローチャートで最適な1院が分かる</li>
        </ul>
      </div>

      {/* 総合ランキング */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">総合ランキング</h2>
          <div className="space-y-6">
            {clinics.map((clinic) => (
              <div key={clinic.rank} className={`glass-card rounded-2xl p-6 border ${clinic.rank === 1 ? 'border-[var(--gold)] border-2' : 'border-[var(--pink-beige)]'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${clinic.rank === 1 ? 'bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white' : clinic.rank === 2 ? 'bg-gray-300 text-white' : clinic.rank === 3 ? 'bg-amber-600 text-white' : 'bg-[var(--pink-beige)] text-[var(--foreground)]'}`}>
                    {clinic.rank}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{clinic.name}</h3>
                    <p className="text-[var(--gold)] font-bold">{clinic.score}点/100点</p>
                  </div>
                  {clinic.rank === 1 && <span className="badge-gold px-3 py-1 rounded-full text-sm ml-auto">総合1位</span>}
                </div>
                <p className="text-sm text-[#6B6560] mb-4">{clinic.highlight}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-[var(--blush)] rounded-xl p-3 text-center">
                    <p className="text-xs text-[#8B8580]">眉料金</p>
                    <p className="text-sm font-bold whitespace-pre-line">{clinic.eyebrowPrice.split('\n')[0]}</p>
                  </div>
                  <div className="bg-[var(--blush)] rounded-xl p-3 text-center">
                    <p className="text-xs text-[#8B8580]">技法</p>
                    <p className="text-sm font-bold">{clinic.technique.split('（')[0]}</p>
                  </div>
                  <div className="bg-[var(--blush)] rounded-xl p-3 text-center">
                    <p className="text-xs text-[#8B8580]">症例数</p>
                    <p className="text-sm font-bold">{clinic.cases}</p>
                  </div>
                  <div className="bg-[var(--blush)] rounded-xl p-3 text-center">
                    <p className="text-xs text-[#8B8580]">展開エリア</p>
                    <p className="text-sm font-bold">{clinic.area}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15項目大型比較表 */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">15項目 完全比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-xl text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                  <th className="p-3 text-left rounded-tl-xl min-w-[130px] sticky left-0 bg-[var(--gold)]">比較項目</th>
                  {clinics.map((c) => (
                    <th key={c.rank} className={`p-3 text-center min-w-[150px] ${c.rank === clinics.length ? 'rounded-tr-xl' : ''}`}>
                      {c.name}<br /><span className="text-xs font-normal">（{c.score}点）</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--pink-beige)]">
                  <td className="p-3 font-bold sticky left-0 bg-white">眉料金</td>
                  {clinics.map((c) => <td key={c.rank} className="p-3 text-center whitespace-pre-line">{c.eyebrowPrice}</td>)}
                </tr>
                <tr className="border-b border-[var(--pink-beige)] bg-[var(--blush)]/30">
                  <td className="p-3 font-bold sticky left-0 bg-[var(--blush)]">リップ料金</td>
                  {clinics.map((c) => <td key={c.rank} className="p-3 text-center whitespace-pre-line">{c.lipPrice}</td>)}
                </tr>
                <tr className="border-b border-[var(--pink-beige)]">
                  <td className="p-3 font-bold sticky left-0 bg-white">アイライン料金</td>
                  {clinics.map((c) => <td key={c.rank} className="p-3 text-center whitespace-pre-line">{c.eyelinePrice}</td>)}
                </tr>
                <tr className="border-b border-[var(--pink-beige)] bg-[var(--blush)]/30">
                  <td className="p-3 font-bold sticky left-0 bg-[var(--blush)]">リタッチ料金</td>
                  {clinics.map((c) => <td key={c.rank} className={`p-3 text-center ${c.name === 'トゥルーデザインクリニック' ? 'font-bold text-[var(--gold)]' : ''}`}>{c.retouchPrice}</td>)}
                </tr>
                <tr className="border-b border-[var(--pink-beige)]">
                  <td className="p-3 font-bold sticky left-0 bg-white">技法</td>
                  {clinics.map((c) => <td key={c.rank} className="p-3 text-center whitespace-pre-line">{c.technique}</td>)}
                </tr>
                <tr className="border-b border-[var(--pink-beige)] bg-[var(--blush)]/30">
                  <td className="p-3 font-bold sticky left-0 bg-[var(--blush)]">症例数</td>
                  {clinics.map((c) => <td key={c.rank} className={`p-3 text-center ${c.cases === '23万件超' ? 'font-bold text-[var(--gold)]' : ''}`}>{c.cases}</td>)}
                </tr>
                <tr className="border-b border-[var(--pink-beige)]">
                  <td className="p-3 font-bold sticky left-0 bg-white">展開エリア</td>
                  {clinics.map((c) => <td key={c.rank} className="p-3 text-center">{c.area}</td>)}
                </tr>
                <tr className="border-b border-[var(--pink-beige)] bg-[var(--blush)]/30">
                  <td className="p-3 font-bold sticky left-0 bg-[var(--blush)]">カウンセリング</td>
                  {clinics.map((c) => <td key={c.rank} className="p-3 text-center">{c.counseling}</td>)}
                </tr>
                <tr className="border-b border-[var(--pink-beige)]">
                  <td className="p-3 font-bold sticky left-0 bg-white">指名料</td>
                  {clinics.map((c) => <td key={c.rank} className={`p-3 text-center ${c.designationFee === '無料' ? 'font-bold text-[var(--gold)]' : ''}`}>{c.designationFee}</td>)}
                </tr>
                <tr className="border-b border-[var(--pink-beige)] bg-[var(--blush)]/30">
                  <td className="p-3 font-bold sticky left-0 bg-[var(--blush)]">割引制度</td>
                  {clinics.map((c) => <td key={c.rank} className="p-3 text-center">{c.discount}</td>)}
                </tr>
                <tr className="border-b border-[var(--pink-beige)]">
                  <td className="p-3 font-bold sticky left-0 bg-white">痛み対策</td>
                  {clinics.map((c) => <td key={c.rank} className="p-3 text-center">{c.pain}</td>)}
                </tr>
                <tr className="border-b border-[var(--pink-beige)] bg-[var(--blush)]/30">
                  <td className="p-3 font-bold sticky left-0 bg-[var(--blush)]">ダウンタイム</td>
                  {clinics.map((c) => <td key={c.rank} className="p-3 text-center">{c.downtime}</td>)}
                </tr>
                <tr className="border-b border-[var(--pink-beige)]">
                  <td className="p-3 font-bold sticky left-0 bg-white">メンズ対応</td>
                  {clinics.map((c) => <td key={c.rank} className="p-3 text-center">{c.mens}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-bold sticky left-0 bg-white">オンライン対応</td>
                  {clinics.map((c) => <td key={c.rank} className={`p-3 text-center ${c.online === '対応あり' ? 'font-bold text-[var(--gold)]' : ''}`}>{c.online}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#8B8580] mt-4 text-center">※ 料金は税込・2026年4月時点の情報です。詳細は各クリニック公式サイトをご確認ください。</p>
        </div>
      </section>

      {/* 目的別おすすめ */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">目的別おすすめクリニック</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {purposeRecommendations.map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
                <span className="badge-gold text-xs px-3 py-1 rounded-full">{item.purpose}</span>
                <h3 className="font-bold text-lg mt-3 mb-2">{item.recommended}</h3>
                <p className="text-sm text-[#6B6560]">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 部位別おすすめ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">部位別おすすめクリニック</h2>
          <div className="space-y-4">
            {partRecommendations.map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)] flex items-start gap-4">
                <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="badge-gold text-xs px-3 py-1 rounded-full">{item.part}</span>
                    <h3 className="font-bold">{item.first}</h3>
                  </div>
                  <p className="text-sm text-[#6B6560]">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 選び方フローチャート */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">選び方フローチャート</h2>
          <p className="text-center text-[#6B6560] mb-8">4つの質問で、あなたに最適なクリニックが分かります</p>
          <div className="space-y-6">
            {flowchart.map((step, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-[var(--gold-light)]">
                <h3 className="font-bold text-lg mb-4 text-[var(--gold)]">{step.question}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[var(--blush)] rounded-xl p-4">
                    <p className="text-sm font-semibold">A: {step.optionA}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-[var(--pink-beige)]">
                    <p className="text-sm font-semibold">B: {step.optionB}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">まとめ</h2>
          <div className="glass-card rounded-3xl p-8 border border-[var(--gold-light)]">
            <div className="space-y-4 text-sm text-[#6B6560] leading-relaxed">
              <p>
                5つのクリニックにはそれぞれ明確な強みがあり、「万人に最適な1院」は存在しません。大切なのは、<strong>自分の優先順位に合ったクリニック</strong>を選ぶことです。
              </p>
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <ul className="space-y-2">
                  <li><strong className="text-[var(--gold)]">実績・自然さ重視：</strong>メディカルブロー（95点）- 7Dストロークの毛並み再現は業界最高峰</li>
                  <li><strong className="text-[var(--gold)]">40代50代・慎重派：</strong>クレアージュ東京（92点）- 3回分けメソッドで失敗リスク最小</li>
                  <li><strong className="text-[var(--gold)]">コスパ最優先：</strong>デイジークリニック（90点）- モニター2回49,800円〜は業界最安</li>
                  <li><strong className="text-[var(--gold)]">初心者・安心感：</strong>ファーストアートメイク（87点）- 丁寧なカウンセリングが魅力</li>
                  <li><strong className="text-[var(--gold)]">関西・長期コスト：</strong>トゥルーデザインクリニック（85点）- リタッチ29,700円〜で最安</li>
                </ul>
              </div>
              <p>
                迷ったら、<strong>2〜3院の無料カウンセリングを受けて比較する</strong>のが最善の方法です。カウンセリングの雰囲気やデザイン提案力を実際に体感することで、自分に合ったクリニックが見えてきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center">
          <h2 className="text-xl font-bold mb-4">まずは無料カウンセリングから</h2>
          <p className="text-[#6B6560] mb-6">気になるクリニック2〜3院のカウンセリングを受けて、自分に合ったクリニックを見つけましょう。</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングTOPへ →</Link>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">おすすめクリニックTOP5</p>
              <p className="text-xs text-[#8B8580] mt-1">総合ランキングを見る</p>
            </Link>
            <Link href="/compare/price" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">アートメイク料金比較表</p>
              <p className="text-xs text-[#8B8580] mt-1">部位別の料金を一覧で比較</p>
            </Link>
            <Link href="/compare/medicalbrow-vs-dazzy" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">メディカルブロー vs デイジー</p>
              <p className="text-xs text-[#8B8580] mt-1">人気2院を10項目で比較</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
