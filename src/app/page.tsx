const clinics = [
  {
    rank: 1,
    name: 'メディカルブロー',
    score: 95,
    rating: 4.8,
    reviewCount: 2450,
    eyebrowPrice: '1回 28,000円〜（モニター）',
    eyebrowPrice2: '2回 90,000円〜',
    lipPrice: '2回 100,000円〜',
    eyelinePrice: '2回 60,000円〜',
    technique: '7Dストローク®',
    areas: '東京（表参道・新宿・六本木他）、大阪、名古屋、福岡、横浜',
    features: ['累計症例23万件超', '7Dストローク®独自技術', '学割・ペア割最大25%OFF', '全国10院以上展開'],
    description: '累計症例数23万件超の日本最大級アートメイクブランド。独自技術「7Dストローク®」により、1本1本の毛流れまで再現した超自然な仕上がりを実現。5大会連続グランプリ＆6部門制覇の実績を持つトップアーティストが在籍。モニター価格なら1回28,000円からと、技術力に対してコスパが非常に高い。',
    pros: ['累計23万件の圧倒的実績', '7Dストロークの自然な仕上がり', 'モニター価格でコスパ良し', '全国展開で通いやすい', '学割・ペア割あり'],
    cons: ['アーティストランクで料金が変動', '人気のため予約が取りにくい場合あり'],
    recommend: '自然な毛並み感を重視する方、コスパと技術力の両立を求める方',
    scores: { cost: 28, cases: 25, counseling: 18, safety: 14, access: 10 },
  },
  {
    rank: 2,
    name: 'クレアージュ東京',
    score: 92,
    rating: 4.7,
    reviewCount: 1850,
    eyebrowPrice: '3回 132,000円（1回44,000円）',
    eyebrowPrice2: 'リタッチ 44,000円',
    lipPrice: '3回 198,000円',
    eyelinePrice: '要問合せ',
    technique: '3回施術で自然に定着',
    areas: '東京（有楽町）、大阪、札幌、名古屋、福岡',
    features: ['実績10,000件以上', '3回に分けて自然に定着', '指名料なし', '全国5院展開'],
    description: '10,000件以上の施術実績を誇るメディカルアートメイクの老舗。最大の特徴は3回に分けて色を定着させる施術方法で、「浮かない・自然な」仕上がりを追求。指名料がかからないのも大きな魅力で、1回あたり44,000円と明朗会計。40代・50代からの支持が特に高く、年齢に合わせたナチュラルデザインが得意。',
    pros: ['10,000件以上の実績', '3回施術で自然な仕上がり', '指名料無料', '40代50代に人気', '明朗会計'],
    cons: ['3回通う必要がある', '1回あたりの単価はやや高め'],
    recommend: '自然さを最優先する方、40代以上の方、指名料を気にしたくない方',
    scores: { cost: 25, cases: 24, counseling: 20, safety: 14, access: 9 },
  },
  {
    rank: 3,
    name: 'DAZZY CLINIC（デイジークリニック）',
    score: 90,
    rating: 4.6,
    reviewCount: 1620,
    eyebrowPrice: '2回 49,800円〜（モニター・手彫り）',
    eyebrowPrice2: '2回 69,800円〜（機械彫り+手彫り）',
    lipPrice: '2回 99,000円〜',
    eyelinePrice: '2回 66,000円〜',
    technique: 'dazzy brow（デイジーブロウ）',
    areas: '東京（新宿）、大阪、福岡、札幌',
    features: ['世界的アーティスト監修', 'モニター最大50%OFF', '3種類の技法から選択', 'オンラインカウンセリング対応'],
    description: '世界で活躍する有名アーティストが監修するアートメイク専門クリニック。機械彫り・機械彫り+手彫り・手彫りの3種類から選べる柔軟さが魅力。新宿・福岡院の手彫りプランならモニター価格で最大50%OFFの49,800円から。デザイン力に定評があり、トレンド感のある眉に仕上がる。',
    pros: ['世界的アーティスト監修', 'モニター最大50%OFF', '3種類の技法から選択可', 'オンラインカウンセリング'],
    cons: ['院によって対応技法が異なる', 'モニター枠に限りあり'],
    recommend: 'デザイン重視の方、トレンド眉にしたい方、コスパ重視の方',
    scores: { cost: 29, cases: 22, counseling: 17, safety: 14, access: 8 },
  },
  {
    rank: 4,
    name: 'FIRST ARTMAKE（ファーストアートメイク）',
    score: 87,
    rating: 4.5,
    reviewCount: 980,
    eyebrowPrice: '1回 38,500円〜',
    eyebrowPrice2: '2回セット 71,500円〜',
    lipPrice: '1回 49,500円〜',
    eyelinePrice: '1回 33,000円〜',
    technique: 'マイクロブレーディング',
    areas: '東京（銀座）',
    features: ['初心者に安心の丁寧なカウンセリング', '銀座駅徒歩3分の好立地', '痛みの少ない施術', 'アフターケア充実'],
    description: '「誰でもはじめられる安心のアートメイク」をコンセプトに、初めてのアートメイクに不安がある方に特化したクリニック。丁寧なカウンセリングに定評があり、施術前にデザインの微調整を何度でも対応。銀座駅徒歩3分の好立地で、痛みの少ない施術を心がけている。初心者満足度が高い。',
    pros: ['初心者に特化した安心対応', '丁寧なカウンセリング', '銀座駅徒歩3分の好立地', '痛みが少ない'],
    cons: ['銀座1院のみ', '症例数は大手に比べて少なめ'],
    recommend: 'アートメイク初心者、カウンセリング重視の方、銀座エリアで探している方',
    scores: { cost: 26, cases: 18, counseling: 20, safety: 15, access: 8 },
  },
  {
    rank: 5,
    name: 'トゥルーデザインクリニック',
    score: 85,
    rating: 4.5,
    reviewCount: 1120,
    eyebrowPrice: '2回 59,400円〜',
    eyebrowPrice2: 'リタッチ 29,700円〜',
    lipPrice: '2回 79,200円〜',
    eyelinePrice: '2回 49,500円〜',
    technique: 'トゥルーデザインメソッド',
    areas: '大阪（心斎橋）',
    features: ['40代50代のデザインが得意', '独自のトゥルーデザインメソッド', 'リタッチ料金が安い', '関西No.1の満足度'],
    description: '「年齢に合った本当に似合う眉」をデザインする独自メソッドが特徴。40代・50代の症例写真が豊富で、トレンドに左右されないナチュラルデザインが得意。リタッチ料金が29,700円からとリーズナブルで、長期的なコストパフォーマンスに優れる。関西エリアでの評価が非常に高い。',
    pros: ['40代50代のデザインが得意', 'リタッチ料金が安い', '独自メソッドで自然な仕上がり', '関西エリアNo.1の評価'],
    cons: ['大阪1院のみ', '関東からは通いにくい'],
    recommend: '40代以上の方、関西エリアの方、リタッチコストを抑えたい方',
    scores: { cost: 27, cases: 20, counseling: 18, safety: 13, access: 7 },
  },
]

