import Link from 'next/link';
import Layout from '../components/Layout.js';
import {Email} from '../lib/util.js';

import "../styles/index.css";

export default () => pug`
  Layout
    h2 COVID-19 Update

    div.mt-6
        p.
            Dear NWERC stakeholders and other interested parties,

    div.mt-4
        p.
            For the past few months we - the NWERC 2020 organizers - have been
            holding down our breaths, hoping to see the ongoing COVID-19 pandemic
            in recession before our planned contest date in November. Following a
            second wave of the pandemic in Iceland, rules enforced for the
            foreseeable future about quarantine of arriving passengers has made it
            impossible for us to commit to an onsite contest with any meaningful
            time in advance. It is for this reason that we see ourselves forced to
            bring you the sad, but perhaps expected news that the 2020 edition of
            NWERC will not be hosted onsite at Reykjavík University.

        p
            | The ICPC has given regionals leeway to hold their contests any time
            | before the end of March 2021. SWERC has decided to hold their contest
            | online, with a local site in every country. For NWERC 2020 we propose a
            | similar arrangement, with the possibility of more than one site in each
            | country. We also propose postponing the contest until January, February
            | or March of next year to

            ul
                li make room for additional planning and organization,
                li in hope Covid-related restrictions will be loosened in the meantime, and
                li give subregionals freedom to adjust their contest dates for the same reasons.

        p.
            We ask for support from all participating countries, and are actively
            looking for volunteers to help make NWERC 2020 become a reality,
            despite the strange circumstances. If you think you or someone you know
            might be able to help, even if it's just to be a point of contact for
            your university or country, please reply to this email or get in touch
            at #[Email(address="contact@nwerc.eu")].

        p.
            We hope to resolve the many open logistical questions with the help of
            these points of contacts, taking into account any constraints that the
            different countries may have. Cross-site requirements will be kept at a
            minimum to make it as easy as possible to organize a local site. In
            particular, the usual extracurricular activities will be replaced with
            a livestream containing an entertaining and interesting Tech talk. We
            believe that a modest event with focus on the contest itself is
            appropriate this year due to the circumstances, and hope we can resume
            our normal program with an onsite NWERC 2021 in November of next year,
            at Reykjavík University in Iceland.

        p.
            To end this email on a positive note, we are happy to announce that
            this year the NWERC family has gotten bigger. Please give a warm
            welcome to Lithuania, who recently became a participating country of
            NWERC and NCPC!

        p.
            Please don't hesitate to reach out to #[Email(address="contact@nwerc.eu")] with any
            questions, comments or concerns, and we really hope to hear from as
            many potential points of contacts as possible. If you know of anyone
            that may not have received a copy of this email but should, please do
            forward it.

    div.mt-6
        p.
            Best regards and well wishes during these challenging times,#[br]
            The NWERC 2020 organizers

        p.
            Unnar Freyr Erlendsson#[br]
            Contest director

        p.
            Bjarki Ágúst Guðmundsson#[br]
            Technical director
`;
