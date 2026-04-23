const STORAGE_KEY = "mcu-checklist-v4";
const APP_VERSION = 5;
const INTRO_PREF_KEY = "mcu-checklist-intro-hidden";

const MCU_ITEMS = [
  { id: "iron-man", titleJa: "アイアンマン", titleEn: "Iron Man", type: "film", releaseDate: "2008-05-02", year: 2008, phase: 1, upcoming: false },
  { id: "the-incredible-hulk", titleJa: "インクレディブル・ハルク", titleEn: "The Incredible Hulk", type: "film", releaseDate: "2008-06-13", year: 2008, phase: 1, upcoming: false },
  { id: "iron-man-2", titleJa: "アイアンマン2", titleEn: "Iron Man 2", type: "film", releaseDate: "2010-05-07", year: 2010, phase: 1, upcoming: false },
  { id: "thor", titleJa: "マイティ・ソー", titleEn: "Thor", type: "film", releaseDate: "2011-05-06", year: 2011, phase: 1, upcoming: false },
  { id: "captain-america-the-first-avenger", titleJa: "キャプテン・アメリカ／ザ・ファースト・アベンジャー", titleEn: "Captain America: The First Avenger", type: "film", releaseDate: "2011-07-22", year: 2011, phase: 1, upcoming: false },
  { id: "the-avengers", titleJa: "アベンジャーズ", titleEn: "The Avengers", type: "film", releaseDate: "2012-05-04", year: 2012, phase: 1, upcoming: false },
  { id: "iron-man-3", titleJa: "アイアンマン3", titleEn: "Iron Man 3", type: "film", releaseDate: "2013-05-03", year: 2013, phase: 2, upcoming: false },
  { id: "thor-the-dark-world", titleJa: "マイティ・ソー／ダーク・ワールド", titleEn: "Thor: The Dark World", type: "film", releaseDate: "2013-11-08", year: 2013, phase: 2, upcoming: false },
  { id: "captain-america-the-winter-soldier", titleJa: "キャプテン・アメリカ／ウィンター・ソルジャー", titleEn: "Captain America: The Winter Soldier", type: "film", releaseDate: "2014-04-04", year: 2014, phase: 2, upcoming: false },
  { id: "guardians-of-the-galaxy", titleJa: "ガーディアンズ・オブ・ギャラクシー", titleEn: "Guardians of the Galaxy", type: "film", releaseDate: "2014-08-01", year: 2014, phase: 2, upcoming: false },
  { id: "avengers-age-of-ultron", titleJa: "アベンジャーズ／エイジ・オブ・ウルトロン", titleEn: "Avengers: Age of Ultron", type: "film", releaseDate: "2015-05-01", year: 2015, phase: 2, upcoming: false },
  { id: "ant-man", titleJa: "アントマン", titleEn: "Ant-Man", type: "film", releaseDate: "2015-07-17", year: 2015, phase: 2, upcoming: false },
  { id: "captain-america-civil-war", titleJa: "シビル・ウォー／キャプテン・アメリカ", titleEn: "Captain America: Civil War", type: "film", releaseDate: "2016-05-06", year: 2016, phase: 3, upcoming: false },
  { id: "doctor-strange", titleJa: "ドクター・ストレンジ", titleEn: "Doctor Strange", type: "film", releaseDate: "2016-11-04", year: 2016, phase: 3, upcoming: false },
  { id: "guardians-of-the-galaxy-vol-2", titleJa: "ガーディアンズ・オブ・ギャラクシー：リミックス", titleEn: "Guardians of the Galaxy Vol. 2", type: "film", releaseDate: "2017-05-05", year: 2017, phase: 3, upcoming: false },
  { id: "spider-man-homecoming", titleJa: "スパイダーマン：ホームカミング", titleEn: "Spider-Man: Homecoming", type: "film", releaseDate: "2017-07-07", year: 2017, phase: 3, upcoming: false },
  { id: "thor-ragnarok", titleJa: "マイティ・ソー バトルロイヤル", titleEn: "Thor: Ragnarok", type: "film", releaseDate: "2017-11-03", year: 2017, phase: 3, upcoming: false },
  { id: "black-panther", titleJa: "ブラックパンサー", titleEn: "Black Panther", type: "film", releaseDate: "2018-02-16", year: 2018, phase: 3, upcoming: false },
  { id: "avengers-infinity-war", titleJa: "アベンジャーズ／インフィニティ・ウォー", titleEn: "Avengers: Infinity War", type: "film", releaseDate: "2018-04-27", year: 2018, phase: 3, upcoming: false },
  { id: "ant-man-and-the-wasp", titleJa: "アントマン＆ワスプ", titleEn: "Ant-Man and the Wasp", type: "film", releaseDate: "2018-07-06", year: 2018, phase: 3, upcoming: false },
  { id: "captain-marvel", titleJa: "キャプテン・マーベル", titleEn: "Captain Marvel", type: "film", releaseDate: "2019-03-08", year: 2019, phase: 3, upcoming: false },
  { id: "avengers-endgame", titleJa: "アベンジャーズ／エンドゲーム", titleEn: "Avengers: Endgame", type: "film", releaseDate: "2019-04-26", year: 2019, phase: 3, upcoming: false },
  { id: "spider-man-far-from-home", titleJa: "スパイダーマン：ファー・フロム・ホーム", titleEn: "Spider-Man: Far From Home", type: "film", releaseDate: "2019-07-02", year: 2019, phase: 3, upcoming: false },
  { id: "wandavision", titleJa: "ワンダヴィジョン", titleEn: "WandaVision", type: "series", releaseDate: "2021-01-15", year: 2021, phase: 4, upcoming: false },
  { id: "the-falcon-and-the-winter-soldier", titleJa: "ファルコン＆ウィンター・ソルジャー", titleEn: "The Falcon and the Winter Soldier", type: "series", releaseDate: "2021-03-19", year: 2021, phase: 4, upcoming: false },
  { id: "loki-season-1", titleJa: "ロキ シーズン1", titleEn: "Loki Season 1", type: "series", releaseDate: "2021-06-09", year: 2021, phase: 4, upcoming: false },
  { id: "black-widow", titleJa: "ブラック・ウィドウ", titleEn: "Black Widow", type: "film", releaseDate: "2021-07-09", year: 2021, phase: 4, upcoming: false },
  { id: "what-if-season-1", titleJa: "ホワット・イフ...? シーズン1", titleEn: "What If...? Season 1", type: "series", releaseDate: "2021-08-11", year: 2021, phase: 4, upcoming: false },
  { id: "shang-chi", titleJa: "シャン・チー／テン・リングスの伝説", titleEn: "Shang-Chi and the Legend of the Ten Rings", type: "film", releaseDate: "2021-09-03", year: 2021, phase: 4, upcoming: false },
  { id: "eternals", titleJa: "エターナルズ", titleEn: "Eternals", type: "film", releaseDate: "2021-11-05", year: 2021, phase: 4, upcoming: false },
  { id: "hawkeye", titleJa: "ホークアイ", titleEn: "Hawkeye", type: "series", releaseDate: "2021-11-24", year: 2021, phase: 4, upcoming: false },
  { id: "spider-man-no-way-home", titleJa: "スパイダーマン：ノー・ウェイ・ホーム", titleEn: "Spider-Man: No Way Home", type: "film", releaseDate: "2021-12-17", year: 2021, phase: 4, upcoming: false },
  { id: "moon-knight", titleJa: "ムーンナイト", titleEn: "Moon Knight", type: "series", releaseDate: "2022-03-30", year: 2022, phase: 4, upcoming: false },
  { id: "doctor-strange-in-the-multiverse-of-madness", titleJa: "ドクター・ストレンジ／マルチバース・オブ・マッドネス", titleEn: "Doctor Strange in the Multiverse of Madness", type: "film", releaseDate: "2022-05-06", year: 2022, phase: 4, upcoming: false },
  { id: "ms-marvel", titleJa: "ミズ・マーベル", titleEn: "Ms. Marvel", type: "series", releaseDate: "2022-06-08", year: 2022, phase: 4, upcoming: false },
  { id: "thor-love-and-thunder", titleJa: "ソー：ラブ＆サンダー", titleEn: "Thor: Love and Thunder", type: "film", releaseDate: "2022-07-08", year: 2022, phase: 4, upcoming: false },
  { id: "i-am-groot-season-1", titleJa: "アイ・アム・グルート シーズン1", titleEn: "I Am Groot Season 1", type: "short", releaseDate: "2022-08-10", year: 2022, phase: 4, upcoming: false },
  { id: "she-hulk-attorney-at-law", titleJa: "シー・ハルク：ザ・アトーニー", titleEn: "She-Hulk: Attorney at Law", type: "series", releaseDate: "2022-08-18", year: 2022, phase: 4, upcoming: false },
  { id: "werewolf-by-night", titleJa: "ウェアウルフ・バイ・ナイト", titleEn: "Werewolf by Night", type: "special", releaseDate: "2022-10-07", year: 2022, phase: 4, upcoming: false },
  { id: "black-panther-wakanda-forever", titleJa: "ブラックパンサー／ワカンダ・フォーエバー", titleEn: "Black Panther: Wakanda Forever", type: "film", releaseDate: "2022-11-11", year: 2022, phase: 4, upcoming: false },
  { id: "the-guardians-of-the-galaxy-holiday-special", titleJa: "ガーディアンズ・オブ・ギャラクシー ホリデー・スペシャル", titleEn: "The Guardians of the Galaxy Holiday Special", type: "special", releaseDate: "2022-11-25", year: 2022, phase: 4, upcoming: false },
  { id: "ant-man-and-the-wasp-quantumania", titleJa: "アントマン＆ワスプ：クアントマニア", titleEn: "Ant-Man and the Wasp: Quantumania", type: "film", releaseDate: "2023-02-17", year: 2023, phase: 5, upcoming: false },
  { id: "guardians-of-the-galaxy-vol-3", titleJa: "ガーディアンズ・オブ・ギャラクシー：VOLUME 3", titleEn: "Guardians of the Galaxy Vol. 3", type: "film", releaseDate: "2023-05-05", year: 2023, phase: 5, upcoming: false },
  { id: "secret-invasion", titleJa: "シークレット・インベージョン", titleEn: "Secret Invasion", type: "series", releaseDate: "2023-06-21", year: 2023, phase: 5, upcoming: false },
  { id: "i-am-groot-season-2", titleJa: "アイ・アム・グルート シーズン2", titleEn: "I Am Groot Season 2", type: "short", releaseDate: "2023-09-06", year: 2023, phase: 5, upcoming: false },
  { id: "loki-season-2", titleJa: "ロキ シーズン2", titleEn: "Loki Season 2", type: "series", releaseDate: "2023-10-05", year: 2023, phase: 5, upcoming: false },
  { id: "the-marvels", titleJa: "マーベルズ", titleEn: "The Marvels", type: "film", releaseDate: "2023-11-10", year: 2023, phase: 5, upcoming: false },
  { id: "what-if-season-2", titleJa: "ホワット・イフ...? シーズン2", titleEn: "What If...? Season 2", type: "series", releaseDate: "2023-12-22", year: 2023, phase: 5, upcoming: false },
  { id: "echo", titleJa: "エコー", titleEn: "Echo", type: "series", releaseDate: "2024-01-09", year: 2024, phase: 5, upcoming: false },
  { id: "x-men-97-season-1", titleJa: "X-MEN '97 シーズン1", titleEn: "X-Men '97 Season 1", type: "series", releaseDate: "2024-03-20", year: 2024, phase: 5, upcoming: false },
  { id: "deadpool-and-wolverine", titleJa: "デッドプール＆ウルヴァリン", titleEn: "Deadpool & Wolverine", type: "film", releaseDate: "2024-07-26", year: 2024, phase: 5, upcoming: false },
  { id: "agatha-all-along", titleJa: "アガサ・オール・アロング", titleEn: "Agatha All Along", type: "series", releaseDate: "2024-09-18", year: 2024, phase: 5, upcoming: false },
  { id: "what-if-season-3", titleJa: "ホワット・イフ...? シーズン3", titleEn: "What If...? Season 3", type: "series", releaseDate: "2024-12-22", year: 2024, phase: 5, upcoming: false },
  { id: "your-friendly-neighborhood-spider-man-season-1", titleJa: "ユア・フレンドリー・ネイバーフッド・スパイダーマン シーズン1", titleEn: "Your Friendly Neighborhood Spider-Man Season 1", type: "series", releaseDate: "2025-01-29", year: 2025, phase: 5, upcoming: false },
  { id: "captain-america-brave-new-world", titleJa: "キャプテン・アメリカ：ブレイブ・ニュー・ワールド", titleEn: "Captain America: Brave New World", type: "film", releaseDate: "2025-02-14", year: 2025, phase: 5, upcoming: false },
  { id: "daredevil-born-again-season-1", titleJa: "デアデビル：ボーン・アゲイン シーズン1", titleEn: "Daredevil: Born Again Season 1", type: "series", releaseDate: "2025-03-04", year: 2025, phase: 5, upcoming: false },
  { id: "thunderbolts", titleJa: "サンダーボルツ*", titleEn: "Thunderbolts*", type: "film", releaseDate: "2025-05-02", year: 2025, phase: 5, upcoming: false },
  { id: "ironheart", titleJa: "アイアンハート", titleEn: "Ironheart", type: "series", releaseDate: "2025-06-24", year: 2025, phase: 5, upcoming: false },
  { id: "the-fantastic-four-first-steps", titleJa: "ファンタスティック4：ファースト・ステップ", titleEn: "The Fantastic Four: First Steps", type: "film", releaseDate: "2025-07-25", year: 2025, phase: 6, upcoming: false },
  { id: "eyes-of-wakanda", titleJa: "アイズ・オブ・ワカンダ", titleEn: "Eyes of Wakanda", type: "series", releaseDate: "2025-08-06", year: 2025, phase: 6, upcoming: false },
  { id: "marvel-zombies-season-1", titleJa: "Marvel Zombies シーズン1", titleEn: "Marvel Zombies Season 1", type: "series", releaseDate: "2025-10-03", year: 2025, phase: 6, upcoming: false },
  { id: "wonder-man-season-1", titleJa: "Wonder Man シーズン1", titleEn: "Wonder Man Season 1", type: "series", releaseDate: "2026-01-01", year: 2026, phase: 6, upcoming: true },
  { id: "daredevil-born-again-season-2", titleJa: "デアデビル：ボーン・アゲイン シーズン2", titleEn: "Daredevil: Born Again Season 2", type: "series", releaseDate: "2026-03-24", year: 2026, phase: 6, upcoming: true },
  { id: "the-punisher-one-last-kill", titleJa: "The Punisher: One Last Kill", titleEn: "The Punisher: One Last Kill", type: "special", releaseDate: "2026-05-12", year: 2026, phase: 6, upcoming: true },
  { id: "spider-man-brand-new-day", titleJa: "スパイダーマン：ブランド・ニュー・デイ", titleEn: "Spider-Man: Brand New Day", type: "film", releaseDate: "2026-07-31", year: 2026, phase: 6, upcoming: true },
  { id: "visionquest", titleJa: "VisionQuest", titleEn: "VisionQuest", type: "series", releaseDate: "2026-10-01", year: 2026, phase: 6, upcoming: true },
  { id: "avengers-doomsday", titleJa: "アベンジャーズ：ドゥームズデイ", titleEn: "Avengers: Doomsday", type: "film", releaseDate: "2026-12-18", year: 2026, phase: 6, upcoming: true },
  { id: "avengers-secret-wars", titleJa: "アベンジャーズ：シークレット・ウォーズ", titleEn: "Avengers: Secret Wars", type: "film", releaseDate: "2027-12-17", year: 2027, phase: 6, upcoming: true },
  { id: "blade", titleJa: "ブレイド", titleEn: "Blade", type: "film", releaseDate: "2028-01-01", year: 2028, phase: 6, upcoming: true }
];