const faqs = [
  { q: 'アートメイクとは何ですか？', a: 'アートメイクとは、皮膚の浅い層（表皮）に専用の針で色素を注入し、メイクをしたような状態を持続させる医療行為です。タトゥーとは異なり、1〜3年で徐々に薄くなります。眉毛、アイライン、リップなどの施術が可能で、医師または看護師の資格を持つ施術者が行います。' },
  { q: 'アートメイクの持続期間は？', a: '一般的に1〜3年程度持続します。肌質（脂性肌の方は薄くなりやすい）、生活習慣、施術部位によって個人差があります。定期的なリタッチで美しい状態をキープできます。' },
  { q: '痛みはありますか？', a: '施術前に麻酔クリームを塗布するため、強い痛みを感じることは少ないです。「毛抜きで眉毛を抜く程度」と表現される方が多いです。' },
  { q: '施術後のダウンタイムは？', a: '眉毛の場合、施術後1〜2日は赤みが出ることがあります。3〜7日でかさぶたができ、1〜2週間で自然に剥がれます。' },
  { q: '2D、3D、4Dの違いは？', a: '2D（パウダー）はふんわりパウダー眉、3D（ストローク）は毛並みを1本1本描く自然な仕上がり、4D（コンビネーション）は2Dと3Dの組み合わせです。最新の7Dストロークは毛流れまで再現します。' },
  { q: '失敗したらどうなりますか？', a: 'レーザー除去や色修正で対応可能です。ただし完全な除去は難しい場合もあるため、クリニック選びとカウンセリングが重要です。' },
  { q: '男性でもできますか？', a: 'はい、メンズアートメイクの需要は急増しています。メディカルブローやデイジークリニックは男性にも対応しています。' },
  { q: '40代・50代でもできますか？', a: 'もちろんできます。クレアージュやトゥルーデザインクリニックは年齢に合ったナチュラルデザインが得意です。' },
  { q: '施術は何回必要ですか？', a: '一般的に2〜3回の施術で完成します。クレアージュは3回に分けて自然に定着させます。' },
  { q: 'MRI検査は受けられますか？', a: '基本的に受けられます。事前にアートメイクを受けていることを医療機関に伝えてください。' },
  { q: 'アートメイクとタトゥーの違いは？', a: 'アートメイクは表皮（0.02〜0.03mm）に色素を入れ1〜3年で薄くなります。タトゥーは真皮（0.3mm以上）に入れ半永久的に残ります。' },
  { q: '料金の相場は？', a: '眉毛アートメイクは2回で5〜15万円が相場です。モニター価格なら1回28,000円〜のクリニックもあります。' },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-hero-gradient py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, var(--pink-sheer) 0%, transparent 50%), radial-gradient(circle at 70% 80%, var(--gold-light) 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[var(--gold)] text-sm font-semibold mb-3 tracking-widest">2026年4月最新</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6 leading-tight">
            <span className="gold-underline">理想の眉</span>に出会える<br className="hidden md:block" />
            アートメイククリニックTOP5
          </h1>
          <p className="text-lg text-[#6B6560] mb-10 leading-relaxed">
            眉毛アートメイク5社を100点独自採点で徹底比較。<br />
            料金・技術力・口コミ・安全性であなたに最適なクリニックが見つかる。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#ranking" className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-8 py-4 rounded-full text-lg font-semibold btn-glow shadow-lg">ランキングを見る</a>
            <a href="#comparison" className="glass-card text-[var(--gold)] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/80 transition-all shadow-lg border border-[var(--gold-light)]">比較表で選ぶ</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '5社', label: '厳選クリニック' },
              { value: '100点', label: '独自採点制' },
              { value: '28,000円〜', label: '最安料金' },
              { value: '23万件超', label: '最大症例数' },
            ].map((s, i) => (
              <div key={i} className="glass-card rounded-2xl p-5">
                <div className="text-2xl md:text-3xl font-bold text-[var(--gold)]">{s.value}</div>
                <div className="text-sm text-[#8B8580] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section className="py-16 px-4 bg-section-warm" id="comparison">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">5社一覧比較表</h2>
          <p className="text-center text-[#8B8580] mb-8">ひと目でわかるクリニック比較</p>
          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white">
                <tr>
                  <th className="p-4">順位</th>
                  <th className="p-4 text-left">クリニック名</th>
                  <th className="p-4">独自採点</th>
                  <th className="p-4">眉毛料金</th>
                  <th className="p-4">技法</th>
                  <th className="p-4">エリア</th>
                </tr>
              </thead>
              <tbody>
                {clinics.map((c, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? 'bg-white/50' : 'bg-[var(--blush)]/30'} hover:bg-[var(--pink-beige)]/50 transition-colors`}>
                    <td className="p-4 text-center font-bold text-lg">{c.rank === 1 ? '🥇' : c.rank === 2 ? '🥈' : c.rank === 3 ? '🥉' : `${c.rank}位`}</td>
                    <td className="p-4 font-semibold">{c.name}</td>
                    <td className="p-4 text-center"><span className="badge-gold px-3 py-1 rounded-full font-bold text-sm">{c.score}/100</span></td>
                    <td className="p-4 text-sm">{c.eyebrowPrice}</td>
                    <td className="p-4 text-sm">{c.technique}</td>
                    <td className="p-4 text-sm">{c.areas.split('、').slice(0, 2).join('、')}他</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 採点基準 */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">独自100点採点の評価基準</h2>
          <p className="text-center text-[#8B8580] mb-8">5つの観点で公平に評価</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: '料金の透明性', score: 30, desc: '料金体系の明瞭さ、追加費用の有無' },
              { label: '症例実績', score: 25, desc: '累計症例数、ビフォーアフターの質' },
              { label: 'カウンセリング', score: 20, desc: 'カウンセリングの丁寧さ、提案力' },
              { label: '安全性', score: 15, desc: '医療資格、衛生管理、アフターケア' },
              { label: 'アクセス', score: 10, desc: '立地、展開院数、予約の取りやすさ' },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-[var(--gold)] mb-1">{item.score}点</div>
                <div className="font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-xs text-[#8B8580]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ランキング詳細 */}
      <section className="py-16 px-4 bg-section-warm" id="ranking">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">おすすめランキングTOP5</h2>
          <p className="text-center text-[#8B8580] mb-12">詳細レビュー</p>
          <div className="space-y-10">
            {clinics.map((c) => (
              <div key={c.rank} className={`glass-card rounded-3xl shadow-lg p-8 ${c.rank <= 3 ? 'border border-[var(--gold-light)]' : 'border border-[var(--pink-beige)]'}`}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className={`text-4xl font-bold ${c.rank === 1 ? 'text-[var(--gold)]' : 'text-[#8B8580]'}`}>
                      {c.rank === 1 ? '👑 ' : ''}{c.rank}位
                    </div>
                    <h3 className="text-2xl font-bold mt-2">{c.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[var(--gold)] text-lg">{'★'.repeat(Math.round(c.rating))}</span>
                      <span className="text-sm text-[#8B8580]">{c.rating} / 5.0（{c.reviewCount}件）</span>
                    </div>
                  </div>
                  <span className="badge-gold px-4 py-2 rounded-full font-bold text-xl shadow-md">{c.score}/100</span>
                </div>
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {Object.entries(c.scores).map(([key, val]) => {
                    const labels: Record<string, string> = { cost: '料金', cases: '実績', counseling: 'カウンセリング', safety: '安全性', access: 'アクセス' }
                    const maxes: Record<string, number> = { cost: 30, cases: 25, counseling: 20, safety: 15, access: 10 }
                    return (
                      <div key={key} className="text-center">
                        <div className="text-xs text-[#8B8580]">{labels[key]}</div>
                        <div className="font-bold text-[var(--gold)]">{val}/{maxes[key]}</div>
                      </div>
                    )
                  })}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[var(--blush)] text-[var(--gold)] px-3 py-1 rounded-full text-sm font-semibold border border-[var(--gold-light)]">眉 {c.eyebrowPrice}</span>
                  <span className="bg-[var(--pink-beige)] text-[var(--foreground)] px-3 py-1 rounded-full text-sm font-semibold">{c.technique}</span>
                  <span className="bg-white text-[#6B6560] px-3 py-1 rounded-full text-sm font-semibold border border-[var(--pink-beige)]">{c.areas.split('、')[0]}</span>
                </div>
                <p className="text-[#6B6560] mb-6 leading-relaxed">{c.description}</p>
                <div className="mb-6">
                  <h4 className="font-bold mb-2 text-[var(--foreground)]">おすすめポイント</h4>
                  <ul className="space-y-1">{c.features.map((f, i) => <li key={i} className="flex items-start gap-2 text-sm"><span className="text-[var(--gold)]">✦</span>{f}</li>)}</ul>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#F0FAF0] rounded-2xl p-4">
                    <h4 className="font-bold text-green-700 mb-2">メリット</h4>
                    <ul className="space-y-1">{c.pros.map((p, i) => <li key={i} className="text-sm flex items-start gap-1"><span className="text-green-500">✓</span>{p}</li>)}</ul>
                  </div>
                  <div className="bg-[#FFF0F0] rounded-2xl p-4">
                    <h4 className="font-bold text-red-400 mb-2">デメリット</h4>
                    <ul className="space-y-1">{c.cons.map((p, i) => <li key={i} className="text-sm flex items-start gap-1"><span className="text-red-400">✗</span>{p}</li>)}</ul>
                  </div>
                </div>
                <div className="bg-[var(--blush)] p-3 rounded-2xl mb-5">
                  <p className="text-sm"><strong className="text-[var(--gold)]">こんな方におすすめ：</strong>{c.recommend}</p>
                </div>
                <button className="w-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white py-4 rounded-full font-bold text-lg btn-glow shadow-md">{c.name} の公式サイトを見る →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 施術方法 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">眉毛アートメイクの施術方法</h2>
          <p className="text-center text-[#8B8580] mb-8">あなたに合った技法を選ぼう</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: '2D（パウダー）', desc: 'ふんわりパウダー眉。機械彫りで均一に。脂性肌の方におすすめ。', price: '安め' },
              { name: '3D（ストローク）', desc: '毛並みを1本1本手彫り。すっぴんでも自然。ナチュラル派に人気。', price: '中程度' },
              { name: '4D（コンビネーション）', desc: '2D+3Dの組み合わせ。最もメイク感のある仕上がり。', price: 'やや高め' },
              { name: '7D（ストローク®）', desc: 'メディカルブロー独自。毛流れまで再現。最新技術。', price: '高め' },
            ].map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 hover:shadow-md transition-all border border-[var(--pink-beige)]">
                <h3 className="font-bold text-lg mb-2 text-[var(--foreground)]">{t.name}</h3>
                <p className="text-sm text-[#6B6560] mb-3">{t.desc}</p>
                <span className="text-xs bg-[var(--blush)] text-[var(--gold)] px-3 py-1 rounded-full font-medium">料金目安：{t.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 選び方 */}
      <section className="py-16 px-4 bg-section-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">失敗しないクリニックの選び方</h2>
          <p className="text-center text-[#8B8580] mb-8">5つのポイントをチェック</p>
          <div className="space-y-5">
            {[
              { num: 1, title: '医療機関であることを確認', desc: 'アートメイクは医療行為です。医師・看護師資格のある施術者がいるクリニックを選びましょう。' },
              { num: 2, title: '症例写真で仕上がりをチェック', desc: '「2週間後」の症例写真を確認。施術直後は濃く見えますが、2週間後が最終仕上がりです。' },
              { num: 3, title: 'カウンセリングの質を重視', desc: 'デザイン提案力・修正対応が丁寧かどうか。カウンセリングに時間をかけてくれるクリニックは信頼できます。' },
              { num: 4, title: '料金の総額を確認', desc: '施術料金+指名料+麻酔代+リタッチ料金の総額を確認。クレアージュは指名料無料です。' },
              { num: 5, title: '無料カウンセリングを活用', desc: '2〜3院のカウンセリングを受けて比較するのがおすすめです。' },
            ].map((s) => (
              <div key={s.num} className="glass-card rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shadow-sm">{s.num}</span>
                  <h3 className="font-bold text-lg">{s.title}</h3>
                </div>
                <p className="text-[#6B6560] text-sm ml-12">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">よくある質問</h2>
          <p className="text-center text-[#8B8580] mb-8">FAQ</p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card rounded-2xl shadow-sm group">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-[var(--blush)] transition-colors rounded-2xl flex items-center justify-between">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-[var(--gold)] text-xl ml-2 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 border-t border-[var(--pink-beige)] text-[#6B6560] leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #E8D5B0 50%, #E8A0BF 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-sm">理想の眉毛を手に入れよう</h2>
          <p className="text-xl mb-8 text-white/90">まずは無料カウンセリングから。あなたに最適なクリニックが見つかる。</p>
          <a href="#ranking" className="inline-block bg-white text-[var(--gold)] px-10 py-5 rounded-full text-xl font-semibold hover:shadow-xl transition-all btn-glow">おすすめランキングを見る</a>
        </div>
      </section>
    </main>
  )
}
