import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import CircularText from "../../Components/CircularText";
import styles from "./TopPage.module.scss";

const skills = [
  {
    name: "Web基礎",
    desc: "Webの特性と仕組み、IT・サーバー・ネットワークの基礎知識、著作権・個人情報・セキュリティについて学習。",
    tags: ["Web仕組み", "サーバー", "セキュリティ", "ネットワーク"],
  },
  {
    name: "HTML / CSS",
    desc: "HTMLタグ・要素・レイアウト構造の記述からCSSによるスタイリング・アニメーション、レスポンシブデザインまで習得。）",
    tags: ["HTML5", "CSS3", "レスポンシブ", "アニメーション", "VSCode"],
  },
  {
    name: "JavaScript",
    desc: "演算子・変数・条件分岐・反復処理・関数・DOM操作の基礎から、非同期処理・API・オブジェクト・配列まで習得。",
    tags: ["DOM操作", "非同期処理", "API", "fetch"],
  },
  {
    name: "GitHub / 動的Web制作",
    desc: "GitHubによるバージョン管理、コマンドライン操作、HTML・CSS・JavaScriptを組み合わせた動的Webサイト制作。",
    tags: ["GitHub", "コマンドライン", "動的サイト"],
  },
  {
    name: "React",
    desc: "モダンJSの核心からDB連携、環境構築、リリースまで、React開発の全工程を実践的に習得。",
    tags: ["React", "JSX", "Props/State", "モバイル", "環境構築"],
  },
  {
    name: "UI Design / Figma",
    desc: "WebアプリのUIデザイン、アイデア出しからプロトタイプ制作。企画書・要件定義書・仕様書作成も経験。",
    tags: ["Figma", "プロトタイプ", "UI設計", "要件定義"],
  },
  {
    name: "Webサイト開発",
    desc: "要件・仕様に基づくサイト開発、ビルド・デプロイ・検証、プレゼンテーションまで実施。",
    tags: ["開発", "デプロイ", "プレゼン"],
  },
  {
    name: "解決力",
    desc: "わからないことは調べて解決するまで諦めない力を習得。調べてわからなくても必ず誰かに質問して解決することを心がけています。",
    tags: ["調査力", "問題解決", "自走力"],
  },
];

const timelineMonths = [
  {
    month: "1ヶ月目",
    period: "10月下旬 〜 11月下旬",
    color: "#88D3C2",
    title: "Web基礎 & コーディング基礎",
    items: [
      {
        label: "学科",
        text: "Web基礎概論・プログラミング基礎概論・安全衛生",
      },
      { label: "実技", text: "コンピュータ基本操作" },
      {
        label: "実技",
        text: "コーディング基礎実習 — HTML/CSSの基礎・レスポンシブデザイン",
      },
    ],
    hours: "約90時間",
  },
  {
    month: "2ヶ月目",
    period: "11月下旬 〜 12月下旬",
    color: "#6bc4b0",
    title: "JavaScript & 動的Web制作",
    items: [
      {
        label: "実技",
        text: "JavaScript基礎実習 — 演算子・変数・条件分岐・DOM操作",
      },
      {
        label: "実技",
        text: "動的Webサイト制作実習 — GitHub・コマンドライン・動的サイト制作",
      },
    ],
    hours: "約114時間",
    hasProject: true,
    projectLabel: "制作実習（12/9〜12/25）",
    projectNote: "実際に制作したWebサイト",
    projectUrl: "https://aquarium-rho.vercel.app/",
    projectThumb: "images/aquarium.png",
  },
  {
    month: "3ヶ月目",
    period: "12月下旬 〜 1月下旬",
    color: "#5bb8a4",
    title: "JavaScript応用 & React基礎",
    items: [
      {
        label: "実技",
        text: "JavaScript応用実習 — 非同期処理・API・オブジェクト・配列",
      },
      {
        label: "実技",
        text: "React基礎実習 — モダンJS・JSX・コンポーネント・Props/State",
      },
    ],
    hours: "約90時間",
  },
  {
    month: "4ヶ月目",
    period: "1月下旬 〜 2月下旬",
    color: "#4aad99",
    title: "React応用 & 開発準備",
    items: [
      {
        label: "実技",
        text: "React応用実習 — イベント・スタイリング・レンダリング・DB連携",
      },
      { label: "実技", text: "開発準備実習 — Figmaでプロトタイプ" },
    ],
    hours: "約102時間",
    hasProject: true,
    projectLabel: "Webサイト開発演習（2/19〜3/25）",
    projectNote: "開発したWebサイト",
    projectUrl: "https://komorebi-kitchin-one.vercel.app/",
    projectThumb: "images/komorebi.png",
  },
  {
    month: "5ヶ月目",
    period: "2月下旬 〜 3月下旬",
    color: "#3a9f8c",
    title: "Webサイト開発演習",
    items: [
      {
        label: "実技",
        text: "Webサイト開発演習 — 開発・ビルド・デプロイ・検証・プレゼン",
      },
    ],
    hours: "約90時間",
  },
  {
    month: "6ヶ月目",
    period: "3月下旬 〜 4月",
    color: "#2a9080",
    title: "React Native & 企業実習",
    items: [
      {
        label: "実技",
        text: "React Native基礎実習 — モバイルアプリ開発・環境構築・リリース",
      },
    ],
    hours: "約35時間",
  },
];

