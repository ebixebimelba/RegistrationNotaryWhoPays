import Group531 from "assets/Group531";

export default function IconsQuestion(props: IconsQuestionProps) {
  return (
    <>
      <div
        className={`absolute transition-all ${
          props.type === "TYPE" ? "inset-0" : ""
        } ${props.type === "TYPE1" ? "w-6 h-6 left-[587px] top-[197px]" : ""}`}
      >
        <div className="inset-0 absolute" />
        {props.type === "TYPE" && <Group531 />}
        {props.type === "TYPE1" && (
          <IconsQuestion type="TYPE" />
        )}
      </div>
    </>
  );
}

IconsQuestion.defaultProps = {
  type: "TYPE",
};

interface IconsQuestionProps {
  type: "TYPE" | "TYPE1";
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
