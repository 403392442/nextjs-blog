import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import KnowledgeInterests from "components/about/KnowledgeInterests";
import Skills from "components/about/Skills";

const Skill = () => {
    return (
        <SectionContainer name={"skill"}>
            <div className="container">
                <div className="tokyo_tm_services w-full h-auto clear-both float-left py-[100px] px-0">
                    <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
                        <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
                            <SectionTitle pageName={"Skill"} title={"What I Know"} />
                        </div>
                        <KnowledgeInterests />
                    </div>
                </div>
            </div>
            <Skills />
        </SectionContainer>
    );
};
export default Skill;