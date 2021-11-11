import Link from 'next/link';
import Layout from '../components/Layout.js';
import {Email} from '../lib/util.js';

import "../styles/index.css";

export default () => pug`
  Layout
    h2 Organization
    p.
      NWERC 2021 is organized by #[a(href="https://en.ru.is/") Reykjavík University]
      and the #[a(href="https://keppnisforritun.is/") Icelandic Competitive Programming Society],
      and would not have been possible without the help of all our awesome volunteers.

    h3 Contest direction
    p
      ul
        li Unnar Freyr Erlendsson, Contest director, #[Email(address="unnar@nwerc.eu")]
        li Bjarki Ágúst Guðmundsson, Technical director, #[Email(address="bjarki@nwerc.eu")]
    p.
      For general inquiries, please send an email to #[Email(address="contact@nwerc.eu")]

    h3 Jury
    p
      ul
        li Bjarki Ágúst Guðmundsson (Head of Jury)
        li Bergur Snorrason (Local coordinator)
        li Alexander Dietsch
        li Antti Laaksonen
        li Harry Smit
        li Jorke de Vlas
        li Mees de Vries
        li Michael Zündorf
        li Nils Gustafsson
        li Paul Wild
        li Pehr Söderman
        li Per Austrin
        li Ragnar Groot Koerkamp
        li Timon Knigge
    p.
      For inquiries to the Jury, please send an email to #[Email(address="jury@nwerc.eu")]
`;
