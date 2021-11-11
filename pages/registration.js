import Link from 'next/link';
import Layout from '../components/Layout.js';

import "../styles/index.css";

const teams = [
// ["Hookup Table", "Lund University"],
// ["[€_€] [$_$] [¥_¥]", "Aalto University"],
// ["Amazon is on fire", "Vrije Universiteit"],
// ["fredag", "KTH - Royal Institute of Technology"],
// ["ezpc", "Lund University"],
// ["Vilnius Tech 3", "Vilnius Gediminas Technical University"],
// ["Term 42", "University of Edinburgh"],
// ["TumLE", "Technische Universität München"],
// ["Radoslav Dimitrov has a tree (unless", "University of Oxford"],
// ["SP3D", "University of Tartu"],
// ["chmod_777", "RWTH Aachen University"],
// ["Hexaflexagons", "Hasso Plattner Institute"],
// ["Juhan", "University of Tartu"],
// [" '); drop table teams; -- ", "University of Warwick"],
// ["PowerCouple U Fløe", "Aarhus University"],
// ["Fully Activated Uranium", "Friedrich-Alexander-University Erlangen-Nuremberg"],
// ["Fredriks minions", "KTH - Royal Institute of Technology"],
// ["[\"hip\",\"hip\"]", "University of Nottingham"],
// ["segmentation truth", "University of Edinburgh"],
// ["SinCity", "University of Helsinki"],
// ["Polish Pigeons", "University of Cambridge"],
// [" ( ◉ ⌣(◔ ⌣ ◔)⌣ ☼) Migos", "Delft University of Technology"],
// ["Segfault go BRRRR", "Delft University of Technology"],
// ["MegaFAUna", "Friedrich-Alexander-University Erlangen-Nuremberg"],
// ["Team Davit en Geerd", "Eindhoven University of Technology"],
// ["RisK IT!", "Karlsruhe Institute of Technology (KIT)"],
// ["asdf", "Linköping University"],
// ["Butter Bois Reunited", "University of Warwick"],
// ["BOIs", "Norwegian University of Science and Technology"],
// ["KTU#1", "Kaunas University of Technology"],
// ["fULMinant", "Universität Ulm"],
// ["Perry the C+platy+", "Radboud University"],
// ["Good Treap", "University of Manchester"],
// ["Nonmeasurable", "Imperial College London"],
// ["PIece of cake", "Eindhoven University of Technology"],
// ["Quantum Pigeons", "Vilnius University"],
// ["Vilnius Tech 2", "Vilnius Gediminas Technical University"],
// ["Race Condition", "University of Nottingham"],
// ["5€engineers", "Vilnius University"],
// ["Bakstrætisbræðurnir", "University of Iceland"],
// ["insert kebab", "University of Cambridge"],
// ["scrybit", "Universität Rostock"],
// ["Lord VolTUMort", "Technische Universität München"],
// ["The Algoteers", "Radboud University"],
// ["Noobness Limit Exceeded", "Imperial College London"],
// ["Vilnius Tech 1", "Vilnius Gediminas Technical University"],
// ["DuckGiraffe!", "Utrecht University"],
// ["The Turbofish", "Radboud University"],
// ["VeggieChicken", "University of Nottingham"],
// ["Dogecoin Miners", "Norwegian University of Science and Technology"],
// ["Tream Deam", "Tallinn University of Technology"],
// ["ICE", "Universiteit van Amsterdam"],
// ["KTU#3", "Kaunas University of Technology"],
// ["Stroustrupperne", "Technical University of Denmark"],
// ["Le Cercle Des Éplucheurs De Code", "Université Catholique de Louvain"],
// ["Ballondyrene", "University of Copenhagen"],
// ["Run-CMD", "University of Lincoln"],
// ["true ? true : false", "Imperial College London"],
// ["Death peanulty", "Aalborg University"],
// ["Hack Attack", "Universiteit van Amsterdam"],
// ["Les dés codeurs", "Université Catholique de Louvain"],
// ["SnackUnderflow", "Utrecht University"],
// ["SebbiASK56", "Lund University"],
// ["$ sudo solve -A problems", "Leiden University"],
// ["KTU#2", "Kaunas University of Technology"],
// ["Agonaudid", "Tallinn University of Technology"],
// ["<(⊗v⊗)>", "Saarland University"],
// ["coutout<<floor(e)uler;", "University of Copenhagen"],
// ["Out of Touch", "Delft University of Technology"],
// ["No hope", "University of Southampton"],
// ["<(⊕v⊕)>", "Saarland University"],
// ["insert_vaLUE", "Universität zu Lübeck"],
// ["Syntax Terror", "Leiden University"],
// ["Algorithms Beat Lockdown", "Université Catholique de Louvain"],
// ["To Python, or not to Python, that is the question", "Universität Rostock"],
// ["while (false) break;", "Utrecht University"],
// ["Bodleian Heap", "University of Oxford"],
// ["Rindellerne", "Technical University of Denmark"],
// ["FAUtastic(at)", "Friedrich-Alexander-University Erlangen-Nuremberg"],
// ["Deep Freezing Notatoes", "Reykjavik University "],
// ["Red Pi", "Eindhoven University of Technology"],
// ["Trinity Tourists", "Trinity College Dublin"],
// ["German Center for Plattnerpus Care", "Hasso Plattner Institute"],
// ["Flaming Tomatoes", "Universität zu Lübeck"],
// ["A* is born", "IT University of Copenhagen"],
// ["CEV", "Fontys University of Applied Science"],
// ["KitKatCode", "Karlsruhe Institute of Technology (KIT)"],
// ["Big O Chungus", "University of Southampton"],
// ["FFT", "Universität zu Lübeck"],
// ["Los Patrons", "University of Oxford"],
// ["UMONS #3", "Université de Mons"],
// ["Snekmentation Fault", "Leiden University"],
// ["Shockers", "Vrije Universiteit"],
// ["CyanForces", "KTH - Royal Institute of Technology"],
// ["Stack Underflow", "University College Cork"],
// ["Boys in the bath", "University of Bath"],
// ["Dolores TUMbridge", "Technische Universität München"],
// ["Hope It Passes", "Vilnius University"],
// ["Let's Party: Home Alone", "Karlsruhe Institute of Technology (KIT)"],
// ["Old Boys Squad", "University of Manchester"],
// ["The floor is made of Java", "University of Copenhagen"],
// ["BrainGames", "Tallinn University of Technology"],
// ["The Hyperspheres", "Vrije Universiteit"],
// ["Eulerianen", "Universiteit van Amsterdam"],
// ["Hassos Portable Informatiker", "Hasso Plattner Institute"],
// ["RETURN PRINT", "Université de Mons"],
// ["C##", "University of Warwick"],
// ["The C-Team", "Aarhus University"],
// ["Baltoslav", "University of Manchester"],
// ["remotED", "University of Edinburgh"],
// ["Bath Half-brained", "University of Bath"],
// ["Team 47 again again", "University of Glasgow"],
// ["Slackoverflow", "IT University of Copenhagen"],
// ["alpha-mega-death squad", "Brunel University London"],
// ["CAU: High Steaks", "Christian-Albrechts-Universitaet zu Kiel"],
// ["PC's are finite automata", "Aarhus University"],
// ["CPUMONS", "Université de Mons"],
// ["We are just here for the balloons", "IT University of Copenhagen"],
// ["balloonatics", "University of Cambridge"],
// ["biCAUsal", "Christian-Albrechts-Universitaet zu Kiel"],
];

