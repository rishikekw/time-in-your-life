import { Heading } from "@chakra-ui/react";

type Props = { isLargerThan1100: boolean };

export default function TitleHeader({ isLargerThan1100 }: Props) {
  return (
    <>
      <Heading
        fontSize={isLargerThan1100 ? "72px" : "40px"}
        fontWeight="900"
        textAlign="center"
        pt="30px"
      >
        TIME IN YOUR LIFE
      </Heading>
      <Heading fontSize="12px" fontWeight="800" textAlign="center" pt="15px">
        Your life is ticking away, how would you spend it?
      </Heading>
      {!isLargerThan1100 && (
        <Heading fontSize="12px" fontWeight="700" textAlign="center" pt="15px">
          (Get the full experience with a larger screen)
        </Heading>
      )}
    </>
  );
}
