export default function AuthorBox() {
  return (
    <div className="mt-10 space-y-4">
      {/* 医師監修バッジ */}
      <div className="border border-[var(--gold)] bg-[#1a1a1a] rounded-lg p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] px-3 py-1 rounded bg-[var(--gold)] text-[#111] font-bold tracking-wider">
            医師監修
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-14 h-14 rounded-full bg-[#333] flex items-center justify-center text-[var(--gold)] text-lg font-bold shrink-0">
            山
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-sm mb-1">
              山本 健一
              <span className="text-xs font-normal text-[#888] ml-2">（やまもと けんいち）</span>
            </p>
            <div className="flex flex-wrap gap-1.5 mb-2">
              <span className="text-[9px] px-2 py-0.5 rounded-full border border-[#555] text-[#999]">
                美容皮膚科医
              </span>
              <span className="text-[9px] px-2 py-0.5 rounded-full border border-[#555] text-[#999]">
                日本美容外科学会会員
              </span>
              <span className="text-[9px] px-2 py-0.5 rounded-full border border-[#555] text-[#999]">
                アートメイク施術歴10年
              </span>
            </div>
            <p className="text-xs text-[#888] leading-relaxed">
              都内美容クリニック院長。美容皮膚科領域で15年以上の経験を持ち、アートメイク施術は累計3,000症例以上を監修。安全性と仕上がりの両立を重視した医療アートメイクの普及に取り組んでいます。
            </p>
          </div>
        </div>
      </div>

      {/* 記事執筆者 */}
      <div className="border border-[#333] bg-[#222] rounded-lg p-5">
        <p className="text-[10px] tracking-[1.5px] text-[#888] font-semibold mb-3">
          この記事の執筆者
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-14 h-14 rounded-full bg-[#333] flex items-center justify-center text-[var(--gold)] text-lg font-bold shrink-0">
            佐
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-sm mb-1">
              佐藤 美咲
              <span className="text-xs font-normal text-[#888] ml-2">（さとう みさき）</span>
            </p>
            <div className="flex flex-wrap gap-1.5 mb-2">
              <span className="text-[9px] px-2 py-0.5 rounded-full border border-[var(--gold)] text-[var(--gold)]">
                美容看護師歴8年
              </span>
              <span className="text-[9px] px-2 py-0.5 rounded-full border border-[var(--gold)] text-[var(--gold)]">
                カウンセリング実績1,000件以上
              </span>
            </div>
            <p className="text-xs text-[#888] leading-relaxed">
              大手美容クリニックで8年間美容看護師として勤務。アートメイク施術のカウンセリング経験を活かし、正しい情報で安全なアートメイク選びをサポートします。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
