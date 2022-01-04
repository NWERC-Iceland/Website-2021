import Link from 'next/link';
import Layout from '../components/Layout.js';
import {Email} from '../lib/util.js';

import "../styles/index.css";

const news = [
  // Newest at the top
  {
    title: 'Final standings and open contest',
    published: 'November 25, 2021',
    content: pug`
      p It's our pleasure to announce that all appeals have been resolved and the #[a(href="/standings") NWERC 2021 standings] have been finalized without any changes. Congratulations again to the NWERC 2021 Champions, Sidney's Cat Tree from the University of Cambridge, as well as all our medalists.

      p All the contest materials have been published on our #[Link(href="/") #[a website]], including the problem set, solution slides, test data and judges' solutions. Also worth mentioning is that this Saturday, November 27th, at 9:00 GMT+0 we will be hosting an open version of NWERC 2021 on #[a(href="https://open.kattis.com/contests/nwerc2021open") Open Kattis].

      p It's been our pleasure to organize NWERC for the last two years. The ICPC flag is already on its way to TU Delft in the Netherlands, who will be organizing NWERC 2022 and NWERC 2023. We wish them the best of luck with the organization, and hope to see you in Delft next year!

      p If you are a coach, or contestant that has competed in NWERC for the last time, and are interested in receiving the NWERC 2022 Call for Problems, please send an email to #[Email(address="contact@nwerc.eu")] titled "Call for Problems signup".

      p Last but not least we would like to thank our sponsors, #[a(href="https://www.huawei.com/en/") Huawei], #[a(href="https://www.jetbrains.com/") Jetbrains], #[a(href="http://www.awseducate.com/") AWS Educate] and #[a(href="https://en.ru.is/") Reykjavík University] for making this event possible! You can find more information about them on our #[Link(href="/partners") #[a sponsors]] page.
    `,
  },
  {
    title: 'Friday update',
    published: 'November 19, 2021',
    content: pug`
      p Tomorrow is the day of the practice session. A link to the livestream will be posted on the website tomorrow morning.
      p A few notes about the format this weekend:
        ul
            li The judges have published a #[a(href="https://www.nwerc.eu/files/hints.pdf") document] with advice, hints, and general information about the contests this weekend. Contestants are asked to read it in full as it contains important new information, in particular about the inclusion of interactive problems this year.
            li Public standings for the contests can be found at #[a(href="https://standings.nwerc.is/") https://standings.nwerc.is/].
            li Due to the online nature of the contest this year, we have decided not to hold a simultaneous open contest, and to keep the problemset private until after the contest.
            li Instead, a separate public contest will be held on #[a(href="https://open.kattis.com/contests/nwerc2021open") Open Kattis] on Saturday, November 27th from 10:00 - 15:00 GMT+1.
    `,
  },
  {
    title: 'Registration and updates',
    published: 'October 30, 2021',
    content: pug`
      p The NWERC 2021 registration has now been #[Link(href="/registration") #[a opened]] with a deadline of #[b November 12th]. The site has also been updated with the following:
        ul
            li The #[Link(href="/registration") #[a registration]] page now contains registration instructions.
            li The #[Link(href="/schedule") #[a schedule]] page now contains the preliminary schedule.
            li System information has been added to our #[Link(href="/system") #[a judging]] page.
            li A #[Link(href="/vm") #[a virtual contest environment]] is now available. Note that its use during the contest is optional.
    `,
  },
  // {
  //   title: 'COVID-19 update',
  //   published: 'August 30, 2020',
  //   content: pug`
  //     p.
  //       In light of the ongoing pandemic, the decision has been made not to
  //       host the 2020 edition of NWERC onsite at Reykjavík University. Instead,
  //       planning is underway for a distributed contest during the first quarter
  //       of 2021, with local contest sites across the region. We are actively
  //       looking for volunteers and points of contact for participating
  //       universities and countries to help us make the contest become a
  //       reality. Read the #[a(href="/covid-update") full announcement] and
  //       reach out to us at #[a(href="mailto:contact@nwerc.eu") contact@nwerc.eu].
  //   `,
  // },
  {
    title: 'Contest format update',
    published: 'September 19, 2021',
    content: pug`
      p.
        After much deliberation we - the NWERC 2021 organizers - have concluded
        that is still not feasible for us to host a safe onsite NWERC this
        November. To keep the contest safe and fair we will be repeating last
        year's online format on November 20-21, incorporating your suggestions
        to make it even better. Please see this year's #[Link(href="/rules") #[a rules]]
        for more details.
    `,
  },
  {
    title: 'Call for Problems announced',
    published: 'May 7, 2021',
    content: pug`
      p.
        We are pleased to announce the Call for Problems (CfP) for the 2021
        edition of the NWERC programming contest. The deadline for submitting
        candidate problems is #[b July 11, 2021]. Information about the submission
        requirements and procedures can be found on our #[Link(href="/cfp") #[a CfP page]].
    `,
  },
];

export default () => pug`
  Layout(ruBanner=true)
    h2 Welcome
    p.
      Welcome to the website for the Northwestern Europe Regional
      Contest 2021 (NWERC). NWERC 2021 is hosted by Reykjavík
      University in Iceland.
    p.mb-6.
      NWERC 2021 is an official regional contest in the
      #[a(href="https://icpc.global/") International Collegiate Programming Contest].
      It draws students from colleges and universities throughout
      Belgium, Denmark, Estonia, Finland, Germany, Great Britain,
      Iceland, Ireland, Lithuania, Luxembourg, the Netherlands, Norway and
      Sweden. The top teams will advance to the ICPC World Finals.
    hr
    div.sm_grid.grid-cols-2

        div
            h2.mt-0 Contest material
            p.mb-6
                ul
                    li #[a(href="/standings") Final standings]
                    li #[a(href="/files/nwerc2021problems.pdf") Problemset (pdf)]
                    li #[a(href="/files/nwerc2021slides.pdf") Solution slides (pdf)]
                    li #[a(href="/files/nwerc2021all.tar.bz2") Packaged problems (.tar.bz2, 97MB)]
                    li #[a(href="https://youtu.be/YSDqYiEnaDA") Livestream]
        div
            h2.mt-0 Practice session material
            p.mb-6
                ul
                    li #[a(href="/practice-standings") Final standings]
                    li #[a(href="/files/nwerc2021practice.pdf") Problemset (pdf)]
                    li #[a(href="/files/nwerc2021practice-slides.pdf") Solution slides (pdf)]
                    li #[a(href="/files/nwerc2021practice.tar.bz2") Packaged problems (.tar.bz2, 41MB)]
                    li #[a(href="https://youtu.be/TJpnBZ_N6sQ") Livestream]
    hr

    each news_item in news
      h3= news_item.title
      h4.published.flex
        svg.mt-bump.h-4.w-4.fill-current(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24")
          path(d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z")
        span.ml-1= news_item.published
      = news_item.content
`;
