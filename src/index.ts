import { readFileSync } from "node:fs";
import { Lexer } from "./lexer";
import { TokenType } from "./lexer/tokens";

export default async function main(filePath: string) {
  console.log(`Compiling ${filePath}`);

  const src = readFileSync(filePath, "utf-8");
  const lexer = new Lexer(src);
  let token = lexer.nextToken();
  while (token.type !== TokenType.EOF) {
    console.log(token);
    token = lexer.nextToken();
  }
}
