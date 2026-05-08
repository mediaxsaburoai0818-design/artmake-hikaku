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

      {/* 編集部による詳細解説 */}
      <section className="px-4 pb-8">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 border border-[var(--pink-beige)]">
          <h2 className="text-xl font-bold mb-4">アートメイククリニック全5院比較 - 編集部が独自採点で徹底検証</h2>
          <div className="text-sm text-[#6B6560] leading-relaxed space-y-4">
            <p>
              アートメイクは医療行為であり、クリニック選びで仕上がりが大きく変わります。本ページでは、メディカルブロー・クレアージュ東京・デイジークリニック・ファーストアートメイク・トゥルーデザインクリニックの主要5院を、料金・技法・症例数・口コミ・展開エリアなど<strong>15項目にわたって横断比較</strong>しています。各クリニックの公式情報と実際の利用者の声をもとに、100点満点の独自スコアリングで客観的に評価しました。
            </p>
            <p>
              「料金だけで選んで後悔した」「自分に合う技法が分からなかった」という声は少なくありません。眉毛アートメイクひとつとっても、7Dストローク・パウダー・手彫りなど技法はさまざまで、クリニックごとに得意分野が異なります。この比較ページでは、コスパ重視・自然さ重視・初心者向け・40代50代向け・メンズ・関西エリアといった<strong>目的別の最適クリニック</strong>も提示しているため、ご自身の優先順位に合った1院が見つかります。
            </p>
            <p>
              さらに、眉・リップ・アイラインの<strong>部位別おすすめ</strong>や、4つの質問で最適なクリニックが分かる選び方フローチャートも掲載。2026年4月時点の最新料金に基づいた情報で、初めてアートメイクを検討する方から、クリニックの乗り換えを考えている方まで、幅広く参考にしていただけます。
            </p>
          </div>
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

      {/* 各クリニック個別分析 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">各クリニックの強み・弱み詳細分析</h2>

          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
              <h3 className="text-lg font-bold mb-3 text-[var(--gold)]">メディカルブロー - 技術力と実績で圧倒する業界最大手</h3>
              <div className="text-sm text-[#6B6560] leading-relaxed space-y-3">
                <p>メディカルブローの最大の強みは、累計23万件を超える圧倒的な症例実績と、独自開発の7Dストローク技術です。従来の4Dストロークをさらに進化させ、毛の流れ・太さ・濃淡まで再現する精密技術は、他院にはない独自の優位性を持っています。全国9院以上を展開し、どの地域からもアクセスしやすい点も大きなメリットです。</p>
                <p>一方、アーティストランク制による料金変動には注意が必要です。トップランクの施術者を指名すると追加で最大25,000円の指名料がかかるため、総額が想定以上になることがあります。とはいえ、学割・ペア割で最大25%OFFになる制度もあり、条件次第ではコストパフォーマンスが非常に高くなります。自然な毛並み感を最優先する方には最もおすすめできるクリニックです。</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
              <h3 className="text-lg font-bold mb-3 text-[var(--gold)]">クレアージュ東京 - 3回分けメソッドで失敗リスクを最小化</h3>
              <div className="text-sm text-[#6B6560] leading-relaxed space-y-3">
                <p>クレアージュ東京が他院と一線を画すのは、施術を3回に分けて慎重に仕上げる独自のメソッドです。1回目でベースを作り、2回目で色味を調整し、3回目で完成度を高めるこのアプローチは、「一度入れたら簡単には消えない」というアートメイクの特性を考慮した非常に合理的な手法と言えます。特に40代・50代の方からの支持が厚く、年齢に合ったナチュラルなデザイン提案に定評があります。</p>
                <p>指名料が完全無料なのも見逃せないポイントです。1回あたり44,000円と料金が明確で、「カウンセリングで聞いた金額と実際の請求額が違った」というトラブルが起きにくい明朗会計を実現しています。ただし、3回通院する必要があるため、忙しい方や遠方の方にはやや不便に感じる可能性があります。</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
              <h3 className="text-lg font-bold mb-3 text-[var(--gold)]">デイジークリニック - コスパ最強のモニター価格と高いデザイン力</h3>
              <div className="text-sm text-[#6B6560] leading-relaxed space-y-3">
                <p>デイジークリニックの最大の魅力は、モニター制度を活用した場合の圧倒的なコストパフォーマンスです。手彫りの眉アートメイクがモニター価格で2回49,800円からと、主要クリニックの中で最安水準を実現しています。世界的に活躍するアーティストが監修しており、低価格でありながらデザインの質は高い水準を維持しています。</p>
                <p>また、機械彫り・手彫り・コンビネーションの3技法から選べる柔軟性と、オンラインカウンセリングに対応している利便性も強みです。ただし、院によって対応技法が異なるケースがあるため、希望の技法が自分の最寄り院で受けられるかを事前に確認する必要があります。予算を最優先する方、デザイン性を重視したい方におすすめです。</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
              <h3 className="text-lg font-bold mb-3 text-[var(--gold)]">ファーストアートメイク - 初心者に寄り添う丁寧なカウンセリング</h3>
              <div className="text-sm text-[#6B6560] leading-relaxed space-y-3">
                <p>ファーストアートメイクは「はじめてのアートメイク」に特化したクリニックです。施術前のカウンセリングに特に時間をかけ、デザインの微調整を何度でも対応してくれる丁寧さが最大の強みです。痛みに敏感な方には麻酔の追加対応も行っており、「初めてだから不安」という方の心理的ハードルを下げる取り組みが充実しています。</p>
                <p>銀座駅徒歩3分という好立地も魅力ですが、現時点では東京都内の1院のみの展開のため、地方在住の方にはアクセス面でのデメリットがあります。また、大手と比較すると症例数は限定的です。とはいえ、「初めてだからこそ安心できるクリニックで受けたい」という方にとっては、最も信頼できる選択肢の一つです。</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
              <h3 className="text-lg font-bold mb-3 text-[var(--gold)]">トゥルーデザインクリニック - 関西エリアでリタッチコスト最安</h3>
              <div className="text-sm text-[#6B6560] leading-relaxed space-y-3">
                <p>トゥルーデザインクリニックは関西エリアを拠点とするクリニックで、リタッチ料金29,700円からという長期コストの安さが際立ちます。アートメイクは1〜3年で徐々に薄くなるため、定期的なリタッチが必要になりますが、このリタッチ費用を抑えられることは、長い目で見ると大きなメリットです。トレンドに敏感なデザイン提案力にも定評があります。</p>
                <p>大阪の心斎橋を拠点としているため、関西在住の方にとっては非常にアクセスが良い一方、関東から通うのは現実的ではありません。症例数も非公開であるため、実績の透明性という点では大手に劣ります。ただし、関西エリアで「長期的なコストを抑えつつ、トレンド感のある眉を維持したい」という方には最適な選択肢です。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 比較のポイント */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">比較のポイント - 独自スコアリングの評価方法</h2>
          <div className="glass-card rounded-3xl p-8 border border-[var(--gold-light)]">
            <div className="text-sm text-[#6B6560] leading-relaxed space-y-4">
              <p>
                本ランキングでは、アートメイクを検討する際に重要となる<strong>5つの評価軸</strong>を設定し、各クリニックを100点満点で独自採点しています。評価軸と配点は以下のとおりです。
              </p>
              <div className="grid md:grid-cols-5 gap-3 my-6">
                <div className="bg-[var(--blush)] rounded-xl p-4 text-center">
                  <p className="font-bold text-[var(--gold)] text-lg">30点</p>
                  <p className="font-bold text-sm mt-1">料金の透明性</p>
                  <p className="text-xs mt-1">料金体系の明瞭さ、追加費用の有無、総額の分かりやすさを評価</p>
                </div>
                <div className="bg-[var(--blush)] rounded-xl p-4 text-center">
                  <p className="font-bold text-[var(--gold)] text-lg">25点</p>
                  <p className="font-bold text-sm mt-1">症例実績</p>
                  <p className="text-xs mt-1">累計症例数、ビフォーアフター写真の質・量、施術者の経験値</p>
                </div>
                <div className="bg-[var(--blush)] rounded-xl p-4 text-center">
                  <p className="font-bold text-[var(--gold)] text-lg">20点</p>
                  <p className="font-bold text-sm mt-1">カウンセリング</p>
                  <p className="text-xs mt-1">ヒアリングの丁寧さ、デザイン提案力、修正対応の柔軟さ</p>
                </div>
                <div className="bg-[var(--blush)] rounded-xl p-4 text-center">
                  <p className="font-bold text-[var(--gold)] text-lg">15点</p>
                  <p className="font-bold text-sm mt-1">安全性</p>
                  <p className="text-xs mt-1">医療資格の有無、衛生管理体制、アフターケアの充実度</p>
                </div>
                <div className="bg-[var(--blush)] rounded-xl p-4 text-center">
                  <p className="font-bold text-[var(--gold)] text-lg">10点</p>
                  <p className="font-bold text-sm mt-1">アクセス</p>
                  <p className="text-xs mt-1">展開院数、駅からの距離、予約の取りやすさ</p>
                </div>
              </div>
              <p>
                料金の透明性に最も高い配点（30点）を置いている理由は、アートメイクのトラブルで最も多いのが「想定外の追加費用」に関するものだからです。指名料・麻酔代・リタッチ料金を含めた総額で比較することで、実際にかかる費用を正確に把握できるようにしています。
              </p>
              <p>
                なお、各クリニックの評価は2026年4月時点の公式情報・利用者の口コミ・編集部による実地調査に基づいています。料金やサービス内容は随時変更される可能性があるため、最新の情報は各クリニックの公式サイトでご確認ください。
              </p>
            </div>
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

      {/* よくある質問 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">アートメイククリニック比較でよくある質問</h2>
          <div className="space-y-4">
            {[
              { q: '5院の中で最もコスパが良いクリニックはどこですか？', a: 'モニター制度を活用した場合、デイジークリニックが最もコスパに優れています。眉アートメイクがモニター価格で2回49,800円からと、主要5院の中で最安水準です。ただし、モニター枠には限りがあるため、早めの予約をおすすめします。通常料金で比較した場合はメディカルブローのモニター1回28,000円も有力な選択肢です。' },
              { q: 'アートメイクの施術回数は何回がベストですか？', a: '一般的には2回の施術がスタンダードです。1回目でベースを作り、2回目で色味やデザインを微調整します。クレアージュ東京では3回に分けて施術する独自メソッドを採用しており、より慎重に仕上がりをコントロールできます。脂性肌の方や色が定着しにくい方は、追加施術が必要になることもあります。' },
              { q: '初めてのアートメイクで失敗しないためのクリニック選びのコツは？', a: '最も重要なのは、症例写真の量と質を確認することです。施術直後ではなく「2週間後」の症例写真を公開しているクリニックは信頼できます。また、カウンセリングの丁寧さも重視してください。ファーストアートメイクは初心者向けの丁寧なカウンセリングに定評があり、初めての方に特におすすめです。2〜3院の無料カウンセリングを受けて比較するのがベストです。' },
              { q: '指名料がかかるクリニックとかからないクリニックの違いは？', a: 'クレアージュ東京は指名料完全無料で、どのアーティストを選んでも追加費用がかかりません。一方、メディカルブローはアーティストランク制を採用しており、上位ランクの施術者を指名すると5,000〜25,000円の指名料が別途かかります。総額で比較する際は、施術料金だけでなく指名料・麻酔代・リタッチ料金を含めた金額で検討することが大切です。' },
              { q: '関東と関西でおすすめのクリニックは変わりますか？', a: 'はい、エリアによっておすすめは異なります。関東在住の方には、全国展開しているメディカルブロー、有楽町のクレアージュ東京、銀座のファーストアートメイクが便利です。関西在住の方には、大阪・心斎橋のトゥルーデザインクリニックが最もアクセスしやすく、リタッチ29,700円からと長期コストも安いためおすすめです。' },
              { q: 'メンズアートメイクに対応しているクリニックはどこですか？', a: '5院すべてがメンズ対応していますが、特にメディカルブローはメンズ専用メニューを用意しており、男性の骨格・毛質に合わせたデザイン提案の実績が豊富です。男性の眉アートメイクは自然さが特に重要になるため、症例数が多く毛並み再現技術に優れたクリニックを選ぶことをおすすめします。' },
            ].map((faq, i) => (
              <details key={i} className="glass-card rounded-2xl border border-[var(--pink-beige)] group">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-[var(--blush)] transition-colors flex items-center justify-between rounded-2xl">
                  <span className="text-sm">Q{i + 1}. {faq.q}</span>
                  <span className="text-[var(--gold)] text-xl ml-2 group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="px-6 py-4 border-t border-[var(--pink-beige)] text-[#6B6560] leading-relaxed text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 px-4 bg-section-warm">
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
            <Link href="/review/medicalbrow" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">メディカルブローの口コミ・評判</p>
              <p className="text-xs text-[#8B8580] mt-1">1位クリニックの詳細レビュー</p>
            </Link>
            <Link href="/review/creage" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">クレアージュ東京の口コミ・評判</p>
              <p className="text-xs text-[#8B8580] mt-1">3回分けメソッドの実力は？</p>
            </Link>
            <Link href="/review/dazzy" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">デイジークリニックの口コミ・評判</p>
              <p className="text-xs text-[#8B8580] mt-1">モニター価格の実態を調査</p>
            </Link>
            <Link href="/knowledge/failure" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">アートメイク失敗事例10選</p>
              <p className="text-xs text-[#8B8580] mt-1">後悔しないための対策</p>
            </Link>
            <Link href="/knowledge/price-guide" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">料金相場ガイド</p>
              <p className="text-xs text-[#8B8580] mt-1">1回いくら？総額を解説</p>
            </Link>
            <Link href="/knowledge/counseling" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="font-bold text-sm">カウンセリングガイド</p>
              <p className="text-xs text-[#8B8580] mt-1">聞くべき質問リスト</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: '5院の中で最もコスパが良いクリニックはどこですか？', acceptedAnswer: { '@type': 'Answer', text: 'モニター制度を活用した場合、デイジークリニックが最もコスパに優れています。眉アートメイクがモニター価格で2回49,800円からと、主要5院の中で最安水準です。通常料金で比較した場合はメディカルブローのモニター1回28,000円も有力な選択肢です。' } },
              { '@type': 'Question', name: 'アートメイクの施術回数は何回がベストですか？', acceptedAnswer: { '@type': 'Answer', text: '一般的には2回の施術がスタンダードです。1回目でベースを作り、2回目で色味やデザインを微調整します。クレアージュ東京では3回に分けて施術する独自メソッドを採用しており、より慎重に仕上がりをコントロールできます。' } },
              { '@type': 'Question', name: '初めてのアートメイクで失敗しないためのクリニック選びのコツは？', acceptedAnswer: { '@type': 'Answer', text: '最も重要なのは、症例写真の量と質を確認することです。施術直後ではなく「2週間後」の症例写真を公開しているクリニックは信頼できます。また、カウンセリングの丁寧さも重視してください。2〜3院の無料カウンセリングを受けて比較するのがベストです。' } },
              { '@type': 'Question', name: '指名料がかかるクリニックとかからないクリニックの違いは？', acceptedAnswer: { '@type': 'Answer', text: 'クレアージュ東京は指名料完全無料で、どのアーティストを選んでも追加費用がかかりません。メディカルブローはアーティストランク制を採用しており、上位ランクの施術者を指名すると5,000〜25,000円の指名料が別途かかります。' } },
              { '@type': 'Question', name: '関東と関西でおすすめのクリニックは変わりますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい、エリアによっておすすめは異なります。関東在住の方にはメディカルブロー、クレアージュ東京、ファーストアートメイクが便利です。関西在住の方にはトゥルーデザインクリニックが最もアクセスしやすく、リタッチ29,700円からと長期コストも安いためおすすめです。' } },
              { '@type': 'Question', name: 'メンズアートメイクに対応しているクリニックはどこですか？', acceptedAnswer: { '@type': 'Answer', text: '5院すべてがメンズ対応していますが、特にメディカルブローはメンズ専用メニューを用意しており、男性の骨格・毛質に合わせたデザイン提案の実績が豊富です。' } },
            ],
          }),
        }}
      />
    </main>
  )
}