const DEFAULT_SETTINGS = {
  search: "",
  statusFilter: "all",
  typeFilter: "all",
  sortOrder: "asc",
  hideUpcoming: false,
  imageWatchedOnly: true,
  imageHideRatings: false,
  imageCompact: false,
  imageTheme: "dark",
  imageTitle: "My MCU Checklist",
  imageSubtitle: "公開順チェックリスト",
  imageSortOrder: "asc"
};

const state = {
  items: {},
  settings: { ...DEFAULT_SETTINGS },
  ui: {
    hideIntroNextTime: false
  }
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  loadState();
  loadIntroPreference();
  bindEvents();
  render();
  maybeOpenIntroOnFirstVisit();
});

function bindElements() {
  const ids = [
    "searchInput", "statusFilter", "typeFilter", "sortOrder", "hideUpcomingToggle",
    "imageWatchedOnlyToggle", "hideRatingsToggle", "imageCompactToggle", "imageThemeSelect",
    "imageTitleInput", "imageSubtitleInput", "imageSortOrder",
    "itemsList", "visibleCount", "statWatched", "statTotal", "statAverage", "statProgress",
    "shareItems", "shareSummary", "shareTitle", "shareSubtitle", "saveImageBtn", "shareBtn",
    "markAllClearBtn", "shareCard", "generateCodeBtn", "applyCodeBtn", "copyCodeBtn",
    "recoveryCodeArea", "recoveryHint", "showIntroBtn", "openGuideFromCardBtn",
    "introModal", "closeIntroBtn", "introUnderstoodBtn", "hideIntroNextTime"
  ];
  ids.forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function bindEvents() {
  els.searchInput.addEventListener("input", (e) => updateSetting("search", e.target.value));
  els.statusFilter.addEventListener("change", (e) => updateSetting("statusFilter", e.target.value));
  els.typeFilter.addEventListener("change", (e) => updateSetting("typeFilter", e.target.value));
  els.sortOrder.addEventListener("change", (e) => updateSetting("sortOrder", e.target.value));
  els.hideUpcomingToggle.addEventListener("change", (e) => updateSetting("hideUpcoming", e.target.checked));
  els.imageWatchedOnlyToggle.addEventListener("change", (e) => updateSetting("imageWatchedOnly", e.target.checked));
  els.hideRatingsToggle.addEventListener("change", (e) => updateSetting("imageHideRatings", e.target.checked));
  els.imageCompactToggle.addEventListener("change", (e) => updateSetting("imageCompact", e.target.checked));
  els.imageThemeSelect.addEventListener("change", (e) => updateSetting("imageTheme", e.target.value));
  els.imageTitleInput.addEventListener("input", (e) => updateSetting("imageTitle", e.target.value));
  els.imageSubtitleInput.addEventListener("input", (e) => updateSetting("imageSubtitle", e.target.value));
  els.imageSortOrder.addEventListener("change", (e) => updateSetting("imageSortOrder", e.target.value));

  els.markAllClearBtn.addEventListener("click", clearAllChecks);
  els.saveImageBtn.addEventListener("click", saveShareImage);
  els.shareBtn.addEventListener("click", shareImageOrUrl);
  els.generateCodeBtn.addEventListener("click", generateRecoveryCode);
  els.applyCodeBtn.addEventListener("click", applyRecoveryCode);
  els.copyCodeBtn.addEventListener("click", copyRecoveryCode);
  els.showIntroBtn.addEventListener("click", () => openIntroModal(false));
  els.openGuideFromCardBtn.addEventListener("click", () => openIntroModal(false));
  els.closeIntroBtn.addEventListener("click", closeIntroModal);
  els.introUnderstoodBtn.addEventListener("click", closeIntroModal);
  els.hideIntroNextTime.addEventListener("change", (e) => {
    state.ui.hideIntroNextTime = e.target.checked;
    persistIntroPreference();
  });
  els.introModal.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeIntro === "true") {
      closeIntroModal();
    }
  });
}


