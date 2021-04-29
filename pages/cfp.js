import Link from 'next/link';
import Layout from '../components/Layout.js';

import "../styles/index.css";

export default () => pug`
  Layout
    h2 Call for Problems
    p.
      We are pleased to announce the Call for Problems (CfP) for the 2020 edition of the NWERC programming contest.
    p.
      This contest will take place at Reykjavík University, Iceland, from 20 to 22 November, 2020. Submitters of selected candidate problems will become part of the NWERC 2020 Jury. They are expected to assist in the preparations of the final contest problem set, and they are expected to be present at the event.
      We allow combining the role of judge with the role of team coach. Please take great care to not confuse the roles, though!
    p.
      Questions regarding this call can be posed to: #[a(href='mailto:cfp-2020@nwerc.eu') cfp-2020@nwerc.eu]


    h3 Selection Procedure
    p.
      The deadline for submitting candidate problems is #[b July 12, 2020].

    p.
      The selection committee aims to select a subset of the submitted problems for use in the contest by mid-August. Selection criteria include problem novelty, and the goal of making a well-balanced problem set in terms of algorithmic topics, and degrees of problem difficulty. You are encouraged to submit at least two candidate problems for consideration rather than one.
    p.
      If your problem(s) are accepted, you will become part of the NWERC 2020 Jury. You are expected to have time available in the period from late August to November, in order to discuss improvements to your (and other jury members') problems. You are also expected to become a proofreader and implementer of at least one selected problem that is not your own.
    p.
      If your problem(s) are not accepted, we will destroy all records kept of them. This allows re-submission of the problem(s) for use in another contest.
      Upon request, it is possible to have problems simultaneously considered for one of the subregional contests NCPC and UKIEPC.
    p.
      More information on the submission requirements, the submission process and simultaneous submissions can be found below.

    h3 Submission Guidelines

    p Problem submissions should adhere to the following guidelines:
      ul
        li Submissions should be original, i.e., they should never have been used before in any other contest.
        li Submissions should include a Problem Statement in clear English.
        li The Problem Statement should include a clear discussion of expected input and output formats, as well as allowed parameter values.
        li The Problem Statement should include sample input and output files, one input per file.
          div.ml-4.mt-2.
            Note: it is possible that your problem does not conform to the standard &ldquo;fixed input -&gt; fixed output&rdquo; format; for example, if multiple outputs are possible for a given input, or if the input is generated dynamically using an interactive program. This is fine as long as the problem text is clear on the subject.
            In case your problem requires a non-standard checker program, you are encouraged to provide it with your submission.
        li The submission should include a separate, short &ldquo;README.txt&rdquo; file that explains the idea of the problem and the algorithm to be used.
        li The README.txt should give an assessment of the difficulty of the problem. This is a number between 0 and 100, indicating the percentage of NWERC teams that is expected NOT to solve the problem (so higher means more difficult).
        li Submissions should have an AUTHOR.txt file that states your name, email address, public PGP key (if available - see submission procedure), academic affiliation, and a short statement concerning your personal experience with programming contests (both as a contestant and as a judge). The &ldquo;AUTHOR.txt&rdquo; that accompanies your problem submission should be the only place where your identity is disclosed.

    p.
      We will need a variety of problem difficulties to make a well-balanced problem set. Do not hesitate to submit (relatively) simple problems for consideration.

    h3 Submission Format

    p Please use the following setup for problem submission.
      ul
        li It is preferred (but not mandatory) if your Problem Statement is delivered in LaTeX format. Before the contest, the problems will be stylistically homogenised and typeset using LaTeX.
        li Please put all relevant files of your submission in a single directory containing one subdirectory per problem, and ZIP this directory.

    p.
      We will be using the official ICPC problem format. If you want to use it when submitting your proposal the format is documented here: #[a.break-words(href="http://www.problemarchive.org/wiki/index.php/Problem_Format") http://www.problemarchive.org/wiki/index.php/Problem_Format]
    p.
      You can find example problem packages #[a(href="/files/nwerc2019all.tar.bz2") here].

    h3 Submission Procedure

    p.
      The candidate problems are highly confidential. While not mandatory we suggest that the ZIP files are delivered to us in a safe (encrypted) manner. You can download the #[a(href="/files/pgp2020.asc") public PGP key] when submitting a candidate problem. If you have a PGP key, please use it to sign your submission. #[br]
      Send the submission to: #[a(href="mailto:cfp-2020@nwerc.eu") cfp-2020@nwerc.eu].
    p.
      If you haven't used PGP for encrypting before, you are encouraged to send an encrypted file containing the text "A little nonsense" to #[a(href="mailto:cfp-2020@nwerc.eu") cfp-2020@nwerc.eu] to practice before sending your submission.
    p.
      You will receive a signed acknowledgement once the submission has been received and properly decrypted.


    h3 Simultaneous Submissions to NCPC or UKIEPC

    p.
      If you wish for your problem submission to also be considered for
      usage in either the Nordic or UK &amp; Ireland subregional contests (NCPC and UKIEPC)
      in case it is not selected for NWERC, you can add the sentence
      "This problem may be considered for X." (where X is one of
      NCPC or UKIEPC), to the README.txt file of your submission.
    p.
      Adding this sentence will not affect whether or not the problem is
      selected for NWERC, and your submission will only be considered for
      the respective subregional if the problem is not selected for NWERC
      #[i and] the sentence is added.
`;
