declare module 'node-base91' {
  export function encode(data: String | Buffer, encoding?: String): String;
  export function decode(data: String, encoding: String): String | Buffer;
}