function loadIntroPreference() {
  try {
    state.ui.hideIntroNextTime = localStorage.getItem(INTRO_PREF_KEY) === "1";
  } catch (error) {
    console.error("Failed to load intro preference", error);
  }
  if (els.hideIntroNextTime) {
    els.hideIntroNextTime.checked = state.ui.hideIntroNextTime;
  }
}

function persistIntroPreference() {
  try {
    if (state.ui.hideIntroNextTime) {
      localStorage.setItem(INTRO_PREF_KEY, "1");
    } else {
      localStorage.removeItem(INTRO_PREF_KEY);
    }
  } catch (error) {
    console.error("Failed to save intro preference", error);
  }
}

function maybeOpenIntroOnFirstVisit() {
  if (state.ui.hideIntroNextTime) return;
  openIntroModal(true);
}

function openIntroModal(isAutoOpen = false) {
  els.introModal.classList.add("open");
  els.introModal.setAttribute("aria-hidden", "false");
  if (!isAutoOpen) {
    els.hideIntroNextTime.checked = state.ui.hideIntroNextTime;
  }
}

function closeIntroModal() {
  state.ui.hideIntroNextTime = Boolean(els.hideIntroNextTime.checked);
  persistIntroPreference();
  els.introModal.classList.remove("open");
  els.introModal.setAttribute("aria-hidden", "true");
}

