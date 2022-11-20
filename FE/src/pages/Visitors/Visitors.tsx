import React from 'react'
import {PageContainer, InnerContainer, P1, H4, UL, LI} from "../../common/index.styles";
import * as S from "../../common/index.styles";
import {useDevice} from "../../hooks/useDevice";

const Visitors = () => {
    const {isDesktop} = useDevice();

    return (
        <PageContainer>
            <InnerContainer>
                <S.H1>Visitor Guide</S.H1>
                <img src="entrance.jpg" alt="entrance to the club" height={isDesktop ? 600 : 400} loading={"lazy"}/>
                <S.H2>Planning your visit - Check the Events page</S.H2>
                <H4>What3words - play.tasty.trim</H4>
                <P1>If you would like to visit us, either to run your locomotive or just to see what we do, then this can usually be arranged without difficulty. First, look at our Calendar and pick a date when there is an open day, then contact the secretary. To run a loco, choose any of our open days but please contact our secretary beforehand to confirm that the event is on and to ensure there will be someone on site to welcome you.</P1>

                <S.H2>Where to Park</S.H2>
                <P1>When you arrive, please park your vehicle on the club site itself in one of the allocated areas. Please do not park on nearby public roads. Special care must be taken manoeuvring trailers. Drivers wanting to access the steaming bay to unload locos for the Raised Level track must proceed slowly and with caution and be vigilant for pedestrians passing in front of the clubhouse.</P1>

                <S.H2>Responsibility for children</S.H2>
                <P1> The Child Protection Act defines anyone under 18 as a child. All children visiting our site must be accompanied by a parent or guardian. Please take responsibility for any children in your party. We are keen to encourage the interest and enthusiasm of the younger generation but moving trains and vehicles, and hot locomotives can present hazards. Please ensure that your children stay safe at all times while on site, and that they do not cause hazards to others.</P1>

                <S.H2>On Arrival</S.H2>
                <P1>Please make yourself known in the clubhouse. Visitors not running locos or models should sign the Visitors book and wear a Visitors badge at all times. By signing the Visitors book you are agreeing to comply with the Society’s bylaw – a copy of which is on the main noticeboard.</P1>
                <UL>
                    <LI>The Track Marshal is in charge.</LI>
                    <LI>Visiting or new drivers must drive a familiarisation lap with an authorised member of the Club, as directed by the Track Marshal</LI>
                    <LI>You must check your loco brakes before joining the main track</LI>
                    <LI>When carrying passengers, you must take extra care.</LI>
                    <LI>If running on the GLT, vacuum brakes on the passenger carriages must be used if fitted.</LI>
                    <LI>Drivers must obey the signals at all times.</LI>
                    <LI>Watch your speed - <strong>5 mph max.</strong></LI>
                    <LI>Do not leave your loco unattended if it is in steam</LI>
                    <LI>Inform the Track Marshal ASAP if there is any problem.</LI>
                </UL>

                <S.H2>Running your Model</S.H2>
                <P1>When you arrive at the club site, please make yourself known in the clubhouse. You will have to sign the appropriate running log and show your boiler certificate to the Track Marshal or his representative. Drivers unable to provide evidence on the day of a current boiler certificate will not be permitted to run their locos or models. All drivers/owners must comply with the following rules:</P1>

                <S.H2>Pressure vessels</S.H2>

                <P1>If your model includes a pressure vessel of capacity above 3 bar-litre, you will have to show the club official evidence of a valid test certificate from a nationally recognised body (e.g. Southern Federation, Northern Association of Model Engineering Societies, 7¼” Gauge Society).</P1>
                <P1>Drivers unable to provide evidence on the day of a current boiler certificate will not be permitted to run their locos or models.</P1>
                <P1>If your model includes a pressure vessel of capacity equal to or less than 3 bar-litre then the vessel and any pressure gauge fitted must have undergone a satisfactory test in the previous 12 months.

                </P1>
                <S.H2>Driving by children</S.H2>
                <P1>Please note that children under the age of 10 will not be allowed to drive on the raised level or ground level tracks. Children between 10 and 16 can only drive on these tracks if they are junior members of our society, but they cannot haul members of the public.</P1>
            </InnerContainer>
        </PageContainer>
    )
}

export default Visitors;
