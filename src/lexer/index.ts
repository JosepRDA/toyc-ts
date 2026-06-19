import { KEYWORDS, SINGLE_CHAR_TOKENS, TokenType } from "./tokens";
import { isDigit, isAlpha, isAlphaNumeric } from "./tokens";

export interface Token {
  type: TokenType;
  value: string;
  start: number;
  end: number;
}

export class Lexer {
  src: string; // source program text
  pos: number; // current position of lexer in the program text

  constructor(src: string) {
    this.src = src + "\0";
    this.pos = 0;
  }

  nextToken(): Token {
    while (true) {
      const ch = this.src[this.pos];

      if (ch == "\0") {
        return this.makeToken(TokenType.EOF, "");
      }

      if (ch === " " || ch === "\t" || ch == "\r") {
        this.pos++;
        continue;
      }

      if (ch === "\n") {
        this.pos++;
        return this.makeToken(TokenType.EOL, "\n");
      }

      // Identifiers and keywords
      if (isAlpha(ch) || ch === "_") {
        return this.readIdentifier();
      }

      // Numbers
      if (isDigit(ch)) {
        return this.readNumber();
      }

      // Strings
      if (ch === '"') {
        return this.readString();
      }

      // Two-character operators
      switch (ch) {
        case "=":
          if (this.peek() === "=") {
            const start = this.pos;
            this.pos += 2;

            return {
              type: TokenType.EQEQ,
              value: "==",
              start,
              end: this.pos - 1,
            };
          }

          this.pos++;
          return this.makeToken(TokenType.EQ, "=");

        case ">":
          if (this.peek() === "=") {
            const start = this.pos;
            this.pos += 2;

            return {
              type: TokenType.GTE,
              value: ">=",
              start,
              end: this.pos - 1,
            };
          }

          this.pos++;
          return this.makeToken(TokenType.GT, ">");

        case "<":
          if (this.peek() === "=") {
            const start = this.pos;
            this.pos += 2;

            return {
              type: TokenType.LTE,
              value: "<=",
              start,
              end: this.pos - 1,
            };
          }

          this.pos++;
          return this.makeToken(TokenType.LT, "<");
      }

      // Single-character tokens
      const tokenType = SINGLE_CHAR_TOKENS[ch];

      if (tokenType) {
        this.pos++;
        return this.makeToken(tokenType, ch);
      }

      throw new SyntaxError(`Unexpected character '${ch}' at ${this.pos}`);
    }
  }

  makeToken(type: TokenType, value: string): Token {
    return {
      type,
      value,
      start: this.pos - value.length,
      end: this.pos - 1,
    };
  }

  peek(): string {
    return this.src[this.pos + 1];
  }

  readIdentifier(): Token {
    const start = this.pos;

    while (isAlphaNumeric(this.src[this.pos]) || this.src[this.pos] === "_") {
      this.pos++;
    }

    const text = this.src.slice(start, this.pos);

    return {
      type: KEYWORDS[text] ?? TokenType.IDENTIFIER,
      value: text,
      start,
      end: this.pos - 1,
    };
  }

  readNumber(): Token {
    const start = this.pos;

    while (isDigit(this.src[this.pos])) {
      this.pos++;
    }

    return {
      type: TokenType.NUMLITERAL,
      value: this.src.slice(start, this.pos),
      start,
      end: this.pos - 1,
    };
  }

  readString(): Token {
    const start = this.pos;

    this.pos++; // skip opening quote

    while (this.src[this.pos] !== '"' && this.src[this.pos] !== "\0") {
      this.pos++;
    }

    if (this.src[this.pos] === "\0") {
      throw new SyntaxError("Unterminated string literal");
    }

    const value = this.src.slice(start + 1, this.pos);

    this.pos++; // skip closing quote

    return {
      type: TokenType.STRLITERAL,
      value,
      start,
      end: this.pos - 1,
    };
  }
}
