import Title from "@/components/Title";
import BlurFade from "@/components/magicui/blur-fade";
import DetailForm from "./_components/Form";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="mb-36">
      <Title
        title="Fill this details so you would not have to in Future..."
        className="mx-12"
      />
      <BlurFade delay={0.1 * 2} inView className="my-8 mx-8">
        <DetailForm userDetails={""} />
      </BlurFade>
    </div>
  );
};
export default Page;
