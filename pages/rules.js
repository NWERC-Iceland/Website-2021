import Link from 'next/link';
import Layout from '../components/Layout.js';

import "../styles/index.css";

export default () => pug`
  Layout
    h2 Contest rules
    p.
      The ICPC regional contest rules can be found at the ICPC regionals web
      site; #[a(href="https://icpc.baylor.edu/regionals/rules") official ICPC regional rules].

    p.
        In order to keep NWERC 2021 a safe and fair event for everyone we have
        decided to repeat the fully online format from NWERC 2020. The
        following temporary rules are intended to accommodate for this change,
        and take precedence over the official ICPC regional rules where there
        are contradictions.

    p.
        The NWERC 2021 Contest director has final say in determining any breach
        of rules and consequences for the offending team, which could result in
        disqualification.

    h3 Team composition
    p.
      A student may compete when eligible according to the
      #[a(href="https://drive.google.com/file/d/1E9yaQbpSu9059UrOYafAiNrH-ABgRDAW/view") 2021 ICPC Regionals Eligibility Diagram].

    p
      ul
        li A team consists of 3 eligible students.
        li An educational institution may send up to 3 teams.
        li.
          The educational institutions must be from one of the region member
          countries. By special request teams from other countries may be
          allowed to participate in this region, as stated in the ICPC Regional
          Rules.
        li.
          All teams who want to participate must be registered.
        // All teams who want to participate must be #[Link(href="/registration") #[a registered]].

    h3 Location
    p.
        Contestants are allowed to participate from any location of their
        choice. Team members do not have to gather at the same location.

    h3 Devices
    p.
        Contestants are allowed to use their own computers and electronic
        devices.

    h3 Internet access
    p Contestants are allowed to use the internet during the contest, with two restrictions:
        ul
            li Contestants are not allowed to publish or post any information on the internet during the contest.
            li Contestants must only read information that was published before the start of the contest.
    p Examples uses of the internet that are not allowed during the contest:
        ul
            li Posting information about the problems or sending anyone the problem statements.
            li Asking questions on Stack Overflow or any other forums.
            li Reading discussion threads that may include information about the NWERC 2021 problems.

    h3 Existing code
    p.
        Contestants are allowed to use preexisting code found on their
        computers or on the internet, provided that it does not violate any
        other rules about internet access (in particular, the code must have
        been published before the start of the contest). However, any code
        copied off the internet must be explicitly marked with a comment
        containing a URL to the original source.

    h3 Communication
    p.
        Contestants are allowed to communicate with their own team members
        during the contest, and are encouraged to set up a private voice or
        video conference for their team during the contest. Contestants are
        also allowed to communicate with organizers and the jury through the
        "Clarifications" interface in the judging system, where any and all
        issues during the contest or questions about the problem statements
        should be directed. Contestants are not allowed to communicate with
        anyone else (including but not limited to their coach, friends,
        contestants from other teams, or anyone else on the internet or in
        person) during the contest.

    h3 Software
    p.
        There are no restrictions on software use during the contest.
        Contestants are allowed to use any operating system, IDE or editor they
        like, and configure that software in any way they like before the
        contest. In particular, contestants may configure their editor to use a
        code template of their choice, provided it does not violate any other
        rules about use of existing code. A #[Link(href="/vm") #[a virtual contest environment]]
        containing the exact compiler versions as those used on the judge
        machines, as well as a number of editors, IDEs, and other common
        programming tools is provided as a convenience, but its use is
        completely optional.

    h3 Programming languages
    p.
        The judging system will only accept solutions written in C, C++, Java,
        Python 3 and Kotlin. See details about specific versions and
        compilation parameters on the #[Link(href="/system") #[a judging]] page.

`;