function loadState() {
  migrateLegacyState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return applySettingsToControls();
    const saved = JSON.parse(raw);
    if (saved && typeof saved === "object") {
      state.items = sanitizeItems(saved.items);
      state.settings = sanitizeSettings(saved.settings);
    }
  } catch (error) {
    console.error("Failed to load state", error);
  }
  applySettingsToControls();
}

function migrateLegacyState() {
  try {
    if (localStorage.getItem(STORAGE_KEY)) return;

    const legacyKeys = ["mcu-checklist-v3", "mcu-checklist-v2", "mcu-checklist-v1"];
    for (const key of legacyKeys) {
      const legacyRaw = localStorage.getItem(key);
      if (!legacyRaw) continue;

      const legacy = JSON.parse(legacyRaw);
      if (!legacy || typeof legacy !== "object") continue;

      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        version: APP_VERSION,
        updatedAt: new Date().toISOString(),
        items: sanitizeItems(legacy.items),
        settings: sanitizeSettings(legacy.settings)
      }));
      break;
    }
  } catch (error) {
    console.error("Failed to migrate legacy state", error);
  }
}

function sanitizeItems(input) {
  const clean = {};
  if (!input || typeof input !== "object") return clean;

  MCU_ITEMS.forEach((item) => {
    const raw = input[item.id];
    if (!raw || typeof raw !== "object") return;
    const watched = Boolean(raw.watched);
    const rating = clampRating(raw.rating);
    if (watched || rating) {
      clean[item.id] = { watched, rating };
    }
  });

  return clean;
}

