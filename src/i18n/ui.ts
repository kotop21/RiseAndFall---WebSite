// src/i18n/ui.ts
export const languages = {
  ru: 'Русский',
  en: 'English',
};

export const defaultLang = 'ru';

export const ui = {
  ru: {
    'nav.home': 'Главная',
    'nav.leaderboard': 'Рейтинг',
    'nav.wiki': 'Вики',
    'hero.title': 'Rise and Fall:<br>Civilizations at War',
    'hero.desc': 'Единая точка входа в мир Rise & Fall. Официальный хаб сообщества: актуальная база знаний, глобальный рейтинг игроков и пошаговые инструкции для новичков.',
    'button.download': 'Скачать лаунчер',
  },
  en: {
    'nav.home': 'Home',
    'nav.leaderboard': 'Leaderboard',
    'nav.wiki': 'Wiki',
    'hero.title': 'Rise and Fall:<br>Civilizations at War',
    'hero.desc': 'The single entry point to the world of Rise & Fall. Official community hub: up-to-date knowledge base, global player rankings, and step-by-step guides.',
    'button.download': 'Download Launcher',
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
