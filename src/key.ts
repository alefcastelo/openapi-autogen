import { createHash } from "crypto"

export const keyGenerator = (...params: string[]): string => {
  return createHash('md5').update(params.join('').toLowerCase()).digest("hex")
}