function sanitizeSettings(input) {
  const merged = { ...DEFAULT_SETTINGS, ...(input || {}) };
  return {
    search: typeof merged.search === "string" ? merged.search : DEFAULT_SETTINGS.search,
    statusFilter: ["all", "watched", "unwatched", "rated", "upcoming"].includes(merged.statusFilter) ? merged.statusFilter : DEFAULT_SETTINGS.statusFilter,
    typeFilter: ["all", "film", "series", "special", "short"].includes(merged.typeFilter) ? merged.typeFilter : DEFAULT_SETTINGS.typeFilter,
    sortOrder: ["asc", "desc"].includes(merged.sortOrder) ? merged.sortOrder : DEFAULT_SETTINGS.sortOrder,
    hideUpcoming: Boolean(merged.hideUpcoming),
    imageWatchedOnly: Boolean(merged.imageWatchedOnly),
    imageHideRatings: Boolean(merged.imageHideRatings),
    imageCompact: Boolean(merged.imageCompact),
    imageTheme: ["dark", "light"].includes(merged.imageTheme) ? merged.imageTheme : DEFAULT_SETTINGS.imageTheme,
    imageTitle: typeof merged.imageTitle === "string" ? merged.imageTitle : DEFAULT_SETTINGS.imageTitle,
    imageSubtitle: typeof merged.imageSubtitle === "string" ? merged.imageSubtitle : DEFAULT_SETTINGS.imageSubtitle,
    imageSortOrder: ["asc", "desc"].includes(merged.imageSortOrder) ? merged.imageSortOrder : DEFAULT_SETTINGS.imageSortOrder
  };
}

function applySettingsToControls() {
  els.searchInput.value = state.settings.search;
  els.statusFilter.value = state.settings.statusFilter;
  els.typeFilter.value = state.settings.typeFilter;
  els.sortOrder.value = state.settings.sortOrder;
  els.hideUpcomingToggle.checked = state.settings.hideUpcoming;
  els.imageWatchedOnlyToggle.checked = state.settings.imageWatchedOnly;
  els.hideRatingsToggle.checked = state.settings.imageHideRatings;
  els.imageCompactToggle.checked = state.settings.imageCompact;
  els.imageThemeSelect.value = state.settings.imageTheme;
  els.imageTitleInput.value = state.settings.imageTitle;
  els.imageSubtitleInput.value = state.settings.imageSubtitle;
  els.imageSortOrder.value = state.settings.imageSortOrder;
}

