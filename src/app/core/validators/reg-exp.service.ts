export class RegExpService {
  static onlyLetters = /^\S+$/g;
  static email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
}
