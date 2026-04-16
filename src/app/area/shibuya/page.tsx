import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'アートメイク 渋谷 おすすめクリニック｜料金・アクセス徹底比較【2026年最新】',
  description: '渋谷エリアでおすすめのアートメイククリニックを徹底比較。メディカルブロー表参道院、デイジークリニック渋谷本院などの料金・アクセス・特徴を紹介。渋谷駅から通えるクリニックを厳選。',
  keywords: 'アートメイク 渋谷,アートメイク 渋谷 おすすめ,眉毛アートメイク 渋谷,アートメイク 渋谷 安い,アートメイク 表参道',
  openGraph: {
    title: 'アートメイク 渋谷 おすすめクリニック｜料金・アクセス徹底比較',
    description: '渋谷駅周辺のアートメイククリニックを料金・技術で比較。',
    type: 'article',
  },
}

const clinics = [
  {
    rank: 1,
    name: 'メディカルブロー 表参道院',
    score: 95,
    price: '28,000円〜',
    access: '渋谷駅から東京メトロで1駅。表参道駅A1出口より徒歩3分',
    station: '東京メトロ銀座線・半蔵門線・千代田線「表参道駅」',
    hours: '10:00〜20:00',
    point: '年間60,000例超の実績を持つ業界最大手。6Dストロークで自然な毛並み感を実現。表参道院はグランドマスターを含む経験豊富な施術者が多数在籍し、表参道・渋谷エリアの旗艦院として高い人気を誇る。',
    link: '/review/medicalbrow',
  },
  {
    rank: 2,
    name: 'デイジークリニック 渋谷本院',
    score: 90,
    price: '49,800円〜',
    access: '渋谷駅ハチ公口より徒歩5分',
    station: 'JR各線・東京メトロ銀座線・半蔵門線・副都心線「渋谷駅」',
    hours: '10:00〜19:00',
    point: 'オリジナル技法「dazzy brow」が大人気。パウダー×毛並みのハイブリッド技術で、ナチュラルからしっかりメイク風まで対応。渋谷本院はSNSフォロワーからの来院も多く、トレンド感のあるデザインが得意。',
    link: '/review/dazzy',
  },
  {
    rank: 3,
    name: 'クレアージュ東京（有楽町）',
    score: 92,
    price: '132,000円（3回）',
    access: '渋谷駅からJRで約15分。有楽町駅より徒歩1分',
    station: 'JR山手線・京浜東北線「有楽町駅」',
    hours: '10:00〜19:00（水・木のみ14:00〜19:00）',
    point: '3回に分けて慎重に色を重ねる独自のアプローチ。指名料無料で、どの施術者を選んでも追加費用なし。渋谷から電車で15分と少し距離はあるが、品質重視の方に選ばれている。',
    link: '/review/creage',
  },
]

const areaFeatures = [
  { icon: '👩', title: '若い女性が多いエリア', desc: '20〜30代の女性が多く、最新トレンドに敏感な客層。ナチュラルからトレンド眉まで幅広いニーズに対応するクリニックが揃う。' },
  { icon: '✨', title: 'トレンド発信地', desc: '渋谷・表参道は美容トレンドの発信地。最新技法をいち早く取り入れたクリニックが多く、SNS映えするデザインが得意。' },
  { icon: '🚃', title: 'アクセス抜群', desc: 'JR・東京メトロ・東急など複数路線が乗り入れ。渋谷駅から表参道は徒歩15分、電車で1駅とエリア内の移動も便利。' },
  { icon: '🛍', title: '施術後の過ごし方が充実', desc: '施術後のショッピングやカフェ巡りに困らないエリア。表参道ヒルズ、渋谷スクランブルスクエアなど商業施設も充実。' },
]

const faqs = [
  { q: '渋谷で一番安いアートメイククリニックはどこですか？', a: 'メディカルブロー表参道院が28,000円〜（1回）で最安クラスです。施術者ランクにより料金が変動しますが、下位ランクでも基本的な技術研修は共通のため、品質は確保されています。' },
  { q: '渋谷駅から一番近いクリニックはどこですか？', a: 'デイジークリニック渋谷本院が渋谷駅ハチ公口から徒歩5分で最寄りです。メディカルブロー表参道院は表参道駅A1出口から徒歩3分（渋谷駅からは東京メトロで1駅）。' },
  { q: '渋谷エリアでメンズアートメイクは受けられますか？', a: 'はい、メディカルブロー表参道院はメンズアートメイクの実績も豊富です。男性の骨格・好みに合わせたナチュラルな眉デザインを得意としています。' },
  { q: '渋谷と新宿、どちらのエリアがおすすめですか？', a: '通いやすさで選ぶのがベスト。渋谷エリアはトレンド感のあるデザイン重視の方、新宿エリアは夜遅くまでの営業で仕事帰りに通いたい方におすすめです。メディカルブロー・デイジーはどちらのエリアにも院があります。' },
]

