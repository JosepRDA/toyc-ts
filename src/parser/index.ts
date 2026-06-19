import { Token, Lexer } from "../lexer";
import { TokenType } from "../lexer/tokens";

export class Parser {
    lexer: Lexer;
    buffer: Token[];

    constructor(lexer: Lexer) {
        this.lexer = lexer;
        this.buffer = [this.lexer.nextToken()];
    }

    get token() {
        return this.buffer[0];
    }

    private nextToken() {
        this.buffer.shift();

        if (this.buffer.length === 0) {
            this.buffer.push(this.lexer.nextToken());
        }
    }

    parse() {
        // todo
    }

    match(type: TokenType) {
        if (this.token.type === type) {
            const matched = this.token;
            this.nextToken();
            return matched;
        } else {
            throw {
                message: `Unexpected token: ${this.token.value}`,
                loc: this.token.start,
            };
        }
    }

    private accept(type: TokenType): boolean {
        if (this.token.type === type) {
            this.nextToken();
            return true;
        }

        return false;
    }

    private peek(type: TokenType): boolean {
        return this.token.type === type;
    }
}
