import Lotto from "../src/model/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복이 있을 경우", () => {
    expect(() => {
      new Lotto([1, 1, 1, 2, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1~45를 벗어나는 경우", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 1000]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 음수가 있을 경우", () => {
    expect(() => {
      new Lotto([-5, -2, 3, 4, 5, 9]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 정수가 아닌 경우", () => {
    expect(() => {
      new Lotto([1.1, 2, 3, 4, 5, 9]);
    }).toThrow("[ERROR]");
  });
});
