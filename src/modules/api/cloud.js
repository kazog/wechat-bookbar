/**
 * Author: Meng
 * Date: 2022-03
 * Desc:
 */
import { query } from "../net/cloud";

export function loginAccount() {
  return query({
    url: "account",
    data: {
      type: "login",
    },
  });
}
