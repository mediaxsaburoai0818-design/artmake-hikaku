const clinics = [
  {
    rank: 1,
    name: 'メディカルブロー',
    reviewPath: '/review/medicalbrow/',
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
    dialogue: [
      { name: 'アカネ', img: '/chara-akane.jpg', text: '技術力とコスパのバランスが最強。迷ったらここ一択!' },
      { name: 'ユウ', img: '/chara-yuu.jpg', text: 'メンズもOK。自然すぎて周りに気づかれなかった' },
    ],
  },
  {
    rank: 2,
    name: 'クレアージュ東京',
    reviewPath: '/review/creage/',
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
    dialogue: [
      { name: 'アカネ', img: '/chara-akane.jpg', text: '3回に分けるから本当に自然。指名料無料なのも嬉しい! 大人の女性に推したい' },
    ],
  },
  {
    rank: 3,
    name: 'DAZZY CLINIC（デイジークリニック）',
    reviewPath: '/review/dazzy/',
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
    dialogue: [
      { name: 'ユウ', img: '/chara-yuu.jpg', text: 'デザイン力は間違いない。トレンド感重視ならここ' },
      { name: 'アカネ', img: '/chara-akane.jpg', text: 'モニター50%OFFは見逃せない!' },
    ],
  },
  {
    rank: 4,
    name: 'FIRST ARTMAKE（ファーストアートメイク）',
    reviewPath: '/review/first-artmake/',
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
    dialogue: [
      { name: 'ユウ', img: '/chara-yuu.jpg', text: '初めてでも安心感がすごい。カウンセリングが本当に丁寧' },
    ],
  },
  {
    rank: 5,
    name: 'トゥルーデザインクリニック',
    reviewPath: '/review/true-design/',
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
    dialogue: [
      { name: 'アカネ', img: '/chara-akane.jpg', text: '40代以上なら絶対ここ。年齢に合ったデザインが本当に上手' },
    ],
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
      {/* Hero - Magazine Cover */}
      <section className="max-w-[900px] mx-auto px-5 pt-16 pb-10 text-center border-b-[3px] border-[#1A1A1A]">
        <p className="text-[11px] text-[var(--gold)] tracking-[4px] uppercase mb-4">April 2026 Issue</p>
        <h1 className="text-[40px] md:text-[40px] font-bold leading-[1.3] mb-4 tracking-[-1px]">
          最も<span className="text-[var(--gold)]">選ばれた</span><br />アートメイククリニックは？
        </h1>
        <p className="text-[15px] text-[#666] mb-8 leading-[1.8]">
          5社を100点独自採点。料金・技術力・口コミで徹底比較。<br />
          ユウとアカネが本音でレビューします。
        </p>

        {/* Character Row */}
        <div className="flex justify-center gap-10 mb-8">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-2 border-2 border-[var(--gold)]">
              <img src="/chara-yuu.jpg" alt="ユウ" className="w-full h-full object-cover" />
            </div>
            <div className="font-bold text-[13px]">ユウ</div>
            <div className="text-[11px] text-[#999]">メンズ美容に興味あり</div>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-2 border-2 border-[var(--gold)]">
              <img src="/chara-akane.jpg" alt="アカネ" className="w-full h-full object-cover" />
            </div>
            <div className="font-bold text-[13px]">アカネ</div>
            <div className="text-[11px] text-[#999]">リサーチ好き美容女子</div>
          </div>
        </div>

        {/* CTA Row */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#ranking" className="bg-[#1A1A1A] text-white px-10 py-3.5 font-bold text-[14px] tracking-[1px] hover:bg-[var(--gold)] transition-all">RANKING</a>
          <a href="#comparison" className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-10 py-3.5 font-bold text-[14px] tracking-[1px] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all">COMPARE</a>
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[var(--border)]">
        {[
          { value: '5', label: 'CLINICS' },
          { value: '100', label: 'SCORE' },
          { value: '28,000~', label: 'YEN' },
          { value: '230,000+', label: 'CASES' },
        ].map((s, i) => (
          <div key={i} className="bg-[var(--background)] py-6 text-center">
            <div className="text-[28px] font-bold text-[#1A1A1A]">{s.value}</div>
            <div className="text-[11px] text-[#999] mt-1 tracking-[1px]">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <section className="max-w-[900px] mx-auto px-5 py-12" id="comparison">
        <div className="section-title">
          <h2>5社一覧比較表</h2>
          <span className="en">Comparison 2026</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-[var(--border)]">
            <thead className="bg-[#1A1A1A] text-white">
              <tr>
                <th className="p-4 text-[12px] uppercase tracking-[1px]">Rank</th>
                <th className="p-4 text-left text-[12px] uppercase tracking-[1px]">クリニック名</th>
                <th className="p-4 text-[12px] uppercase tracking-[1px]">Score</th>
                <th className="p-4 text-[12px] uppercase tracking-[1px]">眉毛料金</th>
                <th className="p-4 text-[12px] uppercase tracking-[1px]">技法</th>
                <th className="p-4 text-[12px] uppercase tracking-[1px]">エリア</th>
              </tr>
            </thead>
            <tbody>
              {clinics.map((c, i) => (
                <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface)]'} hover:bg-[var(--border)]/30 transition-colors border-b border-[var(--border)]`}>
                  <td className="p-4 text-center font-bold text-lg text-[var(--gold)]">{String(c.rank).padStart(2, '0')}</td>
                  <td className="p-4 font-semibold">{c.name}</td>
                  <td className="p-4 text-center"><span className="text-[var(--gold)] font-bold text-sm">{c.score}/100</span></td>
                  <td className="p-4 text-sm">{c.eyebrowPrice}</td>
                  <td className="p-4 text-sm">{c.technique}</td>
                  <td className="p-4 text-sm">{c.areas.split('、').slice(0, 2).join('、')}他</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Scoring Criteria */}
      <section className="py-12 px-5 bg-[var(--surface)]">
        <div className="max-w-[900px] mx-auto">
          <div className="section-title">
            <h2>独自100点採点の評価基準</h2>
            <span className="en">Scoring Criteria</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: '料金の透明性', score: 30, desc: '料金体系の明瞭さ、追加費用の有無' },
              { label: '症例実績', score: 25, desc: '累計症例数、ビフォーアフターの質' },
              { label: 'カウンセリング', score: 20, desc: 'カウンセリングの丁寧さ、提案力' },
              { label: '安全性', score: 15, desc: '医療資格、衛生管理、アフターケア' },
              { label: 'アクセス', score: 10, desc: '立地、展開院数、予約の取りやすさ' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[var(--border)] p-5 text-center hover:border-[var(--gold)] transition-all">
                <div className="text-2xl font-bold text-[var(--gold)] mb-1">{item.score}点</div>
                <div className="font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-xs text-[#999]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking Detail */}
      <section className="max-w-[900px] mx-auto px-5 py-12" id="ranking">
        <div className="section-title">
          <h2>クリニックランキング</h2>
          <span className="en">Top Clinics 2026</span>
        </div>

        <div className="flex flex-col gap-6">
          {clinics.map((c) => (
            <div key={c.rank} className="bg-white border border-[var(--border)] hover:border-[var(--gold)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all grid grid-cols-1 md:grid-cols-[60px_1fr] gap-5 p-7">
              {/* Rank Column */}
              <div className="flex md:flex-col items-center gap-2 md:pt-1">
                <div className="text-[36px] font-bold text-[var(--gold)] leading-none">{String(c.rank).padStart(2, '0')}</div>
                <div className="text-[9px] text-[#999] tracking-[1px] mt-0 md:mt-0.5">RANK</div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[18px] font-bold mb-1">{c.name}</h3>
                <div className="text-[13px] text-[var(--gold)] font-bold mb-3">SCORE {c.score}/100</div>

                {/* Score Breakdown */}
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {Object.entries(c.scores).map(([key, val]) => {
                    const labels: Record<string, string> = { cost: '料金', cases: '実績', counseling: 'カウンセリング', safety: '安全性', access: 'アクセス' }
                    const maxes: Record<string, number> = { cost: 30, cases: 25, counseling: 20, safety: 15, access: 10 }
                    return (
                      <div key={key} className="text-center">
                        <div className="text-[10px] text-[#999]">{labels[key]}</div>
                        <div className="font-bold text-[var(--gold)] text-sm">{val}/{maxes[key]}</div>
                      </div>
                    )
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {c.features.map((f, i) => (
                    <span key={i} className="border border-[var(--border)] px-2.5 py-1 text-[11px] text-[#666]">{f}</span>
                  ))}
                </div>

                {/* Price Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="border border-[var(--border)] px-2.5 py-1 text-[11px] text-[#666]">眉 {c.eyebrowPrice}</span>
                  <span className="border border-[var(--border)] px-2.5 py-1 text-[11px] text-[#666]">{c.technique}</span>
                  <span className="border border-[var(--border)] px-2.5 py-1 text-[11px] text-[#666]">{c.areas.split('、')[0]}</span>
                </div>

                <p className="text-[#666] mb-4 leading-relaxed text-sm">{c.description}</p>

                {/* Pros / Cons */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-[var(--surface)] p-4">
                    <h4 className="font-bold text-sm mb-2">メリット</h4>
                    <ul className="space-y-1">{c.pros.map((p, i) => <li key={i} className="text-sm flex items-start gap-1"><span className="text-[var(--gold)]">+</span>{p}</li>)}</ul>
                  </div>
                  <div className="bg-[var(--surface)] p-4">
                    <h4 className="font-bold text-sm mb-2">デメリット</h4>
                    <ul className="space-y-1">{c.cons.map((p, i) => <li key={i} className="text-sm flex items-start gap-1"><span className="text-[#999]">-</span>{p}</li>)}</ul>
                  </div>
                </div>

                {/* Recommend */}
                <div className="bg-[var(--surface)] p-3 mb-4">
                  <p className="text-sm"><strong className="text-[var(--gold)]">こんな方におすすめ：</strong>{c.recommend}</p>
                </div>

                {/* Dialogue */}
                <div className="bg-[var(--surface)] p-4 flex gap-3 mb-4">
                  <div className="flex gap-1 flex-shrink-0">
                    {c.dialogue.map((d, i) => (
                      <img key={i} src={d.img} alt={d.name} className="w-7 h-7 rounded-full object-cover" />
                    ))}
                  </div>
                  <div className="text-[12px] text-[#555] leading-[1.7]">
                    {c.dialogue.map((d, i) => (
                      <span key={i}>
                        {i > 0 && <br />}
                        <span className="font-bold text-[var(--gold)]">{d.name}：</span>「{d.text}」
                      </span>
                    ))}
                  </div>
                </div>

                <a href={c.reviewPath} className="inline-block bg-[#1A1A1A] text-white px-6 py-2.5 text-[12px] font-bold tracking-[1px] hover:bg-[var(--gold)] transition-all">VIEW DETAIL →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Methods */}
      <section className="py-12 px-5 bg-[var(--surface)]">
        <div className="max-w-[900px] mx-auto">
          <div className="section-title">
            <h2>眉毛アートメイクの施術方法</h2>
            <span className="en">Treatment Methods</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: '2D（パウダー）', desc: 'ふんわりパウダー眉。機械彫りで均一に。脂性肌の方におすすめ。', price: '安め' },
              { name: '3D（ストローク）', desc: '毛並みを1本1本手彫り。すっぴんでも自然。ナチュラル派に人気。', price: '中程度' },
              { name: '4D（コンビネーション）', desc: '2D+3Dの組み合わせ。最もメイク感のある仕上がり。', price: 'やや高め' },
              { name: '7D（ストローク(R)）', desc: 'メディカルブロー独自。毛流れまで再現。最新技術。', price: '高め' },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-[var(--border)] p-5 hover:border-[var(--gold)] transition-all">
                <h3 className="font-bold text-lg mb-2">{t.name}</h3>
                <p className="text-sm text-[#666] mb-3">{t.desc}</p>
                <span className="text-[11px] border border-[var(--border)] text-[var(--gold)] px-3 py-1 font-medium">料金目安：{t.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="max-w-[900px] mx-auto px-5 py-12">
        <div className="section-title">
          <h2>失敗しないクリニックの選び方</h2>
          <span className="en">How to Choose</span>
        </div>
        <div className="space-y-4">
          {[
            { num: 1, title: '医療機関であることを確認', desc: 'アートメイクは医療行為です。医師・看護師資格のある施術者がいるクリニックを選びましょう。' },
            { num: 2, title: '症例写真で仕上がりをチェック', desc: '「2週間後」の症例写真を確認。施術直後は濃く見えますが、2週間後が最終仕上がりです。' },
            { num: 3, title: 'カウンセリングの質を重視', desc: 'デザイン提案力・修正対応が丁寧かどうか。カウンセリングに時間をかけてくれるクリニックは信頼できます。' },
            { num: 4, title: '料金の総額を確認', desc: '施術料金+指名料+麻酔代+リタッチ料金の総額を確認。クレアージュは指名料無料です。' },
            { num: 5, title: '無料カウンセリングを活用', desc: '2〜3院のカウンセリングを受けて比較するのがおすすめです。' },
          ].map((s) => (
            <div key={s.num} className="bg-white border border-[var(--border)] p-6 hover:border-[var(--gold)] transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#1A1A1A] text-white w-9 h-9 flex items-center justify-center font-bold text-sm">{s.num}</span>
                <h3 className="font-bold text-lg">{s.title}</h3>
              </div>
              <p className="text-[#666] text-sm ml-12">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-5 bg-[var(--surface)]" id="faq">
        <div className="max-w-[900px] mx-auto">
          <div className="section-title">
            <h2>よくある質問</h2>
            <span className="en">FAQ</span>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-[var(--border)] group">
                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-[var(--surface)] transition-colors flex items-center justify-between">
                  <span>Q{i + 1}. {faq.q}</span>
                  <span className="text-[var(--gold)] text-xl ml-2 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 border-t border-[var(--border)] text-[#666] leading-relaxed text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 bg-[#1A1A1A]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">理想の眉毛を手に入れよう</h2>
          <p className="text-lg mb-8 text-[#999]">まずは無料カウンセリングから。あなたに最適なクリニックが見つかる。</p>
          <a href="#ranking" className="inline-block bg-[var(--gold)] text-white px-10 py-4 font-bold text-lg tracking-[1px] hover:bg-[var(--gold-light)] transition-all">VIEW RANKING</a>
        </div>
      </section>
    </main>
  )
}