function persistState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      version: APP_VERSION,
      updatedAt: new Date().toISOString(),
      items: sanitizeItems(state.items),
      settings: sanitizeSettings(state.settings)
    })
  );
}

function updateSetting(key, value) {
  state.settings[key] = value;
  persistState();
  render();
}

function getEntry(id) {
  if (!state.items[id]) {
    state.items[id] = { watched: false, rating: 0 };
  }
  return state.items[id];
}

function clampRating(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.max(0, Math.min(5, Math.round(number)));
}

function setWatched(id, watched) {
  const entry = getEntry(id);
  entry.watched = watched;
  persistState();
  render();
}

function setRating(id, rating) {
  const entry = getEntry(id);
  entry.rating = clampRating(rating);
  persistState();
  render();
}

function getDisplayTitle(item) {
  return item.titleJa || item.titleEn;
}

function getSearchText(item) {
  return `${item.titleJa || ""} ${item.titleEn || ""}`.toLowerCase();
}

function getSortedItems(items, sortOrder) {
  return [...items].sort((a, b) => {
    const result = a.releaseDate.localeCompare(b.releaseDate);
    return sortOrder === "asc" ? result : -result;
  });
}

function getFilteredItems() {
  const search = state.settings.search.trim().toLowerCase();
  const filtered = MCU_ITEMS.filter((item) => {
    const entry = getEntry(item.id);
    if (state.settings.hideUpcoming && item.upcoming) return false;
    if (search && !getSearchText(item).includes(search)) return false;
    if (state.settings.statusFilter === "watched" && !entry.watched) return false;
    if (state.settings.statusFilter === "unwatched" && entry.watched) return false;
    if (state.settings.statusFilter === "rated" && !entry.rating) return false;
    if (state.settings.statusFilter === "upcoming" && !item.upcoming) return false;
    if (state.settings.typeFilter !== "all" && item.type !== state.settings.typeFilter) return false;
    return true;
  });

  return getSortedItems(filtered, state.settings.sortOrder);
}

function getShareItems() {
  const items = MCU_ITEMS
    .filter((item) => !item.upcoming || !state.settings.hideUpcoming)
    .filter((item) => state.settings.imageWatchedOnly ? getEntry(item.id).watched : true);

  return getSortedItems(items, state.settings.imageSortOrder);
}

function render() {
  const filtered = getFilteredItems();
  renderList(filtered);
  renderStats();
  renderShareCard();
}

function renderList(items) {
  els.itemsList.innerHTML = "";
  els.visibleCount.textContent = `${items.length}件`;

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "条件に一致する作品がありません。";
    els.itemsList.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const entry = getEntry(item.id);
    const row = document.createElement("article");
    row.className = "row-item";

    const watchCell = document.createElement("div");
    watchCell.className = "watch-cell";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = entry.watched;
    checkbox.setAttribute("aria-label", `${getDisplayTitle(item)} watched`);
    checkbox.addEventListener("change", () => setWatched(item.id, checkbox.checked));
    watchCell.appendChild(checkbox);

    const content = document.createElement("div");
    const title = document.createElement("div");
    title.className = "item-title";
    title.textContent = getDisplayTitle(item);
    const subtitle = document.createElement("div");
    subtitle.className = "item-subtitle";
    subtitle.textContent = item.titleEn;
    const meta = document.createElement("div");
    meta.className = "item-meta";
    meta.append(
      makeBadge(String(item.year)),
      makeBadge(typeLabel(item.type)),
      makeBadge(`Phase ${item.phase}`)
    );
    if (item.upcoming) meta.append(makeBadge("未公開", "upcoming"));
    content.append(title, subtitle, meta);

    const rating = document.createElement("div");
    rating.className = "rating";
    for (let i = 1; i <= 5; i += 1) {
      const star = document.createElement("button");
      star.type = "button";
      star.className = `star-btn ${entry.rating >= i ? "on" : ""}`;
      star.textContent = "★";
      star.setAttribute("aria-label", `${getDisplayTitle(item)} rating ${i}`);
      star.addEventListener("click", () => setRating(item.id, entry.rating === i ? 0 : i));
      rating.appendChild(star);
    }

    row.append(watchCell, content, rating);
    els.itemsList.appendChild(row);
  });
}

function renderStats() {
  const total = MCU_ITEMS.length;
  const watched = MCU_ITEMS.filter((item) => getEntry(item.id).watched).length;
  const ratedEntries = MCU_ITEMS.map((item) => getEntry(item.id).rating).filter((rating) => rating > 0);
  const average = ratedEntries.length ? (ratedEntries.reduce((sum, value) => sum + value, 0) / ratedEntries.length).toFixed(1) : "-";
  const progress = total ? `${Math.round((watched / total) * 100)}%` : "0%";

  els.statWatched.textContent = String(watched);
  els.statTotal.textContent = String(total);
  els.statAverage.textContent = average;
  els.statProgress.textContent = progress;
}

