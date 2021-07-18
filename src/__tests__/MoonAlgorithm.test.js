import MoonAlgorithm from "../components/libs/MoonAlgorithm";

const data = [
  [4556683942683049, true],
  [5552028236130664, true],
  [5552028236130665, false],
  [4556683942683043, false],
];

test.each(data)(
  "Muun algorithm test number = %s , result = %s ",
  (number, expected) => {
    expect(MoonAlgorithm(number)).toBe(expected);
  }
);
