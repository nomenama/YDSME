import React from "react";
import {PageContainer, H1, H2, InnerContainer, P1, Link, Flex} from "../../common/index.styles";
import {useDevice} from "../../hooks/useDevice";
import Announcement from "../../components/Announcement/Announcement";

export const ClubHistory = () => {
    const {deviceWidth} = useDevice();

    return (
        <PageContainer>
            <InnerContainer>
                {deviceWidth <= 1200 && <Announcement/>}
                <H1>YCDSME - A Brief History</H1>
                <H2>1929 to Present Day</H2>
                <Flex justify="center">
                    <img src="ycdsme-black-and-white.jpg" alt="black and white" width={300} height={200} loading="lazy"/>
                </Flex>
                <P1>The first attempt to form a model engineering society in York was made in February 1923 when Mr. H. P. Jackson,
                    who had a shop in Micklegate catering for modellers’ needs, placed an advertisement in the Model Engineer for
                    like minded people to get together but it proved unsuccessful. Six years later, an advert was placed in the
                    local press for a meeting to be held on 15th September in Mr. Jackson’s rooms in Micklegate.
                    Thirty-six people attended that initial meeting and a new society
                    “<strong>The York City and District Society of Model and Experimental Engineers</strong>” was born.
                    (The “Experimental” part of the club’s title was eventually dropped after a few years (1946).)
                    Meetings of the new society were held in a various places, mainly public houses.
                    Most were discussion nights but a regular feature was “Live Steam Nights” when locomotives were run
                    on a test bed, stationary engines were demonstrated and even a flash steam boat was put into action.
                </P1>

                <P1>Membership remained low until the latter half of the 1930s and then began to pick up as more people found work.
                    Negotiations were started with the LNER to lease land to establish a club track but they came to nothing.
                    Meanwhile, meetings were now taking place courtesy of Rowntrees, who provided access to the work’s dining room
                    free of charge.
                </P1>

                <H2>Rented Land</H2>
                <P1>After the end of the Second World War, farmland was rented at Stockton Lane for the building of a
                    raised track circuit. The track itself was made and assembled in the LNER workshops – the members
                    being given access to the York Loco Repair Works and then, at the suggestion of the CME LNER,
                    the York Carriage Works to make the rails. Erection of the track at the Stockton Lane site started in 1947.
                    Not many clubs can claim that their railway track was made by one of the Big Four!
                </P1>

                <P1>
                    <strong>
                        (Interestingly, sections of this original LNER-built track have been recycled and are incorporated into
                        the current raised track at Dringhouses.)
                    </strong>
                </P1>

                <P1>No sooner had the track been brought into use than the farmer sold the land and the new owner decided to
                    plough it. The track was dismantled and stored in an old railway container van until another piece
                    of land was found, after a lengthy search, in April 1949 at Bishopthorpe.
                    The club made good use of the Bishopthorpe site. A circular raised track was built,
                    Society Exhibitions and track open days were now a regular feature, and membership grew to about 50.
                    Unhappily, the site was sold in 1966 and the new owner was not sympathetic to the Society.
                </P1>

                <P1>
                    The Society found success in 1967 through the generosity of a local builder, Messrs. Birch & Co.
                    The owner, Jack Birch, indicated that he was willing to allow the use of part of his site at Moor Lane,
                    Dringhouses until required for building. The new track, close by the East Coast mainline, became
                    very well known to observant passengers. Over the next 18 years the Moor Lane site was developed
                    and the track was provided with a station, roofed steaming bay and other facilities. In 1986, a sale of land
                    ended the club’s stay. The track and facilities were dismantled and placed in storage with Messrs. Birch.
                    Meetings moved to a local Methodist Church Hall and a search began to find an alternative site.
                </P1>

                <H2>Our Permanent Home</H2>
                <P1>In 1987, an opportunity arose when British Rail were in the process of electrifying the East Coast Mainline
                    and were using an old section of sidings at Dringhouses, bordering the mainline and quite close to the old Moor Lane site,
                    for contractors storage. Negotiations took place to purchase this land but occupancy would have to wait until
                    the electrification was complete. The Society purchased the land and took possession in 1989 when work started
                    on a clubhouse and erection of the track. The site has an association with railways back to Victorian times as much
                    of the ground is deep in ash from NER and LNER locomotives shedded at York. Fittingly, the new clubhouse and site were
                    opened by the man who had generously allowed the use of the previous piece of land, Councillor Jack Birch.
                </P1>

                <P1>
                    <strong>
                        These are edited highlights from notes written by former club secretary, chairman and newsletter editor, Ken B.
                    </strong>
                </P1>

                <P1>
                    <Link href="docs/ydsme-1929-1982.pdf" target="_blank">Click here </Link>to read a more detailed account of the Societies early days, Written by the club secretary Mr. W Shearman a founding member from 1929.
                </P1>
            </InnerContainer>
        </PageContainer>
    )
}

export default ClubHistory;