function renderShareCard() {
  const items = getShareItems();
  const watched = MCU_ITEMS.filter((item) => getEntry(item.id).watched).length;
  const ratings = MCU_ITEMS.map((item) => getEntry(item.id).rating).filter((rating) => rating > 0);
  const average = ratings.length ? (ratings.reduce((sum, value) => sum + value, 0) / ratings.length).toFixed(1) : "-";
  const films = MCU_ITEMS.filter((item) => getEntry(item.id).watched && item.type === "film").length;
  const other = MCU_ITEMS.filter((item) => getEntry(item.id).watched && item.type !== "film").length;

  els.shareCard.classList.toggle("theme-dark", state.settings.imageTheme === "dark");
  els.shareCard.classList.toggle("theme-light", state.settings.imageTheme === "light");
  els.shareCard.classList.toggle("compact", state.settings.imageCompact);

  els.shareTitle.textContent = state.settings.imageTitle.trim() || "My MCU Checklist";
  els.shareSubtitle.textContent = state.settings.imageSubtitle.trim() || (state.settings.imageWatchedOnly ? "視聴済み作品だけを表示" : "公開順チェックリスト");

  els.shareSummary.innerHTML = "";
  [
    [watched, "Watched"],
    [MCU_ITEMS.length, "Total"],
    [average, "Avg"],
    [`${films}/${other}`, "Film/Other"]
  ].forEach(([value, label]) => {
    const box = document.createElement("div");
    box.className = "share-stat";
    box.innerHTML = `<strong>${escapeHtml(String(value))}</strong><span>${escapeHtml(label)}</span>`;
    els.shareSummary.appendChild(box);
  });

  els.shareItems.innerHTML = "";
  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "まだ表示対象の作品がありません。";
    els.shareItems.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const entry = getEntry(item.id);
    const watchedIcon = entry.watched ? "✓" : "○";
    const stars = state.settings.imageHideRatings || !entry.rating ? "" : `${"★".repeat(entry.rating)}${"☆".repeat(5 - entry.rating)}`;
    const block = document.createElement("div");
    block.className = "share-item";

    if (state.settings.imageCompact) {
      block.innerHTML = `
        <div class="share-item-row">
          <span class="share-watch ${entry.watched ? "is-watched" : "is-unwatched"}">${watchedIcon}</span>
          <div class="share-item-title">${escapeHtml(getDisplayTitle(item))}</div>
          <div class="share-stars">${escapeHtml(stars)}</div>
        </div>
      `;
    } else {
      block.innerHTML = `
        <div class="share-item-title">${escapeHtml(getDisplayTitle(item))}</div>
        <div class="share-item-meta">
          <span>${item.year}</span>
          <span>${typeLabel(item.type)}</span>
          <span class="share-watch ${entry.watched ? "is-watched" : "is-unwatched"}">${watchedIcon}</span>
          ${stars ? `<span class="share-stars">${escapeHtml(stars)}</span>` : ""}
        </div>
      `;
    }

    els.shareItems.appendChild(block);
  });
}

function makeBadge(text, extraClass = "") {
  const span = document.createElement("span");
  span.className = `badge ${extraClass}`.trim();
  span.textContent = text;
  return span;
}

function typeLabel(type) {
  return {
    film: "映画",
    series: "シリーズ",
    special: "スペシャル",
    short: "短編"
  }[type] || type;
}

function clearAllChecks() {
  if (!window.confirm("すべての視聴チェックと評価を初期化しますか？")) return;
  state.items = {};
  persistState();
  render();
  setRecoveryHint("視聴チェックと評価を初期化しました。");
}

function generateRecoveryCode() {
  try {
    const code = encodeRecoveryCode();
    els.recoveryCodeArea.value = code;
    els.recoveryCodeArea.focus();
    els.recoveryCodeArea.select();
    setRecoveryHint("現在の状態から復元コードを生成しました。");
  } catch (error) {
    console.error(error);
    setRecoveryHint("復元コードの生成に失敗しました。", true);
  }
}

async function copyRecoveryCode() {
  try {
    const code = els.recoveryCodeArea.value.trim() || encodeRecoveryCode();
    els.recoveryCodeArea.value = code;

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(code);
    } else {
      els.recoveryCodeArea.focus();
      els.recoveryCodeArea.select();
      document.execCommand("copy");
    }

    setRecoveryHint("復元コードをコピーしました。");
  } catch (error) {
    console.error(error);
    setRecoveryHint("復元コードのコピーに失敗しました。", true);
  }
}

function applyRecoveryCode() {
  const raw = els.recoveryCodeArea.value.trim();
  if (!raw) {
    setRecoveryHint("復元コードを入力してください。", true);
    return;
  }

  try {
    const restored = decodeRecoveryCode(raw);
    state.items = sanitizeItems(restored.items);
    state.settings = sanitizeSettings(restored.settings);
    persistState();
    applySettingsToControls();
    render();
    setRecoveryHint("復元コードから状態を読み込みました。");
  } catch (error) {
    console.error(error);
    setRecoveryHint("復元コードの読み込みに失敗しました。", true);
  }
}

