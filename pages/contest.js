import Link from 'next/link';
import Layout from '../components/Layout.js';

import "../styles/index.css";

const previous = [
  { year: 2020, host: 'Reykjavík University', url: 'http://2020.nwerc.eu/' },
  { year: 2019, host: 'the Eindhoven University of Technology', url: 'http://2019.nwerc.eu/' },
  { year: 2018, host: 'the Eindhoven University of Technology', url: 'http://2018.nwerc.eu/' },
  { year: 2017, host: 'the University of Bath', url: 'https://people.bath.ac.uk/masjhd/NWERC/' },
  { year: 2016, host: 'the University of Bath', url: 'https://people.bath.ac.uk/masjhd/2016.NWERC/' },
  { year: 2015, host: 'Linköping University', url: 'http://2015.nwerc.eu/' },
  { year: 2014, host: 'Linköping University', url: 'http://2014.nwerc.eu/' },
  { year: 2013, host: 'the Delft University of Technology', url: 'http://2013.nwerc.eu/' },
  { year: 2012, host: 'the Delft University of Technology', url: 'http://2012.nwerc.eu/' },
  { year: 2011, host: 'the Jacobs University Bremen', url: 'https://web.archive.org/web/20120521220715/http://2011.nwerc.eu/' },
  { year: 2010, host: 'the Jacobs University Bremen', url: 'https://web.archive.org/web/20120521220445/http://2010.nwerc.eu/' },
  { year: 2009, host: 'the Friedrich-Alexander-University Erlangen-Nuremberg', url: 'http://2009.nwerc.eu/' },
  { year: 2008, host: 'the University Of Utrecht', url: 'http://2008.nwerc.eu/' },
  { year: 2007, host: 'the University Of Utrecht', url: 'http://2007.nwerc.eu/' },
  { year: 2006, host: 'KTH - Royal Institute of Technology, Stockholm', url: 'http://www.csc.kth.se/contest/nwerc/2006/' },
  { year: 2005, host: 'KTH - Royal Institute of Technology, Stockholm', url: 'http://www.csc.kth.se/contest/nwerc/2005/' },
]

export default () => pug`
  Layout
    h2 About the contest
    p.
      The Northwestern Europe Regional Contest (NWERC) is a contest in which
      teams from universities all over the Northwestern part of Europe are
      served a series of algorithmic problems. The goal of each team is to solve
      as many problems as possible within the 5 hour time limit. Potential
      solutions are submitted and corrected by an automated judging system. The
      teams that solve the most problems at the end of the contest qualify for
      the ICPC World Finals.

    h3 Previous editions
    ul
      each edition in previous
        li
          a(href=edition.url)= "NWERC " + edition.year + " hosted by " + edition.host

`;
