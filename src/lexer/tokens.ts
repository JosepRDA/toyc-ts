export enum TokenType {
  // Keywords
  FOR = "for",
  WHILE = "while",
  RETURN = "return",
  IF = "if",
  ELSE = "else",
  SWITCH = "switch",
  CASE = "case",

  // Primitive types
  INT = "int",
  FLOAT = "float",
  CHAR = "char",
  VOID = "void",

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
  STAR = "*",
  DIV = "/",
  // REVDIV = "\\",
  GT = ">",
  LT = "<",
  GTE = ">=",
  LTE = "<=",
  EQEQ = "==",
  HASH = "#",

  // Identifiers
  IDENTIFIER = "identifier",
  NUMLITERAL = "numliteral",
  STRLITERAL = "strliteral",

  // preprocessor directives 
  INCLUDE = "directive",
  DEFINE = "directive",
  // TODO: add pragma, ifdef, __FILE__, etc.

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
  "*": TokenType.STAR,
  "/": TokenType.DIV,
  "#": TokenType.HASH,
  // "\\": TokenType.REVDIV,
};

export const KEYWORDS: Record<string, TokenType> = {
  "int": TokenType.INT,
  "float": TokenType.FLOAT,
  "char": TokenType.CHAR,
  "void": TokenType.VOID,
  "for": TokenType.FOR,
  "while": TokenType.WHILE,
  "switch": TokenType.SWITCH,
  "case": TokenType.CASE,
  "return": TokenType.RETURN,
  "if": TokenType.IF,
  "else": TokenType.ELSE,
};

export const DIRECTIVES: Record<string, TokenType> = {
    "include": TokenType.INCLUDE,
    "define": TokenType.DEFINE
}

export function isDigit(ch: string): boolean {
  return ch >= "0" && ch <= "9";
}

export function isAlpha(ch: string): boolean {
  return (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
}

export function isAlphaNumeric(ch: string): boolean {
  return isAlpha(ch) || isDigit(ch);
}

export function isSpaceCharacter(ch: string): boolean {
    return ch === " " || ch == "\t" || ch == "\r";
}