function setRecoveryHint(message, isError = false) {
  if (!els.recoveryHint) return;
  els.recoveryHint.textContent = message;
  els.recoveryHint.classList.toggle("error", isError);
}

function encodeRecoveryCode() {
  const itemsPart = encodeItemsToBase64Url();
  const settingsPart = encodeSettingsToBase64Url();
  return settingsPart ? `MCU4.${itemsPart}.${settingsPart}` : `MCU4.${itemsPart}`;
}

function decodeRecoveryCode(code) {
  const parts = code.trim().split(".");
  if (parts.length < 2 || parts[0] !== "MCU4") {
    throw new Error("invalid recovery code");
  }

  return {
    items: decodeItemsFromBase64Url(parts[1]),
    settings: parts[2] ? decodeSettingsFromBase64Url(parts[2]) : { ...DEFAULT_SETTINGS }
  };
}

function encodeItemsToBase64Url() {
  const bytes = new Uint8Array(Math.ceil(MCU_ITEMS.length / 2));

  MCU_ITEMS.forEach((item, index) => {
    const entry = getEntry(item.id);
    const watchedBit = entry.watched ? 1 : 0;
    const packedValue = watchedBit | (clampRating(entry.rating) << 1);
    const byteIndex = Math.floor(index / 2);

    if (index % 2 === 0) {
      bytes[byteIndex] |= packedValue & 0x0f;
    } else {
      bytes[byteIndex] |= (packedValue & 0x0f) << 4;
    }
  });

  return bytesToBase64Url(bytes);
}

function decodeItemsFromBase64Url(encoded) {
  const bytes = base64UrlToBytes(encoded);
  const items = {};

  MCU_ITEMS.forEach((item, index) => {
    const byteIndex = Math.floor(index / 2);
    const byte = bytes[byteIndex] || 0;
    const packedValue = index % 2 === 0 ? (byte & 0x0f) : ((byte >> 4) & 0x0f);
    const watched = Boolean(packedValue & 1);
    const rating = clampRating(packedValue >> 1);

    if (watched || rating) {
      items[item.id] = { watched, rating };
    }
  });

  return items;
}

function encodeSettingsToBase64Url() {
  const changed = {};

  Object.entries(state.settings).forEach(([key, value]) => {
    if (JSON.stringify(value) !== JSON.stringify(DEFAULT_SETTINGS[key])) {
      changed[key] = value;
    }
  });

  if (!Object.keys(changed).length) return "";
  return textToBase64Url(JSON.stringify(changed));
}

function decodeSettingsFromBase64Url(encoded) {
  const text = base64UrlToText(encoded);
  const parsed = JSON.parse(text);
  if (!parsed || typeof parsed !== "object") throw new Error("invalid settings payload");
  return parsed;
}

function bytesToBase64Url(bytes) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function base64UrlToBytes(encoded) {
  const normalized = encoded.replaceAll("-", "+").replaceAll("_", "/");
  const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function textToBase64Url(text) {
  const bytes = new TextEncoder().encode(text);
  return bytesToBase64Url(bytes);
}

function base64UrlToText(encoded) {
  const bytes = base64UrlToBytes(encoded);
  return new TextDecoder().decode(bytes);
}

function getShareBackgroundColor() {
  return state.settings.imageTheme === "light" ? "#f4f7ff" : "#0a1020";
}

async function saveShareImage() {
  try {
    const dataUrl = await window.htmlToImage.toPng(els.shareCard, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: getShareBackgroundColor()
    });
    downloadDataUrl(dataUrl, `mcu-checklist-${new Date().toISOString().slice(0, 10)}.png`);
  } catch (error) {
    console.error(error);
    window.alert("画像の書き出しに失敗しました。");
  }
}

async function shareImageOrUrl() {
  try {
    if (!navigator.share || !navigator.canShare) {
      await saveShareImage();
      return;
    }

    const dataUrl = await window.htmlToImage.toPng(els.shareCard, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: getShareBackgroundColor()
    });
    const file = dataUrlToFile(dataUrl, `mcu-checklist-${new Date().toISOString().slice(0, 10)}.png`);
    if (navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: state.settings.imageTitle.trim() || "MCU Checklist",
        text: state.settings.imageTitle.trim() || "MCU Checklist",
        files: [file]
      });
    } else {
      downloadDataUrl(dataUrl, file.name);
    }
  } catch (error) {
    if (error && error.name === "AbortError") return;
    console.error(error);
    window.alert("共有に失敗したため、画像保存に切り替えます。");
    await saveShareImage();
  }
}

function downloadDataUrl(dataUrl, filename) {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  a.click();
}

function dataUrlToFile(dataUrl, filename) {
  const [header, data] = dataUrl.split(",");
  const mimeMatch = header.match(/data:(.*?);base64/);
  const mime = mimeMatch ? mimeMatch[1] : "image/png";
  const bytes = atob(data);
  const array = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i += 1) array[i] = bytes.charCodeAt(i);
  return new File([array], filename, { type: mime });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