export default function ShibuyaAreaPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-section-warm py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { name: 'エリア別', href: '/area/tokyo' },
            { name: '渋谷' },
          ]} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--gold)] text-sm font-semibold mb-2">SHIBUYA AREA GUIDE</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">渋谷でおすすめの<br className="md:hidden" />アートメイククリニック</h1>
          <p className="text-[#6B6560] leading-relaxed mb-8">
            渋谷・表参道エリアはトレンドに敏感な女性が集まる美容激戦区。<br />
            実力派クリニックの料金・アクセス・特徴を徹底比較します。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#clinics" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">クリニック一覧を見る</a>
            <Link href="/area/tokyo" className="inline-block border-2 border-[var(--gold)] text-[var(--gold)] px-8 py-4 rounded-full font-bold hover:bg-[var(--blush)] transition-colors">東京全体を見る</Link>
          </div>
        </div>
      </section>

      {/* エリア特徴 */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">渋谷エリアの特徴</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {areaFeatures.map((f, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-[var(--pink-beige)]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{f.icon}</span>
                  <h3 className="font-bold">{f.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* クリニック一覧 */}
      <section className="py-12 px-4" id="clinics">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">渋谷エリアのおすすめクリニック</h2>
          <div className="space-y-6">
            {clinics.map((clinic) => (
              <div key={clinic.rank} className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)] hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                    {clinic.rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h3 className="font-bold text-xl">{clinic.name}</h3>
                      <span className="badge-gold text-xs">{clinic.score}点</span>
                      <span className="text-2xl font-bold text-[var(--gold)]">{clinic.price}</span>
                    </div>
                    <p className="text-xs text-[#8B8580] mb-1">アクセス: {clinic.access}</p>
                    <p className="text-xs text-[#8B8580] mb-1">路線: {clinic.station}</p>
                    <p className="text-xs text-[#8B8580] mb-2">営業時間: {clinic.hours}</p>
                    <p className="text-sm text-[#6B6560] leading-relaxed mb-3">{clinic.point}</p>
                    <Link href={clinic.link} className="text-[var(--gold)] text-sm font-semibold hover:underline">
                      詳しいレビューを見る →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金比較表 */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">渋谷エリア料金比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                  <th className="p-4 text-left text-sm">クリニック</th>
                  <th className="p-4 text-center text-sm">眉（税込）</th>
                  <th className="p-4 text-center text-sm">回数</th>
                  <th className="p-4 text-center text-sm">アクセス</th>
                </tr>
              </thead>
              <tbody>
                {clinics.map((c, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[var(--blush)]' : 'bg-white/50'}>
                    <td className="p-4 text-sm font-bold">{c.name}</td>
                    <td className="p-4 text-center text-sm font-bold text-[var(--gold)]">{c.price}</td>
                    <td className="p-4 text-center text-sm">{c.rank === 3 ? '3回' : c.rank === 1 ? '1回〜' : '2回'}</td>
                    <td className="p-4 text-sm text-[#6B6560]">{c.access.split('。')[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-[#8B8580] mt-2 text-center">※ 料金は税込の目安です。施術者ランク・キャンペーン時期により変動します。</p>
          </div>
        </div>
      </section>

      {/* アクセスガイド */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">渋谷エリア アクセスガイド</h2>
          <div className="glass-card rounded-2xl p-6 border border-[var(--pink-beige)]">
            <div className="space-y-4">
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <h3 className="font-bold text-sm mb-2 text-[var(--gold)]">渋谷駅からのアクセス</h3>
                <ul className="space-y-1 text-sm text-[#6B6560]">
                  <li>・デイジークリニック渋谷本院：ハチ公口より徒歩5分</li>
                  <li>・メディカルブロー表参道院：東京メトロ銀座線で1駅「表参道駅」A1出口より徒歩3分</li>
                  <li>・クレアージュ東京：JR山手線で約15分「有楽町駅」より徒歩1分</li>
                </ul>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <h3 className="font-bold text-sm mb-2 text-[var(--gold)]">渋谷駅の主要路線</h3>
                <p className="text-sm text-[#6B6560]">
                  JR山手線・埼京線・湘南新宿ライン / 東京メトロ銀座線・半蔵門線・副都心線 / 東急東横線・田園都市線 / 京王井の頭線
                </p>
              </div>
              <div className="bg-[var(--blush)] rounded-xl p-4">
                <h3 className="font-bold text-sm mb-2 text-[var(--gold)]">施術後のおすすめ</h3>
                <p className="text-sm text-[#6B6560]">
                  施術後は紫外線を避けるため、屋内での過ごし方がおすすめ。渋谷スクランブルスクエア、渋谷ヒカリエ、表参道ヒルズなど屋内商業施設が充実しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">渋谷のアートメイクに関するよくある質問（FAQ）</h2>
          <div className="space-y-4">
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 border border-[var(--gold-light)] text-center">
            <h2 className="text-xl font-bold mb-4">渋谷でアートメイクを始めよう</h2>
            <p className="text-[#6B6560] mb-6">
              トレンドの発信地・渋谷で、理想の眉を手に入れる。<br />
              実力派クリニックを比較して、自分にぴったりの1院を見つけましょう。
            </p>
            <Link href="/" className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full font-bold btn-glow">おすすめクリニックランキングを見る →</Link>
            <p className="mt-4 text-xs text-[#8B8580]">2026年4月最新 - 渋谷エリアのクリニックを徹底比較</p>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/area/tokyo" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="text-[var(--gold)] text-xs font-semibold">エリア</p>
              <p className="font-bold text-sm mt-1">東京のおすすめクリニック</p>
            </Link>
            <Link href="/area/shinjuku" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="text-[var(--gold)] text-xs font-semibold">エリア</p>
              <p className="font-bold text-sm mt-1">新宿エリアのおすすめ</p>
            </Link>
            <Link href="/area/ginza" className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow border border-[var(--pink-beige)]">
              <p className="text-[var(--gold)] text-xs font-semibold">エリア</p>
              <p className="font-bold text-sm mt-1">銀座エリアのおすすめ</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
