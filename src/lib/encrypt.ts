import { LETTERS } from "./dictionary"

export class Encrypt {
  private passwordhash: string

  public constructor() {
    this.passwordhash = ""
  }

  private lookingFor(x: string) {
    for (let j = 0; j < LETTERS.length; j++) {
      if (x === LETTERS[j].word) {
        return LETTERS[j].value
      }
    }
    return x
  }

  public async hash(palabra: string, vc: number) {
    let k = 0
    while (k < vc) {
      let i = 0
      while (i < palabra.length) {
        const word = palabra.charAt(i)
        const wordReplace = this.lookingFor(word)
        palabra = palabra.replace(word, wordReplace)
        i++
      }
      k++
    }
    this.passwordhash = palabra
    return this.passwordhash
  }

  public async compare(normal: string, wordEncrypt: string) {
    let hasta = 1
    const para = 20
    let isHash = 0
    while (hasta < para && isHash !== 1) {
      if ((await this.hash(normal, hasta)) === wordEncrypt) {
        isHash = 1
        return true
      }
      hasta++
    }
    return false
  }
}

export const bcrypt = new Encrypt()