function TimelineItem({ month, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.timelineCard} style={{ "--accent": month.color }}>
        <div className={styles.timelineCardHeader}>
          <div>
            <p className={styles.timelineMonth}>{month.month}</p>
            <p className={styles.timelinePeriod}>{month.period}</p>
          </div>
          <span className={styles.timelineHours}>{month.hours}</span>
        </div>
        <h3 className={styles.timelineCardTitle}>{month.title}</h3>
        <ul className={styles.timelineList}>
          {month.items.map((item, i) => (
            <li key={i} className={styles.timelineListItem}>
              <span className={styles.timelineListLabel}>{item.label}</span>
              {item.text}
            </li>
          ))}
        </ul>
        {month.hasProject && (
          <div className={styles.projectBox}>
            <p className={styles.projectLabel}> {month.projectLabel}</p>
            {month.projectThumb ? (
              <a
                href={month.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <img
                  src={month.projectThumb}
                  alt={month.projectNote}
                  className={styles.projectThumbImg}
                />
                <span className={styles.projectOverlay}>サイトを見る →</span>
              </a>
            ) : (
              <div className={styles.projectPlaceholder}>
                <p className={styles.projectPlaceholderText}>
                  {month.projectNote}
                </p>
                <p className={styles.projectPlaceholderSub}>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className={styles.timelineDot} style={{ background: month.color }} />
    </div>
  );
}

function TimelineSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const pct = Math.min(Math.max(scrolled / total, 0), 1);
      setProgress(pct);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.timelineSection} ref={sectionRef}>
      <p className={styles.sectionLabel}>Learning Journey</p>
      <h2 className={styles.sectionTitle}>
        訓練校での学習の軌跡
        <span>⚫︎リカレントスクール 広島校</span>
        <span>『はじめてのReact：ステップbyステップで学ぶWEBアプリ開発科』</span>
      </h2>
      <div className={styles.timelineWrapper}>
        <div className={styles.timelineTrack}>
          <div
            className={styles.timelineFill}
            style={{ height: `${progress * 100}%` }}
          />
        </div>
        {timelineMonths.map((month, i) => (
          <TimelineItem key={i} month={month} index={i} />
        ))}
      </div>
    </section>
  );
}

function TopPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hello, I'm
            <br />
            <em>Matsui</em>
          </h1>
          <p className={styles.heroSub}>
            職業訓練校でWebデザイン・開発を学び、
            <br />
            より良いユーザー体験を届けるサイト制作に取り組んでいます。
          </p>
          <Link to="/works" className={styles.heroBtn}>
            Works を見る
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className={styles.heroRight}>
          <CircularText radius={200} duration="60s" />{" "}
        </div>
      </section>

      <section className={styles.skills}>
        <p className={styles.sectionLabel}>Skills</p>
        <h2 className={styles.sectionTitle}>習得したスキル</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <p className={styles.skillDesc}>{skill.desc}</p>
              <div className={styles.skillTags}>
                {skill.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <TimelineSection />

      <section className={styles.cta}>
        <Link to="/works" className={`${styles.ctaCard} ${styles.ctaWorks}`}>
          <span className={styles.ctaLabel}>Portfolio</span>
          <h2 className={styles.ctaTitle}>Works</h2>
          <p className={styles.ctaDesc}>
            訓練校での学習成果や個人制作の作品をまとめています。
          </p>
          <span className={styles.ctaArrow}>→</span>
        </Link>
        <Link to="/about" className={`${styles.ctaCard} ${styles.ctaAbout}`}>
          <span className={styles.ctaLabel}>Profile</span>
          <h2 className={styles.ctaTitle}>About</h2>
          <p className={styles.ctaDesc}>
            Web制作への想いやこれまでの経歴、目指す姿について。
          </p>
          <span className={styles.ctaArrow}>→</span>
        </Link>
      </section>
    </>
  );
}

export default TopPage;
