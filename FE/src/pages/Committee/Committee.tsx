import React from "react";
import {InnerContainer, PageContainer} from "../../common/index.styles";
import Announcement from "../../components/Announcement/Announcement";
import {useDevice} from "../../hooks/useDevice";
import {Card} from 'antd';
import {CardContainer, EmailTag} from "./Committee.styles";
import {Members} from "types";

const {Meta} = Card;

export const Committee = () => {
    const {deviceWidth} = useDevice();

    const members: Members[] = [
        {
            name: "Mr Brian Smyth",
            imageUrl: "/committee/brian.jpg",
            title: "Chairman",
            email: "chairman@yorkmodelengineers.co.uk"
        },

        {
            name: "Mr David Woods",
            imageUrl: "/committee/old-man.png",
            title: "Vice Chairman",
            email: "vicechairman@yorkmodelengineers.co.uk"
        },

        {
            name: "Mr Bob Lovett",
            imageUrl: "/committee/bob-lovett.jpg",
            title: "Secretary",
            email: "secretary@yorkmodelengineers.co.uk"
        },

        {
            name: "Mr Glyn Granger",
            imageUrl: "/committee/glyn-granger.jpg",
            title: "Treasurer",
            email: "treasurer@yorkmodelengineers.co.uk"
        },

        {
            name: "Mr Keith Walton",
            imageUrl: "/committee/old-man.png",
            title: "Boiler Inspector",
            email: "boilerinspector@yorkmodelengineers.co.uk"
        },

        {
            name: "Mr Roger Backhouse",
            imageUrl: "/committee/roger-b.jpg",
            title: "Newsletter Editor",
            email: "editor@yorkmodelengineers.co.uk"
        },
    ]

    return (
        <PageContainer>
            <InnerContainer justifyContent="center" alignItems="center">
                {deviceWidth <= 1200 && <Announcement/>}
                <CardContainer>
                    {members.map(({name, title, imageUrl, email}) => (
                        <Card
                            hoverable={true}
                            key={email}
                            style={{width: "100%", maxWidth: 350, fontSize: "16px"}}
                            cover={
                                <img
                                    alt={title}
                                    src={imageUrl}
                                    width={300}
                                    height={300}
                                    loading="lazy"
                                />
                            }
                        >
                            <Meta
                                title={name}
                                description={title}
                            />
                            <EmailTag href={`mailto:${email}`}>{email}</EmailTag>
                        </Card>
                    ))}

                </CardContainer>
            </InnerContainer>
        </PageContainer>
    )
}

export default Committee;