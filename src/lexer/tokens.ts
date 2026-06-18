export enum TokenType {
  // Keywords
  IMPORT = "import",
  TYPE = "type",
  FUNCTION = "fn",
  LET = "let",
  FOR = "for",
  RETURN = "return",
  IF = "if",
  ELSE = "else",
  MAIN = "main",

  // Primitive types
  I8 = "i8",
  I16 = "i16",
  F16 = "f16",
  STR = "str",

  // Symbols
  LPAREN = "(",
  RPAREN = ")",
  LBRACE = "{",
  RBRACE = "}",
  COLON = ":",
  SEMICOLON = ";",
  COMMA = ",",
  DOT = ".",
  EQ = "=",
  PLUS = "+",
  MINUS = "-",
  MUL = "*",
  DIV = "/",
  EXP = "^",
  GT = ">",
  LT = "<",
  GTE = ">=",
  LTE = "<=",
  EQEQ = "==",

  // Identifiers
  IDENTIFIER = "identifier",
  NUMLITERAL = "numliteral",
  STRLITERAL = "strliteral",

  // End of file
  EOF = "eof",
  // End of line
  EOL = "eol",
}

export const SINGLE_CHAR_TOKENS: Record<string, TokenType> = {
  "(": TokenType.LPAREN,
  ")": TokenType.RPAREN,
  "{": TokenType.LBRACE,
  "}": TokenType.RBRACE,
  ":": TokenType.COLON,
  ";": TokenType.SEMICOLON,
  ",": TokenType.COMMA,
  ".": TokenType.DOT,
  "+": TokenType.PLUS,
  "-": TokenType.MINUS,
  "*": TokenType.MUL,
  "/": TokenType.DIV,
  "^": TokenType.EXP,
};

export const KEYWORDS: Record<string, TokenType> = {
  import: TokenType.IMPORT,
  type: TokenType.TYPE,
  function: TokenType.FUNCTION,
  let: TokenType.LET,
  for: TokenType.FOR,
  return: TokenType.RETURN,
  if: TokenType.IF,
  else: TokenType.ELSE,
  main: TokenType.MAIN,
};

export function isDigit(ch: string): boolean {
  return ch >= "0" && ch <= "9";
}

export function isAlpha(ch: string): boolean {
  return (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
}

export function isAlphaNumeric(ch: string): boolean {
  return isAlpha(ch) || isDigit(ch);
}
