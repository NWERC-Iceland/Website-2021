import Link from 'next/link';
import Layout from '../components/Layout.js';
import {Email} from '../lib/util.js';

import "../styles/index.css";

export default () => pug`
  Layout(ruBanner=false, icpcBanner=true, icpcSponsors=true, showSponsors=false)
    h2 Sponsors
    p.
        We are welcoming our participants on behalf of the ICPC global sponsors: 

    p.
        #[b ICPC Diamond Multi-Regional Sponsor], #[a(href="https://www.huawei.com/en/") #[b Huawei]],
        a leading global provider of information and communications technology
        infrastructure and smart devices. With more than 194,000 employees and
        operating in more than 170 countries and regions, #[a(href="https://career.huawei.com/reccampportal/portal5/top-news.html") Huawei’s]
        vision and mission is to bring digital to every person, home and
        organization for a fully connected, intelligent world. Huawei is
        constantly exploring future innovations and is welcoming you to join
        the team to discover more challenging topics in your region. 

    p.
        #[b ICPC Global Programming Tools Sponsor], #[a(href="https://www.jetbrains.com/") #[b JetBrains]],
        is the company that created an extended family of integrated
        development environments for various programming languages and designed
        Kotlin, a modern programming language that became the officially
        preferred language for Android. Their latest product is Space, an
        all-in-one team collaboration environment. JetBrains has been
        passionate about code since 2000. More than 9 million creative
        professionals from 213 countries and territories use and trust
        JetBrains tools. #[a(href="https://jb.gg/icpc") https://jb.gg/icpc]

    p.
        #[b EdTech ICPC Gold Sponsor]: With the increasing demand for cloud-skilled
        employees, #[a(href="http://www.awseducate.com") #[b AWS Educate]] provides
        an academic gateway for the next generation of IT and cloud
        professionals. AWS Educate is Amazon's global initiative to provide
        students and educators with the resources needed to greatly accelerate
        cloud-related learning and help power the entrepreneurs, workforce, and
        researchers of tomorrow. AWS Educate provides four pillars of
        resources, at no cost to educational institutions, educators, or
        students.

    p.
        Thank you again to all ICPC global sponsors! Your unwavering support
        allows us to shine a spotlight on the world’s greatest problem solvers
        and enables their dreams of competing on the global stage to come true. 

    div.grid.grid-cols-3
        img(src="/images/sponsor-diamond-multi-regional-huawei@300.png")
        img(src="/images/sponsor-global-programming-tools-Jetbrains@300.png")
        img(src="/images/sponsor-EdTech-icpc-gold-aws-educate@300.png")
`;