const universities = new Map();
for (const [team, university] of teams) {
    if (!universities.has(university)) {
        universities.set(university, []);
    }
    universities.get(university).push(team);
}

for (const university of universities.keys()) {
    universities.get(university).sort();
}

const universityKeys = Array.from(universities.keys());
universityKeys.sort();

export default () => pug`
  Layout
    h2 Registration
    // p.
    //     The registration for NWERC 2020 is closed. There are 120 teams
    //     registered from 52 universities. They are as follows.

    // each university in universityKeys
    //     h3(key=university)=university
    //     p
    //         ul
    //             each team in universities.get(university)
    //                 li(key=team)=team

    p.
        The registration for NWERC 2021 is now open and takes place on the
        #[a(href="https://icpc.global/private/teamRegistration/site/19569") ICPC registration system].
        Registration closes on #[b November 12th].

    p.
        Each team must have a non-student coach that is associated with the
        institution they represent. Details about valid team compositions are
        described on the #[Link(href="/rules") #[a rules]] page. In particular,
        each institution may send up to 3 teams to NWERC 2021.

    p To register, the #[i coach] of the teams must do the following:
        ul
            li.
                Check that your institution is in the NWERC region. If you have
                any doubts about whether you are counted as part of this
                region, please #[Link(href="/about") #[a contact us]].
            li.
                Check carefully that all team members are eligible
                according to the #[a(href="https://drive.google.com/file/d/1E9yaQbpSu9059UrOYafAiNrH-ABgRDAW/view") eligibility diagram].
            li.
                Fill in the registration form for
                #[a(href="https://icpc.global/private/teamRegistration/site/19569") NWERC 2021 - Online contest]
                and assign yourself as a coach. If the team was already
                registered in the ICPC system for one of the NWERC
                subregionals, you may instead have to "promote" the team to
                NWERC, choosing the site "NWERC 2021 - Online contest".
            li.
                Make sure all team members fill in their ICPC profiles,
                completing the registration.
            li.
                When the NWERC organizers have reviewed your registration,
                teams will be marked as Approved in the registration system.
                Any further instructions will be sent out via email.
`;
