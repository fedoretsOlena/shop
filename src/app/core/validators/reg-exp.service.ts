// Я бы назвал RegExpPatterns, а файл reg-exp.patterns.ts
// Это класс, но в DI он у вас не используется
export class RegExpService {
  static onlyLetters = /^\S+$/g;
  static email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
}
